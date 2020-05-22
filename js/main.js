
AOS.init();

(function($) {

   })(jQuery);


  (function($) {
    var speed = 300;
    var first = 0;
    var pause = 3000;

    function tick() {
        first = $('div#rate-board :first').remove();
        $("div#hover_"+first.attr('title')).removeClass('hoveradd');

        $("div#hover_"+($('div#rate-board :first').attr('title'))).addClass('hoveradd');
        $('div#rate-board').append(first);
    }

    $(function() { //on DOM ready 
        $("#scroller").simplyScroll();
    });
    
    $('.smooth-goto').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 75}, 1000);
        return false;
    });

    setInterval(tick, pause);

})(jQuery);

