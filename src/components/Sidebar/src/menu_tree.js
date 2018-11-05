import React from 'react';
import {withRouter} from 'react-router-dom';
import MenuItem from './menu_item';

@withRouter
export default class extends React.Component {

    state={
        isToggle : true
    }

    render() {

        const {location, data, onClick, nowId, match} = this.props;
        const {isToggle} = this.state;
        let _h = data.children.length * 50;

        return (
            <li className={`treeview ${this.state.isToggle ? 'menu-open' : ''}`}>
                <a className={`tree-header`} onClick={()=>{
                    this.setState({isToggle: !isToggle})
                }}>
                    {
                        data.icon ? <i className={`fa fa-${data.icon} icon-left`}></i>  : null
                    }
                    <span> {data.name}</span>
                    <i className="fa fa-angle-left pull-right"></i>
                </a>
                <ul className="treeview-menu" style={{height: `${this.state.isToggle ? _h : 0}px`}}>{
                    data.children.map((item,index) => {
                        return (<MenuItem key={item.id} parent={data} data={item} icon={'circle-o'}/>);
                    })
                }</ul>
            </li>
        )
    }
}
