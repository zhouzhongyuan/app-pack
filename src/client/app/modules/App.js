import React from 'react';
import Sidebar from './Sidebar';
import AppContent from './AppContent';
export default class App extends React.Component {
    render() {
        return (
            <div
                className="app-setting"
            >
                <section className="sidebar">
                    <Sidebar />
                </section>
                <section className="content-wrapper">
                    <AppContent />
                </section>
            </div>
        );
    }
}
