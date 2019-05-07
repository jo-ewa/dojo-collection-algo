
var math = require('mathjs');
//************sigma**************//
/*Implement function sigma(num) that given a number, retuns the sum of all positive integers up to
number(inclusive). Ex: sigma(3) = 6(or 1+2+3); sigma(5)=15(or 1+2+3+4+5)*/

// function sigma(num)
// {
//   var sigma = 0;
//   for(var i = 1; i <= num; i++)
//   {
//     sigma += i;
//   }
//   console.log(sigma);
// }
// sigma(5);




// function sigma(num){
// 	var sum =0;
// 	for(var i = 1; i <= num;i++){
// 		sum+=i;
// 	}
// 	console.log(sum);
// }
// sigma(5);

//************factorial**************//
/*Just the facts, ma'am. Factorials,that is. Write a function factorial(num) that, given a number,
returns the product(multiplication) of all positive integers from 1 up to number(inclusive). For example:
factorial(3) = 6 (or 1*2*3); factorial(5) = 120(or 1*2*3*4*5).*/

// function factorial(num)
// {
//   var factorial = 1;
//   for(var i = 1;i <= num; i++)
//   {
//     factorial *= i;
//   }
//   console.log(factorial);
// }
// factorial(5);

//************Start Art**************//
// function drawLeftStars(num)
// {
//   var string = "";
//   for(var i = 1; i <=num; i++)
//   {
//     string += " *";
//   }
//   console.log(string);
// }
// drawLeftStars(10);

//***DrawLeftStars num, char version***/

// function drawLeftStars(num,char)
// {
//   var string = "";
//   for(var i = 1; i <= num; i++)
//   {
//     string += char;
//   }
//   console.log(string);
// }
// drawLeftStars(5,"*");

/***Draw Right Stars***/
/*this one should print 75 characters building "char" from right to left.
The last "num" characters should be asteriscs, the rest spaces.*/

// function drawRightStars(num)
// {
//   var string = "";
//   for(var i = 1; i<=75; i++)
//   {
//     if(i <= 75-num)
//     {
//       string += " "
//     }
//     else
//     {
//       string += "*"
//     }
//   }
//   console.log(string);
// }
// drawRightStars(5);

/*Draw right star num, char version*/

// function drawRightStars(num,char)
// {
//   var string = "";
//   for(var i = 1; i<=75; i++)
//   {
//     if(i <= 75-num)
//     {
//       string += " "
//     }
//     else
//     {
//       string += char
//     }
//   }
//   console.log(string);
// }
// drawRightStars(8,"*");

/***Draw Centered Stars***/

// function drawCenteredStars(num)
// {
//   var string = "";
//   for(var i = 1; i<=75; i++)
//   {
//     if(i < (75/2 - num/2) || i > (75/2 + num/2) )
//     {
//       string += " ";
//     }
//     else
//     {
//       string += "*";
//     }
//   }
//   console.log(string);
// }
// drawCenteredStars(7);

/***Draw Centered Stars num,char version***/

// function drawCenteredStars(num,char)
// {
//   var string = "";
//   for(var i = 1; i<=75; i++)
//   {
//     if(i < (75/2 - num/2) || i > (75/2 + num/2) )
//     {
//       string += " ";
//     }
//     else
//     {
//       string += char;
//     }
//   }
//   console.log(string);
// }
// drawCenteredStars(7,"*");


//Star Art

// function drawLeftStars(num,char){
// 	var string = "";
// 	for(var i = 1; i <= num;i++){
// 		string += char;
// 	}
// 	console.log(string);
// }
// drawLeftStars(5,"#");

// function drawRightStars(num,char){
// 	var string = "";
// 	for(var i = 1; i <= 75;i++){//i = 1
// 		if(i < 75-num){         //when i < 70 add spaces
// 			string += " ";      
// 		}
// 		else{
// 			string += char;
// 		}
// 	}
// 	console.log(string);
// }
// drawRightStars(5,"@");

// function drawCenteredStars(num,char){
// 	var string = "";
// 	var leftSection = (75-num)/2;
// 	var rigthSection = leftSection + num;
// 	for(var i = 1; i <= 75;i++){//i = 1
// 		if(i < leftSection || i > rigthSection ){         //when i < 70 add spaces
// 			string += " ";      
// 		}
// 		else{
// 			string += char;
// 		}
// 	}
// 	console.log(string);
// }
// drawCenteredStars(5,"&");


