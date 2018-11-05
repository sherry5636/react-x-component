import './styles/index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'mobx-react';

import {$_history} from 'services';
import Pages from './pages';


render(
    <Provider>
        <Router history={$_history}>
            <Pages/>
        </Router>
    </Provider>, document.getElementById('x-component'));