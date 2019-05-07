/*****Print 1-255 Algorithm*****/
// function print(start,end)
// {
// 	for(var i = start; i <= end; i++)
// 	{
// 		console.log(i);
// 	}
// }
// print(1,255);

/*****Print ints and sum 0-255 Algorithm*****/
//Print integers from 0 to 255, and with each integer, print the sum so far//
// function printIntAndSum(s,e)
// {
// 	let sum = 0;
// 	for(var i = s; i <= e;i++)
// 	{
// 		console.log(i);
// 		sum += i;
// 		console.log("Integer " + i + " sum " + sum );
// 	}
// }
// printIntAndSum(0,255);

//OR//


// function printIntAndSum() {
// 	var sum = 0;
// 	for(var i = 0; i < 256;i++){
// 		sum += i;
// 		console.log(i + " The sum so far is " + sum);
// 	}
// }
// printIntAndSum();

/*****Print odds 1-255 Algorithm*****/

// function printOdds(s,e)
// {
// 	for(var i = s; i <= 255;i++)
// 	{
// 		if(i % 2 === 1)
// 		{
// 			console.log(i);
// 		}
// 	}
// }
// printOdds(1,255);

/*****Print Array values Algorithm*****/
//Iterate through an array printing every value//

// function printArrVal(arr)
// {
// 	for(var i = 0; i < arr.length;i++)
// 	{
// 		console.log(arr[i]);
// 	}
// }
// printArrVal([1,3,2,4,0,7,5,9,8,2]);

/*****Print Max of Array Algorithm*****/
//find and print the largest number within a given array//

// function printMax(arr)
// {
// 	let max = arr[0];
// 	for(var i = 1; i < arr.length;i++)
// 	{
// 		if(arr[i] > max)
// 		{
// 			max = arr[i]
// 		}
// 	}
// 	console.log(max);
// }
// printMax([1,3,2,4,0,7,5,9,8,2]);

/*****Print Average of Array Algorithm*****/
/*Analyze an arrays values and print the average*/

// function printAvg(arr)
// {
// 	var sum = 0;
// 	for(var i = 0; i < arr.length; i++)
// 	{
// 		sum += arr[i];
// 	}
// 	var avg = sum / arr.length;
// 	console.log(avg);
// }
// printAvg([1,3,2,4,0,7,5,9,8,2]);

/*****Return odds of Array Algorithm*****/
//Create an array with all the odd integers between 1 and 255(inclusive)//

// function returnOdds()
// {
// 	var  odds = [];
// 	for(var i = 1; i < 256; i++)
// 	{
// 		if(i % 2 === 1)
// 		{
// 			odds.push(i);
// 		}
// 	}
// 	return odds;
// }
// console.log(returnOdds());


/*****Square Array Values Algorithm*****/
/*Square every value in a given array, returning the same array with changed values*/

// function squareArrVals(arr)
// {
// 	for(var i = 0; i < arr.length;i++)
// 	{
// 		arr[i] *= arr[i];
// 	}
// 	return arr;
// }
// console.log(squareArrVals([1,3,2,4,0,7,5,9,8,2]))

/*****Return Array count greater than one Algorithm*****/
/*Given an array and a value Y, count and print the number of array
values greater than Y*/

// function returnArrCountGreaterThanY(arr,Y)
// {
// 	var count = 0;
// 	for(var i = 0; i < arr.length; i++)
// 	{
// 		if(arr[i] > Y)
// 		{
// 			count += 1;
// 		}
// 	}
// 	console.log(count)
// }
// returnArrCountGreaterThanY([1,3,2,4,0,7,5,9,8,2], 5);

/*****Zero out Array Negative Numbers Algorithm*****/
//Return a given array after setting any negative values to zero//

// function zeroOutNegativeVals(arr)
// {
// 	for(var i = 0; i < arr.length;i++)
// 	{
// 		if(arr[i] < 0)
// 		{
// 			arr[i] = 0;
// 		}
// 	}
// 	return arr;
// }
// console.log(zeroOutNegativeVals([-1,8,5,-7,-6,4,7,-8,-9]));

/*****Prin Max Min Avg Array Values Algorithm*****/


// function printMaxMinAvgVals(arr){
// 	var max = arr[0];
// 	var min = arr[0];
// 	var sum = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i]>max){
// 			max = arr[i];
// 		}
// 		if(arr[i]<min){
// 			min = arr[i];
// 		}
// 		sum += arr[i];
// 	}
// 	var avg = sum/arr.length;
// 	console.log(max,min,avg);
// }
// printMaxMinAvgVals([12,40,34,50,56]);


/*****Shift Array Values to the Left Algorithm*****/
/*Given an array, move all values forward (to the left) by one index,
droping the first value and leaving a zero value at the end of the array.*/

// function shiftArrValsLeft(arr)
// {
// 	for(var i = 1; i < arr.length; i++)
// 	{
// 		var temp = arr[i];
// 		arr[i] = arr[i-1];
// 		arr[i-1] = temp;
		
// 	}
// 	arr[arr.length-1] = 0;
// 	console.log(arr);
// }
// shiftArrValsLeft([12,40,34,50,56]);

/*****Shift Array Values to the Left Algorithm*****/
//Given an Array, replace any negative values with the string "Dojo"//

function swapStringforArray(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] < 0)
		{
			arr[i] = "Dojo";
		}
	}
	console.log(arr);
}
swapStringforArray([-1,8,5,-7,-6,4,7,-8,-9]);
