function produceDrivingRange(blockRange) {
  return function(something){
    return blockRange * something
  }
}

function produceTipCalculator(tip){
  return function(tip){
    return tip * .10
  }
}
