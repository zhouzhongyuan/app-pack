import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import {browserHistory} from 'react-router';
import Avatar from 'material-ui/Avatar';
import ActionGrade from 'material-ui/svg-icons/action/grade';

import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

import {
    deepOrange300,
    white,
} from 'material-ui/styles/colors';
const style = {margin: 5};

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        const pathname = this.props.location.pathname;
        if (pathname === '/' || window.innerWidth < 900) {
            this.state = {
                open: false,
                docked: false,
                paddingLeft: 0,
            };
        } else {
            this.state = {
                open: true,
                docked: true,
                paddingLeft: 256,
            };
        }
        if(pathname === '/app'){
            this.state.navType = 'app';
        }else{
            this.state.navType = 'site';
        }
        this.state.showAppArrow = this.props.location.search.match(/\?id=/) ? true : false;
        this.state.search = '';
        this.handleToggle = this.handleToggle.bind(this);
        this.changeRoute = this.changeRoute.bind(this);
        this.changeDrawer = this.changeDrawer.bind(this);
    }

    handleToggle(event, logged) {
        this.setState({open: !this.state.open});
    };

    changeRoute(event, to) {
        browserHistory.push(to);
        if (to === '/' || window.innerWidth < 900) {
            this.setState({
                open: !this.state.open,
                docked: false,
                paddingLeft : 0,
            });
        } else {
            this.setState({
                docked: true,
                paddingLeft: 256,
            });
        }
    };
    changeDrawer(e, type){
        this.setState({navType:type});
        e.stopPropagation();
    }
    componentWillReceiveProps(nextProps) {
        const search = nextProps.location.search;
        this.setState({
            search,
        });
        console.log(nextProps.location.search);
        console.log(nextProps.location.pathname);
        this.setState({
            navType: nextProps.location.pathname.match(/\/app/) ? 'app' : 'site',
            showAppArrow: nextProps.location.search.match(/\?id=/) ? true : false,
        });
    }
    render() {
        return (
            <div>
                <AppBar
                    title="首页"
                    iconElementRight={
                        <Avatar
                            size={46}
                            style={style}
                            color={deepOrange300}
                            backgroundColor={white}
                        >
                            ZJ
                        </Avatar>
                    }
                    onLeftIconButtonTouchTap={this.handleToggle}
                    style={{position: 'fixed', top: 0}}
                />
                {
                    this.state.navType === 'app' ? (
                            <Drawer
                                width={256}
                                open={this.state.open}
                                docked={this.state.docked}
                                onRequestChange={(open) => this.setState({open})}
                            >
                                <AppBar
                                    title="应用设置"
                                    iconElementLeft={<ArrowBack style={{height: 48,  color:'#ffffff'}} />}
                                    onClick={(e) => this.changeDrawer(e, "site")}
                                />
                                <List>
                                    <ListItem
                                        key={1}
                                        primaryText="基本设置"
                                        leftIcon={<ContentDrafts />}
                                        onClick={(e) => this.changeRoute(e, `/app/basic${this.state.search}`)}
                                    />
                                    <ListItem
                                        key={2}
                                        primaryText="插件选择"
                                        leftIcon={<ContentDrafts />}
                                        onClick={(e) => this.changeRoute(e, `/app/plugin${this.state.search}`)}
                                    />
                                    <ListItem
                                        key={3}
                                        primaryText="图标设置"
                                        leftIcon={<ContentDrafts />}
                                    />
                                    <ListItem
                                        key={4}
                                        primaryText="状态栏设置"
                                        leftIcon={<ContentDrafts />}
                                    />
                                    <ListItem
                                        key={5}
                                        primaryText="启动页设置"
                                        leftIcon={<ContentDrafts />}
                                    />
                                    <ListItem
                                        key={6}
                                        primaryText="证书管理"
                                        leftIcon={<ContentDrafts />}
                                    />
                                    <ListItem
                                        key={7}
                                        primaryText="云端打包"
                                        leftIcon={<ContentDrafts />}
                                        onClick={(e) => this.changeRoute(e, `/app/pack${this.state.search}`)}
                                    />
                                </List>
                            </Drawer>
                        ) : (
                            <Drawer
                                width={256}
                                open={this.state.open}
                                docked={this.state.docked}
                                onRequestChange={(open) => this.setState({open})}
                            >
                                <AppBar
                                    title="首页"
                                    iconElementRight={<div></div>}
                                    onClick={(e) => this.changeRoute(e, "/")}
                                />
                                <List>
                                    <ListItem
                                        primaryText="应用"
                                        leftIcon={<ContentSend />}
                                        rightIconButton={
                                            this.state.showAppArrow ?
                                                (
                                                    <ArrowForward
                                                        style={{height: 48, color:'#000000'}}
                                                        onClick={(e) => this.changeDrawer(e, "app")}
                                                    />
                                                ) : (
                                                    <div></div>
                                                )

                                        }
                                        onClick={(e) => this.changeRoute(e, "/app")}
                                    />
                                    <ListItem
                                        primaryText="文档"
                                        leftIcon={<ContentDrafts />}
                                        onClick={(e) => this.changeRoute(e, "/doc")}

                                    />
                                    <ListItem
                                        primaryText="关于"
                                        leftIcon={<ContentInbox />}
                                        onClick={(e) => this.changeRoute(e, "/about")}
                                    />
                                </List>
                            </Drawer>
                        )

                }

                <div
                    style={{
                        paddingTop: 64,
                        minHeight: 400,
                        paddingLeft: this.state.paddingLeft
                    }}
                >
                    <div
                        style={
                            window.innerWidth > 600 ? {margin: "48px 72px"} : {margin: "24px"}
                        }
                    >
                        {this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}