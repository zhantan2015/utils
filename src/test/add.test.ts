import { add } from '../index'

describe("测试add函数", () => {
    it("1+2=3", () => {
        expect(add(1, 2)).toBe(3)
    })
})