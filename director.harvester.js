var harvester = require('./role.harvester');

class DirectorHarvester {
  constructor() {
    this.maxCount = 2
  }

  run() {
    this._removeDeadHarvesters()
    this._maintainHarvesters()
    this._runHarvesters()
  }

  buildHarvester(spawn) {
    var body   = [WORK,CARRY,MOVE,MOVE],
        name   = `h${Memory.harvesters.length + 1}`,
        memory = { memory: { role: 'harvester' } },
        spawn  = Game.spawns[spawn];
    if ( spawn.energy >= 300 && !spawn.spawning ) {
      spawn.spawnCreep(body, name, memory)
      Memory.harvesters.push(name)
    }
  }

  // private

  _runHarvesters() {
    Memory.harvesters.forEach(function(name) {
      var creep = Game.creeps[name];
      harvester.run(creep);
    })
  }

  _maintainHarvesters() {
    if (Memory.harvesters.length < this.maxCount) {
      this.buildHarvester('Spawn1')
    }
  }

  _removeDeadHarvesters() {
    _.remove(Memory.harvesters, function(name) {
      !Game.creeps[name]
    })
  }

}

module.exports = new DirectorHarvester();
