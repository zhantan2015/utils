import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
export default {
    input: 'src/index.ts',
    output: {
        file: "dist/index.js"
    },
    plugins: [
        clear({ targets: ["dist"] }),
        typescript({ tsconfig: "./tsconfig.json" }),
    ]
};
