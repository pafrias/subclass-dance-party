var BlinkyDancer = function(timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');
  this.$node.html('<img class="blinky" src="images/sprites/Abra.png"/>')
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.startDance(this._speed * 3);
  if (this.$node.css("display") === "none") {
    this.setPosition();
  }
  this.$node.slideToggle("fast");
};

/*
  make a class called blinky dancer which extends from dancer
    takes in a top, left and TBS
  declare a constructor
    call superman
  declare a step method
    which is toggle referencing this somehow
*/