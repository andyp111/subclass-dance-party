// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  // this.top = top;
  // this.left = left; already in the input for set position
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

  // use jQuery to create an HTML <span> tag
  //this.$node = $('<span class="dancer"></span>');


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);

};


MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // this.location += 1;
  setTimeout(this.step.bind(this), this.timeBetweenSteps); //allows us to sepcify what the context is when we use bind, this is referring to MakeDancer, Blinky, Moving, Jumping
};


MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.left = left;
  this.top = top;
  this.$node.css(styleSettings);
};

