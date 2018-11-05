import React from 'react';
import PropTypes from 'prop-types';
import {$_ajax} from 'services';
import {XPagination} from 'components';
import './index.scss';

class OrderArea extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isUp: false,
            isDown: false,
            isSelected: false
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.keyCode !== newProps.orderName) {
            // 如果选中的排序选项不是需要排序的那一列,则需要重置排序的显示样式
            this.setState({
                isUp: false,
                isDown: false
            });
        }
    }

    upClick() {
        console.log('up')
        this.setState({
            isUp: !this.state.isUp,
            isDown: false
        }, () => {
            this.props.onOrderChange({
                type: this.state.isUp ? 'up' : null,
                key: this.props.keyCode
            });
        });

    }

    downClick() {
        console.log('down')
        this.setState({
            isUp: false,
            isDown: !this.state.isDown
        }, () => {
            this.props.onOrderChange({
                type: this.state.isDown ? 'down' : null,
                key: this.props.keyCode
            });
        });

    }

    render() {
        return (
            <div className="order-box">
                <div className={this.state.isUp ? `order-up selected` : `order-up`}
                     onClick={this.upClick.bind(this)}></div>
                <div className={this.state.isDown ? `order-down selected` : `order-down`}
                     onClick={this.downClick.bind(this)}></div>
            </div>
        );
    }
}

export default class extends React.Component {
    static propTypes = {
        tableConf: PropTypes.array,
        url: PropTypes.string,
        urlParams: PropTypes.object,
        dataList: PropTypes.array,
        className: PropTypes.string
    };

    static defaultProps = {
        tableConf: [],
        url: '',
        dataList: [],
        urlParams: {},
        className: ''
    };

    constructor(props) {
        super(props);
    }

    state = {
        dataList: this.props.dataList,
        urlParams: Object.assign({currPage: 1, pageSize: 10}, this.props.urlParams),
        totalRecord: 0,
        orderName: '',
        orderType: ''
    };

    componentDidMount() {
        if (this.props.url !== '') {
            // url不为空，则为异步请求
            // this.getListData(this.state.urlParams);
            this.getListData();
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            urlParams: Object.assign({currPage: 1, pageSize: 10}, newProps.urlParams),
            dataList: newProps.dataList
        }, () => {
            if (newProps.url !== '') {
                this.getListData();
            }
        });
    }

    getListData(key, sortType) {
        let params = this.state.urlParams,
            type = sortType === 'up' ? 1 : sortType === 'down' ? 0 : null;
        key ? params = Object.assign(params, {sequenceBy: this.props.sequenceMap[key], sequence: type}) : null;
        $_ajax.post(this.props.url, params)
            .then((res) => {
                this.setState({
                    dataList: res.recordList || res || [],
                    currPage: res.currPage || 1,
                    pageSize: res.pageSize || 10,
                    totalPage: res.totalPage || 0,
                    totalRecord: res.totalRecord || 0,
                });
            }, (res) => {
                // $_toast(res.msg);
                console.log(res.msg)
            });
    }

    render() {
        const {tableConf, arrKey} = this.props;
        const {dataList} = this.state;
        let noPager = this.props.noPager;
        let tableCls = `${this.props.className} x-table-wrapper`;
        return (
            [
                <div key="table" className={tableCls}>
                    <table className="x-table-view">
                        <thead>
                            <tr>
                                {tableConf.map((item, index) => {
                                    let tdAlign = item.align ? item.align : 'left';
                                    return (
                                        <th key={`${arrKey}${index}`} style={{textAlign: tdAlign}}>
                                            {item.name}
                                            {
                                                item.isOrder &&
                                                <OrderArea
                                                    keyCode={item.key}
                                                    orderName={this.state.orderName}
                                                    orderType={this.state.orderType}
                                                    onOrderChange={(res) => {
                                                        this.getListData(res.key, res.type);
                                                        this.setState({
                                                            orderName: res.key,
                                                            orderType: res.type
                                                        });
                                                    }}/>
                                            }
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map((item, index) => {
                                return (
                                    <tr key={`${item.id}`} key={`tableItem_${index}`}>
                                        {tableConf.map((itemKey, indexKey) => {
                                            let tdAlign = itemKey.align ? itemKey.align : 'left';
                                            return (
                                                <td key={`${arrKey}${indexKey}`} style={{textAlign: tdAlign}}>
                                                    {
                                                        itemKey.render ? itemKey.render(item) : item[itemKey['key']]
                                                    }
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>,
                noPager ? '' : <div className="table-pagination" key="tablePage">
                    <span className="total-info">共{this.state.totalRecord}条</span>
                    <XPagination
                        count={this.state.totalRecord}
                        currentPage={this.state.currPage}
                        perPage={this.state.pageSize}
                        onPageChange={(res) => {
                            let oldParams = this.state.urlParams;
                            let newParams = Object.assign(oldParams, {currPage: res});
                            this.setState({
                                urlParams: newParams
                            }, () => {
                                this.getListData();
                                this.props.onPageChange && this.props.onPageChange(newParams);
                            });
                        }}
                        onSizeChange={(size) => {
                        }}
                    />
                </div>
            ]
        );
    }
}

