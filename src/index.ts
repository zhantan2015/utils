/**
 * 0-60 数字转汉字
 * @param num {number} [0,60]之间
 * @returns {string} 汉字结果
 */
export function num2Hans(num: number): string {
    // 不在范围内
    if (num < 0 || num > 60)
        return ""

    const shuzi = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]

    // 十以内
    if (num <= 10)
        return num === 10 ? "十" : shuzi[num]

    // 大于十
    const tens = Math.floor(num / 10)
    if (tens !== 1 && tens * 10 !== num)
        // 一般情况
        return shuzi[tens] + "十" + shuzi[num - tens * 10]
    if (tens === 1)
        // 11 ~ 19
        return "十" + shuzi[num - tens * 10]
    if (tens * 10 === num)
        // 整十
        return shuzi[tens] + "十"
}

/**
 * 生成[min,max]之间的随机整数
 * @param min {number} 最小值,向上取整
 * @param max {number} 最大值,向下取整
 * @returns {number} 整数结果
 */
export function randInt(min: number = 1, max: number = 20): number {
    min = Math.round(min)
    max = Math.floor(max)
    if (min > max) throw new Error("min必须小于max")
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 随机字符串
 * @param len {number} 随机字符串长度
 * @returns {string} 字符串
 */
export function randStr(len: number): string {
    let res = (new Date().getTime() + Math.random()).toString(36).replace(".", "")
    while (res.length < len)
        res += (new Date().getTime() + Math.random()).toString(36).replace(".", "")

    return res.length == len ? res : res.slice(0, len)
}