import React from 'react';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const inputStyle = {
    padding: 8,
    paddingLeft: 0,
};

const radioStyle = {
    paddingTop:'8px',
    paddingBottom: '8px',
    heigth:'24px',

}
export default class VersionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'yigo16',
            valueSelected:'yigo16'
        };
        this.onCustomButtonClick = this.onCustomButtonClick.bind(this);
        this.onCustomTextChange = this.onCustomTextChange.bind(this);
    }

    onCustomButtonClick(e){
        this.refs.customText.focus();
        // var customText = this.refs.customText.getValue();
    }
    onCustomTextChange(e){
        console.log(this.state);
        this.setState({valueSelected:'custom'});
    }
    render() {
        console.log('render');
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
                        style={radioStyle}
                    />
                    <RadioButton
                        value="yigo20"
                        label="Yigo 2.0"
                        style={radioStyle}

                    />
                    <RadioButton
                        value="custom"
                        label="自定义: "
                        style={radioStyle}
                        onClick={this.onCustomButtonClick}
                    >
                    </RadioButton>
                </RadioButtonGroup>
                <TextField
                    style={inputStyle}
                    type="url"
                    hintText="输入完整svn地址"
                    ref="customText"
                    onChange={this.onCustomTextChange}
                />
            </div>
        );
    }
}


