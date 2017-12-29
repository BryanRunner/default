var upgrader = require('./role.upgrader');

class DirectorUpgrader {
  constructor() {
    this.maxCount = 2
  }

  run() {
    this._removeDeadUpgraders()
    this._maintainUpgraders()
    this._runUpgraders()
  }

  buildUpgrader(spawn) {
    var body   = [WORK,CARRY,MOVE,MOVE],
        name   = `u${Memory.upgraders.length + 1}`,
        memory = { memory: { role: 'upgrader' } },
        spawn  = Game.spawns[spawn];
    if ( spawn.energy >= 300 && !spawn.spawning && Memory.harvesters.length >= 2 ) {
      spawn.spawnCreep(body, name, memory)
      Memory.upgraders.push(name)
    }
  }

  // private

  _runUpgraders() {
    Memory.upgraders.forEach(function(name){
      var creep = Game.creeps[name];
      upgrader.run(creep)
    })
  }

  _maintainUpgraders() {
    if (Memory.upgraders.length < this.maxCount) {
      this.buildUpgrader('Spawn1')
    }
  }

  _removeDeadUpgraders() {
    _.remove(Memory.upgraders, function(name) {
      !Game.creeps[name]
    })
  }
}

module.exports = new DirectorUpgrader();