/******Threes and Fives******/
/*Create threesFives() that adds value from 100 to 4000000(inclusive) if that value
is devisible by 3 or 5 but not both. Display the final sum in the console.*/

// function threesFives()
// {
//   var sum = 0;
//   for(var i = 100; i <= 4000000; i++)
//   {
//     if(i % 3 === 0 && i % 15 != 0)
//     {
//       sum += i;
//     }
//     if (i % 5 === 0 && i % 15 != 0)
//     {
//       sum += i;
//     }
//     else
//     {
//       continue;
//     }
//   }
//   console.log(sum);
// }
// threesFives();

//threes and fives

// function threesFives(start,end){
// 	var sum = 0;
// 	for(var i = start; i <= end; i++){
// 		if(i % 3 === 0 && i % 5 !=0){
// 			sum += i;
// 		}
// 		if (i % 5 === 0 && i % 3 != 0){
// 			sum += i;
//     }
//     else
//     {
//       continue;
//     }
//   }
//   console.log(sum);
// }
// threesFives(100,4000000);

/******Coin Change******/
/*Make generateCoinChange(cents), accept a number of American cents, compute
and print how to represent that amount with smallest number of coins.
pennies = 1 cent
nickles = 5 cents
dimes = 10 cents
quarters = 25 cents*/

//#1

// function generateCoinChange(money)
// {
//   var math = require('mathjs');//necesary to use math methods//
//   var coins = {'Q':0,'D':0,'N':0,'P':0};//Creation of an object that will hold coin vals//
//   var remainder = 0;
//   if(money > 0)
//   {
//     if(money >= 25)
//     {
//       coins['Q'] = math.floor(money/25);
//       remainder = money % 25;
//       if(remainder >= 10)
//       {
//         coins['D'] = math.floor(money/10);
//         remainder = remainder % 10;
//       }
//       if(remainder >= 5)
//       {
//         coins['N'] = math.floor(money/5);
//         remainder = remainder % 5;
//       }
//       if(remainder < 5)
//       {
//         coins['P'] = remainder/1;
        
//       }
//     }
//   }
//   console.log(coins); 
// }
// generateCoinChange(98);



// coin change

// function coinChange(money){
// 	var math = require('mathjs');
// 	var coins = {'Q':0,'D':0,'N':0,'P':0};
// 	var remainder  = 0;
// 	if(money > 0){
// 		if(money >= 25){
// 			coins['Q']= math.floor(money/25);
// 			remainder= money % 25;
// 			console.log(remainder);
// 			if(remainder >= 10){
// 				coins['D']= math.floor(remainder/10);
// 				remainder= remainder % 10;
// 				console.log(remainder);
// 			}
// 			if(remainder >= 5){
// 				coins['N']= math.floor(remainder/5);
// 				remainder= remainder % 5;
// 				console.log(remainder);
// 			}
// 			if(remainder < 5) {
// 				coins['P'] = remainder/1;
// 			}
// 		}
		
// 	}
// 	console.log(coins);	
	
// }
// coinChange(94);

/******Messy Math******/
/*Create a function messyMath(num) that will return the following sum:
add all integers from 0 to "num" except for the following special cases
of our count value:
1-If current count is evenly divisible by 3, don't add to sum; skip to the next count;
2-Otherwise, if current count is evenly divisible by 7, include it twice in sum intead of once;
3-Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately
*/

// function messyMath(num)
// {
//   var sum = 0;
//   for(var count=0;count <= num; count++)
//   {
//     if(count % 3 === 0)
//     {
//       continue;
//     }
//     else if(count % 7 === 0)
//     {
//       sum += count*2;
//     }
//     else if(count === num/3)
//     {
//       return -1;
//     }
//     else
//     {
//       sum += count;
//     }
//   }
//   console.log(sum);
// }
// console.log(messyMath(8));

// OR Messy Math Mashup

