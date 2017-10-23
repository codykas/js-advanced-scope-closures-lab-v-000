function produceDrivingRange(blockRange){
  return function (start, finish){
    let dist = Math.abs(parseInt(finish) - parseInt(start))
    if (dist <= range){
      return `within range by ${range - distance}`
    } else {
      return `${dist - range} blocks out of range`
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
