import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import VersionSelect from '../../components/VersionSelect'
import EditableTextField from '../../components/EditableTextField'
import validator from 'validator';

import ContentCopy from 'material-ui/svg-icons/content/content-copy';
const iconStyles = {
    marginRight: 24,
};

const styles={
    errorStyle: {
        paddingTop: 5
    },
    labelStyle: {
        fontSize: '20px',
        fontWight: 'bold',
        color: '#000000',

        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentStyle: {
        flex:1,
        paddingLeft: 20
    },
    labelTitleStyle: {
        width: 80,
        textAlign: 'justify',
        textAlignLast: 'justify',
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
    render() {
        return (
            <div
                style={{
                    padding: '34px 17px'

                }}
            >
                <EditableTextField
                    label="应用名称"
                    hintText="您的App的名称"
                    value="紫江商贸"
                    validateHandler={this.onChangeAppName}
                />
                <EditableTextField
                    label="应用描述"
                    hintText="应用简介"
                    value="紫江是一家……"
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
                <div style={styles.itemStyle}>
                    <div style={styles.labelStyle}>
                        <span  style={styles.labelTitleStyle}>应用ID</span>
                        <span
                            style={styles.contentStyle}
                        >
                            <span>****</span>
                            <ContentCopy
                                style={iconStyles}
                            />
                        </span>

                    </div>
                </div>
                <div style={styles.itemStyle}>
                    <div style={styles.labelStyle}>
                        <span style={styles.labelTitleStyle}>创建时间</span>
                        <span
                            style={styles.contentStyle}
                        >

                        <span>****</span>
                        <ContentCopy
                            style={iconStyles}
                        />
                        </span>

                    </div>
                </div>


            </div>

        );
    }
}
// TODO SVN 账号，密码，包名。 版本号。