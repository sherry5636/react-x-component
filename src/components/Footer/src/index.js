import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {}

    static defaultProps = {}

    render() {
        return (
            <footer className="x-footer">
                <strong>Copyright © 2018   Version 0.0.1</strong>
            </footer>
        );
    }
}