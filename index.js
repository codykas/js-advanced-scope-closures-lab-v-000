function produceDrivingRange(blockRange){
  return function(start, finish){
    const dist = Math.abs(parseInt(finish) - parseInt(start))
    if (dist <= blockRange){
      return `within range by ${blockRange - dist}`
    } else {
      return `${dist - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function tip(fare){
    return fare * percentage
  }
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
