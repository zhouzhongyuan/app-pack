import React from 'react';
import {
    Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
}
    from 'material-ui/Table';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};
const tableData = [
    {
        name: '应用名称',
        status: '车掌柜',
        selected: true,
    },
    {
        name: '应用描述',
        status: '类似淘宝的汽车配件商城',
    },
    {
        name: '上传地址',
        status: 'http://svn.appcan.cn/sourceCode/114/766/82/trunk',
        selected: true,
    },
    {
        name: '应用ID',
        status: '11476682',
    },
    {
        name: '创建时间',
        status: '2015-11-19 13:47:39',
    },
    {
        name: 'Yigo版本',
        status: '1.6 OR 2.0',
    }
];
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
        this.state = {
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            showRowHover: false,
        };
    }
    componentDidMount(){

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
                        <div
                            style={{
                                padding:'8px',
                                paddingLeft:0
                            }}
                        >
                            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                                <RadioButton
                                    value="light"
                                    label="Yigo 1.6"
                                    style={radioStyle}
                                />
                                <RadioButton
                                    value="ludicrous"
                                    label="Yigo 2.0"
                                    style={radioStyle}

                                />
                                <RadioButton
                                    value="custom"
                                    label="自定义: "
                                    style={radioStyle}
                                >
                                </RadioButton>
                            </RadioButtonGroup>
                            <TextField
                                style={inputStyle}
                                type="url"
                                hintText="输入完整svn地址"
                            />
                        </div>
                </div>

            </div>

        );
    }
}


