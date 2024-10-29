import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import path from "path";

export default {
  input: "src/index.ts", // 모듈의 진입점
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS 포맷
      exports: "named",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Module 포맷
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: path.resolve("dist/theme.css"),
    }),
  ],
  external: ["react", "react-dom"], // 외부 의존성 제외
};
