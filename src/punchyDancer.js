var PunchyDancer = function(setTimeBetween) {
  Dancer.call(this, setTimeBetween);
  //this.$node = $('<span class="punchy dancer"></span>');
  this.$node = $('<img class="punchy dancer" src="images/sprites/ryu-standing.gif" />');
  var mo = this.specialDance.bind(this);
  this.$node.mouseover(mo);
  var me = this.step.bind(this);
  this.$node.mouseout(me);
};

PunchyDancer.prototype = Object.create(Dancer.prototype);

PunchyDancer.prototype.constructor = PunchyDancer;

PunchyDancer.prototype.specialDance = function() {
  this.$node.attr("src", "images/sprites/ryu-spinning.gif");
}

PunchyDancer.prototype.step = function() {
  this.$node.attr("src", "images/sprites/ryu-standing.gif");
  /*
  check img attr to match expected starting img
    if true
      change to second img
      $node.(img)is ()
    if false
      change to first img "http;////"
  
  */
};