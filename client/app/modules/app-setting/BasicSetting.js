import React from 'react';
import {
    Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
}
    from 'material-ui/Table';
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
    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="2" tooltip="应用基本设置" style={{ textAlign: 'center' }}>
                                基本设置
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="应用的设置项目">项目</TableHeaderColumn>
                            <TableHeaderColumn tooltip="设置的值">值</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map((row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            <TableRowColumn>Name</TableRowColumn>
                            <TableRowColumn>Status</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn colSpan="2" style={{ textAlign: 'center' }}>
                                Super Footer
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }
}
