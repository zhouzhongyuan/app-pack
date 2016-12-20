import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import VersionSelect from '../../components/VersionSelect'


const labelStyle = {
    fontSize: '20px',
    fontWight: 'bold',
    color: '#000000',

}
const inputStyle = {
    padding: 8,
    paddingLeft: 0,
};
const itemStyle = {
    padding: '16px 17px',
    marginTop: 2,
}
const radioStyle = {
    paddingTop:'8px',
    paddingBottom: '8px',
    heigth:'24px',

}
export default class BasicSetting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                style={{
                    padding: '34px 17px'

                }}
            >
                <div style={itemStyle}>
                    <div style={labelStyle}>应用名称</div>
                    <TextField
                        style={inputStyle}
                        hintText="您的App的名称"
                    />
                </div>
                <div style={itemStyle}>

                    <div style={labelStyle}>应用描述</div>
                    <TextField
                        style={inputStyle}
                        multiLine={true}
                        hintText="应用简介"
                    />
                </div>
                <div style={itemStyle}>

                    <div style={labelStyle}>代码地址</div>
                    <TextField
                        style={inputStyle}
                        fullWidth={true}
                        hintText="您放置的SVN地址"
                    />
                </div>

                <div style={itemStyle}>
                    <div style={labelStyle}>应用ID</div>
                    <TextField
                        style={inputStyle}
                        hintText="应用ID"
                    />
                </div>
                <div style={itemStyle}>
                    <div style={labelStyle}>创建时间</div>
                    <TextField
                        style={inputStyle}
                        hintText="创建时间"
                    />
                </div>
                <div style={itemStyle}>
                    <div style={labelStyle}>Yigo版本</div>
                    <VersionSelect />
                </div>

            </div>

        );
    }
}


