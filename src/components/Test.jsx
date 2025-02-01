import { useState, useEffect } from "react";
import faq from "../Api/faq.json";

export const Test = () => {
  const [quizData, setQuizData] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (Array.isArray(faq)) {
      setQuizTitle(faq[0].title);
      setQuizData(faq[0].questions);
    }
  }, []);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (option) => {
    if (!selectedAnswers[currentQuestionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: option,
      }));

      if (option.is_correct) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizCompleted(false);
    setQuizStarted(false);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div
      className="quiz-container"
      style={{
        backgroundColor: "blue",
        minHeight: "70vh",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "6rem",
      }}
    >
      {!quizStarted ? (
        <div
          style={{
            textAlign: "center",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              color: "#333",
              marginBottom: "1.5rem",
              fontSize: "25px",
              fontWeight: "800",
            }}
          >
            Topic: {quizTitle}
          </div>
          <button
            onClick={handleStartQuiz}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginTop: "1rem",
              fontSize: "18px",
            }}
          >
            Start Quiz
          </button>
        </div>
      ) : quizCompleted ? (
        <div
          style={{
            width: "80%",
            maxWidth: "700px",
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {quizData.length}
          </p>
          <button
            onClick={handleTryAgain}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginTop: "1rem",
            }}
          >
            Try Again
          </button>
        </div>
      ) : currentQuestion ? (
        <div
          style={{
            width: "80%",
            maxWidth: "700px",
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
            border: "1px solid #e0e0e0",
          }}
        >
          <h3 style={{ marginBottom: "1rem", color: "#555" }}>
            Q: {currentQuestion.description}
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  textAlign: "left",
                  backgroundColor: selectedAnswers[currentQuestionIndex]
                    ? option.is_correct
                      ? "lightgreen"
                      : selectedAnswers[currentQuestionIndex]?.id === option.id
                      ? "salmon"
                      : "#f9f9f9"
                    : "#f9f9f9",
                  transition: "all 0.3s",
                }}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswers[currentQuestionIndex]}
              >
                {option.description}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {!quizCompleted && quizStarted && (
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            maxWidth: "700px",
          }}
        >
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              backgroundColor: currentQuestionIndex === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            {currentQuestionIndex < quizData.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      )}
    </div>
  );
};
