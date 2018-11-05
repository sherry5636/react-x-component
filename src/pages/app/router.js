import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// 加lazy| 模块划分，实现路由懒加载

export default ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}/demo`}
                   component={require('lazy|./demo')}/>
            <Route path={`${match.url}/box`}
                   component={require('lazy|./box')}/>
            <Route path={`${match.url}/button`}
                   component={require('lazy|./button')}/>
            <Route path={`${match.url}/selector/selector`}
                   component={require('lazy|./selector/selector')}/>
            <Route path={`${match.url}/input`}
                   component={require('lazy|./input')}/>
            <Route path={`${match.url}/table`}
                   component={require('lazy|./table')}/>
            <Route path={`${match.url}/modal`}
                   component={require('lazy|./modal')}/>
            <Route path={`${match.url}/checkbox`}
                   component={require('lazy|./checkbox')}/>
            <Route path={`${match.url}/radio`}
                   component={require('lazy|./radio')}/>
            <Route path={`${match.url}/textarea`}
                   component={require('lazy|./textarea')}/> 
            <Route path={`${match.url}/upload`}
                   component={require('lazy|./upload')}/>    
            <Route component={() => (
                <Redirect push to="/app/demo"/>
            )}/>
        </Switch>
    );
};
