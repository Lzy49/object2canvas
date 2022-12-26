import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
export default {
  input: './src/index.ts', // 入口
  output: [ // 出口 
    {
      format: "es",
      file: pkg.module
    }
  ],
  plugins: [
    typescript(), // 编译ts 
    commonjs(),
  ]
}