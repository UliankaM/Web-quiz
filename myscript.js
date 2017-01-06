$(document).ready(function(){
	
   $("#startbutton").click(function(){
   		$("#start").hide();
   		$("#questions").show();
   		$("#finish").hide();
   });

   $("#finishgame").click(function(){
         $("#start").hide();
         $("#questions").hide();
         $("#finish").show();
   });

   $("#backtostart").click(function(){
   		$("#start").show();
   		$("#questions").hide();
   		$("#finish").hide();
   });
   



});