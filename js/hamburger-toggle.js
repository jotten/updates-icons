// JavaScript Document

$('#ham-toggle li a').click(function(){
    $(this).next('ul').slideToggle('500');
    $(this).find('i').toggleClass('fa-bars fa-times')
});