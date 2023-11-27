// TaskItem.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TaskItemWrapper = styled.div`
  margin: 8px 0;
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
`;

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleCompleteClick = () => {
    setCompleted(!isCompleted);
    onCompleteTask(task.id, !isCompleted);
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <TaskItemWrapper isCompleted={isCompleted}>
      <span>{task.name}</span>
      <button onClick={handleCompleteClick}>Complete</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </TaskItemWrapper>
  );
};

export default TaskItem;