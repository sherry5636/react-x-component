import React from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
export default class extends React.Component {

    render() {
        const {data, location, key, match} = this.props;

        let currentColor = location.pathname === match.url + data.codeName ? 'active' : null;

        return (
            <li key={data.id} className={`menu-item ${currentColor}`} onClick={()=>{
                this.props.history.$push(match.url + data.codeName);
            }}>
                <a  >
                    {
                        data.icon ? <i className={`fa fa-${data.icon} icon-left`}></i>  : null
                    }
                    <span className="name">{data.name}</span>
                </a>
            </li>
        )
    }

}
