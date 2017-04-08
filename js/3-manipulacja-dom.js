$(function(){
'use strict';
    
   var textPar = $('#paragraf').text() 
   
    console.log(textPar);
    
    
    $('.paragraf').text(textPar + ' dodany ');
    
     $('.paragrafnext').html('<strong>TEXT</strong>');
    
    $('#first').append(' dodaj do naglowka ');
    $('#first').after(' dodaj za naglowkiem ');
    
    
    var przedNaglowkiem = $('div').html();
    
   $('#first').before(przedNaglowkiem);
    
    $('strong').remove();
    
    $('h3').empty();
    
    $('p').css({'background-color':'red', 'color':'white'});
    
    var poleTekstowe = $('input').val();
    console.log(poleTekstowe);
    
    $('input').val(textPar);
    
    
    $('h2').addClass('blue');
    
    $('p').removeClass('paragraf');
    
    
});