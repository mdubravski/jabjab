import Question from "./Question.js";
import Quiz from "./Quiz.js";

// Revealing Module Design Pattern

const q1 = new Question(
    'Whats 1 + 1?',
    [2,3,4,7],
    0
);

const q2 = new Question(
    'Whats 4 + 4?',
    [10,7,4,8],
    3
);

const quiz = new Quiz([q1,q2]);

