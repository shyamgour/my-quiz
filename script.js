const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "Python",
    c: "C++",
    d: "JavaScript",
    correct: "d"
  }
];

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const q = quizData[currentQuiz];
  document.getElementById("question").textContent = q.question;
  document.getElementById("a_text").textContent = q.a;
  document.getElementById("b_text").textContent = q.b;
  document.getElementById("c_text").textContent = q.c;
  document.getElementById("d_text").textContent = q.d;
  document.querySelectorAll("input[name='answer']").forEach(input => input.checked = false);
}

function getSelected() {
  let answer;
  document.querySelectorAll("input[name='answer']").forEach((input) => {
    if (input.checked) answer = input.value;
  });
  return answer;
}

function submitAnswer() {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.querySelector(".quiz-container").innerHTML =
        `<h2>You scored ${score}/${quizData.length}</h2>
         <button onclick="location.reload()">Reload</button>`;
    }
  }
}
