//****************Biggie Size Algorithm****************//
//Given an array, write a function that 
//changes all positive numbers in the array to "big".

// function makeItBig(arr)
// {
// 	for(var idx = 0; idx <= arr.length - 1; idx++)
// 	{
// 		if(arr[idx] > 0)
// 		{
// 			arr[idx] = "big";
// 		}
// 		else
// 		{
// 			continue;
// 		}
// 	}
// 	console.log(arr);
// }
// makeItBig([1,-5,-8,4,3,-10]);

//****************Print Low Return High Algorithm****************//
//Create a function that takes array of numbers.
//The function should print the lowest value in the array,
//and return the highest.

// function pLowRhigh(arr)
// {
// 	var Lowest = arr[0];
// 	var Highest = arr[0];
// 	for(var idx= 1; idx < arr.length; idx++)
// 	{
// 		if(arr[idx] < Lowest)
// 		{
// 			Lowest = arr[idx];
// 		}
// 		else if (arr[idx]> Highest)
// 		{
// 			Highest = arr[idx];
// 		}
// 		else
// 		{
// 			continue;
// 		}
// 	}
// 	console.log(Lowest);
// 	return Highest;
// }
// console.log(pLowRhigh([5,8,2,7,10,9,1]));

//****************Print One Return Another Algorithm****************//
//Create a function that takes array of numbers.
//The function should print second to last value in the array,
//and return first odd value in the array.

// function printOneReturnAnother(arr)
// {
// 	for(var idx = 0; idx < arr.length; idx++)
// 	{
// 		var firstOdd = 0;
// 		if( arr[idx] % 2 === 1 && firstOdd === 0)
// 		{
// 			firstOdd = arr[idx];
// 		}
// 	}
// 	for(var secIdx = 1; secIdx < arr.length; secIdx++)
// 		{
// 			console.log(arr[secIdx])
// 		}
// 	return firstOdd;
// }
// console.log(printOneReturnAnother([2,6,3,8,5,7]));

//****************Double Vision Algorithm****************//
//Given an array, create a function that returns a new array
//where each value in the original has been doubled. 
//Calling double([1,2,3]) should return [2,4,6].

// function doubled(arr)
// {
// 	var newArr = [];
// 	for(var idx = 0; idx < arr.length; idx++)
// 	{
// 		newArr.push(arr[idx]*2);
// 	}
// 	return newArr;
// }
// console.log(doubled([2,5,8]));

//****************Count Positives Algorithm****************//
//Given an array of numbers, create a function to replace
//last value with number of positive values
//countPositives([-1,1,1,1]) should return [-1,1,1,3]

// function countPositives(arr)
// {
// 	var count = 0;
// 	for(var idx = 0; idx < arr.length; idx++)
// 	{
// 		if(arr[idx] > 0)
// 		{
// 			count += 1;
// 		}
// 		else
// 		{
// 			continue;
// 		}
// 	}
// 	arr[arr.length-1] = count;
// 	return arr;
// }
// console.log(countPositives([-1,1,1,1]));

//****************Evens and Odds Algorithm****************//
//Create a function that accepts an array. 
//Every time that array has three odd values in a row,
//print "that's odd!", every time it has three evens in a row,
//print "Even more so!".

// function evensAndOdds(arr)
// {
// 	var odds = 0;
// 	var evens = 0;
// 	for(var idx = 0; idx < arr.length; idx++)
// 	{
// 		if(arr[idx] % 2 === 1)
// 		{
// 			odds += 1;
// 			if(odds === 3)
// 			{
// 				console.log("That's odd!")
// 				odds = 0;
// 			}
// 		}
// 		else if(arr[idx] % 2 === 0)
// 		{
// 			evens += 1;
// 			if(evens === 3)
// 			{
// 				console.log("Even more so!")
// 				evens = 0;
// 			}
// 		}
// 	}
// }
// evensAndOdds([1,3,5,2,4,6,8,10,12,7,9,11]);


