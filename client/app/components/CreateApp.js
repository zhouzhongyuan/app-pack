import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import EditableTextField from './EditableTextField'

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class CreateApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: this.props.createAppOpen || false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);


    }

    handleOpen(){
        this.setState({open: true});
    };

    handleClose(){
        let name = this.refs.name.getValue();
        let description = this.refs.description.getValue();
        fetch("/app",{
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
                    //保存token
                    Auth.authenticateUser(res.token);

                    browserHistory.push('/app');
                } else if (res.status == 401) {
                    alert("Oops! You are not authorized.");
                }
            })
            .catch((err) => {
                console.log(err)
            })
        //this.setState({open: false});
    };

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
                onTouchTap={this.handleClose}
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
                    contentStyle={{
                        maxWidth:600,
                    }}
                >
                    {/*<EditableTextField*/}
                        {/*label="应用名称"*/}
                        {/*hintText="您的App的名称"*/}
                        {/*value="紫江商贸"*/}
                        {/*validateHandler={this.onChangeAppName}*/}
                    {/*/>*/}
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