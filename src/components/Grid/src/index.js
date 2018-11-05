import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import Col from './column';

export default class extends React.Component {

    static Row = Row;
    static Col = Col;

    render(){
        return (
            <div className={`x-grid-container`}>
                {this.props.children}
            </div>
        );
    }

}

