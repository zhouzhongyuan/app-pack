import React from 'react';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validator from 'validator';
import ActionHome from 'material-ui/svg-icons/action/home';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentSave from 'material-ui/svg-icons/content/save';
const iconStyles = {
    marginRight: 24,
};
const styles = {
    errorStyle: {
        paddingTop: 5
    },
    inputStyle: {
        left: 40,
    },
    radioStyle: {
        paddingTop: '8px',
        paddingBottom: '8px',
        heigth: '24px',

    },
    // labelStyle: {
    //     fontSize: '20px',
    //     fontWight: 'bold',
    //     color: '#000000',
    //     display:'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
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
    itemStyle: {
        padding: '16px 17px',
        marginTop: 2,
    },
};

export default class VersionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'yigo16',
            valueSelected: 'yigo16',
            errorText: '',
            edit: this.props.edit,
        };
        this.onCustomButtonClick = this.onCustomButtonClick.bind(this);
        this.onCustomTextChange = this.onCustomTextChange.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    }

    onCustomButtonClick(e) {
        this.refs.customText.focus();
        // var customText = this.refs.customText.getValue();
    }

    onCustomTextChange(e) {
        this.setState({valueSelected: 'custom'});

        // validation
        const isValidate = validator.isURL(e.target.value);
        if (!isValidate) {
            const errorText = "Url地址不正确，请输入完整的地址"
            this.setState({errorText});
        } else {
            this.setState({errorText: ''});

        }
    }
    onEditButtonClick(e){
        this.setState({edit:true});
    }
    onSaveButtonClick(e){
        this.setState({edit:false});
    }
    render() {
        return (
            <div style={styles.itemStyle}>
                {
                    !this.state.edit ?
                        (
                            <div style={styles.labelStyle}>
                                <span style={styles.labelTitleStyle}>Yigo版本</span>
                                <span
                                    style={styles.contentStyle}
                                >
                                    <span>Yigo 1.6</span>
                                    <ModeEdit
                                        style={iconStyles}
                                        onClick={this.onEditButtonClick}
                                    />
                                </span>

                            </div>
                        ) :
                        (
                            <div>
                                <div style={styles.labelStyle}>
                                    <span>Yigo版本</span>
                                    <ContentSave
                                        style={iconStyles}
                                        onClick={this.onSaveButtonClick}
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: '8px',
                                        paddingLeft: 0
                                    }}
                                >
                                    <RadioButtonGroup
                                        name="shipSpeed"
                                        defaultSelected={this.state.defaultSelected}
                                        valueSelected={this.state.valueSelected}
                                    >
                                        <RadioButton
                                            value="yigo16"
                                            label="Yigo 1.6"
                                            style={styles.radioStyle}
                                        />
                                        <RadioButton
                                            value="yigo20"
                                            label="Yigo 2.0"
                                            style={styles.radioStyle}

                                        />
                                        <RadioButton
                                            value="custom"
                                            label="自定义: "
                                            style={styles.radioStyle}
                                            onClick={this.onCustomButtonClick}
                                        >
                                        </RadioButton>
                                    </RadioButtonGroup>
                                    <TextField
                                        style={styles.inputStyle}
                                        type="url"
                                        hintText="输入完整svn地址"
                                        ref="customText"
                                        onChange={this.onCustomTextChange}
                                        errorText={this.state.errorText}
                                        errorStyle={styles.errorStyle}
                                    />
                                </div>
                            </div>
                        )
                }

            </div>
        );
    }
}