// function messyMath(num){
// 	var sum = 0;
// 	var count = 0;
// 	while(count <= num){
// 		if(count == num/3){
// 			return -1;
// 		}
// 		else if(count % 3 === 0){
// 				count++;
// 				continue;
// 		}
// 		else if(count % 7 === 0){
// 				sum += count;
// 			}
// 			sum += count;
// 			count++;
// 	}
// 	return sum;
// }	
// console.log(messyMath(8));

/******Twelve-bar Blues******/
/*Write a function that console.logs the number 1, then "chick", then "boom", then chick, then 2
then "chick","boom"---continuing the same cycle for each number up to (included) 12.
*/
//#1

// function twelveBarBluesForLoop()
// {
//   for(var i = 1; i <=12; i++)
//   {
//     console.log(i);
//     for(var j = 1; j<=i;j++)
//     {
//       if(j % 2 === 1)
//       {
//         console.log("chick");
//       }
//       else if(j % 2 === 0)
//       {
//         console.log("boom");
//       }
//     }
//   }
// }
// twelveBarBluesForLoop();

//#2 twelve-bar blues

// function twelveBarBluesWhileLoop(num){
// 	var patern = 0;
// 	count = 1;

// 	while(count <= num){
// 		if(patern === 0){
// 			console.log(count);
// 			}
// 		else if(patern === 1){
// 			console.log("chick");
// 		}
// 		else if(patern === 2){
// 			console.log("boom");
// 		}
// 		else if(patern === 3){
// 			console.log("chick");
// 			patern = -1;
// 			count += 1;
// 		}
// 		patern += 1;

// 	}
// }
// console.log(twelveBarBluesWhileLoop(12));

// function twelveBarBluesForLoop(num){
// 	var arr = ["chick","boom","chick"]
// 	for(var i = 1; i <= 12; i++){
// 		console.log(i);
// 		for(var j = 0; j < arr.length;j++){
// 			console.log(arr[j]);
// 		}
// 	}
// }
// console.log(twelveBarBluesForLoop(12));

/****** Fibonacci sequence******/

// function fib(n)
// {
//     var arr = [];
//     for(var i = 0; i <= n; i++)
//     {
//         if(i === 0 || i === 1)
//         {
//             arr.push(i);
//             continue;
//         }
//         if(i > 1)
//         {
//             arr[i]= arr[i-2]+arr[i-1];
//         }
//     }
//     console.log(arr[arr.length -1]);
// }
// fib(7);
//#2 Fibonacci sequence

// function fib(n){
// 	var a = 0;
// 	var b = 1;
// 	var temp = 0;
// 	while(n >= 0){
// 		temp = a;
// 		a = a + b;
// 		b = temp;
// 		n --;
// 	}
// 	return b;

// }
// console.log(fib(5));

//???????????? function fibRecursive(n){
// 	if(n <= 1){
// 		return 1;
// 	return fibRecursive(n-1) + fibRecursive(n-2);
// 	}
// }
// console.log(fibRecursive(5));

// function sumToOne(num){

/******Sum to one******/
/* 1- turn "n" into a string => n.toString() method outcome = "123"
   2- split the string into individual digits .split() method outcome = ["1","2","3"]
   3- turn the string elements within the new array into numbers .math(Number) method
   outcome = [1,2,3]*/

// function sumToOne(n)
// {
    
//     var count = 0;
//     var split = n.toString().split('');
//     var array = split.map(Number);
//     for(var i = 0; i < array.length; i++)
//     {
//         for(var j = 0;j < array.length; j++)
//         {
//             count += array[j];
//         }   
//         n = count;
//         count = 0;
//         split = n.toString().split('');
//         array = split.map(Number);
//         console.log(array);
//         if(array.length > 1)
//         {
//             continue;
//         }
//         else if(array.length === 1)
//         {
//             console.log(array[0]);
//         }
//     }
// }
// sumToOne(928);//works with every other number but 928
///*****************get help someone to find a better solution**********************///




// //////////////////////found on github/////////////////////
// function sum2One(number){
//   var sum = getSum(number);
//   while(sum >= 10){
//     sum = getSum(sum);
//   }
//   return sum;
// }

// function getSum(number){
//   number += '';
//   var sum = 0;
//   for (var i = 0; i < number.length; i++) {
//     sum += Number(number[i]);
//   }
//   return sum;
// }

// console.log(getSum(928));

// var number = sum2One(928);
// console.log(number);
/////////////////////////////////////////

