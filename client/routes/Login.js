var React = require('react');

var Login = React.createClass({
    auth: function(){
        const userName = React.findDOMNode(this.refs.userName).value;
        const password = React.findDOMNode(this.refs.password).value;
        console.log(userName);
        console.log(password);
        //ajax
        var data = new FormData();
        data.append('userName', userName);
        data.append('password', password);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("POST", "/login", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(`userName=${userName}&password=${password}`);
    },
    render: function() {
        return (
            <div>
                <div>
                    <label htmlFor="userName">用户名</label>
                    <input type="text" id="userName" ref="userName"/>
                </div>
                <div>
                    <label htmlFor="password">密  码</label>
                    <input type="text" id="password" ref="password" />
                </div>

                <button onClick={this.auth} >登录</button>
            </div>

        );
    }
});

module.exports = Login;
