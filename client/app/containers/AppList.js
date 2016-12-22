import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import CreateApp from '../components/CreateApp'
import { Link } from 'react-router';
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
            tableData:[],
        };
        this.createApp = this.createApp.bind(this);

    }
    createApp(){
        this.setState({createAppOpen: true});
    }
    componentDidMount(){
        fetch(`/api/app`,{
            method: "get",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    const data = res.data;
                    this.setState({
                        tableData: data,
                    });
                } else if (res.status == 401) {
                    alert("Oops! You are not authorized.");
                }
            })
            .catch((err) => {
                console.log(err)
            })
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
                            <TableHeaderColumn colSpan="3" tooltip="应用列表" style={{textAlign: 'center'}}>
                                应用列表
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            {/*<TableHeaderColumn>图标</TableHeaderColumn>*/}
                            <TableHeaderColumn>应用名称</TableHeaderColumn>
                            <TableHeaderColumn>应用ID</TableHeaderColumn>
                            {/*<TableHeaderColumn>最新版本</TableHeaderColumn>*/}
                            {/*<TableHeaderColumn>安装量</TableHeaderColumn>*/}
                            <TableHeaderColumn>管理</TableHeaderColumn>
                            {/*<TableHeaderColumn>开发</TableHeaderColumn>*/}
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {this.state.tableData.map( (row, index) => (
                            <TableRow key={index} striped={true}>
                                {/*<TableRowColumn>{row.status}</TableRowColumn>*/}
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.id}</TableRowColumn>
                                {/*<TableRowColumn>{row.lastVersion}</TableRowColumn>*/}
                                {/*<TableRowColumn>{row.installCapacity}</TableRowColumn>*/}
                                <TableRowColumn><Link className="button" to={"/app/basic?id="+row.id}>管理</Link></TableRowColumn>
                                {/*<TableRowColumn>开发</TableRowColumn>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>


            </div>
        );
    }
}