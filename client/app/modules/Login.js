import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';
import Auth from './m/Auth'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }
    onClickSubmit(e){
        if(e.type === 'keydown' && e.keyCode !== 13){
            return;
        }
        let loginName = this.refs.loginName.getValue();
        let loginPassword = this.refs.loginPassword.getValue();
        fetch("/auth/login",{
            method: "post",
            body: `email=${loginName}&password=${loginPassword}`,
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
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

        console.log(loginName, loginPassword);

    }
    render() {
        return (
            <div
                style={{
                    flex:1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onKeyDown={this.onClickSubmit}
            >
                <Card
                    style={{
                        maxWidth: 350,
                        paddingLeft: 40,
                        paddingRight: 40,
                        paddingBottom: 40,
                        backgroundColor: '#f7f7f7'
                    }}
                >
                    <CardTitle title="登录" subtitle="登录即可使用更多功能" />
                    <CardActions>
                        <TextField
                            hintText="账号"
                            floatingLabelText="账号"
                            ref="loginName"
                        /><br />
                        <TextField
                            hintText="密码"
                            floatingLabelText="密码"
                            type="password"
                            ref="loginPassword"
                        /><br />
                        <RaisedButton
                            fullWidth={true}
                            label="登录"
                            primary={true}
                            style={{
                                marginTop: 40,
                                height: 48
                            }}
                            onClick={this.onClickSubmit}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}
