import React, {Component} from 'react';
import {XBox, XGrid} from 'components';

export default class extends Component {

    render() {
        return[
            <XBox key="box1" title="box-title-demo">常规box</XBox>,
            <XBox key="box2" title="box-title-nopadding-demo" noPadding={true}>
                <span>没有padding的box，支持自定义样式</span>
            </XBox>,
            <XBox key="box3" title="box-title-demo" type="primary">primary-border-box</XBox>,
            <XBox key="box4" title="box-title-demo" type="info">info-border-box</XBox>,
            <XBox key="box5" title="box-title-demo" type="success">success-border-box</XBox>,
            <XBox key="box6" title="box-title-demo" type="warning">warning-border-box</XBox>,
            <XBox key="box7" title="box-title-demo" type="danger">danger-border-box</XBox>
        ]
    }
}
