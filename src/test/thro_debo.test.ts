import { throttled, debounce } from ".."

describe("节流和防抖", () => {

    let fun: Function, delay: number

    beforeEach(() => {
        jest.useFakeTimers()
        fun = jest.fn()
        delay = 1000
    })

    afterEach(() => {
        jest.clearAllMocks()
        jest.clearAllTimers()
    })


    it("测试节流(执行一次，停顿后再执行一次)", () => {
        const throFun = throttled(fun)
        throFun()
        jest.advanceTimersByTime(delay)
        throFun()
        jest.advanceTimersByTime(delay - 100)
        expect(fun).toHaveBeenCalledTimes(2)
    })

    it("测试节流(连续执行10次)", () => {
        const throFun = throttled(fun, delay)
        for (let i of new Array(10)) {
            throFun()
        }
        jest.advanceTimersByTime(delay)
        expect(fun).toHaveBeenCalledTimes(2)
    })
    it("测试节流(连续执行10次,关闭立即执行)", () => {
        const throFun = throttled(fun, delay, false)
        for (let i of new Array(10)) {
            throFun()
        }
        jest.advanceTimersByTime(delay * 2)
        expect(fun).toHaveBeenCalledTimes(1)
    })
    it("测试节流(连续执行5次停顿后再执行5次)", () => {
        let throFun = throttled(fun, delay, false)
        for (let i of new Array(5)) {
            throFun()
        }
        jest.advanceTimersByTime(delay)
        for (let i of new Array(5)) {
            throFun()
        }
        jest.advanceTimersByTime(delay)
        expect(fun).toHaveBeenCalledTimes(2)
    })
    it("测试防抖(快速执行10次)", () => {
        const deboFun = debounce(fun)
        for (let i of new Array(10)) {
            deboFun()
            jest.advanceTimersByTime(delay - 100)
        }
        jest.advanceTimersByTime(delay)
        expect(fun).toHaveBeenCalledTimes(1)
    })

    it("测试防抖(快速执行10次,开启立即执行)", () => {
        const deboFun = debounce(fun, delay, true)
        for (let i of new Array(10)) {
            deboFun()
            jest.advanceTimersByTime(delay - 100)
        }
        jest.advanceTimersByTime(delay)
        expect(fun).toHaveBeenCalledTimes(2)
    })
    it("测试防抖(快速执行5次,停顿后再快速执行5次)", () => {
        const deboFun = debounce(fun, delay)
        for (let i of new Array(5)) {
            deboFun()
            jest.advanceTimersByTime(delay - 100)
        }
        jest.advanceTimersByTime(delay)
        for (let i of new Array(5)) {
            deboFun()
            jest.advanceTimersByTime(delay - 100)
        }
        jest.advanceTimersByTime(delay)
        expect(fun).toHaveBeenCalledTimes(2)
    })
})
