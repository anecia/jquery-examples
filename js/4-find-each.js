$(function(){
'use strict';
    
    $('body').find('p').eq(1).css('color', 'white');
    
    
    console.log($('body').find('p').eq(1));
    
    $('p').each(function(index){
        var size = 10;
   
        
    $(this).css('font-size', size*(index+1) + 'px');    
   
        
     });   
    
});