/******Clock Hand Angles******/
/*Create a clockHandAngles(seconds), that given a number of seconds since 12:00:00,
prints angles (in degrees) of the hour,minutes and second hands. 360 form a full rotation.
For input 3600 secs(equivalent to 1:00:00), print "Hour hand: 30degs. Minute hand: 0 degs
Second hand: 0 degs".*/
//there are 12h in a clock so each hour mark is 360/12 = 30deg
//there are 60 minutes in a clock so each minute is 360/60 = 6 deg
//there are 60 seconds in a clock so each second is 360/60 = 6 deg 
//extra => weekHand = rotates once evry week so 360/7 = 51.43 deg

// function clockHandAngles(seconds)
// {
//   var math = require('mathjs'); //remember this method to use math methods;//
//   var hourHand = 0;
//   var minuteHand = 0;
//   var secondHand = 0;
//   var weekHand = 0;
//   var secondsH = math.floor((seconds % 60));
//   var minutes = math.floor(seconds/60);
//   var hours = math.floor(minutes/60);
//   minutes = minutes % 60;
//   var days = hours / 24;
//   if( hours > 12)
//   {
//     if(days > 7)
//     {
//       weekHand = math.floor((days % 7)*51.43);
//     }
//     else
//     {
//         weekHand = math.floor(days * 51.43);
//     }
//       hourHand = (hours % 12 ) *30;
//       minuteHand = minutes * 6;
//       secondHand = secondsH * 6; 
//   }
//   else
//   {
//       hourHand = hours * 30;
//       minuteHand = minutes * 6;
//       secondHand = secondsH * 6;
//   }
//   return("Week hand: "+weekHand+" degs. Hour hand: " + hourHand + " degs. Minute hand: "+ minuteHand+ " degs. Second hand: "+secondHand+ " degs");
// }
// console.log(clockHandAngles(119730.65));

/******Is Prime******/
/*Return wether a given integer is prime. Prime numbers are only divisible by
themselves and 1.*/

// function isPrime(num)
// {
//     for(var i = 2; i < num; i++)
//     {
//         if(num % i === 0)
//         {
//             return false;
//         }
//     }
//     return num;

// }
// console.log(isPrime(30));

/******Rocking the Dojo Seatshirt******/
/*Let's say you want to get a $20(tax included) Dojo shirt, and friendly Josh gives
a 9% discount if you buy two, a nice 19% dicount if you buy 3, or a sweet 35% discount
if you buy 4 or more. He only accepts cash and says that he doesn't have coins, so you
should round up to the nearest dollar. Build function sweatShirtPricing(num) that, given
a number of sweatshirts returns the cost.*/

// function sweatShirtPricing(num)
// {
//     var math = require('mathjs');
//     var discount = {'a':0.09,'b':0.19,'c':0.35};
//     var netPrice = num * 20;
//     var cost = 0;
//     if(num >= 1)
//     {
//         if(num === 1)
//         {
//             cost = netPrice;
//             console.log('$'+cost);
//         }
//         if(num === 2)
//         { 
//            cost = math.ceil(netPrice - (netPrice * discount['b'])); 
//            console.log('$'+cost);
//         }
//         if(num === 3 )
//         {
//             cost = math.ceil(netPrice - (netPrice * discount['b'])); 
//             console.log('$'+cost);
//         }
//         if(num > 3)
//         {
//             cost = math.ceil(netPrice - (netPrice * discount['c'])); 
//             console.log('$'+cost);
//         }
//     }

// }
// sweatShirtPricing(1);

/******Extract-o-matic******/
/*Create the extractDigit(num,digitNum) function that given a number and a digit number
returns the numeral value of that digit. 0 represents the ones digit, 1 represents the 
tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7),
return 0.*/

// function extractDigit(num,digitNum)
// {
//     var math = require('mathjs');
//     var extDig = 0;
//     if(num < 0)
//     {
//         extDig = -(math.ceil(num / 10**digitNum) % 10);
//         console.log(extDig); 
//     }
//     else
//     {
//         extDig = (math.floor(num / 10**digitNum) % 10);
//         console.log(extDig);
//     }
// }
// extractDigit(-1824.35,2);

/******Most sigificant gift******/
/*Use While loop to bring the most significant digit into range where you can use 
the friendly % operator. The most significant digit is the leftmost non-zero digit 
of a number. Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.*/

