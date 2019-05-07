/*Create a fill-in-the-blank quiz game. Ask the user's name, then refer to the user by name as you ask him/hera series
of questions that you have stored in an array. Use the prompt() function to get each input from the user and compare it to
to the answer you expected. When the user enteres 'Q'(for quit), or perhaps when the user hits [cancel], exit the game
and print the statistics of the game to the console: user name, number of questions answered and correct. */

var quiz = [
    [1, "What is the capital of Barbados?","bridgetown"],
    [2,"Who is the prime minister of Barbados?","freundel stuart"],
    [3,"What is the national dish of Barbados?","flying fish"],
    [4,"What is Barbado's chief export?","sugar"],
    [5,"What is the name of the annual festival that celebrates the 'Cutting of the last Canes'?","crop over"]
];

var answer;
var response;

// answer = prompt(quiz[0][1])
// response = answer.toLocaleLowerCase();
var corect = 0;
var wrong = 0;
for(var i = 0; i < quiz.length; i++)
{
    answer = prompt(quiz[i][1])
    response = answer.toLocaleLowerCase();
    if(response === quiz[i][2])
    {
        document.write(`<h2>You got question ${quiz[i][0]} correct</h2>`);
        correct += 1;
    }
    else
    {
        document.write(`<h2>You got question ${quiz[i][0]} wrong</h2>`);
        wrong += 1;
    } 
}
