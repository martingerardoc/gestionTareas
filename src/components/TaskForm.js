// TaskForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin: 16px 0;
`;

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = event => {
    setTaskName(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onAddTask({ id: Date.now(), name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Add new task" value={taskName} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </FormWrapper>
  );
};

export default TaskForm;