import { randStr, randInt } from ".."
describe("随机字符串", () => {
    it("随机长度", () => {
        const len = randInt()
        const res = randStr(len)
        console.log(len, res)
        expect(res.length).toBe(len)
    })
    it("随机100次", () => {
        let res = new Set()
        for (let i = 0; i < 100; i++) {
            res.add(randStr(20))
        }
        expect(res.size).toBe(100)
    })
})
