/**
 * Function constructor for Question class
 * @param {String} question the qestion to be asked
 * @param {Array} choices array of answers to the question
 * @param {Number} ansKey index of answer in choices
 */
export default function Question(question, choices, ansKey) {
    this.question = question;
    this.choices = choices;
    this.ansKey = ansKey;
}

/**
 * Return if user guess is correct
 * @param {Number} guessKey index of user guess
 * @returns 
 */
Question.prototype.isCorrect = function (guessKey) {
    return guessKey === this.ansKey;
};