
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

    $('#close-popup').on('click', function() {
        $(this).parent().parent().parent().parent().remove();
        return false;
    });
})(jQuery);

(function($, viewport){

    // Executes only in XS breakpoint
    if( viewport.is('<lg') ) {

        $('#close-popup').parent().parent().parent().parent().remove();
        return false;
    }

    // // Executes in SM, MD and LG breakpoints
    // if( viewport.is('>=sm') ) {
    //     // ...
    // }

    // // Executes in XS and SM breakpoints
    // if( viewport.is('<md') ) {
    //     // ...
    // }

    // // Execute only after document has fully loaded
    // $(document).ready(function() {
    //     if( viewport.is('xs') ) {
    //         // ...
    //     }
    // });

    // // Execute code each time window size changes
    // $(window).resize(
    //     viewport.changed(function() {
    //         if( viewport.is('xs') ) {
    //             // ...
    //         }
    //     })
    // ); 

})(jQuery, ResponsiveBootstrapToolkit);

