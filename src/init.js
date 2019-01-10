$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) { 
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(Math.random() * 1000);
    
    dancer.step();
    dancer.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
    
    window.dancers.push(dancer);
    
    $('body').append(dancer.$node);
  });
});



/*
Things to-do:
  *Refactor into pseudo *
  Better background
  Make punchy dancer
    Make punchy dancer button
  *Make quick/shy dancer*
    *Make quick dancer button*
  Line up functionality
  Write tests
  
  Doesn't dance on nav bar**
  No collision**
  Lights**
  Unlineup functionality**
  Smooth movement or blink movement**
*/