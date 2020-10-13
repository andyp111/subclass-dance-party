var BlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.$node.addClass('blinky');


};

BlinkyDancer.prototype = Object.create(MakeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// var oldStep = this.step();

BlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle(500);
};

var MovingDancer = function(top, left, timeBetweenSteps) { //dancer slides from left to right
  MakeDancer.apply(this, arguments);
  // this.$node.removeClass('dancer');
  this.$node = $('<span class="mover"></span>');
};

MovingDancer.prototype = Object.create(MakeDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // if (this.$node.position)
  this.$node.toggle(1000).animate({left: '+=50px'});
  this.$node.toggle(1000).animate({right: '-=50px'});
};

var JumpingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.$node = $('<span class="jumper"></span>');

};

JumpingDancer.prototype = Object.create(MakeDancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;

JumpingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node = $('<span class="jumper"></span>');


  this.$node.toggle();
};