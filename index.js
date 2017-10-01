function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock){

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if (different > 0){
      return `within range by ${difference}`
    } else {
        return blockRange * something
    }
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
