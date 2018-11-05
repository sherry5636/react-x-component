/**
 * name: Upload.js
 * desc: 上传功能组件，底层封装
 */
/*
@Upload
@element:dom元素
@opts:参数对象，包括：url,timeout,header,onSuccess,onFail,onProgress,onStart,onBefore,key,fileType
 */
let Upload = function (element, opts) {
    this.element = element;
    this.option = opts;
    this.init();
};

function setAttr(dom, attName, attValue) {
    dom.setAttribute(attName, attValue);
};

Upload.prototype.upload = function (files) {
    // 设置formData
    let formData = new FormData();
    for (let k in files) {
        formData.append('file', files[k], window.encodeURI(files[k].name));
    }
    // 设置XHR
    let xhr = new XMLHttpRequest();
    xhr.open('POST', this.option.url, true);
    // 设置头部
    if (this.option.header && Object.keys(this.option.header).length > 0) {
        for (let key in this.option.header) {
            xhr.setRequestHeader(key, this.option.header[key]);
        }
    }
    // 设置超时
    xhr.timeout = this.option.timeout;

    // 开始发起请求
    xhr.addEventListener('loadstart', (e) => {
        this.option.onStart(this.uid, files);
    });
    // 上传过程事件，用于表示进度
    xhr.upload.addEventListener('progress', (e) => {
        this.option.onProgress(this.uid, e.total, e.loaded);
    });
    // 请求成功，返回请求结果
    xhr.addEventListener('load', (e) => {
        if (xhr.status === 200) {
            this.option.onSuccess(this.uid, JSON.parse(xhr.response));
        } else {
            this.option.onFail(this.uid, {code: 1003, msg: '请求失败'});
        }
    }, false);
    // 请求超时
    xhr.addEventListener('timeout', (e) => {
        this.option.onFail(this.uid, {code: 1001, msg: '上传超时'});
    });
    // 请求出错
    xhr.addEventListener('error', (e) => {
        this.option.onFail(this.uid, {code: 1002, msg: '网络出错'});
    }, false);

    // 传其他参数
    if (this.option.params && Object.keys(this.option.params).length > 0) {
        for (let paramsKey in this.option.params) {
            formData.append(paramsKey, this.option.params[paramsKey]);
        }
    }
    xhr.send(formData);
};

Upload.prototype.select = function (e) {
    // 获取文件file
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.option.onBefore(this.uid, files);
    this.upload(files);
    setAttr(e.target, 'type', 'text');
};

Upload.prototype.init = function () {
    let dom = document.createElement('input');
    dom.className = 'upload-input';
    dom.addEventListener('change', this.select.bind(this), false);
    setAttr(dom, 'accept', this.option.fileType);
    this.element.addEventListener('click', () => {
        setAttr(dom, 'type', 'file');
        this.uid = this.option.uid || new Date().getTime();
        dom.click();
    }, false);
    this.element.appendChild(dom);
};

export default Upload;
