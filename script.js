
// ARRAY OF OBJECTS
const questions = [
    {
        question: "1. What is the capital of Somalia?",
        options: ["Hargeisa", "Mogadishu", "Kismayo", "Garowe"],
        answer: "Mogadishu"
    },
    {
        question: "2. Which language runs in a web browser?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "3. Which symbol is used for an array?",
        options: ["{}", "[]", "()", "<>"],
        answer: "[]"
    },
    {
        question: "4. Which keyword creates a constant?",
        options: ["var", "let", "const", "if"],
        answer: "const"
    },
    {
        question: "5. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "6. Which method selects an element by ID?",
        options: [
            "getElementById()",
            "getClass()",
            "queryById()",
            "selectId()"
        ],
        answer: "getElementById()"
    },
    {
        question: "7. Which statement checks a condition?",
        options: ["for", "if", "print", "array"],
        answer: "if"
    },
    {
        question: "8. Which data type stores true or false?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: "Boolean"
    }
];

// VARIABLES
let currentQuestion = 0;
let score = 0;

// DISPLAY QUESTION
function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    document.getElementById("answers").innerHTML = "";

    document.getElementById("score").innerText = "Score: " + score;

    document.getElementById("result").innerText = "";

    document.getElementById("nextBtn").style.display = "none";

    // DISPLAY OPTIONS
    q.options.forEach(function(option) {

        let button = document.createElement("button");

        button.innerText = option;

        button.onclick = function() {
            checkAnswer(option);
        };

        document.getElementById("answers").appendChild(button);

    });
}

// CHECK ANSWER USING IF/ELSE
function checkAnswer(selectedAnswer) {

    let correctAnswer = questions[currentQuestion].answer;

    let buttons = document.querySelectorAll("#answers button");

    buttons.forEach(function(button) {

        button.disabled = true;

        if (button.innerText === correctAnswer) {
            button.style.background = "green";
        }
        else if (button.innerText === selectedAnswer) {
            button.style.background = "red";
        }

    });

    if (selectedAnswer === correctAnswer) {

        score++;

        document.getElementById("result").innerText =
            "Correct! 🎉";

    } else {

        document.getElementById("result").innerText =
            "Wrong! Correct answer: " + correctAnswer;

    }

    document.getElementById("score").innerText =
        "Score: " + score;

    document.getElementById("nextBtn").style.display = "block";
}

// NEXT QUESTION
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showFinalResult();

    }
}

// FINAL RESULT
function showFinalResult() {

    document.getElementById("question").innerText =
        "Quiz Completed! 🏆";

    document.getElementById("answers").innerHTML = "";

    document.getElementById("nextBtn").style.display = "none";

    let percentage = (score / questions.length) * 100;

    if (percentage >= 80) {

        document.getElementById("result").innerText =
            "Excellent! You are a champion! 🥇";

    } else if (percentage >= 50) {

        document.getElementById("result").innerText =
            "Good job! Keep practicing! 👍";

    } else {

        document.getElementById("result").innerText =
            "Keep learning! You can do better! 💪";

    }

    document.getElementById("score").innerText =
        "Your final score: " + score + " / " +
        questions.length + " (" + percentage + "%)";

    document.getElementById("restartBtn").style.display = "block";
}

// RESTART GAME
function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("restartBtn").style.display = "none";

    showQuestion();
}

// START GAME
showQuestion();
