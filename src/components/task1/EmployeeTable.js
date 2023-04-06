import React from "react";

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { name: "John", surname: "Doe", daysWorked: 10, rate: 20 },
        { name: "Jane", surname: "Smith", daysWorked: 15, rate: 25 },
        { name: "Bob", surname: "Johnson", daysWorked: 12, rate: 22 },
      ],
      totalSalary: 0,
    };
  }

  updateDaysWorked(index, event) {
    const employees = this.state.employees.slice();
    employees[index].daysWorked = event.target.value;
    this.setState({ employees }, () => {
      this.calculateTotalSalary();
    });
  }

  updateRate(index, event) {
    const employees = this.state.employees.slice();
    employees[index].rate = event.target.value;
    this.setState({ employees }, () => {
      this.calculateTotalSalary();
    });
  }

  calculateSalary(employee) {
    return employee.daysWorked * employee.rate;
  }

  calculateTotalSalary() {
    const totalSalary = this.state.employees.reduce(
      (total, employee) => total + this.calculateSalary(employee),
      0
    );
    this.setState({ totalSalary });
  }

  componentDidMount() {
    this.calculateTotalSalary();
  }

  render() {
    return (
      <div>
        <p>Task 1</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Days Worked</th>
              <th>Rate</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>
                  <input
                    type="number"
                    value={employee.daysWorked}
                    onChange={(event) => this.updateDaysWorked(index, event)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={employee.rate}
                    onChange={(event) => this.updateRate(index, event)}
                  />
                </td>
                <td>{this.calculateSalary(employee)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Salary: {this.state.totalSalary}</p>
      </div>
    );
  }
}

export default EmployeeTable;