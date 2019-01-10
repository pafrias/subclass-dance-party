// Creates and returns a new dancer object that can step
var Dancer = function(timeBetweenSteps) { 
  this._speed = timeBetweenSteps;
  //dancer.setPosition($(".topbar").height() + ($("main").height() * Math.random()), $("main").width() * Math.random());

};

Dancer.prototype.startDance = function(time) {
  var bound = this.step.bind(this);
  setTimeout(bound, time);
};

Dancer.prototype.setPosition = function(top, left) {
  var top = top || $(".topbar").height() + ($("main").height() * Math.random());
  var left = left || $("main").width() * Math.random();
  this.$node.css({ "top": top + "px", "left": left + "px" });
};