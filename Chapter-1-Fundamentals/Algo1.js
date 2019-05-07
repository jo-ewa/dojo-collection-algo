// //*****Setting and swapping Algorithm*****//

//Step number 1
//Setting the variables

var myNumber = 42;
//the editor reads the first line and creates a variable called myNumber and asigns it a value of
//42(number)
var myName = "Alberto";
//the second line is the creation of a new variable called myName with the value of "Alberto"(string)
console.log("My name is " + myName + " and I am " + myNumber + " Years old");
//Console.log tests that my two functions have been created. I went to the terminal and typed "node Algo1.js"

//step number 2
//Swaping the values of the variables

//We swap by creating a temporary variable
var temp = myNumber;
//Now that the variable temp holds the value of myNumber(42) 
//I can modify myNumber by assigning it a different value which in this case will be 
// myName("Alberto")
var myNumber = myName;
//At this point, the variables myNumber and myName hold the same value ("Alberto").
//In orer to complete the swap, all I have to do is to set the value of myName to temp.
var myName = temp;
//this will conclude the swapping. Now we use the command "node Algo1.js" on the terminal
//to test results.
console.log("My name is " + myName + " and I am " + myNumber + " Years old");

// //*****Print and Count Algorithm*****//
// //print all integers multiples of 5, from 512 to 4096. log how many there were.

//step 1
//create a count variable that will add up the multiples of 5
var count = 0;
//step 2
//create a loop that checks evry number from 512 to 4096 and add the multiples 
//of 5 to the count variable
for(var i = 512;i < 4096;i += 1)//this loop moves through every number in the range//
{
	if(i % 5 === 0)//this line tests if the current value of i divided by five would residue 0(% operator)//
	{
		console.log(i);//this prints evry integer tested to be a multiple of 5//
		count += 1;//this one adds 1 to the variable count//
	}
}
console.log(count);//Once the loop is done moving through the range then we can print count to know how many
//numbers were multiples of 5.//


//*****Print -52 to 1066 Algorithm*****//
//Print integers from -52 to 1066 using a FOR loop.

//the first thing that the editor does when reading the code (from left to right), is assign i a value
// var i = -52, then it tests if the current value of i is smaller or equal to 1066, which if it proves to be,
// then the editor continues to read the order of printing that value console.log(i); and then goes back up
//to increment the value of i by one i += 1.
for(var i = -52; i <= 1066; i += 1)
{
	console.log(i);
}

//*****Multiples of 6 Algorithm*****//
//print multiples of 6 up to 60,000, using a WHILE loop

//While loops are useful when we're not sure how long should we loop through the data set.
//when using while loops, we create the i variable outside of it.
var i = 6;
//Then we create the condition that should be met in order to loop.
while(i <= 60000)
{
	if(i % 6 === 0)//test if the division of the current value of i over 6 will residue 0//
	{
		console.log(i);
	}
	i += 1;
}


//*****Don't worry be happy Algorithm*****//
//Create a be cheerful()(function). Within it, console.log
//string "good morning!" call it 98 times

//We create a function by starting with the 'function statement', then we name the function 'beCheerful'
//the following parenthesis will hold parameters or arguements. 
function beCheerful(num)//num, will take any value we give it when we call the function, in this case 98.
{
	//wherever we see num within the function, we can read as a 98
	for(var i = 1; i <= num; i+=1)
	{
		console.log("Good morning!")
	}
}
beCheerful(98);//this is the calling statement and we told it to give num the value of 98.


//*****Counting the Dojo Way Algorithm*****//
//Print integers 1 to 100. if divisible by 5
//print "Coding" instead. if by 10, also print "Dojo"

for(var i=1; i <=100; i+=1)
{
	if(i % 5 === 0 && i % 10 ===0)//the following lines will only be run if both conditions are met AND operator(&&)
	{
		console.log("CodingDojo");
	}
	else if( i % 5 === 0) //This line checks multiples of 5 only
	{
		console.log("Coding");
	}
	else //this else will print any other number that doesn't prove true to the previous conditions
	{
		console.log(i);
	}
}

//*****Multiples of Three-but not All Algorithm*****//
//Using FOR, print multiples of 3 from -300 to 0.
//Skip -3 and -6

for(var i =-300;i <=0; i++)//Create a loop that moves through the range(-300 to 0)//
{
	if(i % 3 ===0)//first check for multiples of three//
	{
		if(i == -3 || i == -6)//If a multiple of three, check if the number is -3 OR(||) -6//
		{
			continue;//If -3 OR -6, then continue(jump)//
		}
		console.log(i);
	}
}

//*****What do you Know? Algorithm*****//
//Your function will be given an input parameter "incoming".
//Please console.log this value.

function whatDoYouKnow(input)
{
	console.log(input);
}
whatDoYouKnow("incoming");

//*****Printing Integers with While Algorithm*****//
//Print integers from 2000 to 5280 using while

var i = 2000;

while(i<=5280)
{
	console.log(i);
	i += 1;
}

//*****Whoa that sucker's huge Algorithm*****//
// Add odd integers from -300,000 to 300,000
//and console.log the final sum. Is there a shortcut?

var sum = 0;
for(var i = -300000;i<=300000; i+=1)
{
	if(i%2 == 1)
	{
		sum = sum + i;
	}
}
console.log(sum);

//*****You say it's your birthday Algorithm*****//
//if 2 given numbers represent your birth month and day in either order
//log "How did you know", else log "just another day".

function itsYourBirthday(m,d)
{
	if(m === 10 && d===27)
	{
		console.log("How did you know?");
	}
	else
	{
		console.log("Just another day...")
	}
}
itsYourBirthday(10,28);

//*****Count down by fours Algorithm*****//
//Log positive numbers starting at 2016, counting down by fours(exclude 0)
//without a FOR loop

var i=2016;
while(i > 0 && i <= 2016)
{
	console.log(i);
	i -= 4;
}


//*****Leap Year Algorithm*****//
//Write a function that determines weather a given year is a leap year.
//if a year is divisible by four, it's a leap year
//unless it is divisible by 100. However , if it os divisible by 400, then it is.

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
leapYear(2007);


//*****Flexible Countdown Algorithm*****//
//Given lowNum, highNum, mult, print multiples of mult
//from highNum down to lowNum using  FOR.
// For(2,9,3) print 9 6 3 (on successive lines).

function flexibleCountDown(lowNum,highNum,mult)
{
	for(var i = highNum; i >= lowNum; i-=1)
	{
		if(i % mult === 0)
		{
			console.log(i);
		}
		else
		{
			continue;
		}
	}
}
flexibleCountDown(2,9,3);


//*****The Final Countdown Algorithm*****//
//Given four parameters (p1,p2,p3,p4),
//print the multiples of p1, starting at param 2  and extending to p3.
//Exeption: if a multiple is equal to p4 then skip it.
//Do this using a WHILE. Given (3,5,17,9), print 6,12,15

function theFinalCountdown(p1,p2,p3,p4)
{
	var i = p2;
	while(i <= p3)
	{
		if(i % p1 === 0 && i != p4)
		{
			console.log(i);
		}
		i += 1;
	}
}
theFinalCountdown(3,5,17,9);


