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
                <div className="top-bar">
                    <div className="top-bar-logo" style={{display:'flex',alignItems:'center'}}><img src="./public/img/appbuild_text.png" alt=""/></div>
                    <ul
                        role="nav"
                        style={{dispaly: 'flex', flexDirection: 'row'}}
                        className="top-bar-nav-menu"
                    >
                        <NavLink className="button" to="/" onlyActiveOnIndex>首页</NavLink>
                        <NavLink className="button" to="/doc">文档</NavLink>
                        <NavLink className="button" to="/about">关于</NavLink>
                        <NavLink className="button login" style={{display: 'inline-flex', alignItems: 'center'}} to="/about">登录</NavLink>

                    </ul>

                </div>
                {this.props.children}
            </div>
        );
    }
});
