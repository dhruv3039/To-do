import React, { useState } from "react";
import "./Form.css";

const Forms = (props) => {
  const [formData, updateFormData] = useState({
    task: "",
    description: "",
    status: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.description.trim().length === 0 ||
      formData.task.trim().length === 0
    ) {
      alert("Invalid input message ");
      return;
    }
    props.onAddData(formData.description, formData.status, formData.task);
    updateFormData({ description: "", status: "", task: "" });
  };

  return (
    <div className="form-class">
      <form>
        <input
          type={"text"}
          name="task"
          placeholder="Task Name"
          className="form-style"
          onChange={handleChange}
        />
        <br />
        <input
          type={"text"}
          name="description"
          placeholder="Task Description"
          className="form-style"
          onChange={handleChange}
        />
        <br />
        <select
          type={"text"}
          name="status"
          placeholder="Task Status"
          className="form-style"
          id="form-btn"
          onChange={handleChange}
        >
          <option value="task status">Task Status</option>
          <option value="work in progress">Work in progress</option>
          <option value="task completed">Task completed</option>
          <option value="yet to start">Yet to start</option>
        </select>

        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          className="form-style"
          id="form-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
