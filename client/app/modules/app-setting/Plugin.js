import React from 'react';
export default class Plugin extends React.Component {
    render() {
        return (
            <div>
                    {this.props.children}
            </div>
        );
    }
}