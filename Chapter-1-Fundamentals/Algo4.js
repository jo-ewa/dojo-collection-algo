//**************Only kepp the last few**************//
//Given array arr and number x, remove all except the last x elemnets and return arr.

// function onlyKeepLastFew(arr,x)
// {
// 	for(var i = 0; i < arr.length; i++)
// 	{
// 		if(i===x)
// 		{
// 			arr = arr.splice(x-1)//I could have used arr.splice which crops the array and returns the
// 			//the cropped values. arr = arr.splice(x - 1(from this index included),arr.length + 1(to this index not included))
// 			//so it crops from index 3 to index 5 creating a new array [4,5,6]. 
// 			// The slice method used, copies the selected range qand returns them without modifying the array.
// 			//or you can just select the index where you'd like to start either copying or cropping from
// 			//and not specify the second arguement which tells the computer to copy or crop every value
// 			//starting at the selected index.
// 		}
// 	}
// 	return arr;
// }
// console.log(onlyKeepLastFew([1,2,3,4,5,6],4));

//**************Math Help**************//
//You're gien two numbers-coefficients M AND B in the equation Y=MX+B build a fnction that returns X-intercept
//the X-intercept is the value of X where Y equals 0.

// function mathHelp(M,B)
// {
// 	var Y = 0;
// 	var xIntercept = (Y-B)/M;
// 	return xIntercept;
// }
// console.log(mathHelp(5,7));

//**************Poor Kenny**************//
//Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were
//10 days with volcanoes, 15 others with tsunamies, 20 earthquakes, 25 blizzards and 30 meteors (100 days total).
//if this probabilities continue, write whatHappensToday() to print a days outcome.

// function whatHappensToday(days,naturalDesasters,totalDays)
// {
// 	var maxProb = (days[0]*100)/totalDays;
// 	var Prob = 0;
// 	warning = ""
// 	for(var i = 0; i < days.length; i++)
// 	{
// 		Prob = 	(days[i]*100)/totalDays
// 		for(var j = 0; j < naturalDesasters.length; j++)
// 		{
// 			if(i === j)
// 			{
// 				if(Prob > maxProb)
// 				{
// 					maxProb = Prob;
// 					warning = "Watch out for " + naturalDesasters[j] + " they are the most likely event today with a probability of " + maxProb + "%";
// 				}	
// 				console.log(naturalDesasters[j] + " = " + (days[i]*100)/totalDays + "% probabilities of occurring today.")
// 			}
			
// 		}
// 	}
// 	console.log(warning);
// }
// whatHappensToday([10,15,20,25,30],["volcanoes","tsunamies","earthquakes","blizzards","meteors"],100);

//**************What Really Happened**************//
//test every outcome indivdually

// function whatReallyHappensToday(days,naturalDesasters,totalDays)
// {
// 	var maxProb = (days[0]*100)/totalDays;
// 	var Prob = 0;
// 	warning = ""
// 	for(var i = 0; i < days.length; i++)
// 	{
// 		Prob = 	(days[i]*100)/totalDays
// 		for(var j = 0; j < naturalDesasters.length; j++)
// 		{
// 			if(i === j)
// 			{
// 				if(Prob > maxProb)
// 				{
// 					maxProb = Prob;
// 					warning = "Watch out for " + naturalDesasters[j] + " they are the most likely event today with a probability of " + maxProb + "%";
// 				}
// 				if(j === 0)
// 				{
// 					console.log("Stay away from " + naturalDesasters[j] + " there is a " + (days[i]*100)/totalDays + "% probabilitie of eruptions today.")
// 				}
// 				if(j === 1)
// 				{
// 					console.log("Forget that trip to the beach today and run for the hills. There is a " + (days[i]*100)/totalDays + "% probabilitie of " + naturalDesasters[j] + " today")
// 				}
// 				if(j === 2)
// 				{
// 					console.log("Find an open area away from buildings and trees  " + (days[i]*100)/totalDays + "% probabilitie of earthquakes today.")
// 				}
// 				if(j === 3)
// 				{
// 					console.log("Find underground shelter " + (days[i]*100)/totalDays + "% probabilitie for " + naturalDesasters[j] + " today")
// 				}
// 				if(j === 4)
// 				{
// 					console.log("Eyes on the sky. Chances for " + naturalDesasters[j] + " today are " + (days[i]*100)/totalDays + "%")
// 				}
				
