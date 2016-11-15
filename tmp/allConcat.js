
function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    });
  }

$(document).ready(function(){
  $('.animal-picture').each(function() {
        animationHover(this, 'bounce');
    });
});
