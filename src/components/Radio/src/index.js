import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import './index.scss';

export default class extends React.Component {

    static defaultProps = {
        selected: -1,
        disableOpts: [],
        type: 'horizontal'
    };

    static propTypes = {
        options: propTypes.array,
        className: propTypes.string
    };

    state = {
        selected: this.props.selected,
        disableOpts: this.props.disableOpts,
        type: this.props.type
    };

    optionClick(value) {
        if(this.state.disableOpts.indexOf(value) === -1) {
            this.setState({
                selected: value
            });
            this.props.onChange(value);
        }
    }

    render() {
        return (
            <div className={classnames('x-radio', this.props.className, this.state.type)}>
                {
                    this.props.options.map((item, index) => {
                        return (
                            <div className={classnames('x-option', {active: item.value == this.state.selected}, {'dis-selected': this.state.disableOpts.indexOf(item.value) !== -1})} key={index} onClick={this.optionClick.bind(this, item.value)}>
                                <span className="x-option-dot"></span>
                                <span className="x-option-label">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
