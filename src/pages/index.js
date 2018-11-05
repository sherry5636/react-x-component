import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

export default class extends Component {

    componentDidMount() {
        this.updateWinHeight();
        window.addEventListener('resize', this.updateWinHeight, false);
    }

    updateWinHeight() {
        document.querySelector('.x-app').style.height = window.innerHeight + 'px';
    }

    render() {
        return [
            <div key='x-app' className="x-app">
                <Switch>
                    <Route path="/app" component={require('./app')}/>
                    <Route component={() => (
                        <Redirect push to="/app"/>
                    )}/>
                </Switch>
            </div>
        ]
    }
}
