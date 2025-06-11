const quizData = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Tool Markup Language", "HyperText Markup Language", "HomeText Markup Language", "None of these"],
    answer: 1
  },
  {
    question: "Which language styles web pages?",
    choices: ["Java", "C++", "CSS", "Python"],
    answer: 2
  },
  {
    question: "What does DOM stand for?",
    choices: ["Document Object Model", "Display Object Mode", "Digital Ordinance Model", "Desktop Oriented Mode"],
    answer: 0
  }
];

const questionEl = document.getElementById("question");
const choicesEl = document.querySelectorAll(".choice");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");
const quizEl = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  choicesEl.forEach((btn, index) => {
    btn.textContent = current.choices[index];
    btn.className = "choice";
  });
  selectedAnswer = null;
  answered = false;
  nextBtn.disabled = true;
}

choicesEl.forEach(btn => {
  btn.addEventListener('click', () => {
    if (answered) return;

    selectedAnswer = parseInt(btn.dataset.index);

    const correctIndex = quizData[currentQuestion].answer;

    answered = true;

    choicesEl.forEach((choice, index) => {
      choice.classList.remove("selected");

      if (index === correctIndex) {
        choice.classList.add("correct"); // highlight correct answer
      } 
      if (index === selectedAnswer && selectedAnswer !== correctIndex) {
        choice.classList.add("wrong"); // highlight wrong selected
      }
    });

    if (selectedAnswer === correctIndex) {
      score++;
    }

    nextBtn.disabled = false;
  });
});

nextBtn.addEventListener('click', () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizEl.classList.add('hidden');
    resultEl.classList.remove('hidden');
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
  }
});

restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  score = 0;
  quizEl.classList.remove('hidden');
  resultEl.classList.add('hidden');
  loadQuestion();
});

loadQuestion();
