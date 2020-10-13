var BlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(MakeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// var oldStep = this.step();

BlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle(1000);
};

var MovingDancer = function(top, left, timeBetweenSteps) { //dancer slides from left to right
  MakeDancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('notTL');
  this.$node.html('<span class="mover"></span>');
};

MovingDancer.prototype = Object.create(MakeDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // if (this.$node.css() === 0) {
  //   this.$node.animate({left: '+=25px'});
  // }
  this.$node.animate({left: '+=25px'});
  this.$node.animate({right: '-=25px'});
};

var JumpingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  this.$node.addClass('notTL');
  this.$node.html('<span class="jumper"></span>');

};

JumpingDancer.prototype = Object.create(MakeDancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;

JumpingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);


  // this.$node.toggle();
};