// function mostSignificanDigit(num)
// {
//     var math = require('mathjs');
//     var mostSigDig = 0;
//     var i = 0;
//     if(math.abs(num)  < 1 && math.abs(num) > 0)
//     {
//         while(math.abs(num) < 1 && math.abs(num))
//         {
//             var digit = math.floor(num * 10)%10; 
//             if(math.abs(digit) >= 1)
//             {
//                 break;  
//             }
//             num = (num *10)%1
//         }
//         console.log(digit);
//     }
//     else
//     {
//         while(math.floor(num/10**i)% 10 > 0)
//         {
//             mostSigDig = math.floor(num/10**i)% 10;
//             i++;
//         }  
//         console.log(mostSigDig); 
//     }   
// }
// mostSignificanDigit(0.00987);

/*So, for numbers between 1 and 0, I created a while loop that checks:
1- If the absolute value of "num" is between 1 and 0,
2- Create a variable called digit : var digit = math.floor(num * 10)%10;
    ex: 0.00987 
    math.floor(0.00987 *10)%10 = 0.0987
3- If the result of step 2 is bigger or equal than 1 then the loop is broken
and the variable "digit" is printed. Else 0.00987 is multiplied by 10 % 1
    num = (num *10)%1
    So, first time the editor runs step 2, the variable "digit" takes the value 0.0987
    then goes to step 3 and confirms that 0.0987 isn't bigger or equal than 1, so it
    moves on to setting the value of the variable "num"(0.00987) to:
      num = (num *10)%1
      0.0987 = (0.00987 * 10)%1
4- repeat
   The while loop changes the value of "num" until it becomes 0.987. Once it reaches
   this value, it goes to step two and sets "digit" to be:
      var digit = math.floor(num * 10)%10;
      var digit = math.floor(0.987 * 10)%10 
      var digit = 9
    It then continues checking if digit is bigger or equal to one(which it is),
    breaks the loop and prints "digit."*/

/****Gaming fun(damentals)****/
/*
1-Create function rollOne() to return a randomly selected integer between 1 and 6(inclusive)*/
function rollOne()
{
    var math = require('mathjs');
    return math.round(math.random()*7);  
}
// console.log(rollOne());
/*
2-Create a function playFives(num), which should call rollOne() "num" times. Each time
it should print the value rollOne() returns, and if that value is 5, also print 
"That's good luck"*/
function playFives(num)
{
    for(var i = 1; i <= num; i++)
    {
        var random = rollOne();
        if(random === 5)
        {
            console.log(random + " That's good luck");
        }
        else
        {
            console.log(random);
        }
    }
}
// playFives(4);
/*
3-Create a new function named playStatistics(),which sould call rollOne() eight times
(but not call anything after each call).After the last of this eight calls,
it should print out the lowest and highest values that it received from rollOne, among
these eight calls.*/
var stats = {'max':0,'min':0,'sum':0,'avg':0}
function playStatistics(num)
{
    for(var i = 1;i <= num;i++)
    {
        var random = rollOne();
        stats['sum'] += random;
        if(stats['min'] === 0)
        {
            stats['min'] = num;
        }
        if(random > stats['max'])
        {
            stats['max'] = random;
        }
        if(random < stats['min'])
        {
            stats['min'] = random;
        }
    }
    stats['avg'] = stats['sum']/num;
    console.log("Highest Value: "+stats['max']);
    console.log("Lowest Value: "+stats['min']);  
}
// console.log(playStatistics());
/*
4- Make a copy of playStatistics() and add code to playStatistics2(),so that at the end
(in addition to printing high,low rolls), it also prints the total sum of all eight
digits*/

// function playStatistics2()
// {
//     console.log(playStatistics(6));   
//     console.log("sum: "+ stats['sum']);
// }
// playStatistics2();

/*
5- Copy playStatistics2() and add code to it to make playStatistics3(), so that it will
roll as many times as you want, instead of always doing eight times.*/

/*I did that in step 3*/


/*
6- Make a copy of playStatistics3() and change it to create playStatistics4(num)
so that at the end instead of printing the total sum, it prints the average roll.*/

