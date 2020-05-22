
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
    
    setInterval(tick, pause);

})(jQuery);

