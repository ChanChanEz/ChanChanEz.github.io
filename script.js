$(document).ready(function(){
    // $("div.title").fadeIn(1300);
    $("div.anchors").fadeIn(1000);
    $("div.content").fadeIn(1700);
    
});

// var h = $('.anchors').height();
// document.getElementById('.about').style.marginTop= 100;

jQuery(document).ready(function($){ 
    $('.about').css({
        'margin-top' : $('.anchors').height() * 1.2
    });
});

// $(document).on(scroll, function(){
//     $(window).scroll( function(){
//         $("div.about2").fadeIn(1500);
//     });
// });

// jQuery(document).ready(function($){ 
//     $('.about').each(function(){ 
//         $(this).css({
//             'margin-top' : $('.anchors').height() * 1.2
//         });
//     });
// });