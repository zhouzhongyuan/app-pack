import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import VersionSelect from '../../components/VersionSelect'
import validator from 'validator';

const styles={
    errorStyle: {
        paddingTop: 5
    },
    labelStyle: {
        fontSize: '20px',
        fontWight: 'bold',
        color: '#000000',
    },
    inputStyle: {
        padding: 8,
        paddingLeft: 0,
    },
    itemStyle: {
        padding: '16px 17px',
        marginTop: 2,
    },
}

export default class BasicSetting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorTextOfAppName: '',
            errorTextOfAppDescription: '',
            errorTextOfAppSourceLink: '',

        }
        this.onChangeAppName = this.onChangeAppName.bind(this);
        this.onChangeAppDescription = this.onChangeAppDescription.bind(this);
        this.onChangeAppSourceLink = this.onChangeAppSourceLink.bind(this);
    }
    onChangeAppName(e){
        const isValidate = validator.isLength(e.target.value, {min:2, max: 4});
        if(!isValidate){
            const errorText="App名称有问题，一般为2～4个字符"
            this.setState({errorTextOfAppName: errorText});
        }else {
            this.setState({errorTextOfAppName:''});

        }
    }
    onChangeAppDescription(e){
        const isValidate = validator.isLength(e.target.value, {min:10, max: 300});
        if(!isValidate){
            const errorText="App描述有问题，一般为10～300个字符"
            this.setState({errorTextOfAppDescription: errorText});
        }else {
            this.setState({errorTextOfAppDescription:''});

        }
    }
    onChangeAppSourceLink(e){
        const isValidate = validator.isURL(e.target.value);
        if(!isValidate){
            const errorText="Url地址不正确，请输入完整的地址"
            this.setState({errorTextOfAppSourceLink: errorText});
        }else {
            this.setState({errorTextOfAppSourceLink:''});
        }
    }
    render() {
        return (
            <div
                style={{
                    padding: '34px 17px'

                }}
            >
                <div style={styles.itemStyle}>
                    <div style={styles.labelStyle}>应用名称</div>
                    <TextField
                        style={styles.inputStyle}
                        hintText="您的App的名称"
                        onChange={this.onChangeAppName}
                        errorText={this.state.errorTextOfAppName}
                        errorStyle={styles.errorStyle}
                    />
                </div>
                <div style={styles.itemStyle}>

                    <div style={styles.labelStyle}>应用描述</div>
                    <TextField
                        style={styles.inputStyle}
                        multiLine={true}
                        rowsMax={10}
                        hintText="应用简介"
                        onChange={this.onChangeAppDescription}
                        errorText={this.state.errorTextOfAppDescription}
                        errorStyle={styles.errorStyle}
                    />
                </div>
                <div style={styles.itemStyle}>

                    <div style={styles.labelStyle}>代码地址</div>
                    <TextField
                        style={styles.inputStyle}
                        hintText="您放置的SVN地址"
                        onChange={this.onChangeAppSourceLink}
                        errorText={this.state.errorTextOfAppSourceLink}
                        errorStyle={styles.errorStyle}
                    />
                </div>
                <div style={styles.itemStyle}>
                    <div style={styles.labelStyle}>Yigo版本</div>
                    <VersionSelect />
                </div>

                <div style={styles.itemStyle}>
                    <div style={styles.labelStyle}>应用ID <span>****</span></div>
                </div>
                <div style={styles.itemStyle}>
                    <div style={styles.labelStyle}>创建时间 <span>****</span></div>
                </div>


            </div>

        );
    }
}
// TODO SVN 账号，密码，包名。 版本号。