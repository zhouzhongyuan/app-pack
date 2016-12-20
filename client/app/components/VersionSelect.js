import React from 'react';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validator from 'validator';

const styles = {
    errorStyle: {
        paddingTop: 5
    },
    inputStyle: {
        left: 20,
    },
    radioStyle: {
        paddingTop:'8px',
        paddingBottom: '8px',
        heigth:'24px',

    },
};

export default class VersionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'yigo16',
            valueSelected:'yigo16',
            errorText: ''
        };
        this.onCustomButtonClick = this.onCustomButtonClick.bind(this);
        this.onCustomTextChange = this.onCustomTextChange.bind(this);
    }

    onCustomButtonClick(e){
        this.refs.customText.focus();
        // var customText = this.refs.customText.getValue();
    }
    onCustomTextChange(e){
        console.log(e.target.value);
        this.setState({valueSelected:'custom'});

        // validation
        const isValidate = validator.isURL(e.target.value);
        console.log(isValidate);
        if(!isValidate){
            const errorText="Url地址不正确，请输入完整的地址"
            this.setState({errorText});
        }else {
            this.setState({errorText:''});

        }
    }
    render() {
        return (
            <div
                style={{
                    padding:'8px',
                    paddingLeft:0
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
        );
    }
}


