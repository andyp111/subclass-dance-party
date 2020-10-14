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

