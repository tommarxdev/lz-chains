
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lz-chains.cjs.production.min.js')
} else {
  module.exports = require('./lz-chains.cjs.development.js')
}
