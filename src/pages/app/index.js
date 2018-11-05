import React, {Component} from 'react';
import {XHeader,XSidebar,XFooter} from 'components';
import Router from './router';

export default class extends Component {

    render() {
        return[
            // <XSidebar key="sidebar"/>,
            <XHeader key="header"/>,
            <section key="wrapper" className="x-wrapper">
                {/* <XHeader key="header"/> */}
                <XSidebar/>
                <section className="x-body">
                    <section className="x-content">
                        <Router {...this.props}/>
                    </section>
                    <XFooter key="footer"/>    
                </section>          
            </section>
        ]
    }
}
