$(document).ready(function(){

 
    
    $('.nav-link').click(function(){
      let hrefValue=  $(this).attr('href');
      let offsetSec=$(hrefValue).offset().top;
      $('body').animate({
          scrollTop:offsetSec
      },2000)
    })
    
  
    
   
   
      
    })