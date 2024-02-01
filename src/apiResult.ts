
/**
 * @class
 * @classdesc 用于生成api响应数据的类
 */
export class ApiResult {
    body: {
        type: string,
        msg: string,
        data?: {} | []
    }
    constructor() {
        this.body = {
            type: "",
            msg: ""
        }
    }

    /**
     * 一个成功的响应，用于成功处理请求
     * @param msg {string} 返回的msg消息
     * @param fn {Function} 用于向客户端响应的回调函数
     * @example new ApiResult().success("登录成功!",data=>res.send(data))
     */
    success(msg: string, fn: Function) {
        this.body.type = "success"
        this.next(msg, fn)
    }

    /**
     * 一个失败的响应，用于客户端错误
     * @param msg {string} 返回的msg消息
     * @param fn {Function} 用于向客户端响应的回调函数
     */
    failed(msg: string, fn: Function) {
        this.body.type = "failed"
        this.next(msg, fn)
    }

    /**
     * 一个错误的响应，用于服务端错误
     * @param msg {string} 返回的msg消息
     * @param fn {Function} 用于向客户端响应的回调函数
     */
    error(msg: string, fn: Function) {
        this.body.type = "error"
        this.next(msg, fn)
    }

    /**
     * 向响应体中添加data数据
     * @param data {{}}|[]} 携带的数据
     * @returns {ApiResult} 返回当前实例，用于链式调用
     */
    setData(data: {} | []): ApiResult {
        this.body.data = data
        return this
    }

    private next(msg: string, fn: Function) {
        this.body.msg = msg
        fn(this.body)
    }
}