import Mock from 'mockjs';

export default{
    "code":100000,
    "data":{
        "currPage":'1', //当前页
        "pageSize":10, //每页显示条数
        "totalPage":3, //总页数
        "totalRecord":30, //总记录数
        "recordList":[
            {
                "name": Mock.Random.string(5),
                "time": "2018-10-29",
                "address": "名创优品11",
            }
        ]
    },
    "msg": "success"
}