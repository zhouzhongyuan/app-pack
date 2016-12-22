import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import { browserHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';

import {
    deepOrange300,
    white,
} from 'material-ui/styles/colors';
const style = {margin: 5};

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        const pathname = this.props.location.pathname;
        if(pathname === '/' || window.innerWidth < 900){
            this.state = {
                open: false,
                docked: false,
                paddingLeft : 0,
            };
        } else {
            this.state = {
                open: true,
                docked: true,
                paddingLeft : 256,
            };
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.changeRoute = this.changeRoute.bind(this);
    }
    handleToggle(event, logged){
        this.setState({open: !this.state.open});
    };
    changeRoute(event, to){
        browserHistory.push(to);
        if(to === '/' || window.innerWidth < 900){
            this.setState({
                open: !this.state.open,
                docked: false,
                paddingLeft : 0,
            });
        } else {
            this.setState({
                docked: true,
                paddingLeft : 256,
            });
        }
    };
    render(){
        return (
            <div>
                <AppBar
                    title="App pack"
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
                    style={{ position: 'fixed', top: 0 }}
                />
                <Drawer
                    width={256}
                    open={this.state.open}
                    docked={this.state.docked}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <AppBar
                        title="App Pack"
                        iconElementLeft={<div></div>}
                        onClick={(e) => this.changeRoute(e, "/")}
                    />
                    <List>
                        <ListItem
                            primaryText="应用"
                            leftIcon={<ContentSend />}
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