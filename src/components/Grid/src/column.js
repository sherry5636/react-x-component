import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';

export default function Column({col,children}) {

    return (
        <div className={`x-span${col}`}>
            {children}
        </div>
    );

}

Column.propTypes = {
    col: PropTypes.number,
}
