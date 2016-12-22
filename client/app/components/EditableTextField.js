import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import validator from 'validator';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentSave from 'material-ui/svg-icons/content/save';
import Snackbar from 'material-ui/Snackbar';

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
        padding: '16px 0',
        marginTop: 2,
    },
}


export default class EditableTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            edit: this.props.edit || false,
            label: this.props.label,
            value: this.props.value,
            hintText: this.props.hintText,
            snackBarOpen: this.props.snackBarOpen || false,
        }
        this.onChange = this.onChange.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }
    onChange(e){
        this.props.validateHandler.call(this, e);
    }
    onEditButtonClick(e){
        this.setState({edit:true});
    }
    onSaveButtonClick(e){
        if(! this.state.errorText){
            const appName = this.refs.textField.getValue();
            this.setState({value: appName});
            this.setState({edit:false});
            // 保存数据到server
            // appsetting/basic/appname
            fetch("/appsetting/basic/appname", {
                method: "post",
                body: `appName=${appName}`,
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
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    handleRequestClose(){
        this.setState({
            snackBarOpen: false,
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value:nextProps.value,
        });
    }
    render() {
        return (
                <div style={styles.itemStyle}>
                    {
                        !this.state.edit ?
                            (
                                <div style={styles.labelStyle}>
                                    <span style={styles.labelTitleStyle}>{this.props.label}</span>
                                    <span
                                        style={styles.contentStyle}
                                    >
                                    <span>{this.state.value}</span>
                                    <ModeEdit
                                        style={iconStyles}
                                        onClick={this.onEditButtonClick}
                                    />
                                </span>
                                </div>
                            ):
                            (
                                <div>
                                    <div style={styles.labelStyle}>
                                        <span>{this.props.label}</span>
                                        <ContentSave
                                            style={iconStyles}
                                            onClick={this.onSaveButtonClick}
                                        />
                                    </div>
                                    <TextField
                                        style={styles.inputStyle}
                                        hintText={this.state.hintText}
                                        onChange={this.onChange}
                                        onBlur={this.onSaveButtonClick}
                                        errorText={this.state.errorText}
                                        errorStyle={styles.errorStyle}
                                        defaultValue={this.state.value}
                                        ref="textField"
                                    />
                                </div>
                            )
                    }
                    <Snackbar
                        open={this.state.snackBarOpen}
                        message="修改成功"
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </div>
        );
    }
}