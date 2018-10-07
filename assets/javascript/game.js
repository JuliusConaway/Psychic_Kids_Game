var wins= 0;
 	var losses= 0;
 	var totalScore= 0;
 	var targetNumber= 0;
 	var randomButtonD= 0;
 	var randomButtonP= 0;
 	var randomButtonJ= 0;
 	var randomButtonH= 0;
	$( document ).ready(function(){
 	init();
 	$('#randomButtonD').on ('click', function(){
		totalScore= totalScore + randomButtonD;
		$("#totalScore").html("<p>Your Total Score Is: "+ totalScore+"</p>");
		checkTotal();
		
		
	});	
	$('#randomButtonP').on ('click', function(){
		totalScore= totalScore + randomButtonP;
		$("#totalScore").html("<p>Your Total Score Is: "+ totalScore+"</p>");
		checkTotal();
		
		
	});	
	$('#randomButtonJ').on ('click', function(){
		totalScore= totalScore + randomButtonJ;
		$("#totalScore").html("<p>Your Total Score Is: "+ totalScore+"</p>");
		checkTotal();
		
		
	});	
	$('#randomButtonH').on ('click', function(){
		totalScore= totalScore + randomButtonH;
		$("#totalScore").html("<p>Your Total Score Is: "+ totalScore+"</p>");
		checkTotal();
	
		
	});	
	function init() {
  	targetNumber=Math.floor(Math.random()*(101)+19);
  	$("#targetNumber").html("<p>Target Number Is: "+ targetNumber+"</p>");
  	totalScore= 0;
  	$("#totalScore").html("<p>Your Total Score Is: "+ totalScore+"</p>");
 
 	randomButtonD= Math.floor(Math.random()*(11)+1);
 	randomButtonP= Math.floor(Math.random()*(11)+1);
 	randomButtonJ= Math.floor(Math.random()*(11)+1);
 	randomButtonH= Math.floor(Math.random()*(11)+1);
 	}
 	
 	function checkTotal() {
 		
 		if(totalScore >targetNumber){
 			losses++
 		$("#losses").html("<h3>Losses: "+ losses+"</h3>");	
		alert("Awww our dad said you lose!!");
		init();
		
	}
 		if(totalScore ===targetNumber){
 			wins++
 		$("#wins").html("<p>Wins: "+ wins+"</p>");	
		alert("Yayy our dad said you won!!");
		init();
	
		
 	}
 	}
});
