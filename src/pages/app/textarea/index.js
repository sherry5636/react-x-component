import React, {Component} from 'react';
import {XBox,XTextarea} from 'components';

export default class extends Component {

    state={
        value:''
    }

    render() {
        return[
            <XBox key="textarea" className="demo-textarea" title="textarea-demo">
                <XTextarea placeholder="请输入..." value={this.state.value} onChange={(res)=>{console.log('textarea',res);this.setState({value:res})}}></XTextarea>
            </XBox>,
            <XBox key="textarea-disabled" className="demo-textarea" title="textarea-disabled-demo">
                <XTextarea disabled={true} placeholder="请输入..." value={this.state.value}></XTextarea>
            </XBox>
        ]
    }
}
