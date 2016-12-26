import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {browserHistory} from 'react-router';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};
export default class PluginSelect extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.location.query.id);
        this.state={
            pluginList:[],
        }
        this.onSaveSetting = this.onSaveSetting.bind(this);
        this.onCancelSetting = this.onCancelSetting.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.selectedCheckboxes = new Set();

    }
    onCancelSetting(){
        browserHistory.push(`/app/plugin/list${this.props.location.search}`);
    }
    onSaveSetting(e){
        console.log(this.selectedCheckboxes);
        console.log(this.props.location);
        fetch("/api/app", {
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
    toggleCheckbox(e, name, variable) {
        console.log(name, variable);
        var nameObj = {name: name};
        if (this.selectedCheckboxes.has(nameObj)) {
            this.selectedCheckboxes.delete(nameObj);
        } else {
            this.selectedCheckboxes.add(nameObj);
        }
    }
    componentDidMount(){
        fetch(`/api/pluginList`,{
            method: "get",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
                const pluginList = res;
                this.setState({
                    pluginList,
                });
                this.state.pluginList.map( (plugin, index) => {
                        if(plugin.defaultSelected){
                            this.selectedCheckboxes.add({name:plugin.name})
                        }
                    }
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div style={styles.block}>
                <h2>添加插件</h2>
                <Divider />
                {
                    this.state.pluginList.map( (plugin, index) => (
                        <div
                            key={index}
                        >
                            <Checkbox
                                label={plugin.displayName}
                                defaultChecked={plugin.defaultSelected}
                                style={styles.checkbox}
                                onClick={(e) => this.toggleCheckbox(e, plugin.name, plugin.variable)}
                            />
                            {
                                plugin.variable ? (
                                        plugin.variable.map( (variable, i) => (
                                            <TextField
                                                key={i}
                                                hintText={variable}
                                            />
                                        ))
                                    ) : (
                                        <div></div>
                                    )
                            }
                        </div>
                    ))}
                <RaisedButton
                    onClick={this.onCancelSetting}
                    label="取消"
                    primary={true}
                    style={{
                        margin: 12,
                    }}
                />
                <RaisedButton
                    onClick={this.onSaveSetting}
                    label="保存"
                    primary={true}
                    style={{
                        margin: 12,
                    }}
                />
            </div>
        );
    }
}