import React, { Component } from 'react';

class Test extends Component {
     constructor(props) {
          super(props);

          this.state = {
               questions: [
                    {
                         id: 1,
                         text: 'Скільки буде 2+2?',
                         answer: '4',
                         userAnswer: ''
                    },
                    {
                         id: 2,
                         text: 'Яка столиця України?',
                         answer: 'Київ',
                         userAnswer: ''
                    },
                    {
                         id: 3,
                         text: 'Хто написав "Майстер і Маргарита"?',
                         answer: 'Михайло Булгаков',
                         userAnswer: ''
                    }
               ],
               isSubmitted: false
          };
     }

     handleAnswerChange = (questionId, event) => {
          const { questions } = this.state;
          const questionIndex = questions.findIndex(q => q.id === questionId);

          if (questionIndex >= 0) {
               questions[questionIndex].userAnswer = event.target.value;
               this.setState({ questions });
          }
     }

     handleSubmit = () => {
          this.setState({ isSubmitted: true });
     }

     render() {
          const { questions, isSubmitted } = this.state;
          const allAnswersCorrect = questions.every(q => q.userAnswer === q.answer);

          return (
               <div>
                    <p>Task 2</p>
                    {questions.map(question => (
                         <div key={question.id}>
                              <p>{question.text}</p>
                              {!isSubmitted ? (
                                   <input
                                        type="text"
                                        value={question.userAnswer}
                                        onChange={event => this.handleAnswerChange(question.id, event)}
                                   />
                              ) : (
                                   <p style={{ color: question.userAnswer === question.answer ? 'green' : 'red' }}>
                                        Ваша відповідь: {question.userAnswer}.{' '}
                                        {question.userAnswer === question.answer
                                             ? 'Правильно!'
                                             : `Не правильно. Правильна відповідь: ${question.answer}`}
                                   </p>
                              )}
                         </div>
                    ))}
                    {!isSubmitted && (
                         <button onClick={this.handleSubmit}>Скласти тест</button>
                    )}
                    {isSubmitted && allAnswersCorrect && (
                         <p style={{ color: 'green' }}>Вітаємо! Ви дали правильні відповіді на всі питання.</p>
                    )}
                    {isSubmitted && !allAnswersCorrect && (
                         <p style={{ color: 'red' }}>На жаль, ви дали неправильну відповідь на одне з питань.</p>
                    )}
               </div>
          );
     }
}

export default Test;