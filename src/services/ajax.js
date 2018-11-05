import axios from 'axios';
// import $_url from './url';


export default {
    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            // let realParams = $_url.initDel(params);// 过滤参数
            axios.post(`/${url}`, params).then((res) => {
                if (res.status === 200) {
                    switch (res.data.code) {
                        case 100000:
                            resolve(res.data.data);
                            break;
                        default:
                            reject(res.data);
                            break;
                    }
                } else {
                    console.warn(res.status)
                    reject(res.status);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    },
    postMultipart(url, params=new FormData()) {
        return new Promise((resolve, reject) => {
            axios.post(`/${url}`,params).then((res) => {
                if (res.status === 200) {
                    switch (res.data.code) {
                        case 100000:
                            resolve(res.data.data);
                            break;
                        default:
                            reject(res.data);
                            break;
                    }
                } else {
                    console.warn(res.status)
                    reject(res.status);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
