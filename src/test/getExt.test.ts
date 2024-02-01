import { getExt } from ".."

describe("获取文件后缀", () => {

    it("正常获取", () => {
        expect(getExt("a/b.c/d.txt")).toBe(".txt")
    })
    it("无后缀", () => {
        expect(getExt('abc')).toBe(null)
    })
})