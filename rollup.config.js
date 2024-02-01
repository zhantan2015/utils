import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
export default {
    input: 'src/index.ts',
    output: {
        dir: "dist",
        name: "ztUtils",
        format: "umd",
        globals: {
            log4js: "log4js"
        }
    },
    plugins: [
        clear({ targets: ["dist"] }),
        typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: [
        "log4js"
    ]
};
