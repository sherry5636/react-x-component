import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Textarea (props)  {
    const cls = props.className ? `${props.className} x-textarea` : `x-textarea`;
    return (
        <textarea
            className={cls}
            maxLength={props.maxLength}
            value={props.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
            onChange={(e) => {
                props.onChange(e.target.value, e);
            }}>
        </textarea>
    );
}

Textarea.propTypes={
    className: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Textarea.defaultProps = {
    maxLength: 90,
    value: '',
    placeholder: '请输入...',
    disabled: false
};
