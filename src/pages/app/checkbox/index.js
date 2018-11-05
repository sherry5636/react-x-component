import React from 'react';
import {XBox,XCheckbox} from 'components';

export default class extends React.Component {

    state = {
        checked: 1
    }

    handleClick(item,isChecked){
        console.log('aa',item,isChecked)
    }

    render() {
        return[
            <XBox key="checkbox" className="checkbox-button" title="checkbox-demo">
                <XCheckbox
                    data={{label: '选择一', value: 1}}
                    isChecked={this.state.checked === 1 ? true : false}
                    type={"inverse"}
                    disabled={true}
                    onChange={::this.handleClick}/>
                <XCheckbox
                    data={{label: '选择二', value: 2}}
                    isChecked={this.state.checked === 2 ? true : false}
                    type={"inverse"}
                    disabled={false}
                    onChange={::this.handleClick}/>
            </XBox>
        ]
    }
}
