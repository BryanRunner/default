'use strict'

require('./source')

const DirectorHarvester = require('./director.harvester')
const DirectorUpgrader  = require('./director.upgrader')

global.directorHarvester = new DirectorHarvester()
global.directorUpgrader  = new DirectorUpgrader()

// const MAX_HARVESTERS = 2
// const MAX_UPGRADERS  = 2

module.exports.loop = function () {
  if (!Memory.harvesters) Memory.harvesters = []
  if (!Memory.upgraders) Memory.upgraders   = []

  directorHarvester.run()
  directorUpgrader.run()
}
