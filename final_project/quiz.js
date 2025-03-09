const quizData = [
    {
        question: "What is the first stage of a butterfly's life cycle?",
        options: ["Egg", "Caterpillar", "Pupa", "Adult"],
        answer: "Egg"
    },
    {
        question: "What do butterflies primarily feed on?",
        options: ["Leaves", "Nectar", "Grass", "Fruits"],
        answer: "Nectar"
    },
    {
        question: "Which of these is NOT a type of butterfly?",
        options: ["Monarch", "Swallowtail", "Dragonfly", "Painted Lady"],
        answer: "Dragonfly"
    },
    {
        question: "How many wings does a butterfly have?",
        options: ["2", "4", "6", "8"],
        answer: "4"
    },
    {
        question: "Where do butterflies lay their eggs?",
        options: ["On flowers", "On leaves", "In the soil", "Under rocks"],
        answer: "On leaves"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').innerHTML = '';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResult();
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    
    quizContainer.innerHTML = `
        <h3 style="color: #228B22;">${questionData.question}</h3>
        ${questionData.options.map(option => 
            `<button 
                onclick="checkAnswer('${option}')" 
                style="padding: 10px; margin: 5px; border: none; border-radius: 5px; background-color: #FFD700; color: #333; cursor: pointer;">
                ${option}
            </button>`
        ).join('')}
    `;
}

function checkAnswer(selectedAnswer) {
    const questionData = quizData[currentQuestionIndex];
    if (selectedAnswer === questionData.answer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h3 style="color: #228B22;">You scored ${score} out of ${quizData.length}!</h3>
        <button onclick="startQuiz()" style="padding: 10px; margin: 10px; border: none; border-radius: 5px; background-color: #FF6347; color: white; cursor: pointer;">
            Restart Quiz
        </button>
    `;
}