// 			}
			
// 		}
// 	}
// 	console.log(warning);
// }
// whatReallyHappensToday([10,15,20,25,30],["volcanoes","tsunamies","earthquakes","blizzards","meteors"],100);
	

// //3 100 days, 10 volcanos, 15 tsunamis, 20 earthquakes, 25 blizzards, 30 meteors.

// function whatHappensToday(arr){
// 	var mostProbable = 0;
// 	var maxPercentage = arr[0];
// 	var alert = "";
// 	var volcanoe = arr[0];
// 	var tsunami = arr[1];
// 	var earthquakes = arr[2];
// 	var blizzards = arr[3];
// 	var meteors = arr[4];

// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] > maxPercentage){
// 			maxPercentage = arr[i];
// 		}
// 	}
// 	if(maxPercentage === volcanoe){
// 		alert = "Stay away from volcanoes today!";
// 	}
// 	if(maxPercentage === tsunami){
// 		alert = "Beware of high tides!";
// 	}
// 	if(maxPercentage === earthquakes){
// 		alert = "look for a open area!";
// 	}
// 	if(maxPercentage === blizzards){
// 		alert = "be close from a basement!";
// 	}
// 	if(maxPercentage === meteors){
// 		alert = "Watch out for the skyes!";
// 	}
// 	else{
// 		alert ="It should be a safe day today!";
// 	}
// 	console.log(alert);

// }
// whatHappensToday([10,15,20,25,30]); 



//**************Soaring IQ**************//
//Astudent at Dojo enters with an IQ of 101. during his 14-week camp, his IQ rises .01 consistently 
//so at day 98 his IQ increased .98. What is the students new IQ.

// function soaringIQ(IQ,days)
// {
// 	IQ += days * 0.01;
// 	return IQ;
// }
// console.log(soaringIQ(101,98));

//OR***

// function soaringIQ(IQ,days){
// 	var iqIncrease = 0.01
// 	for(var i = 1; i <= days; i++ ){
// 		IQ += iqIncrease*i
// 	}
// 	console.log(IQ);
// }
// soaringIQ(101,98)

//**************Letter Grade**************//
//Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100. 
//those getting 90+ get an 'A', 80-89 'B',70-79 'C', 60-69 'D', lower receives 'F'.

function letterGrade(score)
{
	if(score > 90)
	{
		console.log("Score: "+ score + ". Grade: A")
	}
	if(score > 80 && score < 89)
	{
		console.log("Score: "+ score + ". Grade: B")
	}
	if(score > 70 && score < 79)
	{
		console.log("Score: "+ score + ". Grade: C")
	}
	if(score > 60 && score < 69)
	{
		console.log("Score: "+ score + ". Grade: D")
	}
	if(score < 60)
	{
		console.log("Score: "+ score + ". Grade: F")
	}
	
}
letterGrade(78);





// function letterGrade(score){
// 	if(score > 95){
// 		console.log("A");
// 	}
// 	else if(score >= 90 && score <= 95){
// 		console.log("A-");
// 	}
// 	else if(89 >= score && score >85 ){
// 		console.log("B+");
// 	}
// 	else if(85 >= score && score >=80 ){
// 		console.log("B-");
// 	}
// 	else if(79 >= score && score > 75){
// 		console.log("C+");
// 	}
// 	else if(75 >= score && score >= 70){
// 		console.log("C-");
// 	}
// 	else if(69 >= score && score > 65){
// 		console.log("D+");
// 	}
// 	else if(65 >= score && score > 60){
// 		console.log("D-");
// 	}
// 	else if(score < 60){
// 		console.log("F");
// 	}
// }
// letterGrade(75);

