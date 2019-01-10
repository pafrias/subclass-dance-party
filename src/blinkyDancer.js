var BlinkyDancer = function(timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  this._speed = timeBetweenSteps;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.startDance(this._speed);
  this.$node.toggle();
};

/*
  make a class called blinky dancer which extends from dancer
    takes in a top, left and TBS
  declare a constructor
    call superman
  declare a step method
    which is toggle referencing this somehow
*/