import React from 'react';
import Component from './src/index';

export default () => {
    return (
        <div className="x-container">
            <div className="x-row">
                <p>组件实现实例</p>
                <Component></Component>
            </div>
            <div className="x-row">
                <p>组件使用代码</p>
                <div className="x-component-code">
                    Code Here
                </div>
            </div>
        </div>
    );
}