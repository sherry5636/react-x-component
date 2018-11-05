import React, {Component} from 'react';
import {XBox,XSelector} from 'components';

export default class extends Component {

    state = {
        defaultValue: 1
    }

    render() {
        return[
            <XBox key="selector" title="下拉框-demo">
                <XSelector options={[{value: 1, label: '选择1'}, {value: 2, label: '选择2'}, {value: 3, label: '选择3'}]}
                            defaultValue={this.state.defaultValue}
                            onChange={(res) => {
                                console.log(res);
                            }}></XSelector>
            </XBox>
        ]
    }
}
