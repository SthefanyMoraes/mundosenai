const questions = [
  {
    question: "Qual é a capital do Brasil?",
    answers: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    correct: 1
  },
  {
    question: "Qual linguagem usamos para estilizar um site?",
    answers: ["HTML", "Python", "CSS", "SQL"],
    correct: 2
  },
  {
    question: "Quantos planetas existem no sistema solar?",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    question: "Em que continente fica o deserto do Saara?",
    answers: ["África", "Ásia", "América", "Oceania"],
    correct: 0
  },
  {
    question: "Quantos segundos há em 1 hora?",
    answers: ["3200", "4500", "5100", "3600"],
    correct: 3
  },
  {
    question: "Em que ano o homem pisou na lua pela primeira vez?",
    answers: ["1900", "1969", "1892", "2001"],
    correct: 1
  },
  {
    question: "Em que ano foi fundada a ONU?",
    answers: ["1969", "1889", "1945", "1998"],
    correct: 2
  },
  {
    question: "Quem criou a Apple?",
    answers: ["Steves Jobs", "Trevis Scott", "Bill Gates", "Kenye West"],
    correct: 0
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    answers: ["Deodoro da Fonseca", "Cristovão Colombo", "Pedro Álvares Cabral", "Tiradentes"],
    correct: 0
  },
  {
    question: "Quem foi descobriu o Brasil?",
    answers: ["Deodoro da Fonseca", "Cristovão Colombo", "Pedro Álvares Cabral", "Tiradentes"],
    correct: 2
  },
  {
    question: "Qual  desses países ganhou a 2ª Guerra Mundial?",
    answers: ["Alemanha", "Japão", "Itália", "EUA"],
    correct: 3
  },

];

let currentQuestion = 0;
let score = 0;

function showQuestion() 
{
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.innerText = q.answers[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#eee";
  });
  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(index) 
{
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) 
    {
      btn.style.backgroundColor = "green";
    } else if (i === index) 
    {
      btn.style.backgroundColor = "red";
    }
  });

  if (index === q.correct) 
  {
    score++;
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() 
{
  currentQuestion++;
  if (currentQuestion < questions.length) 
  {
    showQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;

    document.getElementById("restart-btn").style.display = "inline-block";
  }
}

// Reinicia o quiz do começo
function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  // Mostra a interface do quiz de novo
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";

  showQuestion(); // Começa do início
}
showQuestion();