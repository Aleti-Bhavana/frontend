import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { students, deleteStudent } = this.props;
    return (
      <div>
        <h2>Student List</h2>
        <ul>
          {students.map((s) => (
            <li key={s.id}>
              {s.name} ({s.age}) — {s.course}
              <button onClick={() => deleteStudent(s.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
