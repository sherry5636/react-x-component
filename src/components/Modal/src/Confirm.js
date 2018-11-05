import React from 'react';
import {XButton} from '../../index';
import classnames from 'classnames';

import Dialog from './Dialog';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Confirm(props) {

    const {data, confirm, cancel} = props;

    return (
        <div className="modal-confirm">
            <Header key="Header" {...props}></Header>
            <Body key="Body">
                <h4 className="confirm-title">
                    {data.title}
                </h4>
                <div className="confirm-msg">{data.msg}</div>
            </Body>
            <Footer key="Footer">
                <XButton type={data.CancelType} size={data.btnSzie} onClick={() => {
                    cancel();
                }}>{data.cancelText}</XButton>
                <XButton type={data.ConfirmType} size={data.btnSzie} onClick={() => {
                    confirm();
                }}>{data.confirmText}</XButton>
            </Footer>
        </div>
    );
}

export default (opt = {}) => {

    let _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: classnames('x-modal-confirm', opt.className),
        data: {
            title: opt.title || '系统提示', //标题
            titleIcon: opt.titleIcon || '', //标题的图标
            msg: opt.msg || '您确定要执行此操作吗？', //内容
            ConfirmType: opt.ConfirmType || 'primary', //确认框类型
            CancelType: opt.CancelType || 'default', //取消按钮类型
            btnSzie: opt.btnSzie || 'md', //按钮大小
            confirmText: opt.confirmText || '确定', //确认按钮文案
            cancelText: opt.cancelText || '取消', //取消按钮文案
            confirmIcon: opt.confirmIcon || 'check', //确认按钮图标
            cancelIcon: opt.cancelIcon || 'close',  //取消按钮图标
            tipsIcon: opt.tipsIcon || 'question' //提示icon
        }
    };

    return Dialog(Confirm, _opt)
}
