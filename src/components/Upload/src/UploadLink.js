import React from 'react';
import XUpload from './Upload';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            fileKeyList: []
        };
    }

    setUploadRef(ref) {
        this.setState({
            uploadRef: ref
        });
    }

    uploadBtnClick() {
        if (this.props.filekey) {
            // 有filekey属性，说明是重传
            this.state.uploadRef.triggerClick(this.props.filekey);
        } else {
            this.state.uploadRef.triggerClick(new Date().getTime());
        }
    }

    before(key, data) {
        this.props.onBefore(key, data);
    }

    started(key, data) {
        this.props.onStarted(key, data);
    }

    finished(key, res, data) {
        this.props.onFinished(key, res, data);
    }

    error(key, data) {
        this.props.onError(key, data);
    }

    render() {
        return (
            <div className="x-upload-btn">
                <span className="upload-link" disabled={this.props.disbale}
                      onClick={this.uploadBtnClick.bind(this)}>重新上传</span>
                <XUpload
                    beforeupload={this.before.bind(this)}
                    uploadstarted={this.started.bind(this)}
                    uploadfinished={this.finished.bind(this)}
                    uploaderror={this.error.bind(this)}
                    onRef={this.setUploadRef.bind(this)}
                    url={"http://39.107.192.253/bcdata/v1/member/upload"}
                />
            </div>
        );
    }
}
