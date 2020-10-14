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