function produceDrivingRange(max){
  return function blockRange(start, finish){
    dist = Math.abs(parseInt(finish) - parseInt(start))
    if (dist > max){
      over = dist - max
      return `${over}` + "blocks out of range"
    }
    else {
      trip = max - dist
      return "within range by" + `${trip}`
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