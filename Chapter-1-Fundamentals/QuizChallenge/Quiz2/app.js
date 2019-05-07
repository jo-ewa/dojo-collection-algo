function populate(){
    if(quiz.isEnded){
        //showScores();//
    }
    else
    {
        //show question//
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices//
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++)
        {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
        }
    }
}

var questions = [
    new Question("Which one is not an object oriented programming language?",["Java","C#","C++","C"],"C"),
    new Question("Which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
    new Question("There are______ main components of object oriented programming.",["1","2","6","4"],"4"),
    new Question("Which language is used for web apps?",["PHP","Python","Javascript","All"], "All"),
    new Question("MVC is a_____.",["Language","Library","Framework","All"],"Framework")  

];

var quiz = new Quiz(questions);

populate();