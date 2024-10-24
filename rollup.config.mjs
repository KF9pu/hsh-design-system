import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

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
  plugins: [resolve(), commonjs(), typescript()],
  external: ["react", "react-dom"], // 외부 의존성 제외
};
