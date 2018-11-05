import React, {Component} from 'react';
import {XBox,XTable} from 'components';

export default class extends Component {

    tableConf=[
        {name: '姓名', key: "name"},
        {name: '时间', key: "time", isOrder: true,},
        {name: '地点', key: "address"},
        {name: '操作', key: "",render:()=><a>编辑</a>}
    ];

    onPageChange(){

    }

    render() {
        return[
            <XBox key="table" className="demo-table" title="table-demo">
                <XTable tableConf={this.tableConf}
                               onPageChange={this.onPageChange.bind(this)}
                               dataList={[{name:'111',time:'2018-10-29',address:'融科资讯中心A座'}]}
                               urlParams={{
                                   
                               }}
                               sequenceMap = {{'time': ''}}
                               />
            </XBox>,
            <XBox key="ansyc-table" className="demo-table" title="ansyc-table-demo">
                <XTable tableConf={this.tableConf}
                                url="aaaa/bbbb/cccc"
                                onPageChange={this.onPageChange.bind(this)}
                                urlParams={{
                                    
                                }}
                                sequenceMap = {{'time': ''}}
                                />
        </XBox>
        ]
    }
}
