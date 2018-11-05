import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static defaultProps = {
        type: 'default',
        size: 'md'
    };

    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning']),
        size: PropTypes.oneOf(['md', 'xs', 'sm', 'lg', 'sg'])
    };

    render() {

        var btnClass = classnames({
            'x-btn': true,
            'x-btn-primary': this.props.type === 'primary',
            'x-btn-warning': this.props.type === 'warning',
            'x-btn-lg': this.props.size === 'lg',
            'x-btn-sm': this.props.size === 'sm',
            'x-btn-xs': this.props.size === 'xs',
            'x-btn-sg': this.props.size === 'sg',
            'x-btn-inverse': this.props.inverse
        });

        return (
            <button {...this.props} className={btnClass}>{this.props.children}</button>
        );
    }
}

