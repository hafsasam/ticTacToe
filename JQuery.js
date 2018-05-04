 var count = 1;
 var joueur="O";
 var end= false;
$(document).ready(function() {


    vex.dialog.buttons.YES.text = 'Replay ?'
    vex.dialog.buttons.NO.text = 'Cancel'

    $("td").click(function() {


        $(".temp").remove();

	 if($(this).attr('value')=="oui")
      	
	   {
           vex.dialog.alert({
               message: "Case déjà cochée !!",
               buttons: [
                   $.extend({}, vex.dialog.buttons.YES, {
                       text: 'Return to game'
                   })
               ],
           }


               );
       }
	 else
	   { 		
	   	      if(count% 2 ==0)
			  {  
			  	$(this).attr('value','oui') ;

			  	$(this).append("<img src='O.png' >").attr('align','center');
			  	joueur="O";
			  	$(this).attr('class',joueur);
		      }
		      else
		      	{ $(this).attr('value','oui') ;
		      	  $(this).append("<img src='X.png' >").attr('align','center');
		           joueur="X";
		      	 $(this).attr('class',joueur) ;

		      	}

        count ++; 
        // 1 2 3

	     if($("#c1").attr('value')=="oui" && $("#c2").attr('value')=="oui" && $("#c3").attr('value')=="oui" &&
	       $("#c1").attr('class') == joueur && $("#c2").attr('class') == joueur && $("#c3").attr('class') == joueur )
	     {
            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({
                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })

             end = true;

	     } 
	     // 1 4 7
	     if($("#c1").attr('value')=="oui" && $("#c4").attr('value')=="oui" && $("#c7").attr('value')=="oui" &&
	       $("#c1").attr('class') == joueur && $("#c4").attr('class') == joueur && $("#c7").attr('class') == joueur )
	     { 
            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({
                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     }
        // 1 5 9
	      if($("#c1").attr('value')=="oui" && $("#c5").attr('value')=="oui" && $("#c9").attr('value')=="oui" &&
	       $("#c1").attr('class') == joueur && $("#c5").attr('class') == joueur && $("#c9").attr('class') == joueur )
	     {
            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({
                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     } 
	     // 2 5 8

	      if($("#c2").attr('value')=="oui" && $("#c5").attr('value')=="oui" && $("#c8").attr('value')=="oui" &&
	       $("#c2").attr('class') == joueur && $("#c5").attr('class') == joueur && $("#c8").attr('class') == joueur )
	     {
            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({
                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     } 
	     // 3 5 7
	      if($("#c3").attr('value')=="oui" && $("#c5").attr('value')=="oui" && $("#c7").attr('value')=="oui" &&
	       $("#c3").attr('class') == joueur && $("#c5").attr('class') == joueur && $("#c7").attr('class') == joueur )
	     {
            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({
                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     } 
	     //3 6 9
	      if($("#c3").attr('value')=="oui" && $("#c6").attr('value')=="oui" && $("#c9").attr('value')=="oui" &&
	       $("#c3").attr('class') == joueur && $("#c6").attr('class') == joueur && $("#c9").attr('class') == joueur )
	     { 
                var audio = new Audio('audio/V.mp3');
                audio.play();
             vex.dialog.confirm({
               

                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     } 
	     // 4 5 6
	      if($("#c4").attr('value')=="oui" && $("#c5").attr('value')=="oui" && $("#c6").attr('value')=="oui" &&
	       $("#c4").attr('class') == joueur && $("#c5").attr('class') == joueur && $("#c6").attr('class') == joueur )
	     {
            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({

                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     } 
	     // 7 8 9
	      if($("#c7").attr('value')=="oui" && $("#c8").attr('value')=="oui" && $("#c9").attr('value')=="oui" &&
	       $("#c7").attr('class') == joueur && $("#c8").attr('class') == joueur && $("#c9").attr('class') == joueur )
	     {

            var audio = new Audio('audio/V.mp3');
            audio.play();

             vex.dialog.confirm({

                 message: "Congratulations ! The winner is "+joueur,
                 callback: function (value) {
                     if (value) {
                         location.reload();
                     }
                 }
             })
             end = true;
	     }
	    
         if($("#c1").attr('value')=="oui" && $("#c2").attr('value')=="oui" && $("#c3").attr('value')=="oui" &&
         	$("#c4").attr('value')=="oui" && $("#c5").attr('value')=="oui" && $("#c6").attr('value')=="oui" &&
         	$("#c7").attr('value')=="oui" && $("#c8").attr('value')=="oui" && $("#c9").attr('value')=="oui" &&
         	(end == false)
            )
         	{
                var audio = new Audio('audio/F.mp3');
                 audio.play();


                vex.dialog.confirm({
                    message: "Egalité",
                    callback: function (value) {
                        if (value) {
                            location.reload();
                        }
                    }
                })
                end = true;

	  }
   }


	
	});

    $("td").mouseenter(function () {
        if($(this).attr('value')=="non") {
            if(count%2==0){
                $(this).append("<img src='O.png' class='temp' >").attr('align','center');
                $(".temp").css("opacity","0.5");
            }
            else {
                $(this).append("<img src='X.png' class='temp' >").attr('align','center');
                $(".temp").css("opacity","0.5");
            }
        }
    });

    $("td").mouseleave(function () {

        $(".temp").remove();

    });




});



