'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // HOST: '"http://192.168.164.120:6080"'
  HOST: '"http://111.200.207.244:8060"'
})
