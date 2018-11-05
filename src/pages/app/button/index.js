import React, {Component} from 'react';
import {XBox,XButton} from 'components';

export default class extends Component {

    render() {
        return[
            <XBox key="button" className="demo-button" title="按钮-demo">
                <h4>常规状态</h4>
                <div className="item">
                    <XButton>默认按钮</XButton>
                    <XButton type="primary">确认按钮</XButton>
                    <XButton type="warning">警告按钮</XButton>
                </div>
                <h4>禁用状态</h4>
                <div className="item">
                    <XButton disabled>默认按钮</XButton>
                    <XButton type="primary" disabled>确认按钮</XButton>
                    <XButton type="warning" disabled>警告按钮</XButton>
                </div>
                <h4>尺寸大小</h4>
                <div className="item">
                    <XButton size="sm">默认按钮</XButton>
                    <XButton type="primary" size="sm">确认按钮</XButton>
                    <XButton type="warning" size="sm">警告按钮</XButton>
                    {/* 表格使用 */}
                    <XButton size="xs">默认按钮</XButton>
                    <XButton type="primary" size="xs">确认按钮</XButton>
                    <XButton type="warning" size="xs">警告按钮</XButton>
                </div>
            </XBox>
        ]
    }
}