function playStatistics4()
{
    console.log(playStatistics(6));   
    console.log("avg: "+ stats['avg']);
}
// playStatistics4();

/*You finally cracked the code!!!*/

/********Statistics Until Doubles**********/
/*Implement a '20-sided die' that randomly returns integers between 1 and 20 inclusive.
Roll these, tracking statistics until you get a value twice. Display number of rolls,
min, max, and average.*/
var stats = {'max':0,'min':20,'sum':0,'avg':0,'rolls':0};

function die20()
{
    var math = require('mathjs');
    return math.round(math.random()*20)+1;  
}

function StatsUntilDoubles()
{
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var object = 
    {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,
    13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0};
    for(var i = 1; i <= 20; i++)
    {
        if(object[j] === 2)
        {
            break;
        }
        var random = die20();//roll the dice
        console.log(random);
        stats['rolls'] += 1;//count the roll
        stats['sum'] += random;//sum the random value
        if(stats['min'] === 0)
        {
            stats['min'] = 20;
        }
        if(random > stats['max'])
        {
            stats['max'] = random;
        }
        if(random < stats['min'])
        {
            stats['min'] = random;
        }
        for(var j = 0; j <=arr.length-1; j++)
        {
            if (arr[j]=== random)
            {
                    object[j+1] += 1;  
            }
            if(object[j] === 2)
            {
                break;
            }
        }
    }
    console.log(object);
    stats['avg']= stats['sum']/stats['rolls'];
    console.log("Number of rolls: "+stats['rolls']);
    console.log("Highest Value: "+stats['max']);
    console.log("Lowest Value: "+stats['min']);
    console.log("Average: "+stats['avg']);
}
// StatsUntilDoubles();

/*****Claire is where?*****/
/*For this challenge create four functions(reset,moveBy,xLocation,and yLocation)
to track the travels of Claire, a wanderer. Calling "reset" moves Claire back to the 
origin (0,0). The moveBy(xOffset,yOffset) function moves her by those ammounts, in 
those directions. Finally, xLocation() and yLocation() return how far Claire is from 
home, in X and Y directions respectively. After the calls of reset(),moveBy(1,-2),and 
moveBy(3,1), subsequently calling xLocation()and yLocation() should return 4 and -1.*/
var coordinates = [0,0]
var x = coordinates[0];
var y = coordinates[1];
var distanceFromHome = 0;
function reset()
{
    x = 0;
    y = 0;
    return coordinates ;
}

function moveBy(xOffset,yOffset)
{
    x += xOffset;
    y += yOffset;
}

function xLocation()
{
    return x;
}

function yLocation()
{
    return y;
}

// moveBy(1,-2);
// moveBy(3,1);
// console.log(xLocation());
// console.log(yLocation());

/*
second: create distFromHome().Assuming she moves diagonally , return her distance
from home.*/

function distFromHome()
{
    distanceFromHome = math.floor(math.sqrt(math.pow(x,2)+math.pow(y,2)));
    return distanceFromHome;
}
// console.log(distFromHome());

/*****Date, on a Desert Island*****/
/*After a particularly fabulous New Year's Eve to end 2016, Eduardo wakes up to find
himself stranded on a desert island. He misses his home in Burbank, but at least now 
he can spend plenty of time outdoors-and you can't beat the commute! To pass the time
until he is rescued, he counts sunrises.*/

/*1 Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum)
function that given a number between 1 and 7, will console.log a string containing
the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement*/

/*2 Expand weekdayNum() to create weekdayName(weekdayNum) accepting numbers up to 365.
Return weekday as before, given number of days total. "Sunday" still correspond to 1.*/

function weekdayName(weekdayNum)
{
    if (weekdayNum > 7)
    {
        for(var i = weekdayNum; i >=1; i-=7)
        {
            if(i >0 && i < 8)
            {
                weekdayNum = i;
                break;
            }
        }
    }

    var day;
    switch (weekdayNum) {
        case 1:
          day = "Sunday";
          break;
        case 2:
          day = "Monday";
          break;
        case 3:
           day = "Tuesday";
          break;
        case 4:
          day = "Wednesday";
          break;
        case 5:
          day = "Thursday";
          break;
        case 6:
          day = "Friday";
          break;
        case 7:
          day = "Saturday";
      } 
      return day; 
}
// weekdayName(361);

