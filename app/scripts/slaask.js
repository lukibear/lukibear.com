/*!
 * slaask.js
 * Created by Kilian Ciuffolo on Feb 23, 2016
 * (c) 2016 lukibear https://lukibear.com
 */

'use strict'

var $ = require('jquery')

function setupSlaask () {
  $(window).one('load', function () {
    /* global _slaask */
    _slaask.init('d396d9113e4cd13fd5d12ade9cbc6c69')
  })
}

module.exports = setupSlaask