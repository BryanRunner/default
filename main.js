'use strict'

const RoomController = require('./room.controller')

global.roomController = new RoomController()

// const MAX_HARVESTERS = 2
// const MAX_UPGRADERS  = 2

let init = function() {
  console.log('init called')
  Memory.init           = 1
  Memory.roomController = {}
  // Memory.harvesters = []
  // Memory.upgraders  = []
}

module.exports.loop = function () {
  if (!Memory.init) init()
}
