module.exports = {
  plugins: [
    require('postcss-plugin-rpx2vw')({
      viewportWidth: 750,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      unitPrecision: 5,
    })
  ]
}
