(function($) {
    $(function() { //on DOM ready 
          $("#scroller").simplyScroll();
    });
   })(jQuery);

   $('.smooth-goto').on('click', function() {  
  $('html, body').animate({scrollTop: $(this.hash).offset().top - 75}, 1000);
  return false;
});

(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.animate-fadeIn');

      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('animate-fadeIn');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
  AOS.init();

