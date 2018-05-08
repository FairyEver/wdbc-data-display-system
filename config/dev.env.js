'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: '"http://192.168.164.120:6080"'
  // HOST: '"http://10.1.1.132:666"'
  // HOST: '"http://test.world-tech.com.cn:8060"'
})
