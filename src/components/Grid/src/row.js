import './index.scss'
import React from 'react';

export default function grid({children}) {

    return (
        <div className={`x-grid-row`}>
            {children}
        </div>
    );

}

