$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) { 
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(Math.random() * 1000);
    
    dancer.setPosition();
    dancer.step();
    
    window.dancers.push(dancer);
    
    $('main').append(dancer.$node);
    
  });
  
  $('.lineDanceButton').on('click', function(event) { //multiple button clicks? toggle
    window.dancers.forEach(function(dancer, index, col) {
      var left = $('main').width() * .2 + (index * $('main').width() * .6) / (col.length - 1);
      var top = $('main').height() * .7;
      dancer.$node.animate({ 'left': left + 'px', 'top': top + 'px'});
    });
  });
});