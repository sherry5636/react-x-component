import React from 'react';
import {XBox, XInput} from 'components';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return [
            <XBox key="input" title="input-demo">
                <XInput placeholder="请输入..." />
            </XBox>,
            <XBox key="input-disabled" title="input-disabled用法">
                <XInput placeholder="请输入..." disabled={true}/>
            </XBox>
        ];
    }
}
