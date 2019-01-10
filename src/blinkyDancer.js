var BlinkyDancer = function(timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  this.$node = $('<span class="blinky dancer"></span>');
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