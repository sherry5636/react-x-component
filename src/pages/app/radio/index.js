import React from 'react';
import {XBox,XRadio} from 'components';

export default class extends React.Component {

    state = {
        checked: 1
    }

    handleClick(item,isChecked){
        console.log('aa',item,isChecked)
    }

    render() {
        return[
            <XBox key="radio" className="radio-button" title="radio-demo">
                <XRadio
                    options={[{value: 0, label: '选择1'}, {value: 1, label: '选择2'}, {value: 2, label: '选择3'}]}
                    selected={this.state.checked}
                    disableOpts={[0]}
                    onChange={(res) => {
                    this.setState({
                        checked: res
                    });
                    }}/>
            </XBox>
        ]
    }
}