//****************Increment the Second Algorithm****************//
//Given arr, add 1 to odd elements ([1],[3]etc.), console.log all values
//and return arr.

// function incrementSeconds(arr)
// {
// 	for(var idx = 0; idx < arr.length; idx++)
// 	{
// 		if(arr[idx] % 2 === 1)
// 		{
// 			arr[idx] += 1;
// 		}
// 		else
// 		{
// 			continue;
// 		}
// 	}
// 	console.log(arr);
// }
// incrementSeconds([1,2,3,4,5,6]);

//****************Previous Lengths Algorithm****************//
//You're passed an array containing strings.
//Working within that same array, replace each string with a number
//the length of string at previous array index and return the array.

// function previousLengths(arr)
// {
// 	for(var idx = 0; idx < arr.length; idx++)
// 	{
// 		arr[idx] = idx + 1;
// 	}
// 	return arr;
// }
// console.log(previousLengths(["numero1","nuemro2","numero3","numero4"]));

//****************Add Seven To Most Algorithm****************//
//Build function that accepts array.Return a new array with all values
//except first, adding seven to each. Do not alter the original array.

// function sevenToMost(arr)
// {
// 	var newArr = [];
// 	for(var idx = 1; idx < arr.length; idx++)
// 	{
// 		newArr.push(arr[idx]+7);
// 	}
// 	return newArr;
// }
// console.log(sevenToMost([3,13,23,33]));


//****************Reverse Array Algorithm****************//
//Given array, write a function to reverse values in-place.
// function reverseArray(arr)
// {
// 	var temp = 0;
// 	for(var idx = 0; idx < arr.length/2; idx++)
// 	{
// 		temp = arr[arr.length - 1 - idx];
// 		arr[arr.length- 1 - idx] = arr[idx];
// 		arr[idx] = temp;
// 	}
// 	return arr;
// }
// console.log(reverseArray([1,2,3,4,5,6]));

//****************Outlook Negative Algorithm****************//
//Given an array, create and return a new one
//containing all the values of the provided array,
//made negative.

// function outNegative(arr)
// {
// 	var newArr = [];
// 	for(var i = 0; i < arr.length; i++)
// 	{
// 		if(arr[i] > 0)
// 		{
// 			newArr.push(arr[i] *= -1);
// 		}
// 		else if(arr[i] < 0)
// 		{
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// }
// console.log(outNegative([-1,3,6,8,-5,4,-10]));

//****************Always Hungry Algorithm****************//
//Create a function that accepts an array and prints "yummy"
//each time one of the values is equal to "food". 
//if no array elements are equal to "food".
//then print "I'm hungry" once.

// function alwaysHungry(arr)
// {
// 	var food = 0;
// 	for(var i = 0; i < arr.length; i++)
// 	{
// 		if(arr[i] == "food")
// 		{
// 			console.log("Yummy!")
// 			food += 1;
// 		}
// 	}
// 	if(food === 0)
// 	{
// 		console.log("Im Hungry");
// 	}
// }
// alwaysHungry(["blah","food","food"]);

//****************Swap Toward the Center Algorithm****************//
//Given an array, swap first and last, third and third-to-last.

// function swapToCenter(arr)
// {
// 	var temp = 0;
// 	for(var i = 0; i < arr.length/2; i++)
// 	{
// 		temp = arr[i];
// 		arr[i]= arr[arr.length - 1 - i];
// 		arr[arr.length -1 - i]= temp;
// 	}
// 	console.log(arr);
// }
// swapToCenter(["quiero","un","carro","rapido"]);

//****************Scale the Array Algorithm****************//
//Given arr and number num,multiply each arr value by num and 
//return the changed array.

function scaleArray(arr,num)
{
	for(var i=0; i<arr.length;i++)
	{
		arr[i] *= num;
	}
	return arr;
}
console.log(scaleArray([4,2,10,23,4],2));



