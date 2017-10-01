function produceDrivingRange(blockRange) {
  return function(something){
    return blockRange * something
  }
}

function produceTipCalculator(something){
  return function(something){
    return something
  }
}
