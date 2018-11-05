import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Box({className, title, children, noPadding, type}) {
    let _class = noPadding ? `${className || ''}` : `x-box-content ${className || ''}`,
        colorTypeClass = type ? ' x-box-' + type : '';

    return (
        <div className={`x-box${colorTypeClass}`}>
            {
                title &&
                <div className="x-box-title">
                    <h4>{title}</h4>
                </div>
            }
            <div className={_class}>
                {children}
            </div>
        </div>
    );
}

Box.protoTypes = {
    type: PropTypes.string,
    className: PropTypes.className,
    title: PropTypes.title,
    noPadding: PropTypes.bool
};

Box.defaultProps = {
    noPadding: false
};