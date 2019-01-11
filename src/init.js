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
      var left = 200/*percent of main width*/ + (index * 900) / (col.length - 1);
      var top = $('main').height() * .5;
      dancer.$node.animate({ "left": left + "px", "top": top + "px"})
      }) 
  });
  
  /*$('.punchy').on('mouseover', function(event) {
    $(this.nodeOrsomethinglikethat).mouseover();
  })*/
});



/*
Things to-do:
  *Refactor into pseudo *
  Better background
    *set a dancefloor div/main*
    *has img*
    have a margin
  
  maybe all dancers have a lineUp method?
  
  
  *Make spooky Dancer*
  Line up functionality
    *make them line up*
    *keep them there*
  Write tests
  
  Make punchy dancer
    *set img(s)*
    make animation
    *Make punchy dancer button*
  *Make quick dancer*
    *set img(s)*
    give smooth motion
    don't escape the dino park
    *Make quick dancer button*
  **Doesn't dance on nav bar**
  No collision**
  Lights**
  Unlineup functionality**
  Smooth movement or blink movement**
*/