import { ApiResult } from "..";

type apiResultBody = {
    msg: string
    type: string
    data?: {} | []
}

describe("测试api响应数据", () => {
    it("success", () => {
        new ApiResult().success("成功!", (body: apiResultBody) => {
            expect(body).toEqual({ msg: "成功!", type: "success" })
        })
    })
    it("failed", () => {
        new ApiResult().failed("失败!", (body: apiResultBody) => {
            expect(body).toEqual({ msg: "失败!", type: "failed" })
        })
    })
    it("error", () => {
        new ApiResult().error("错误!", (body: apiResultBody) => {
            expect(body).toEqual({ msg: "错误!", type: "error" })
        })
    })
    it("setData", () => {
        const data = { a: 1, b: 2 }
        new ApiResult().setData(data).success("setdata", (body: apiResultBody) => {
            expect(body.data).toEqual(data)
        })
    })
})