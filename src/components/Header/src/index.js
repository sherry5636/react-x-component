import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
    }

    static defaultProps = {}

    render() {
        return (
            <header className="x-header">
                <div className="logo">
                    <span>component-logo</span>
                </div>
                <div className="navbar">
                    <span className="control-menu"></span>
                    <div className="ul-list">
                        
                    </div>
                    <div className="tool-list">
                        <span className="fa fa-circle tool-item"></span>
                        <a className="fa fa-mail tool-item">admin</a>
                    </div>
                </div>
            </header>
        );
    }ji
}