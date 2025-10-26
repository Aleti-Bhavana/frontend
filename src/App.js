import React, { Component } from "react";
import axios from "axios";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

class App extends Component {
  state = { students: [] };

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = async () => {
    const res = await axios.get("https://myfavaouriteone.onrender.com/api/students");
    this.setState({ students: res.data });
  };

  addStudent = async (student) => {
    await axios.post("https://myfavaouriteone.onrender.com/api/students", student);
    this.fetchStudents();
  };

  deleteStudent = async (id) => {
    await axios.delete(`https://myfavaouriteone.onrender.com/api/students/${id}`);
    this.fetchStudents();
  };

  render() {
    return (
      <div style={{ width: "600px", margin: "auto", padding: "20px" }}>
        <h1>🎓 Student Management</h1>
        <StudentForm addStudent={this.addStudent} />
        <StudentList
          students={this.state.students}
          deleteStudent={this.deleteStudent}
        />
      </div>
    );
  }
}

export default App;
