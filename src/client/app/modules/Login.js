import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }
    onClickSubmit(){
        let loginName = this.refs.loginName.getValue();
        let loginPassword = this.refs.loginPassword.getValue();
        fetch("/login",{
            method: "post",
            body: `loginName=${loginName}&loginPassword=${loginPassword}`,
            credentials: 'include',

        })
            .then((res) => {
                if (res.ok) {
                    alert("Perfect! Your settings are saved.");
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
            <div style={{
                flex:1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
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
