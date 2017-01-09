$(document).ready(function(){
	
   $("#startbutton").click(function(){
   		$(".start").hide();
   		$(".questions").show();
   		$(".finish").hide();
   });

   $("#finishgame").click(function(){
         $(".start").hide();
         $(".questions").hide();
         $(".finish").show();
   });

   $("#backtostart").click(function(){
   		$(".start").show();
   		$(".questions").hide();
   		$(".finish").hide();
   });
   
   $("#submit").click(function(){
      //here should be other things: green if correct answer, red is wrong
         //$(":radio").fadeTo("fast",0.5);
         //$(":checked").fadeTo("fast",1);
         $("#submit").after("<br/><br><button id='next'>Next</button><br>");
         if($(":radio")!= $(":checked"))
         {
            alert("You should choose one from given answers!");
         }
         else
         {
            $("#submit").after("<br/><br><button id='next'>Next</button><br>");
         }
   });

   $(".answers").click(function() {
         $(":radio").fadeTo("fast",0.5);
         $(":checked").fadeTo("fast",1);
   });

});