function produceDrivingRange(blockRange) {
  return function(blockRange){
    if blockRange ==
    return blockRange * something
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
