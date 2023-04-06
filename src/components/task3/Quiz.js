import React from 'react';

class Quiz extends React.Component {
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

          return (
               <div>
                    <p>Task 3</p>
                    <div>
                         <p>{questions[currentQuestion].question}</p>
                         <input
                              type="text"
                              name={currentQuestion}
                              value={userAnswers[currentQuestion] || ""}
                              onChange={this.handleAnswerChange}
                         />
                         {showAnswers && (
                              <div className={answerClassName}>
                                   {isCorrectAnswer
                                        ? "Ваша відповідь правильна"
                                        : `Ваша відповідь неправильна. Правильна відповідь: ${questions[currentQuestion].answer}`}
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

export default Quiz;