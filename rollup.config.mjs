import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/main.js',
    output: {
      format: 'esm',
      file: 'dist/arcaptcha-vue3.esm.js'
    },
    plugins: [
      vue(), peerDepsExternal()
    ]
  },
  // SSR build.
  {
    input: 'src/main.js',
    output: {
      format: 'cjs',
      file: 'dist/arcaptcha-vue3.ssr.js'
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }), peerDepsExternal()
    ]
  },
]