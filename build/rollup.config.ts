import typescript from "rollup-plugin-typescript2";
import VuePlugin from "rollup-plugin-vue";
import pkg from "../package.json";

export default {
  input: "src/index.ts",
  plugins: [
    typescript({
      tsconfig: "tsconfig.build.json",
      useTsconfigDeclarationDir: true
    }),
    VuePlugin()
  ],
  output: [
    {
      file: pkg.module,
      format: `esm`
    },
    {
      file: pkg.main,
      format: `cjs`
    }
  ]
};
