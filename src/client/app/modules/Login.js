import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
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
                        /><br />
                        <TextField
                            hintText="密码"
                            floatingLabelText="密码"
                            type="password"
                        /><br />
                        <RaisedButton
                            fullWidth={true}
                            label="登录"
                            primary={true}
                            style={{
                                marginTop: 40,
                                height: 48
                            }}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}
