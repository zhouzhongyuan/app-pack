import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

injectTapEventPlugin();


import Doc from './modules/Doc'
import About from './modules/About'
import Home from './modules/Home'
import Nav from './modules/Nav'


ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={Nav}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/doc" component={Doc}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
);
