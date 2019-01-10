// Creates and returns a new dancer object that can step
var Dancer = function(timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.startDance = function(time) {
  var bound = this.step.bind(this);
  setTimeout(bound, time);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css({ "top": top + "px", "left": left + "px" });
};

/*
Things to-do:
  Refactor into pseudo
  Better background
  Make punchy dancer
    Make punchy dancer button
  Make quick dancer
    Make quick dancer button
  Line up functionality
  Write tests
  
  No collision**
  Lights**
  Unlineup functionality**
  Smooth movement or blink movement**
*/