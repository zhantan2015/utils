import { num2Hans } from "..";


describe("数字转汉字(不在范围内)", () => {
    it("负数", () => {
        expect(num2Hans(-1)).toBe("")
    })
    it("大于60", () => {
        expect(num2Hans(61)).toBe("")
    })
})
describe("数字转汉字(10以内)", () => {

    it("0", () => {
        expect(num2Hans(0)).toBe('零')
    })
    it("6", () => {
        expect(num2Hans(6)).toBe('六')
    })
    it("9", () => {
        expect(num2Hans(9)).toBe('九')
    })
    it("10", () => {
        expect(num2Hans(9)).toBe('九')
    })
})

describe("数字转汉字(大于10)", () => {
    it("11", () => {
        expect(num2Hans(11)).toBe("十一")
    })
    it("16", () => {
        expect(num2Hans(16)).toBe("十六")
    })
    it("28", () => {
        expect(num2Hans(28)).toBe('二十八')
    })
    it("60", () => {
        expect(num2Hans(60)).toBe("六十")
    })
})