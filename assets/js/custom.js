$(document).ready(function() {
	
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll > 1) {
	      $('body').addClass('scrolled');
	    } else if (scroll < 1) {
	      $('body').removeClass('scrolled');
	    }
  	});
  
});
$(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $(window).scroll(function(){
    animate_elems();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.50))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  }// end animate_elems()
});