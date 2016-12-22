import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {browserHistory} from 'react-router';

export default class CreateApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: this.props.createAppOpen || false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.createApp = this.createApp.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    createApp() {
        let name = this.refs.name.getValue();
        let description = this.refs.description.getValue();
        fetch("/api/app", {
            method: "post",
            body: `name=${name}&description=${description}`,
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    browserHistory.push(`/app/basic?id=${res.id}`);
                } else if (res.status == 401) {
                    alert("Oops! You are not authorized.");
                }
                this.setState({open: false});
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="确定"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.createApp}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    label="创建应用"
                    primary={true}
                    onTouchTap={this.handleOpen}
                    style={{
                        margin: 12,
                    }}
                />
                <Dialog
                    title="创建应用"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoDetectWindowHeight={false}
                >
                    <TextField
                        hintText="名称"
                        floatingLabelText="应用名称"
                        ref="name"
                    /><br />
                    <TextField
                        hintText="简介"
                        floatingLabelText="简介"
                        ref="description"
                        multiLine={true}
                        rowsMax={10}
                        fullWidth={true}
                    /><br />
                </Dialog>
            </div>
        );
    }
}
