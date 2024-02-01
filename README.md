# @zhantan2015/utils
这是一个自用的 [node.js](https://nodejs.org) 工具模块。

## 安装

npm：
```bash
$ npm install @zhantan2015/utils
```
yarn：
```bash
$ yarn add @zhantan2015/utils
```
pnpm：
```bash
$ pnpm add @zhantan2015/utils
```

## 使用

```js
import { randInt, randStr, num2Hans } from "@zhantan2015/utils";
const rInt = randInt(10, 10)

console.log(rInt) // 10
console.log(randStr(rInt)) // 长度为10的随机字符串
console.log(num2Hans(rInt)) // "十"
```