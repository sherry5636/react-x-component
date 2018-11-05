import React, {Component} from 'react';
import {XBox,XUploadBtn} from 'components';

export default class extends Component {

    state={
        imgUrl1:''
    }

    onUploadBefore(res,er){
        console.log('before',res,er)
    }

    onUploadStart(res){
        console.log('start',res)
    }

    onUploadProgress(res,total,loaded){
        console.log('start',res,total,loaded)
    }

    onUploadSuccess(res){
        console.log('success',res)
    }

    onUploadFail(){

    }

    render() {
        return[
            <XBox key="upload" className="demo-upload" title="upload-demo">
                <div className="img-box">
                    <p>
                        <img src={this.state.imgUrl1} />
                    </p>
                </div>
                <XUploadBtn
                    url="/demo/upload"
                    timeout={20000}
                    type="button"
                    onBefore={this.onUploadBefore.bind(this)}
                    onStart={this.onUploadStart.bind(this)}
                    onProgress={this.onUploadProgress.bind(this)}
                    onSuccess={this.onUploadSuccess.bind(this)}
                    onFail={this.onUploadFail.bind(this)}
                >
                    图片上传
                </XUploadBtn>
            </XBox>
        ]
    }
}
