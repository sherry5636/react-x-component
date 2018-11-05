import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';

class Box extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    render() {
        return (
            <div className={`x-toggle-box ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}

class Top extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    render() {
        return (
            <div className={`x-toggle-top ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}

export default class extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        onClose: PropTypes.func
    };

    static defaultProps = {
        className: '',
        onClose: () => {
        }
    };

    static Box = Box;
    static Top = Top;

    constructor() {
        super();
        this.oTop = null;
        this.oBox = null;
        this.oPar = null;
        this.mounted = true;
        this.handleDocClick = this.handleDocClick.bind(this);
        this.state = {
            isActive: false
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocClick, false);
    }

    handleDocClick(e) {
        this.oTop = this.refs.xToggle.children[0];
        this.oBox = this.refs.xToggle.children[1];
        if (e.target.className === 'x-toggle-top' || this.oTop.contains(e.target)) {
            this.setState({
                isActive: !this.state.isActive
            }, () => {
                if (!this.state.isActive) {
                    // toggle关闭的回掉函数
                    this.props.onClose();
                }
            });
        } else {
            // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
            this.setState({
                isActive: false
            }, () => {
                this.props.onClose();
            });
        }
    }

    render() {
        return (
            <div {...this.props}
                 className={this.state.isActive ? `x-toggle show ${this.props.className}` : `x-toggle hide ${this.props.className}`}
                 ref="xToggle">
                {this.props.children}
            </div>
        );
    }
}