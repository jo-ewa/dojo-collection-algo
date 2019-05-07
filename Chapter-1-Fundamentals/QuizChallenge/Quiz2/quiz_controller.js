function Quiz(questions){
this.score = 0;
this.questions = questions;
this.questionIndex = 0;
}

Quiz.prototype.questionIndex = function (){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function (){
    return this.questions.length === this.questionIndex;
}

Quuiz.prototype.guess = function(answer){
    this.questionIndex++;

    if(this.questionIndex().correctAnswer(answer))
    {
        this.score++;
    }
}