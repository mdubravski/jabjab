export default function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.curIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.curIndex];
};

Quiz.prototype.nextIndex = function () {
    this.curIndex++;
};

Quiz.prototype.hasEnded = function () {
    return this.curIndex === this.questions.length;
};

Quiz.prototype.guess = function (userGuess) {
    if (this.getCurrentQuestion().isCorrect(userGuess)) {
        this.score++;
    }
};