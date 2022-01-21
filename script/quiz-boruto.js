class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
// Question = (question , [button1, button2, button3, button4], resultat)
let questions = [
    new Question("Salut comment ca va, trkl ou quoi la famille les amis woulah, <br>jejejejejejejejejejejejeje j'adore les espagnols", ["Rep 1", "Rep 2", "Rep 3", "Rep 4"], "Rep 1"),
    new Question("test 2", ["Rep 5", "Rep 6", "Rep 7", "Rep 8"], "Rep 6"),
    new Question("test 3", ["Rep 9", "Rep 10", "Rep 11", "Rep 12"], "Rep 11"),
    new Question("test 4", ["Rep 13", "Rep 14", "Rep 15", "Rep 16"], "Rep 16"),
    new Question("test 5", ["Rep 17", "Rep 18", "Rep 19", "Rep 20"], "Rep 20")
];

console.log(questions);

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

// Regroup all  functions relative to the App Display
const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function() {
        endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
        this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess) => {
                document.getElementById(id).onclick = function() {
                    quiz.guess(guess);
                    quizApp();
                }
            }
            // display choices and handle guess
        for (let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
        }
    },
    progress: function() {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
};

// Game logic
quizApp = () => {
        if (quiz.hasEnded()) {
            display.endQuiz();
        } else {
            display.question();
            display.choices();
            display.progress();
        }
    }
    // Create Quiz
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);