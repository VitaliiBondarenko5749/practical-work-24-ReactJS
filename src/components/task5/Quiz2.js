import React from "react";

class Quiz2 extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
            currentQuestion: 0,
            userAnswers: new Array(props.questions.length).fill([]),
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

  handleCheckboxChange = (event) => {
       const { name, value, checked } = event.target;
       const index = parseInt(name);
       const userAnswers = [...this.state.userAnswers];
       if (checked) {
            userAnswers[index].push(value);
       } else {
            userAnswers[index] = userAnswers[index].filter((answer) => answer !== value);
       }
       this.setState({ userAnswers });
  };

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
    const currentAnswers = userAnswers[currentQuestion] || [];
  
    const correctAnswers = questions[currentQuestion].answer;
    const isCorrectAnswer = correctAnswers.every((ans) => currentAnswers.includes(ans));
    const answerClassName =
      currentAnswers.length === 0 ? "" : isCorrectAnswer ? "correct" : "incorrect";
  
    const currentQuestionData = questions[currentQuestion];
  
    return (
      <div>
        <p>Task 5</p>
        <div>
          <p>{currentQuestionData.question}</p>
          {currentQuestionData.answers.map((answer, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  name={currentQuestion}
                  value={answer}
                  checked={currentAnswers.includes(answer)}
                  onChange={this.handleAnswerChange}
                />
                {answer}
              </label>
            </div>
          ))}
          {showAnswers && (
            <div className={answerClassName}>
              {isCorrectAnswer
                ? "Ваша відповідь правильна"
                : `Ваша відповідь неправильна. Правильні відповіді: ${correctAnswers.join(", ")}`}
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

export default Quiz2;