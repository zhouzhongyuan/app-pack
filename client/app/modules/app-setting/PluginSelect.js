import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
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
            id:this.props.location.query.id || '',
            name:this.props.name || '',
            description: this.props.description || '',
            createTime: this.props.createTime || '',
            pluginList:[],
        }
    }
    componentDidMount(){



        const pluginList =
            [
                {
                    "name": "cordova-plugin-app-version",
                    "version": "0.1.8",
                    "displayName": "版本号",
                    "defaultSelected": true
                },
                {
                    "name": "cordova-plugin-camera",
                    "version": "0.1.8",
                    "displayName": "相机＆相册",
                    "defaultSelected": true
                }
            ];
        this.setState({pluginList});












        // fetch(`/api/app/${this.state.id}`,{
        //     method: "get",
        //     credentials: 'include',
        //     headers: new Headers({
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     })
        // })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         if (res.success) {
        //             const data = res.data;
        //             this.setState({
        //                 name: data.name,
        //                 description: data.description,
        //                 createTime: data.createTime,
        //                 primaryDownloadLink: data.primaryDownloadLink,
        //             });
        //         } else if (res.status == 401) {
        //             alert("Oops! You are not authorized.");
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }
    render() {
        return (
            <div style={styles.block}>
                {this.state.pluginList.map( (plugin, index) => (
                    <Checkbox
                        key={index}
                        label={plugin.displayName}
                        defaultChecked={plugin.defaultSelected}
                        style={styles.checkbox}
                    />
                ))}
            </div>
        );
    }
}