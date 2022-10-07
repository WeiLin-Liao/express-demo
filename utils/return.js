/**
 * @ Author: WeiLin
 * @ Email: weilin-liao@qq.com
 * @ Create Time: 2022-07-29 10:23:56
 * @ Modified by: WeiLin
 * @ Modified time: 2022-07-29 13:09:51
 * @ Description:
 */

const obj = {
    code: 200,
    msg: '',
    data: []
}

class $returnMsg {
    _return () {
        return [obj]
    }
    static success (data) {
        obj['data'] = data
        return new $returnMsg()._return()
    }

    static error () {
        obj['code'] = 100
        return new $returnMsg()._return()
    }
}

module.exports = $returnMsg