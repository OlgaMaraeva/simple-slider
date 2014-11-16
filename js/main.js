jQuery(document).ready(function ($) {
   
    var $next;

 function fade($ele) {

     $ele.fadeIn(500).delay(1000).fadeOut(500, function () {
         $next = ($(this).next().length > 0) ? $(this).next() : $(this).parent().find($('.pics:first'));
         fade($next);
     });
 };

 fade($('.pics:first'));

 $("button").click(function (event) {
     $('.pics').stop(true);
 });

 $("button.go").click(function () {
     fade($next);
 });

/*
 $(".wrapper").mouseleave(function (event) {
     $('.pics').stop(true).hide();
     fade($('.pics:first'));
 });
 */
 
  
      
    }); 