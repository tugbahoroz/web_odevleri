const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerHTML = "<span></span>" + currentQuizData.a;
  b_text.innerHTML = "<span></span>" + currentQuizData.b;
  c_text.innerHTML = "<span></span>" + currentQuizData.c;
  d_text.innerHTML = "<span></span>" + currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.value;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
    document.getElementById(answerEl.id + "_text").classList.remove("correct");
    document.getElementById(answerEl.id + "_text").classList.remove("wrong");
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (!answer) {
    alert("Lütfen bir cevap seçin!");
    return;
  }

  const currentCorrect = quizData[currentQuiz].correct;

  // Doğru cevabı yeşil yap, yanlış cevabı kırmızı yap
  answerEls.forEach((answerEl) => {
    const label = document.getElementById(answerEl.id + "_text");
    if (answerEl.value === currentCorrect) {
      label.classList.add("correct");
    } else if (answerEl.checked) {
      label.classList.add("wrong");
    }
  });

  if (answer === currentCorrect) {
    score++;
  }

  // 1 saniye bekle ve bir sonraki soruya geç
  setTimeout(() => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }, 1000);
});
