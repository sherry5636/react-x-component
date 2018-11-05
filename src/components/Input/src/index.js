import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss'

export default function Input (props) {
    const size = props.size || 'md';
    return (
        <input {...props}
               className={classnames('x-input', props.className, {disabled: props.disabled}, 'x-input-' + size)}
               onChange={(e) => {
                   props.onChange(e.target.value);
               }}
               placeholder={props.placeholder}/>
    );
};

Input.protoTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    onChange: () => {
    },
    placeholder: ''
};

