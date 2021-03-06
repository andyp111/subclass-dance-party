$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'BlinkyDancer') {


      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
    } else {
      dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
    }
    $('body').append(dancer.$node);
  });

  $('.LineUp').on('click', function(event) {
    // var dancer = new DancerMakerFunction();
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(500, window.dancers[i]);
    }
  });
  $('.DanceTogether').on('click', function(event) {
    // var distance = 0;
    // var max = 0;
    // var min = 0;
    for (var x = 0; x < window.dancers.length; x++) {
      window.dancers[x].setPosition(window.dancers[x], 1000);
    }
  });

});
//class of image can be jumper
