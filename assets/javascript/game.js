
var crystalValues;
var wins =0;
var losses =0;
var targetValue =0;
var userTotal =0;

//Generate 4 unique random numbers between 1- 12
function generateCrystalValues(){
	
	for(var i=0; i<4;){

		var randomNumber = Math.ceil(Math.random() * 12);

		console.log("Ram Num -->"+randomNumber);

		if(crystalValues.indexOf(randomNumber) > -1){
			continue;
		}
		else {
			crystalValues[crystalValues.length] =randomNumber;
			i++;
		}
		
	} // End for

}


//Generate Random Number for Target
function targetNumer(){
	var randomNum =0;
	crystalValues = [];
	while( randomNum < 19  ){
		randomNum = Math.ceil(Math.random() * 120);
		
		if(randomNum > 19 && randomNum < 120){
			break;
		}
	}// end while
	console.log("Target Number -->"+randomNum);
	return randomNum;
}



//Following block of code stats after page load is complete
$(document).ready(function() {
	//when the page load generate random numbers
	targetValue = targetNumer();
	generateCrystalValues();

	
	console.log("Crystal values -->"+crystalValues);

	// Assign values to the Crystal Buttons
	$("#crystal1").attr("crystalvalue",crystalValues[0]);
	$("#crystal2").attr("crystalvalue",crystalValues[1]);
	$("#crystal3").attr("crystalvalue",crystalValues[2]);
	$("#crystal4").attr("crystalvalue",crystalValues[3]);

	//Assign Targe value for Display
	$("#targetNo").text(targetValue);


	//When user clicl on any crystal 
	$("img").on("click",function(){
		//user selected Crystal value
		var selectedValue = parseInt($(this).attr("crystalvalue"));

		console.log( "Selected Crystal Val -->"+selectedValue);

		userTotal = userTotal + selectedValue;

		if(targetValue === userTotal){
			//update User current total 
			$("#currentscore").text(userTotal);

			wins++;
			console.log("You win");
			//Update the Wins
			$("#wins").text(wins);

			gameReset();

		}else if(userTotal > targetValue){
			//update User current total 
			$("#currentscore").text(userTotal);
			losses++;
			console.log("you lose the game");

			//Update the loss
			$("#losses").text(losses);
			
			gameReset();
		}
		else{

			//update User current total 
			$("#currentscore").text(userTotal);
	
		}

	}); //End of  click event


	//Game Reset
	function gameReset() {
		userTotal =0;
		targetValue=0;

		$("#currentscore").text("0");

		//Generate Randon Number
		targetValue = targetNumer();
		generateCrystalValues();

		console.log("Crystal values in Reset -->"+crystalValues);
		//Assign Targe value for Display
		$("#targetNo").text(targetValue);

		// Assign values to the Crystal Buttons
		$("#crystal1").attr("crystalvalue",crystalValues[0]);
		$("#crystal2").attr("crystalvalue",crystalValues[1]);
		$("#crystal3").attr("crystalvalue",crystalValues[2]);
		$("#crystal4").attr("crystalvalue",crystalValues[3]);
	}

}); // end $(document).ready(function() 