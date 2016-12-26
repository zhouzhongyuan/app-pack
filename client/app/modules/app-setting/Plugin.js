import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.location.query.id);
        this.state={
            id:this.props.location.query.id || '',
            name:this.props.name || '',
            description: this.props.description || '',
            createTime: this.props.createTime || '',
            pluginList:[],
        }
        this.onSaveSetting = this.onSaveSetting.bind(this);
    }
    onSaveSetting(e){
        console.log(e.target);
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
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div style={styles.block}>
                {this.state.pluginList.map( (plugin, index) => (
                    <div
                        key={index}
                    >
                        <Checkbox
                            label={plugin.displayName}
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
                    style={{
                        marginRight: 20,
                        position:'fixed',
                        bottom:24,
                        right: 24,
                    }}
                >
                    <ContentAdd />
                </FloatingActionButton>
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