import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import CreateApp from '../components/CreateApp'

import { Link } from 'react-router';
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
        name: '紫江商贸',
        status: '图片1',
        lastVersion: '0.0.1',
        installCapacity: '0',
        manage: '管理',
        dev: '开发',
    },
    {
        name: '万华物流',
        status: '图片2',
        lastVersion: '0.0.1',
        installCapacity: '0',
        manage: '管理',
        dev: '开发',
    },
];

export default class AppList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            createAppOpen: false,
        };
        this.createApp = this.createApp.bind(this);

    }
    createApp(){
        this.setState({createAppOpen: true});
    }
    render() {
        return (
            <div>
                <CreateApp
                    createAppOpen={this.state.createAppOpen}
                />
                <Table
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
                            <TableHeaderColumn colSpan="7" tooltip="应用列表" style={{textAlign: 'center'}}>
                                应用列表
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>图标</TableHeaderColumn>
                            <TableHeaderColumn>应用名称</TableHeaderColumn>
                            <TableHeaderColumn>应用ID</TableHeaderColumn>
                            <TableHeaderColumn>最新版本</TableHeaderColumn>
                            <TableHeaderColumn>安装量</TableHeaderColumn>
                            <TableHeaderColumn>管理</TableHeaderColumn>
                            <TableHeaderColumn>开发</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map( (row, index) => (
                            <TableRow key={index} striped={true}>
                                <TableRowColumn>{row.status}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.lastVersion}</TableRowColumn>
                                <TableRowColumn>{row.installCapacity}</TableRowColumn>
                                <TableRowColumn><Link className="button" to="/app/basic">{row.manage}</Link></TableRowColumn>
                                <TableRowColumn>{row.dev}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>


            </div>
        );
    }
}