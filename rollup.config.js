import fs from 'fs'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const packageJson = JSON.parse(fs.readFileSync('./package.json'))
const license = fs.readFileSync('./license.txt', { encoding: 'utf8' })

export default {
  input: 'src/jsts.js',
  output: {
    file: 'dist/jsts.js',
    format: 'umd',
    name: 'jsts',
    banner: license,
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      npm_package_version: packageJson.version,
      // preventAssignment: true
    }),
    terser()
  ]
}
