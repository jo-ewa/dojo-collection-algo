//*********Countdown Algorithm*********//
//Create a function that accepts a number as an input.
//Return a new array that counts down by one, from the number
//(as array's 'zeroth' element) down to 0 (as the last element).
//How long is this array?

// function Countdown(num)
// {
// 	var arr = [];
// 	for(var i = num; i >=0; i--)
// 	{
// 		arr.push(i)
// 	}
// 	console.log(arr);
// 	console.log(arr.length);
// 	return arr;
// }
// Countdown(6);

//*********Print and Return Algorithm*********//
//Your function will receive an array with two numbers.
//print the first value and return the second.

// function printReturn(arr)
// {
// 	console.log(arr[0]);
// 	return(arr[1]);
// }
// printReturn([7,2])

//*********First Plus Length Algorithm*********//
//Given an array, return the vaue of the first value in the array, plus the array's length.
//What happens if the arrays first value is not a number, but a string(like "what?") 
//or a boolean (like "false").

// function firstPlusLength(arr)
// {
// 	console.log(arr[0]+arr.length);
// 	return arr[0] + arr.length;
// }
// firstPlusLength(["what",4,2,5,3]);


//*********Values Greater Than Second Algorithm*********//
//For [1,3,5,7,9,13], print values that are greater than it's 2nd value.
//Return how many values this is.

// function greaterThanSecond(arr)
// {
// 	for(var i = 0; i <= arr.length-1; i++)
// 	{
// 		if(arr[i] > arr[1])
// 		{
// 			console.log(arr[i]);
// 		}
// 		else
// 		{
// 			continue;
// 		}
// 	}
// }
// greaterThanSecond([6,3,1,0,9,13]);

//*********Values Greater Than Second Generalized Algorithm*********//
//Write a function that accepts any array, and returns a new array with the 
//array values that are greater than its 2nd. Print how many values this is.
//What will you do if the array is only one element long?

// function greaterThanSecGeneralized(arr)
// {
// 	var newArr = [];
// 	var count = 0;
// 	for(var i = 0; i <= arr.length-1; i++)
// 	{
// 		if(arr.length >= 2)
// 		{
// 			if(arr[i] > arr[1])
// 			{
// 				newArr.push(arr[i])
// 				count += 1;
// 			}
// 			else
// 			{
// 				continue;
// 			}
// 		}
// 		else
// 		{
// 			console.log("one element arrays can't be analysed")
// 			break;
// 		}
// 	}
// 	console.log(newArr);
// 	console.log(count);
// }
// greaterThanSecGeneralized([10,8,2,1,5,6,2,4]);

//*********This Length, That Value Algorithm*********//
//Given two numbers, return array of length num1 with each value num2.
//Print "Jinx" if they are the same.

// function ThisLengthThatValue(num1,num2)
// {
// 	var arr = [];
// 	for(var i = 1; i <= num1; i++)
// 	{
// 		arr.push(num2);
// 	}
// 	if(num1==num2)
// 		{
// 			console.log("Jinx");
// 			console.log(arr);
// 		}
// 	else
// 	{
// 		console.log(arr);
// 	}
// }
// ThisLengthThatValue(7,5);



//*********Fit The First Value Algorithm*********//
//Your Function should accept an array. If value at [0] is greater than array's length
//print "too big!", if value at [0] is less than array's length,
//print "too small!"; otherwise print "just right!".

// function fitFirstVal(arr)
// {
// 	for(var i = 0; i <= arr.length-1; i++)
// 	{
// 		if(arr[0]>arr.length)
// 		{
// 			console.log("Too big!");
// 			break;
// 		}
// 		else if (arr[0]<arr.length)
// 		{
// 			console.log("Too small!");
// 			break;
// 		}
// 		else
// 		{
// 			console.log("Just right!")
// 			break;
// 		}
// 	}
// }
// fitFirstVal([3,3,7,8]);


//*********Farenheit to Celsius Algorithm*********//
//Kevin wants to convert between temperature scales.
//Create a farenheitToCelsius(fDegrees) that accepts a number of degrees
//in Farenheit, and returns the equivalent temperature as expressed in Celsius
//For review, Farenheit = (9/5 * Celsius)+32, Celsius = (5/9 * Farenheit) - 32

// function farenheitToCelsius(fDegrees)
// {
// 	var celsius = (5/9*fDegrees)-32;
// 	console.log(celsius);
// }
// farenheitToCelsius(57.6);


//***********Celsius to Farenheit Algorithm**********//

// function CelsiusToFarenheit(cDegrees)
// {
// 	var farenheit = (9/5*cDegrees)+32;
// 	console.log(farenheit);
// }

//optional

function celsiusFarenheitEquilibrium(cDegrees)
{
	var equilibrium = 0;
	for(var i=cDegrees; i <= cDegrees; i--)
	{
		var farenheit = (9/5*i)+32;
		if(i == farenheit)
		{
			equilibrium = i;
			console.log("Farenheit and Celsius are the same at " + equilibrium);
			break;	
		}
		else
		{
			continue;
		}
	}
}
celsiusFarenheitEquilibrium(200);








