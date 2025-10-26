import React, { Component } from "react";

class StudentForm extends Component {
  state = { name: "", age: "", course: "" };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.setState({ name: "", age: "", course: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          name="course"
          placeholder="Course"
          value={this.state.course}
          onChange={this.handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

export default StudentForm;
