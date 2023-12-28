import React, { useState, useEffect } from 'react';
import "./styles5.css";
import MyPopup from './Popup';


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
 ]

 const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);
    const [quizContainerVisible, setQuizContainerVisible] = useState(true);
    const [loadedQuestion, setLoadedQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [resultMessage, setResultMessage] = useState("");
    const [messageToShow, setMessageToShow] = useState("");
    const [delayTimer, setDelayTimer] = useState(null);
    
    useEffect(() => {
      loadQuestion();
    }, [currentQuestion]);
  
    const loadQuestion = () => {
      const q = questions[currentQuestion];
      setLoadedQuestion(q);
      setSelectedAnswer(null);
    };
  
    const checkAnswer = (selectedOption) => {
      const correctAnswer = questions[currentQuestion].answer;
  
      if (selectedOption === correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
  
      setSelectedAnswer(selectedOption);
      setIsAnswerSelected(true);
      showAnswerResult(selectedOption === correctAnswer);
      setDelayTimer(setTimeout(nextQuestion, 3000));
    };
  
    const showAnswerResult = (isCorrect) => {
      if (isCorrect) {
        setResultMessage("Correct answer!");
        setTimeout(() => {
          setResultMessage("");
        }, 2000); 
      } else {
        setResultMessage(`Incorrect answer. Correct answer: ${questions[currentQuestion]?.answer}`);
        setTimeout(() => {
          setResultMessage("");
        }, 2000);
      }
    };

    
  
    const displayMessage = () => {
        setMessageToShow("Good job! Keep going!");
      };

    
    const nextQuestion = () => {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setQuestionCount((prevCount) => prevCount + 1);
      setIsAnswerSelected(false);
      setSelectedAnswer(null);
    
      if (currentQuestion + 1 < questions.length) {
        loadQuestion();
      } else {
        setQuizContainerVisible(false);
        displayMessage();
      }
    };

    const clearDelayTimer = () => {
      if (delayTimer) {
        clearTimeout(delayTimer);
        setDelayTimer(null);
      }
    };
  
    useEffect(() => {
      return () => clearDelayTimer(); // Clear timer on unmount
    }, []);
    
  
    return (
      <div className={`quiz-container ${quizContainerVisible ? 'visible' : 'hidden'}`}>
        <h1 style={{ color: "white" }}>The Namami Gange Quiz</h1>
          <div className="question">{loadedQuestion?.question}</div>
            <div className="options">
            {loadedQuestion && loadedQuestion.options.map((opt, index) => (
    <button
      key={index}
      onClick={() => checkAnswer(opt)}
      className={`option-btn ${isAnswerSelected && selectedAnswer === opt ? (opt === loadedQuestion.answer ? 'correct-answer' : 'incorrect-answer') : ''}`}
      disabled={isAnswerSelected}
    >
      {opt}
    </button>
  ))}
  
          </div>
          {isAnswerSelected && (
            <div className="answer-result">
              {selectedAnswer === loadedQuestion?.answer ? " " : " "} 
            </div>
          )}
          {resultMessage && <p className="result-message">{resultMessage}</p>}
          {messageToShow && <p className="display-message">{messageToShow}</p>}
        </div>
  
      );
    };
    
    export default Quiz;