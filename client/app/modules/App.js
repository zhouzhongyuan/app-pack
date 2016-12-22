import React from 'react';
import Sidebar from './Sidebar';
import AppContent from './AppContent';
export default class App extends React.Component {
    render() {
        return (
            <div
                className="app-setting"
            >
                <section className="content-wrapper">
                    {this.props.children}
                </section>
            </div>
        );
    }
}
