import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import './index.scss';

export default class extends React.Component {

    static propTypes = {
        onChange: propTypes.func,
        isChecked: propTypes.bool,
        type: propTypes.string,
        className: propTypes.string,
        data: propTypes.object,
        disabled: propTypes.bool
    };

    state = {
        isChecked: this.props.isChecked || false,
        type: this.props.type || 'primary',
        disabled: this.props.disabled || false
    };

    checkboxClick() {
        if (this.state.disabled) {
            return;
        }
        this.setState({
            isChecked: !this.state.isChecked
        }, () => {
            this.props.onChange(this.props.data, this.state.isChecked);
        });
    }

    render() {
        return (
            <div
                className={classnames("x-checkbox", {checked: this.state.isChecked}, {disabled: this.state.disabled}, this.props.className, this.state.type)}
                onClick={this.checkboxClick.bind(this)}>
                <span className="x-checkbox-item">
                    {this.state.isChecked && <i className="fa fa-check"></i>}
                    {/* {this.state.isChecked && <RayrIcon type={"right"} />} */}
                </span>
                <span className="x-checkbox-label">{this.props.data.label}</span>
            </div>
        );
    }
}