/*3 Create a new function someDays() that calls weekdayName() seventeen times, 
with randomly generated integers as high as 365. Log each result string. If it's
a weekday add the phrase "Woork hard!", and if it is a weekend day, add the phrase
"Enjoy your day off!"*/
var message;
function someDays()
{
    for(var i = 1; i <= 17; i++)
    {
        var day = weekdayName(math.round(math.random()*365)+1);
        console.log(day);
        switch(day)
        {
            case "Sunday":
                message = "Enjoy your day off"
                break;
            case "Monday":
                message = "Work hard!"
                break;
            case "Tuesday":
                message = "Work hard!"
                break;
            case "Wednesday":
                message = "Work hard!"
                break;
            case "Thursday":
                message = "Work hard!"
                break;
            case "Friday":
                message = "Work hard!"
                break;
            case "Saturday":
                message = "Enjoy your day off"
                break;
        }
        console.log(message)
    }
    
}
// someDays();

/*4- Build a function monthName(monthNum) that given a number from 1 to 12, returns
a string containing month for that number("May" corresponds to 5). Use an array 
without loops.*/

var months = ["January","February","March","April","May","June","Julie","August","September","October","November","December"]
function monthName(monthNum)
{
    var month;
    switch(monthNum)
    {
        case 1:
            month = months[0];
            break;
        case 2:
            month = months[1];
            break;
        case 3:
            month = months[2];
            break;
        case 4:
            month = months[3];
            break;
        case 5:
            month = months[4];
            break;
        case 6:
            month = months[5];
            break;
        case 7:
            month = months[6];
            break;
        case 8:
            month = months[7];
            break;
        case 9:
            month = months[8];
            break;
        case 10:
            month = months[9];
            break;
        case 11:
            month = months[10];
            break;
        case 12:
            month = months[11];
    }
    return month;
}
// console.log(monthName(12));

/*5- Expand monthName() to create monthToDays(monthNum) returning the number of days
in that month in the year of 2017. Hint: Use a switch statement for the days in each
month*/

function monthToDays(monthNum)
{
    var month;
    var days;
    switch(monthNum)
    {
        case 1:
            month = months[0];
            break;
        case 2:
            month = months[1];
            break;
        case 3:
            month = months[2];
            break;
        case 4:
            month = months[3];
            break;
        case 5:
            month = months[4];
            break;
        case 6:
            month = months[5];
            break;
        case 7:
            month = months[6];
            break;
        case 8:
            month = months[7];
            break;
        case 9:
            month = months[8];
            break;
        case 10:
            month = months[9];
            break;
        case 11:
            month = months[10];
            break;
        case 12:
            month = months[11];
    }
    console.log(month);
    switch(month)
    {
        case "January":
            days = 31;
            break;
        case "February":
            days = 28;
            break;
        case "March":
            days = 31;
            break;
        case "April":
            days = 30;
            break;
        case "May":
            days = 31;
            break;
        case "June":
            days = 30;
            break;
        case "Julie":
            days = 31;
            break;
        case "August":
            days = 31;
            break;
        case "September":
            days = 30;
            break;
        case "October":
            days=31;
            break;
        case "November":
            days = 30;
            break;
        case "December":
            days = 31;     
    }
    console.log("There were "+days+" days, in "+month+" of 2017.")
}
// monthToDays(10);

/*6- Despite using his ember expertise to create a glowing SOS visible from space,
the days go by and sadly Edwardo is still not rescued. Is it spring yet? It might
as well be. Build on monthName() to create dayToMonth(dayNum). If given a day number
since the year began, return the current month (Assume it is not a leap year).
Given 75, return "March".*/

