var BlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.$node.addClass('blinky');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BlinkyDancer.prototype = Object.create(MakeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// var oldStep = this.step();

BlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // call the old version of step at the beginning of any call to this new version of step

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle(500);
};

var MovingDancer = function(top, left, timeBetweenSteps) { //dancer slides from left to right
  MakeDancer.apply(this, arguments);
  this.$node.addClass('movers');

};

MovingDancer.prototype = Object.create(MakeDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.toggle(1000).animate({left: '+=50px'});
  this.$node.toggle(1000).animate({right: '+=25px'});
};