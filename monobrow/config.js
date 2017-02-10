// monobrow config
module.exports = {
  entry: 'src/index.js',
  output: {
    dir: 'dist',
    bundle: 'index.js'
  },
  packs: [
    require('monobrow-cmz-pack')
  ]
}
