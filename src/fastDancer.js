var FastDancer = function(timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  //this.$node = $('<span class="fast dancer"></span>');
  this.$node = $('<img class="fast dancer" src="images/sprites/flash.png" />')
};

FastDancer.prototype = Object.create(Dancer.prototype);

FastDancer.prototype.constructor = FastDancer;

FastDancer.prototype.step = function() {
  this.startDance(this._speed);
  this.$node.animate({ "left": "+=50px", "top": "+=50px"}, "fast");
};
//FastDancer.prototype
/*
  animate on our fast dancer node for easy 45 deg angles
  everytime left = 0 or is greater than body width we need to animate again
  everytime top = 0 or is greater than body height we need to animate again
  
  
  extra credit for different angles
  no need to check the edge
  when making dancer set angle
  
  
*/





// class QuickDancer extends Dancer {
//   constructor() {
//     super();  
//   }
//   step() {
//     //find a way to move very fast
//   }
// }