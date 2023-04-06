import React from "react";

class Quiz1 extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
            currentQuestion: 0,
            userAnswers: new Array(props.questions.length).fill(null),
            showAnswers: false,
       };
  }

  handleAnswerChange = (event) => {
       const { name, value } = event.target;
       const index = parseInt(name);
       const userAnswers = [...this.state.userAnswers];
       userAnswers[index] = value;
       this.setState({ userAnswers });
  };

  handleRadioChange = (event) => {
       const { name, value } = event.target;
       const index = parseInt(name);
       const userAnswers = [...this.state.userAnswers];
       userAnswers[index] = value;
       this.setState({ userAnswers });
  }

  handlePrevClick = () => {
       const currentQuestion = this.state.currentQuestion - 1;
       this.setState({ currentQuestion });
  };

  handleNextClick = () => {
       const currentQuestion = this.state.currentQuestion + 1;
       this.setState({ currentQuestion });
  };

  handleCheckAnswers = () => {
       this.setState({ showAnswers: true });
  };

  render() {
       const { questions } = this.props;
       const { currentQuestion, userAnswers, showAnswers } = this.state;
       const isLastQuestion = currentQuestion === questions.length - 1;
       const isFirstQuestion = currentQuestion === 0;
       const currentAnswer = userAnswers[currentQuestion];
       const isCorrectAnswer =
            currentAnswer !== null && currentAnswer === questions[currentQuestion].answer;
       const answerClassName =
            currentAnswer === null ? "" : isCorrectAnswer ? "correct" : "incorrect";
       const currentQuestionData = questions[currentQuestion];

       return (
            <div>
                 <p>Task 4</p>
                 <div>
                      <p>{currentQuestionData.question}</p>
                      {currentQuestionData.answers.map((answer, index) => (
                           <div key={index}>
                                <label>
                                     <input
                                          type="radio"
                                          name={currentQuestion}
                                          value={answer}
                                          checked={userAnswers[currentQuestion] === answer}
                                          onChange={this.handleRadioChange}
                                     />
                                     {answer}
                                </label>
                           </div>
                      ))}
                      {showAnswers && (
                           <div className={answerClassName}>
                                {isCorrectAnswer
                                     ? "Ваша відповідь правильна"
                                     : `Ваша відповідь неправильна. Правильна відповідь: ${currentQuestionData.answer}`}
                           </div>
                      )}
                 </div>
                 <div>
                      {!isFirstQuestion && <button onClick={this.handlePrevClick}>Назад</button>}
                      {!isLastQuestion && <button onClick={this.handleNextClick}>Вперед</button>}
                      {isLastQuestion && (
                           <button onClick={this.handleCheckAnswers}>Перевірити відповіді</button>
                      )}
                 </div>
            </div>
       );
  }
}

export default Quiz1;