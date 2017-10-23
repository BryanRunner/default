var directorHarvester = require('./director.harvester');
var directorUpgrader = require('./director.upgrader');

module.exports.loop = function () {
    if (!Memory.harvesters) Memory.harvesters = []
    if (!Memory.upgraders) Memory.upgraders = []
    directorUpgrader.run()
    directorHarvester.run()
}
