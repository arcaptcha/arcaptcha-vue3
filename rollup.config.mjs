import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/arcaptchaVue3.vue',
    output: [
      {
        format: 'cjs',
        file: 'dist/arcaptcha-vue.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/arcaptcha-vue.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal()
    ]
  }
]