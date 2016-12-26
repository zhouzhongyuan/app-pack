import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {browserHistory} from 'react-router';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};
export default class PluginList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.search);
        this.state={
            id:this.props.location.query.id || '',
            name:this.props.name || '',
            description: this.props.description || '',
            createTime: this.props.createTime || '',
            pluginList:[],
        }
        this.onSaveSetting = this.onSaveSetting.bind(this);
        this.PluginSelect = this.PluginSelect.bind(this);
    }
    onSaveSetting(e){
        console.log(e.target);
    }
    componentDidMount(){
        const search = this.props.location.search;
        // search 形如　?id=1029
        const reg = /\?id=(\d{4,})/;
        const match = reg.exec(search);



        fetch(`/api/app/${match[1]}`,{
            method: "get",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
                const pluginList = res.data.plugin;
                console.log(pluginList);

                this.setState({
                    pluginList,
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    PluginSelect(){
        console.log(this.props.location.search);
        browserHistory.push(`/app/plugin/select${this.props.location.search}`);
    }
    render() {
        return (
            <div style={styles.block}>
                {this.state.pluginList.map( (plugin, index) => (
                    <div
                        key={index}
                    >
                        <Checkbox
                            label={plugin.name}
                            defaultChecked={plugin.defaultSelected}
                            style={styles.checkbox}
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
                <FloatingActionButton
                    secondary={true}
                    onClick={this.PluginSelect}
                    style={{
                        marginRight: 20,
                        position:'fixed',
                        bottom:24,
                        right: 24,
                    }}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}