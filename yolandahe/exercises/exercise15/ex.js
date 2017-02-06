$(document).ready(function() {
 	var choice1 = " ";
 	var choice2 = " ";
 	var choice3 =" ";
 	var choice4 =" ";
 	var choice5 =" ";
 	var choice6 =" ";

 	$('#text').click(function(){
		
		console.log(choice1);
	});
 	$('#text2').click(function(){
		
		console.log(choice2);
		if(choice1 === choice2){
			$('#text2').fadeOut('slow');
			$('#text').fadeOut('slow');
		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('#text3').click(function(){
		
		console.log(choice3);
	});
 	$('#text5').click(function(){
		
		console.log(choice5);
		if(choice3 === choice5){
			$('#text3').fadeOut('slow');
			$('#text5').fadeOut('slow');
		} else if(choice3 !== choice5) {
			choice1 = " ";
		}
	});

 	$('#text4').click(function(){
		
		console.log(choice4);
	});
 	$('#text6').click(function(){
		
		console.log(choice6);
		if(choice4 === choice6){
			$('#text4').fadeOut('slow');
			$('#text6').fadeOut('slow');
		} else if(choice4 !== choice6) {
			choice4 = " ";
		}
	});
	/*$('#text' && '#text2').click(function() {
        $('#text').fadeOut('slow');
        $('#text2').fadeOut('slow');
    });
    $('#text3' && '#text5').click(function() {
    	$('#text3').fadeOut('slow');
    	$('#text5').fadeOut('slow');
    });
    $('#text4' && '#text6').click(function() {
    	$('#text4').fadeOut('slow');
    	$('#text6').fadeOut('slow');
    });
    */
    
 
});