var months = ["January","February","March","April","May","June","Julie","August","September","October","November","December"]
function dayToMonth(dayNum)
{
    var month;
    var days;
    switch(true)
    {
        case (dayNum <= 31):
            month = months[0];
            break;
        case (dayNum > 31 && dayNum <= 59):
            month = months[1];
            break;
        case (dayNum > 59 && dayNum <= 90):
            month = months[2];
            break;
        case (dayNum > 90 && dayNum <= 120):
            month = months[3];
            break;
        case (dayNum > 120 && dayNum <= 151):
            month = months[4];
            break;
        case (dayNum > 151 && dayNum <= 181):
            month = months[5];
            break;
        case (dayNum > 181 && dayNum <= 212):
            month = months[6];
            break;
        case (dayNum > 212 && dayNum <= 243):
            month = months[7];
            break;
        case (dayNum > 243 && dayNum <= 273):
            month = months[8];
            break;
        case (dayNum > 273 && dayNum <= 304):
            month = months[9];
            break;
        case (dayNum > 304 && dayNum <= 334):
            month = months[10];
            break;
        case (dayNum > 334 && dayNum <= 365):
            month = months[11];
    }
    return month;
}
// console.log(dayToMonth(75));

/*7- Eduardo builds a Dojo bootcamp on the island. Initially his students only find 
Ninja gold in caves but eventually even his tree sloths can write code quickly! Dojo
clases meet Monday thru Friday, so let's incorporate weekday to our calculations.
Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full
date string. He hardly remembers that fateful New Year's eve party, but he knows it 
was a Saturday. Given 142, return "Monday, May 22, 2017"*/

function fullDate(dayNum)
{
    var month;
    var monthDay;
    var weekdayNum;
    var day;
    if (dayNum > 7)
    {
        for(var i = dayNum; i >=1; i-=7)
        {
            if(i >0 && i < 8)
            {
                weekdayNum = i;
                break;
            }
        }
    }
    else
    {
        weekdayNum = dayNum;
    }
    switch (weekdayNum) {
        case 1:
          day = "Sunday";
          break;
        case 2:
          day = "Monday";
          break;
        case 3:
           day = "Tuesday";
          break;
        case 4:
          day = "Wednesday";
          break;
        case 5:
          day = "Thursday";
          break;
        case 6:
          day = "Friday";
          break;
        case 7:
          day = "Saturday";
      }
    switch(true)
    {
        case (dayNum <= 31):
            monthDay = dayNum;
            month = months[0];
            break;
        case (dayNum > 31 && dayNum <= 59):
            monthDay = dayNum - 31;
            month = months[1];
            break;
        case (dayNum > 59 && dayNum <= 90):
            monthDay = dayNum - 59;
            month = months[2];
            break;
        case (dayNum > 90 && dayNum <= 120):
            monthDay = dayNum - 90;
            month = months[3];
            break;
        case (dayNum > 120 && dayNum <= 151):
            monthDay = dayNum - 120;
            month = months[4];
            break;
        case (dayNum > 151 && dayNum <= 181):
            monthDay = dayNum - 151;
            month = months[5];
            break;
        case (dayNum > 181 && dayNum <= 212):
            monthDay = dayNum - 181;
            month = months[6];
            break;
        case (dayNum > 212 && dayNum <= 243):
            month = months[7];
            break;
        case (dayNum > 243 && dayNum <= 273):
            monthDay = dayNum - 243;
            month = months[8];
            break;
        case (dayNum > 273 && dayNum <= 304):
            monthDay = dayNum - 273;
            month = months[9];
            break;
        case (dayNum > 304 && dayNum <= 334):
            monthDay = dayNum - 304;
            month = months[10];
            break;
        case (dayNum > 334 && dayNum <= 365):
            monthDay = dayNum - 334;
            month = months[11];
    }
    console.log(day+", "+ month +" "+ monthDay + ", 2017")
}
// fullDate(245);

/*8- Time flies when you're at a Dojo - months in fact. Build fullDate2(dayNum) that
will be given a four digit integer: the days that have past since december 31, 2016.
This number can stretch into the future years! You can assume that any year number
divisible by 4 is a leap year and has a 29 day February.
Given 8475, return "Thursday,March 15, 2040"*/

fullDate2(dayNUM)
{
    var month;
    var monthDay;
    var weekdayNum;
    var day;
    var years;
    if(dayNum > 365)
    {
        years = dayNUM/365;
    }
}

function leapYear(year)
{
	if(year % 4 === 0)
	{
		if(year % 100 === 0)
		{
			if(year % 400 === 0)
			{
				console.log("It's a leap year!!!");
			}
			else
			{
				console.log("Not a leap year.");
			}
		
		}
		else
		{
			console.log("It's a leap year!!!");
		}
	}
	else
	{
		console.log("Year "+ year + " Isn't a leap year");
	}
}
