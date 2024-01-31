import { randInt } from ".."

describe("生成随机整数", () => {
    it("随机50000次", () => {
        const res = [0, 0]
        const size = 50000
        for (let i = 0; i < size; i++) {
            res[randInt(1, 2) - 1]++
        }
        console.log(res)
        expect(Math.abs(res[0] - res[1])).toBeLessThanOrEqual(size / 100)
    })
    it("min大于max", () => {
        expect(() => randInt(2, 1)).toThrow("min必须小于max")
    })
})