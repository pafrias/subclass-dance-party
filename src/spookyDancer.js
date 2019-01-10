var SpookyDancer = function(timeBetweenSteps) {
  Dancer.call(this, timeBetweenSteps);
  this.$node = $('<img class="spooky dancer" src="images/sprites/king_boo.png" />');
};

SpookyDancer.prototype = Object.create(Dancer.prototype);

SpookyDancer.prototype.constructor = SpookyDancer;

SpookyDancer.prototype.step = function() {
  this.startDance(this._speed * 2);
  
  if(this.$node.css("display") === "none") {
    this.setPosition();
  }
  this.$node.fadeToggle("slow", "swing");

    //  .wait
    // .setPosition
    //  fadetoggle
    // makes boo noise
    // 

};