import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleTaskComplete = this.handleTaskComplete.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleTaskAdd(event) {
    event.preventDefault();
    const newTask = {
      text: this.state.inputValue,
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      inputValue: ''
    });
  }

  handleTaskDelete(taskIndex) {
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({ tasks });
  }

  handleTaskComplete(taskIndex) {
    const tasks = [...this.state.tasks];
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    this.setState({ tasks });
  }

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div>
          <p>Task 6</p>
        <form onSubmit={this.handleTaskAdd}>
          <input type="text" value={inputValue} onChange={this.handleInputChange} />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.handleTaskComplete(index)}
              />
              <button onClick={() => this.handleTaskDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;