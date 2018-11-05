import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';
import {$_menu} from 'services';
import MenuItem from './menu_item';
import MenuTree from './menu_tree';

export default class extends React.Component {
    static propTypes = {

    }

    static defaultProps = {}


    render() {
        return (
            <aside className="x-sidebar">
                <ul className="sidebar-menu">
                    {
                        $_menu.menuList.map((item)=>{
                            return item.children.length === 0 ? <MenuItem data={item} key={item.id} /> :
                                <MenuTree data={item} key={item.id}/>
                        })
                    }
                </ul>
            </aside>
        );
    }
}