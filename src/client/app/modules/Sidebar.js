import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Toggle from 'material-ui/Toggle';
import NavLink from './NavLink';
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleToggle(){
        this.setState({
        open: !this.state.open,
        });
    };

    handleNestedListToggle(item){
        this.setState({
        open: item.state.open,
        });
    };
    render() {
        return (
            <div>
                <Toggle
                    toggled={this.state.open}
                    onToggle={this.handleToggle.bind(this)}
                    labelPosition="right"
                    label="展开"
                />
                <br />
                <div>
                    <List>
                        <NavLink className="button" to="/app/basic">
                            <ListItem primaryText="基本设置" leftIcon={<ContentSend />} />                    
                        </NavLink>

                        <ListItem
                            primaryText="应用设置"
                            open={this.state.open}
                            leftIcon={<ContentInbox />}
                            initiallyOpen
                            primaryTogglesNestedList
                            nestedItems={[
                                <NavLink className="button" to="/app/icon">
                                    <ListItem
                                        key={1}
                                        primaryText="图标设置"
                                        leftIcon={<ActionGrade />}
                                    >
                                    </ListItem>
                                </NavLink>,
                                <ListItem
                                    key={2}
                                    primaryText="启动页设置"
                                    leftIcon={<ActionGrade />}
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="插件选择"
                                    leftIcon={<ActionGrade />}
                                />,
                                <ListItem
                                    key={4}
                                    primaryText="证书管理"
                                    leftIcon={<ActionGrade />}
                                />,
                            ]}
                        />
                        <ListItem primaryText="云端打包" leftIcon={<ContentDrafts />} />
                    </List>
                </div>
            </div>
        );
    }
}
