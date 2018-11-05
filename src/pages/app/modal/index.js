import React from 'react';
import {XModal, XBox, XButton} from 'components';

class Dialog extends React.Component{

    render() {
        const {confirm} = this.props;
        return (
            <div className="dialog-demo">
                <XModal.Header {...this.props}>Dialog Header</XModal.Header>
                <XModal.Body>Dialog Body</XModal.Body>
                <XModal.Footer>
                    <XButton onClick={() => {
                        confirm();
                    }}>
                    关闭
                    </XButton>
                </XModal.Footer>
            </div>
        );
    }
};

export default class extends React.Component {


    handleConfirm() {
        XModal.Confirm({size: 'sm', title: 'confirm title', msg: 'confirm message'})
            .then((res) => {console.log(res);}, (res) => {console.log(res);});
    }

    handleDialog() {
        XModal.Dialog(Dialog, {size: 'md'})
            .then(() => {}, () => {});
    }

    render() {
        return(
            <XBox title="模态框-demo">
                <XButton onClick={this.handleConfirm.bind(this)}>Confirm模态框</XButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <XButton onClick={this.handleDialog.bind(this)}>Dialog模态框</XButton>
            </XBox>
        );
    }
}