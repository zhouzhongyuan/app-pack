import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


export default class Pack extends React.Component {
    constructor(props) {
        super(props);
        this.generatePack = this.generatePack.bind(this);
    }
    generatePack(e){
        fetch("/api/task", {
            method: "put",
            body: `id=1029&plugin=${JSON.stringify(Array.from(this.selectedCheckboxes))}`,
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if(res.success){
                    this.setState({
                        snackBarOpen: true,
                    });
                }
            })
            .then(() => {
                browserHistory.push(`/app/plugin/list${this.props.location.search}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div >
                <TextField
                    hintText='版本号'
                    ref="textField"
                />
                <Checkbox
                    label="Debug调试"
                    labelPosition="left"
                />
                <Checkbox
                    label="发布到应用市场"
                    labelPosition="left"
                />
                <RaisedButton
                    onClick={this.generatePack}
                    label="生成安装包"
                    primary={true}
                    style={{
                        margin: 12,
                    }}
                />
            </div>
        );
    }
}