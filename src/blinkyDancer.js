var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  // this.$node = $('<span class="dancer"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// var oldStep = this.step();

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // call the old version of step at the beginning of any call to this new version of step

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

var MakeMovingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.location = 0;

};

MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeMovingDancer;

MakeMovingDancer.prototype.moveNode = function() {

};
