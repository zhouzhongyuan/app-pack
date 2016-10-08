import React from 'react';
import NavLink from './NavLink';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    // margin: 12,
    flex: 1
};
export default React.createClass({
    render(){
        return (
            <div>
                <h1>App Build</h1>
                <ul
                    role="nav"
                    style={{dispaly: 'flex', flexDirection: 'row'}}
                >
                    <NavLink to="/" onlyActiveOnIndex><RaisedButton label="首页" style={style}/></NavLink>
                    <NavLink to="/doc"><RaisedButton label="文档" style={style}/></NavLink>
                    <NavLink to="/about"><RaisedButton label="关于" style={style}/></NavLink>

                </ul>
                {this.props.children}
            </div>
        );
    }
});
