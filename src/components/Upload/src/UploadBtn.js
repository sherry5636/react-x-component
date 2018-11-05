import React from 'react';
import PropTypes from 'prop-types';
import Upload from './Upload';
import {XButton} from 'components';
import './index.scss';

export default class UploadBtn extends React.Component {
    static propTypes = {
        fileType: PropTypes.string,
        url: PropTypes.string.isRequired,
        timeout: PropTypes.number,
        onStart: PropTypes.func,
        onProgress: PropTypes.func,
        onSuccess: PropTypes.func,
        onFail: PropTypes.func,
        uid: PropTypes.string
    };

    static defaultProps = {
        fileType: '*',
        timeout: 3000,
        onProgress: (total, loaded) => {
            console.log(`上传进度:${loaded / total * 100}%`);
        },
        uid: null
    };

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        let uploadDom = this.refs.uploadInput;
        let options = {
            uid: this.props.uid,
            url: this.props.url,
            fileType: this.props.fileType,
            timeout: this.props.timeout,
            header: this.props.header,
            params: this.props.params,
            onBefore: (uid, file) => {
                this.props.onBefore(uid, file);
            },
            onStart: (uid, file) => {
                this.props.onStart(uid, file);
            },
            onProgress: (uid, total, loaded) => {
                this.props.onProgress(uid, total, loaded);
            },
            onSuccess: (uid, res) => {
                this.props.onSuccess(uid, res);
            },
            onFail: (uid, res) => {
                this.props.onFail(uid, res);
            }
        };
        new Upload(uploadDom, options);
    }

    uploadClick() {
        this.refs.uploadInput.click();
    }

    render() {
        return (
            <div className="x-upload-button">
                {
                    this.props.type === 'button' ?
                        <XButton disabled={this.props.disbale} onClick={this.uploadClick.bind(this)}>
                            {
                                this.props.children
                            }
                        </XButton>
                        :
                        <span
                            className="upload-link"
                            disabled={this.props.disbale}
                            onClick={this.uploadClick.bind(this)}>
                            {
                                this.props.children
                            }
                        </span>
                }
                <div ref="uploadInput" className="upload-input"></div>
            </div>
        );
    }
}
