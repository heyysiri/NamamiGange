const questions = [
  {
      question:
      "नमामि गंगे कार्यक्रम के तहत सीवेज उपचार संयंत्र (STPs) निर्माण का प्राथमिक उद्देश्य क्या है?",
    options: [
      "वेस्टवाटर से बिजली उत्पन्न करना",
      "कृषि भूमि के लिए सिंचाई जल प्रदान करना।",
      "असंशोधित सीवेज को गंगा नदी में प्रवेश नहीं करने देना।",
      "STP चारों ओर आरामदायक क्षेत्रों का निर्माण करना।",
    ],
    answer: "असंशोधित सीवेज को गंगा नदी में प्रवेश नहीं करने देना।",
  },
  {
    question:
      "गंगा नदी के किनारों पर पार्क और पैदल मार्ग बनाने का मुख्य उद्देश्य क्या है?",
    options: [
      "नदी किनारों पर मिट्टी का अपघर्षण नियंत्रित करना",
      "फ़िल्ट्रेशन द्वारा जल गुणवत्ता को सुधारना",
      "जनता के पहुंच और मनोरंजन के अवसरों को बढ़ावा देना",
      "पर्यटन शुल्क के माध्यम से राजस्व उत्पन्न करना",
    ],
    answer: "जनता के पहुंच और मनोरंजन के अवसरों को बढ़ावा देना",
  },
  {
    question:
      "गंगा नदी से कचरा और कचरे को हटाने में मुख्य चुनौती क्या है?",
    options: [
      "उन्नत सफाई प्रौद्योगिकी की कमी",
      "नदी के सींचे के बड़े आकार और फैलाव",
      "पर्याप्त वित्तीय संसाधन",
      "स्थानीय समुदायों का असहयोगी व्यवहार",
    ],
    answer: "नदी के सींचे के बड़े आकार और फैलाव",
  },
  {
    question:
      "नमामि गंगे कार्यक्रम के तहत गंगा नदी में जलीय वनस्पति को कैसे पुनर्स्थापित करने का लक्ष्य है?",
    options: [
      "स्थानीय पौधे प्रजातियों को फिर से लाना",
      "जल प्रदूषण स्तर को कम करना",
      "जलीय पौधों के लिए संरक्षित क्षेत्रों का निर्माण",
      "उपरोक्त सभी",
    ],
    answer: "उपरोक्त सभी",
  },
  {
    question:
      "नमामि गंगे कार्यक्रम के बायोडाइवर्सिटी संरक्षण प्रयासों के लिए वृक्षारोपण क्यों महत्वपूर्ण है?",
    options: [
      "यह खतरे में पड़ी जातियों के लिए आवास प्रदान करता है",
      "यह मिट्टी का अपघर्षण नियंत्रित करता है और नदी किनारे को संरक्षित करता है",
      "यह प्रदूषकों को फिल्टर करता है और जल गुणवत्ता को सुधारता",
      "उपरोक्त सभी",
    ],
    answer: "उपरोक्त सभी",
  },
  {
      question:
        "नमामि गंगे कार्यक्रम के मुख्य सार्वजनिक जागरूकता अभियानों का मुख्य उद्देश्य क्या है?",
      options: [
        "पर्यटन को आकर्षित करना और स्थानीय समुदायों के लिए राजस्व उत्पन्न करना",
        "गंगा नदी के सांस्कृतिक और धार्मिक महत्व को प्रोत्साहित करना",
        "लोगों को नदी संरक्षण के महत्व के बारे में शिक्षित करना",
        "सरकार द्वारा नेतृत्वित सफाई पहलों में भागीदारी को प्रोत्साहित करना",
      ],
      answer: "लोगों को नदी संरक्षण के महत्व के बारे में शिक्षित करना",
    },
    {
      question:
        "नमामि गंगे कार्यक्रम के तहत औद्योगिक इकाइयों के लिए सख्त नियमों का स्थापन और पालन का मुख्य उद्देश्य क्या है?",
      options: [
        "धन बढ़ाना सरकार के द्वारा जुर्मानों के माध्यम से",
        "उद्योगों में पर्यावरणीय प्रौद्योगिकियों का प्रोत्साहन करना",
        "हानिकारक प्रदूषकों का गंगा नदी में छूटना कम करना",
        "पर्यटन के लिए जल गुणवत्ता का मॉनिटरिंग करना",
      ],
      answer: "हानिकारक प्रदूषकों का गंगा नदी में छूटना कम करना",
    },
    {
      question:
        "नमामि गंगे कार्यक्रम के तहत गंगा ग्रामों की स्थापना का मुख्य उद्देश्य क्या है?",
      options: [
        "पर्यावरणीय पर्यटन को प्रोत्साहित करना और राजस्व उत्पन्न करना",
        "गंगा किनारे पर दीर्घकालिक जीवन जीने के लिए मॉडल गाँव बनाना",
        "स्थानीय समुदायों को नदी संरक्षण अभ्यासों के बारे में शिक्षित करना",
        "उपरोक्त सभी",
      ],
      answer: "उपरोक्त सभी",
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
  if (currentQuestion === questions.length) {
    quizContainer.style.display = "none";
    messageElem.textContent = `Hope you had fun taking the quiz!`;
    messageElem.style.display = "block";
    messageElem.style.opacity = "1";
  }
  questionElem.textContent = q.question;
  optionsElem.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    optionsElem.appendChild(btn);

    btn.addEventListener("click", checkAnswer);
  });
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
    }, 1000); // Set delay to 5 seconds
  
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
    setTimeout(() => {
      resultElem.style.display = "none";
      quizContainer.removeChild(resultElem);
    }, 1000); 
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
