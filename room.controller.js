const DirectorHarvester = require('./director.harvesters')
const DirectorUpgrader  = require('./director.upgraders')

const RoomDirector = require('./room.director')

class RoomController {
  constructor() {
    console.log('initializing room controller')
    this.roomDirectors = []
    this.roomCount     = 0
    // this.memory           = Memory.roomController
    // this.memory.roomCount = 0
    this.buildRoomDirectors()
  }

  buildRoomDirectors() {
    for (let name in Game.rooms) {
      let room         = Game.rooms[name]
      let roomDirector = new RoomDirector(room)
      this.roomDirectors.push(roomDirector)
      this.roomCount++
    }
  }

  run() {

  }
}

module.exports = RoomController
