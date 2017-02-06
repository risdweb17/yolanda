$(document).ready(function(){
	var choice1="";
	var choice2="";
	$('.one').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".one").fadeTo('slow',0);
			$(".four").fadeTo('slow',0);

		} 
	});
	$('.four').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".one").fadeTo('slow',0);
			$(".four").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.two').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".two").fadeTo('slow',0);
			$(".three").fadeTo('slow',0);

		} 
	});
	$('.three').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".two").fadeTo('slow',0);
			$(".three").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.five').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".five").fadeTo('slow',0);
			$(".ten").fadeTo('slow',0);

		} 
	});
	$('.ten').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".five").fadeTo('slow',0);
			$(".ten").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.six').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".six").fadeTo('slow',0);
			$(".twelve").fadeTo('slow',0);

		} 
	});
	$('.twelve').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".six").fadeTo('slow',0);
			$(".twelve").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.seven').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".fourteen").fadeTo('slow',0);
			$(".seven").fadeTo('slow',0);

		} 
	});
	$('.fourteen').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".fourteen").fadeTo('slow',0);
			$(".seven").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.eight').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".eight").fadeTo('slow',0);
			$(".tone").fadeTo('slow',0);

		} 
	});
	$('.tone').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".eight").fadeTo('slow',0);
			$(".tone").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.nine').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".nine").fadeTo('slow',0);
			$(".tfour").fadeTo('slow',0);

		} 
	});
	$('.tfour').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".nine").fadeTo('slow',0);
			$(".tfour").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.thirteen').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".thirteen").fadeTo('slow',0);
			$(".nineteen").fadeTo('slow',0);

		} 
	});
	$('.nineteen').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".thirteen").fadeTo('slow',0);
			$(".nineteen").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.fifteen').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".fifteen").fadeTo('slow',0);
			$(".twenty").fadeTo('slow',0);

		} 
	});
	$('.twenty').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".fifteen").fadeTo('slow',0);
			$(".twenty").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.sixteen').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".sixteen").fadeTo('slow',0);
			$(".thirty").fadeTo('slow',0);

		} 
	});
	$('.thirty').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".sixteen").fadeTo('slow',0);
			$(".thirty").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.seventeen').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".seventeen").fadeTo('slow',0);
			$(".th8").fadeTo('slow',0);

		} 
	});
	$('.th8').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".seventeen").fadeTo('slow',0);
			$(".th8").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.eighteen').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".eighteen").fadeTo('slow',0);
			$(".tfive").fadeTo('slow',0);

		} 
	});
	$('.tfive').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".eighteen").fadeTo('slow',0);
			$(".tfive").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.ttwo').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".ttwo").fadeTo('slow',0);
			$(".tseven").fadeTo('slow',0);

		} 
	});
	$('.tseven').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".ttwo").fadeTo('slow',0);
			$(".tseven").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.tthree').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".tthree").fadeTo('slow',0);
			$(".tnine").fadeTo('slow',0);

		} 
	});
	$('.tnine').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".tthree").fadeTo('slow',0);
			$(".tnine").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.tsix').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".tsix").fadeTo('slow',0);
			$(".th1").fadeTo('slow',0);

		} 
	});
	$('.th1').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".tsix").fadeTo('slow',0);
			$(".th1").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.th3').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".th3").fadeTo('slow',0);
			$(".fourty").fadeTo('slow',0);

		} 
	});
	$('.fourty').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".th3").fadeTo('slow',0);
			$(".fourty").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.th5').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".th5").fadeTo('slow',0);
			$(".th7").fadeTo('slow',0);

		} 
	});
	$('.th7').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".th5").fadeTo('slow',0);
			$(".th7").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.th6').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".th6").fadeTo('slow',0);
			$(".fo1").fadeTo('slow',0);

		} 
	});
	$('.fo1').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".th6").fadeTo('slow',0);
			$(".fo1").fadeTo('slow',0);

		} else if(choice1 !== choice2) {
			choice1 = " ";
		}
	});
	$('.eleven').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.teight').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.th2').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.th4').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.fo2').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.fo3').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.fo4').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.th9').click(function(){
		$(this).fadeTo('slow', 0);
	});
	/*	$('h1').mouseover(function(){
		$(this).fadeOut('slow');
	});*/
	$('.f4').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f4").fadeTo('slow',0);
			$(".h4").fadeTo('slow',0);

		} 
	});
	$('.h4').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f4").fadeTo('slow',0);
			$(".h4").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f5').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f5").fadeTo('slow',0);
			$(".f12").fadeTo('slow',0);

		} 
	});
	$('.f12').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f5").fadeTo('slow',0);
			$(".f12").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f6').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f6").fadeTo('slow',0);
			$(".f11").fadeTo('slow',0);

		} 
	});
	$('.f11').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f6").fadeTo('slow',0);
			$(".f11").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f7').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f7").fadeTo('slow',0);
			$(".f15").fadeTo('slow',0);

		} 
	});
	$('.f15').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f7").fadeTo('slow',0);
			$(".f15").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f8').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f8").fadeTo('slow',0);
			$(".f9").fadeTo('slow',0);

		} 
	});
	$('.f9').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f8").fadeTo('slow',0);
			$(".f9").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f10').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f10").fadeTo('slow',0);
			$(".f20").fadeTo('slow',0);

		} 
	});
	$('.f20').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f10").fadeTo('slow',0);
			$(".f20").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f13').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f13").fadeTo('slow',0);
			$(".f19").fadeTo('slow',0);

		} 
	});
	$('.f19').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f13").fadeTo('slow',0);
			$(".f19").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f14').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f14").fadeTo('slow',0);
			$(".f17").fadeTo('slow',0);

		} 
	});
	$('.f17').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f14").fadeTo('slow',0);
			$(".f17").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f21').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".f21").fadeTo('slow',0);
			$(".f22").fadeTo('slow',0);

		} 
	});
	$('.f22').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".f21").fadeTo('slow',0);
			$(".f22").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.f16').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.f18').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.h6').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h6").fadeTo('slow',0);
			$(".h7").fadeTo('slow',0);

		} 
	});
	$('.h7').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h6").fadeTo('slow',0);
			$(".h7").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h8').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h8").fadeTo('slow',0);
			$(".h9").fadeTo('slow',0);

		} 
	});
	$('.h9').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h8").fadeTo('slow',0);
			$(".h9").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h12').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h12").fadeTo('slow',0);
			$(".h14").fadeTo('slow',0);

		} 
	});
	$('.h14').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h12").fadeTo('slow',0);
			$(".h14").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h13').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h13").fadeTo('slow',0);
			$(".h15").fadeTo('slow',0);

		} 
	});
	$('.h15').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h13").fadeTo('slow',0);
			$(".h15").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h16').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h16").fadeTo('slow',0);
			$(".h20").fadeTo('slow',0);

		} 
	});
	$('.h20').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h16").fadeTo('slow',0);
			$(".h20").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h11').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h11").fadeTo('slow',0);
			$(".h18").fadeTo('slow',0);

		} 
	});
	$('.h18').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h11").fadeTo('slow',0);
			$(".h18").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h17').click(function(){ 				
		choice1 = $(this).attr('id');	
		console.log(choice1); 				
		if(choice1 === choice2) {
			$(".h17").fadeTo('slow',0);
			$(".h21").fadeTo('slow',0);

		} 
	});
	$('.h21').click(function(){ 				
		choice2 = $(this).attr('id');	
		console.log(choice2); 				
		if(choice1 === choice2) {
			$(".h17").fadeTo('slow',0);
			$(".h21").fadeTo('slow',0);

		} else {
			choice1 = " ";
		}
	});
	$('.h5').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.h10').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.h19').click(function(){
		$(this).fadeTo('slow', 0);
	});
	$('.h22').click(function(){
		$(this).fadeTo('slow', 0);
	});
	

	$('.inside').hover(function(){
		$('h1').toggleClass('zindex');
	})
});
