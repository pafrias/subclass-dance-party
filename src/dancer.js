// Creates and returns a new dancer object that can step
var Dancer = function(timeBetweenSteps) { 
  this._speed = timeBetweenSteps;
};

Dancer.prototype.startDance = function(time) {
  var bound = this.step.bind(this);
  setTimeout(bound, time);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css({ "top": top + "px", "left": left + "px" });
};