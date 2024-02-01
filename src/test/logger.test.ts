import { logger, stdout } from ".."

describe("logger测试", () => {

    it("stdout输出", () => {
        // expect(getExt("a/b.c/d.txt")).toBe(".txt")
        stdout.debug('---stdout---')
    })
    it("logger输出", () => {
        logger.info('---info---')
    })
})