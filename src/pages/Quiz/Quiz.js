import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";
import { images } from "../../constants";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "A. New York", isCorrect: false },
      { answerText: "B. London", isCorrect: false },
      { answerText: "C. Paris", isCorrect: true },
      { answerText: "D. Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "A. Jeff Bezos", isCorrect: false },
      { answerText: "B. Elon Musk", isCorrect: true },
      { answerText: "C. Bill Gates", isCorrect: false },
      { answerText: "D. Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "A. Apple", isCorrect: true },
      { answerText: "B. Intel", isCorrect: false },
      { answerText: "C. Amazon", isCorrect: false },
      { answerText: "D. Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "A. 1", isCorrect: false },
      { answerText: "B. 4", isCorrect: false },
      { answerText: "C. 6", isCorrect: false },
      { answerText: "D. 7", isCorrect: true },
    ],
  },
];
const questions2 = [
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "A. Jeff Bezos", isCorrect: false },
      { answerText: "B. Elon Musk", isCorrect: true },
      { answerText: "C. Bill Gates", isCorrect: false },
      { answerText: "D. Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "A. New York", isCorrect: false },
      { answerText: "B. London", isCorrect: false },
      { answerText: "C. Paris", isCorrect: true },
      { answerText: "D. Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "A. Apple", isCorrect: true },
      { answerText: "B. Intel", isCorrect: false },
      { answerText: "C. Amazon", isCorrect: false },
      { answerText: "D. Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "A. 1", isCorrect: false },
      { answerText: "B. 4", isCorrect: false },
      { answerText: "C. 6", isCorrect: false },
      { answerText: "D. 7", isCorrect: true },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [className, setclassName] = useState("");

  const [searchParams] = useSearchParams();
  const quizId = searchParams.get("qId");

  const nextQusetion = currentQuestion + 1;

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswerButtonClick = (answerOption) => {
    setselectedAnswer(answerOption);
    setclassName("answer_card lock");
    delay(5000, () =>
      setclassName(
        answerOption.isCorrect ? "answer_card correct" : "answer_card wrong"
      )
    );
    delay(6000, () => {
      if (answerOption.isCorrect === true) {
        setScore(score + 1);
      }
    });
    delay(10000, () => {
      if (nextQusetion < questions.length) {
        setCurrentQuestion(nextQusetion);
      } else {
        setShowScore(true);
      }
    });
  };

  const navigate = useNavigate();

  const myFunction = () => {
    // your logic here
    navigate("/");
    // console.log("pressed Enter ✅");
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      // console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ your logic here
        myFunction();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      {showScore ? (
        <div className="vh_100 flex align_center content_cente">
          <Container>
            <Row className="align_center content_cente">
              <Col md={6}>
                <img src={images.nanotekLogo} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div className="vh_100" style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              bottom: "72px",
            }}
          >
            <Container>
              {quizId == 1 ? (
                <>
                  <Row className="mb-4">
                    <Col>
                      <div className="question_card">
                        <h4>{questions[currentQuestion].questionText}</h4>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <Col md={6} className="mb-3 px-2" key={index}>
                          <div
                            className={
                              selectedAnswer === answerOption
                                ? className
                                : "answer_card"
                            }
                            onClick={() =>
                              handleAnswerButtonClick(answerOption)
                            }
                          >
                            <h4>{answerOption.answerText}</h4>
                          </div>
                        </Col>
                      )
                    )}
                  </Row>
                </>
              ) : (
                <>
                  <Row className="mb-4">
                    <Col>
                      <div className="question_card">
                        <h4>{questions2[currentQuestion].questionText}</h4>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {questions2[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <Col md={6} className="mb-3 px-2" key={index}>
                          <div
                            className={
                              selectedAnswer === answerOption
                                ? className
                                : "answer_card"
                            }
                            onClick={() =>
                              handleAnswerButtonClick(answerOption)
                            }
                          >
                            <h4>{answerOption.answerText}</h4>
                          </div>
                        </Col>
                      )
                    )}
                  </Row>
                </>
              )}
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
