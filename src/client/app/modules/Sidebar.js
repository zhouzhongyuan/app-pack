import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Toggle from 'material-ui/Toggle';
export default class Sidebar extends React.Component {
    handleToggle() {
        this.setState({
            open: !this.state.open,
        });
    }
    handleNestedListToggle(item) {
        this.setState({
            open: item.state.open,
        });
    }
    render() {
        const state = {
            open: false,
        };
        return (
            <div>
                <Toggle
                    toggled={state.open}
                    onToggle={this.handleToggle}
                    labelPosition="right"
                    label="展开"
                />
                <br />
                <div>
                    <List>
                        <ListItem primaryText="基本设置" leftIcon={<ContentSend />} />
                        <ListItem
                            primaryText="应用设置"
                            leftIcon={<ContentInbox />}
                            initiallyOpen
                            primaryTogglesNestedList
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="图标设置"
                                    leftIcon={<ActionGrade />}
                                />,
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
