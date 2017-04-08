$(function(){
'use strict';

var paragraphs = $('p');
    console.log(paragraphs);

  var paragraphOne = $('#first');
    console.log(paragraphOne);  
    
    
     var paragraphTwo = $('.paragraf');
    console.log(paragraphTwo); 
    
    var paragraphNot = $('p:not(.paragraf)');
    console.log(paragraphNot); 
    
     var paragraphsDiv = $('div > p');
    console.log(paragraphsDiv); 
});