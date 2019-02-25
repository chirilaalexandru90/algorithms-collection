class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

// let square = new Square(2);

function Circle(x, y, radius) {
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.calculateArea = function() {
    return radius * radius * Math.PI;
  }
}
// const c1 = new Circle(1, 2, 3);
// console.log(c1);

/////////////////////////////

function Circle2(radius) {
  this.radius = radius;

  let defaultLocation = {x: 0, y: 0};

  this.draw = function() {
    console.log('draw');
  }

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(x, y) {
      if(typeof(x) == 'number' && typeof(y) == 'number') {
        this.x = x;
        this.y = y;
      } else throw new Error('Define x and y as type numbers')
    }
  })
}

const circle2 = new Circle2(2);
circle2.defaultLocation.x = 1;
circle2.defaultLocation.y = 1;

/////////////////////////////

function StopWatch() {
  started = false;
  duration = 0;
  this.totalDuration = 0;
  startDate = 0;
  stopDate = 0;

  this.start = function() {
    if(started == true) {
      console.log('Already started')
    } else {
      started = true;
      startDate = new Date();
      console.log(`Started at`, new Date());
    }
  }
    
  this.stop = function() {
    if(started == false) {
      console.log('Start the stopwatch')
    } else {
      started = false;
      endDate = new Date();
      duration = (endDate - startDate)/1000;
      this.totalDuration += duration;
      console.log(`${this.totalDuration} seconds at`, new Date());
    }
  }

  this.reset = function() {
    this.totalDuration = 0;
    duration = 0;
    started = false;
    startDate = 0;
    stopDate = 0;
  }
}