import React from 'react';
import NavLink from './NavLink';
export default class Nav extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div className="top-bar">
                    <div className="top-bar-logo" style={{ display: 'flex', alignItems: 'center' }}><img src="/img/appbuild_text.png" alt="" /></div>
                    <ul
                        style={{ dispaly: 'flex', flexDirection: 'row' }}
                        className="top-bar-nav-menu"
                    >
                        <NavLink className="button" to="/" onlyActiveOnIndex>首页</NavLink>
                        <NavLink className="button" to="/app">应用</NavLink>
                        <NavLink className="button" to="/doc">文档</NavLink>
                        <NavLink className="button" to="/about">关于</NavLink>
                        <NavLink className="button login" style={{ display: 'inline-flex', alignItems: 'center' }} to="/login">登录</NavLink>
                    </ul>
                </div>
                <div
                    style={{
                    flex: 1,
                    display: 'flex',
                    marginTop: 125,
                }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
Nav.propTypes = {
    children: React.PropTypes.element,
};
