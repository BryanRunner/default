var roleUpgrader = {

    run: function(creep) {
      this.setStatus(creep)
      let status = creep.memory.status
      if (status == 1) {
        this.harvest(creep)
      } else {
        this.upgrade(creep)
      }
    },

    harvest: function(creep) {
      let sources = creep.room.find(FIND_SOURCES);
      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0]);
      }
    },

    upgrade: function(creep) {
      if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
      }
    },

    setStatus: function(creep) {
      if (creep.memory.status == 0) {
        creep.memory.status = 1
      } else if (creep.carry.energy != creep.carryCapacity && creep.memory.status != 2) {
        creep.memory.status = 1
      } else if (creep.carry.energy == 0 && creep.memory.status == 2) {
        creep.memory.status = 1
      } else if (creep.carry.energy == creep.carryCapacity && creep.memory.status == 1) {
        creep.memory.status = 2
      }
    },
}

module.exports = roleUpgrader;

// status: 0, 1, 2
// 0 = idle
// 1 = harvesting
// 2 = upgrading

// harvest when empty
// upgrade when
