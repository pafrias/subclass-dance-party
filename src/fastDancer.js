var FastDancer = function(timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  //this.$node = $('<span class="fast dancer"></span>');
  this.$node = $('<img class="fast dancer" src="images/sprites/flash.png" />')
  this._movingUp = true;
  this._movingLeft = true;
};

FastDancer.prototype = Object.create(Dancer.prototype);

FastDancer.prototype.constructor = FastDancer;

FastDancer.prototype.step = function() {
  this.startDance(this._speed / 2);
  
  var numLeft = this._pixelParser(this.$node.css("left"));
  var numTop = this._pixelParser(this.$node.css("top")) - $(".topbar").height();
  var numRight = $('main').width() - numLeft - 90;
  var numBot = $('main').height() - numTop - 120;
  
  if (this._movingUp && this._movingLeft) { //up and to left
    if (numLeft > numTop) {
      this._movingUp = false;
    } else if (numLeft < numTop) {
      this._movingLeft = false;
    } else {
      this._movingUp = false
      this._movingLeft = false;
    }
    }
    var num = Math.min(numLeft, numTop);
    this.$node.animate({ "left": "-=" + num + "px", "top": "-=" + num + "px"}, "slow");
  } else if (this._movingUp && !this._movingLeft) { //up and to right
    if (numRight > numTop) { 
      this._movingUp = false;
    } else {
      this._movingLeft = true;
    }
    var num = Math.min(numRight, numTop);
    this.$node.animate({ "left": "+=" + num + "px", "top": "-=" + num + "px"}, "slow");
  } else if (!this._movingUp && this._movingLeft) { // down and to left
    if (numLeft > numBot) {
      this._movingUp = true;
    } else {
      this._movingLeft = false;
    }
    var num = Math.min(numLeft, numBot);
    this.$node.animate({ "left": "-=" + num + "px", "top": "+=" + num + "px"}, "slow")
  } else { // down and to right
    if (numRight > numBot) {
      this._movingUp = true;
    } else {
      this._movingLeft = true;
    }
    var num = Math.min(numRight, numBot);
    this.$node.animate({ "left": "+=" + num + "px", "top": "+=" + num + "px"}, "slow")
  }
};

FastDancer.prototype._pixelParser = function(string) {
  var stringed = string.slice(0, string.length - 2);
  var num = parseInt(stringed);
  return num;
}
  /*
  
  suppose we have direction of up and to left
    Math min of (current-left, current-top - header height)
  
    tell it to animate left -= num, top -= num
     current.top - header height
  this.$node.animate({ "left": left + "px", "top": top + "px"}, "fast");
  */
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