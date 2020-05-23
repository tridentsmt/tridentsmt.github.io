
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

    $('#min-popup').on('click', function() {
        $(this).parent().parent().parent().parent().hide();
        $('#popup-min').show();
        return false;
    });
    $('#close-popup').on('click',function() {
        $(this).parent().parent().parent().parent().remove();
        return false;
    });
    $('#open-popup').click(function(){
        $(this).parent().parent().parent().hide();
        $('#popup-max').show();
        return false;
    });
})(jQuery);



$(function(){
    var customer_reviews = [
        {'name': 'Hayden Z.',
         'days': '4 years ago',
         'like':'55','dislike':'1',
         'text':'Very easy to use'},

         {'name': 'Jocelin O.',
         'days': '3 years ago',
         'like':'110','dislike':'2',
         'text':"I was amazed at the service of Trident. It's all good. I love trident. This is simply unbelievable!"},

         {'name': 'Dove A.',
         'days': '3 years ago',
         'like':'53','dislike':'10',
         'text':"Needless to say we are extremely satisfied with the results. Thanks trident! Just what I was looking for."},

         {'name': 'John Lee',
         'days': '2 years ago',
         'like':'41','dislike':'6',
         'text':'I love Trident SMT Exchange. Recommended.'},

         {'name': 'Mona J.',
         'days': '2 years ago',
         'like':'77','dislike':'2',
         'text':'I would like to personally thank you for your outstanding service. Thank you so much for your help.'},

         {'name': 'Stephanie Tan',
         'days': '2 years ago',
         'like':'12','dislike':'1',
         'text':'Thanks Trident Exchange for making my life easier.'},

         {'name': 'Laurence',
         'days': '1 years ago',
         'like':'5','dislike':'0',
         'text':'Would recommend Trident to my friends.'},

         {'name': 'Yap KC',
         'days': '3 months ago',
         'like':'10','dislike':'1',
         'text':'Highly Recommended!!'}
    ];

    $.each(customer_reviews, function(i, item) {
        example = $('#customer-review-example').clone();
        example.find('#content-name').text(item.name);
        example.find('#content-days').text(item.days);
        example.find('#content-text').text(item.text);
        example.find('#content-like').text(item.like);
        example.find('#content-dislike').text(item.dislike);
        $('#popup-content').append(example);
    });
});
    
// $(function(){
//     example = $('#customer-review-example').clone();
//     example.find('#content-name').text('abcaaa');
//     example.find('#content-days').text('2 Days');
//     example.find('#content-text').text('ABCCC');
//     $('#popup-content').append(example);
// });

