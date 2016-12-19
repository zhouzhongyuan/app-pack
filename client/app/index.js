import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Doc from './modules/Doc';
import About from './modules/About';
import Home from './modules/Home';
import Nav from './modules/Nav';
import Login from './modules/Login';
import App from './modules/App';
import BasicSetting from './modules/app-setting/BasicSetting';
import IconSetting from './modules/app-setting/Icon';
injectTapEventPlugin();
import Auth from './modules/Auth'

function requireAuth(nextState, replace) {
    if (!Auth.isUserAuthenticated()) {
        replace({
            pathname: '/login'
        })
    }
}

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={Nav}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About} />
                <Route path="/doc" component={Doc} />
                <Route path="/login" component={Login} />
                <Route path="/app" component={App} onEnter={requireAuth} >
                    <IndexRoute component={BasicSetting} />
                    <Route path="basic" component={BasicSetting} />
                    <Route path="icon" component={IconSetting} />
                </Route>
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
);
