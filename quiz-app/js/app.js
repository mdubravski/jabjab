import Question from "./Question.js";
import Quiz from "./Quiz.js";

// Revealing Module Design Pattern
const App = (() => {
    // cache the DOM
    const quizEl = document.querySelector('.quiz');
    const quizQuestionEl = document.querySelector('.quiz__question');
    const trackerEl = document.querySelector('.quiz__tracker');
    const taglineEl = document.querySelector('.quiz__tagline');
    const choicesEl = document.querySelector('.quiz__choices');
    const progressInnerEl = document.querySelector('.quiz__progress__bar__inner');
    const nextButtonEl = document.querySelector('.next');
    const restartButtonEl = document.querySelector('.restart');


    // generate questions
    const q1 = new Question('Who was the first president of the USA?', ['Abe Lincoln', 'George Bush', 'George Washington', 'Joe Biden'], 2);
    const q2 = new Question('When was Javascript Created?', [2019, 2007, 1984, 2010], 3);
    const q3 = new Question('What does CSS stand for?', ['County Sheriff Service', 'Cascasing Style Sheet', 'Cool Silver Submarines', 'Cold Sinus Stuff'], 1);
    const q4 = new Question('What Does HTML stand for?', ['Hyper Text Markup Language', 'How To Make Logs', 'Howard Town Master Logo', 'House Tools Main Leg'], 0);
    const q5 = new Question('What is 2 + 2', [4, 1, 6, 'NaN'], 0);

    // make quiz
    let quiz = new Quiz([q1, q2, q3, q4, q5]);

    const setValue = (elem, value) => {
        elem.innerHTML = value;
    };

    const renderQuestion = _ => {
        setValue(quizQuestionEl, quiz.getCurrentQuestion().question);
    };

    const renderChoices = _ => {
        let markup = '';
        const currentChoices = quiz.getCurrentQuestion().choices;
        currentChoices.forEach((elem, index) => {
            markup += `
                <li class="quiz__choice">
                    <input id="choice__${index}" type="radio" name="choice" class="quiz__input">
                    <label for="choice__${index}" class="quiz__label">
                    <i></i>
                        <span>${elem}</span>
                    </label>
                </li>
            `;
        });
        setValue(choicesEl, markup);
    };

    const renderTracker = _ => {
        setValue(trackerEl, `${quiz.curIndex} of ${quiz.questions.length}`);
    }

    const getPercentage = (numerator, denom) => {
        return Math.round((numerator / denom) * 100);
    }

    const launch = (width, maxPercent) => {
        let loadingBar = setInterval(() => {
            if(width > maxPercent){
                clearInterval(loadingBar);
            }else{
                width++;
                progressInnerEl.style.width = `${width}%`;
            }
        }, 10);
    }

    const renderProgress = _ => {
        // 1. get width
        const currentWidth = getPercentage(quiz.curIndex, quiz.questions.length);
        // 2.make bar go from 0 -> width
        launch(0, currentWidth);
    };
    


    // render DOM
    const renderAll = _ => {
        if (quiz.hasEnded()) {
            // renderEndScreen()
        } else {
            // render question
            renderQuestion();
            // render choices
            renderChoices();
            // render tracker
            renderTracker();
            // render progress bar
            renderProgress();
        }
    };

    return {
        renderAll: renderAll
    };
})();

App.renderAll();