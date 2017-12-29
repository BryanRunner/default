const RoomPopulation = require('./room.population')

class RoomDirector {
  constructor(room) {
    console.log('initializing room director')
    this.room       = room
    this.population = new RoomPopulation()
  }
}

module.exports = RoomDirector
