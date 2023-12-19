const questions = [
  {
    question:
      "What is the primary objective of building sewage treatment plants (STPs) under the Namami Gange Programme?",
    options: [
      "Generate electricity from wastewater",
      "Provide irrigation water for agricultural lands.",
      "Prevent untreated sewage from entering the Ganga River.",
      "Create recreational areas around STPs.",
    ],
    answer: "Prevent untreated sewage from entering the Ganga River.",
  },
  {
    question:
      "What is the main purpose of creating parks and walkways along the Ganga River?",
    options: [
      "Control soil erosion on riverbanks",
      "Improve water quality by filtration",
      "Enhance public access and recreational opportunities",
      "Generate revenue through tourism fees",
    ],
    answer: "Enhance public access and recreational opportunities",
  },
  {
    question:
      "What is the main challenge in removing litter and debris from the Ganga River?",
    options: [
      "Lack of advanced cleaning technology",
      "Large size and spread of the river basin",
      "Insufficient financial resources",
      "Uncooperative behavior of local communities",
    ],
    answer: "Large size and spread of the river basin",
  },
  {
    question:
      "How does the Namami Gange Programme aim to restore aquatic vegetation in the Ganga River?",
    options: [
      "Reintroducing native plant species",
      "Reducing water pollution levels",
      "Creating protected areas for aquatic plants",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Why is afforestation important for the Namami Gange Programme's biodiversity conservation efforts?",
    options: [
      "It provides habitat for endangered species",
      "It controls soil erosion and protects riverbanks",
      "It filters pollutants and improves water quality",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "What is the main goal of public awareness campaigns under the Namami Gange Programme?",
    options: [
      "Attract tourists and generate revenue for local communities",
      "Promote the cultural and religious significance of the Ganga River",
      "Educate people about the importance of river conservation",
      "Encourage participation in government-led clean-up initiatives",
    ],
    answer: "Educate people about the importance of river conservation",
  },
  {
    question:
      "What is the main purpose of setting up and enforcing stricter regulations for industrial units under the Namami Gange Programme?",
    options: [
      "Increase revenue for the government through fines",
      "Promote the use of sustainable technologies in industries",
      "Minimize the discharge of harmful pollutants into the Ganga River",
      "Monitor water quality for recreational purposes",
    ],
    answer: "Minimize the discharge of harmful pollutants into the Ganga River",
  },
  {
    question:
      "What is the main objective of establishing Ganga Grams under the Namami Gange Programme?",
    options: [
      "Promote eco-friendly tourism and generate revenue",
      "Create model villages for sustainable living along the Ganga",
      "Educate local communities about river conservation practices",
      "All of the above",
    ],
    answer: "All of the above",
  },
];

let currentQuestion = 0;
let score = 0;
let questionCount = 0;
let incorrectAnswers = []; // Track incorrect answers

const questionElem = document.querySelector(".question");
const optionsElem = document.querySelector(".options");
const messageElem = document.querySelector(".message");
const quizContainer = document.querySelector(".quiz-container");
const gif = document.createElement('img');
gif.src = 'images1/whistle_no_bg.gif';
gif.style.width = '180px'; // Set the width to a small size (adjust as needed)
gif.style.height = 'auto';
const gifContainer = document.querySelector('.gif-container');
function loadQuestion() {
  const q = questions[currentQuestion];
  questionElem.textContent = q.question;
  optionsElem.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    optionsElem.appendChild(btn);

    btn.addEventListener("click", checkAnswer);
  });

  if (currentQuestion === questions.length) {
    quizContainer.style.display = "none";
    messageElem.textContent = `Hope you had fun taking the quiz!`;
    messageElem.style.display = "block";
    messageElem.style.opacity = "1";
  }
}

function checkAnswer(e) {
  const selectedOption = e.target.textContent;
  const correctAnswer = questions[currentQuestion].answer;

  if (selectedOption === correctAnswer) {
    score++;
    e.target.classList.add("correct-answer");
    showAnswerResult("Correct answer!");
    gifContainer.appendChild(gif);
    setTimeout(() => {
      gifContainer.removeChild(gif);
    }, 1000);
  } else {
    e.target.classList.add("incorrect-answer");
    showAnswerResult("Incorrect answer.");
    showAnswerResult(`Correct answer: ${correctAnswer}`)
  }

  currentQuestion++;
  questionCount++;

  if (questionCount % 2 === 0) {
    // displayMessage();
    setTimeout(() => {
      quizContainer.style.opacity = 'block'; // Show quiz container again
      messageElem.style.display = 'none'; // Hide message element after delay
      loadQuestion();
      displayMessage();
    }, 3000); // Set delay to 5 seconds
  
  } else if (currentQuestion < questions.length) {
    loadQuestion();
  }
  else {
    displayMessage();
  }
}

function showAnswerResult(result) {
  const resultElem = document.createElement("p");
  resultElem.textContent = result;
  resultElem.classList.add("answer-result");
  quizContainer.appendChild(resultElem);
  // setTimeout(() => {
  //   resultElem.style.opacity = "0"; // Start fading out
    setTimeout(() => {
      resultElem.style.display = "none";
      quizContainer.removeChild(resultElem);
    }, 1000); // Remove after fade-out animation (1s)
  // }, 1000);
}

function displayMessage() {
  quizContainer.style.display = "none";
  messageElem.textContent = `Good job! Keep going!`;
  messageElem.style.display = "block";
  messageElem.style.opacity = "1";
  setTimeout(() => {
    quizContainer.style.display = "none";
    quizContainer.style.opacity = "0"; // Hide quiz container initially
  }, 0);

  setTimeout(() => {
    quizContainer.style.display = "block"; // Show quiz container
    quizContainer.style.opacity = "1"; // Make it fully visible
    messageElem.style.display = "none";
    messageElem.style.opacity = "0"; 
  },1500);
  
}

loadQuestion();
