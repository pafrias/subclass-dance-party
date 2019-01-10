var PunchyDancer = function(setTimeBetween) {
  Dancer.call(this, setTimeBetween);
  this.$node = $('<span class="punchy dancer"></span>');
  this.$node.css("background-image", "https://orig00.deviantart.net/59c4/f/2017/195/1/4/ryu_sprite_by_techm8-dbg740c.png");
};

PunchyDancer.prototype = Object.create(Dancer.prototype);

PunchyDancer.prototype.constructor = PunchyDancer;

PunchyDancer.prototype.step = function() {
  this.startDance(this._speed);
  /*
  assume Punchy has an img attribute
  check img attr to match expected starting img
    if true
      change to second img
      $node.(img)is ()
    if false
      change to first img "http;////"
  
  */
};