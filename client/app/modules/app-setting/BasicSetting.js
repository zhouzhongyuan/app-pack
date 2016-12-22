import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import VersionSelect from '../../components/VersionSelect'
import EditableTextField from '../../components/EditableTextField'
import NotEditableTextField from '../../components/NotEditableTextField'
import validator from 'validator';

export default class BasicSetting extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.location.query.id);
        this.state={
            id:this.props.location.query.id || '',
            name:this.props.name || '',
            description: this.props.description || '',
            createTime: this.props.createTime || '',
        }
    }
    onChangeAppName(e){
        const isValidate = validator.isLength(e.target.value, {min:2, max: 4});
        if(!isValidate){
            const errorText="App名称有问题，一般为2～4个字符"
            this.setState({errorText: errorText});
        }else {
            this.setState({errorText:''});

        }
    }
    onChangeAppDescription(e){
        const isValidate = validator.isLength(e.target.value, {min:10, max: 300});
        if(!isValidate){
            const errorText="App描述有问题，一般为10～300个字符"
            this.setState({errorText: errorText});
        }else {
            this.setState({errorText:''});

        }
    }
    onChangeAppSourceLink(e){
        const isValidate = validator.isURL(e.target.value);
        if(!isValidate){
            const errorText="Url地址不正确，请输入完整的地址"
            this.setState({errorText: errorText});
        }else {
            this.setState({errorText:''});
        }
    }
    componentDidMount(){
        fetch(`/api/app/${this.state.id}`,{
            method: "get",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    const data = res.data;
                    this.setState({
                        name: data.name,
                        description: data.description,
                        createTime: data.createTime,
                    });
                } else if (res.status == 401) {
                    alert("Oops! You are not authorized.");
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div
            >
                <EditableTextField
                    label="应用名称"
                    hintText="您的App的名称"
                    value={this.state.name}
                    validateHandler={this.onChangeAppName}
                />
                <EditableTextField
                    label="应用描述"
                    hintText="应用简介"
                    value={this.state.description}
                    validateHandler={this.onChangeAppDescription}
                    multiLine={true}
                    rowsMax={10}
                />
                <EditableTextField
                    label="代码地址"
                    hintText="您放置的SVN地址"
                    value="http://svn.com"
                    validateHandler={this.onChangeAppSourceLink}
                />
                <VersionSelect
                    edit={false}
                />
                <NotEditableTextField
                    label="应用ID"
                    value={this.state.id}

                />
                <NotEditableTextField
                    label="创建时间"
                    value={new Date(this.state.createTime).toLocaleString()}

                />
            </div>

        );
    }
}
// TODO SVN 账号，密码，包名。 版本号。