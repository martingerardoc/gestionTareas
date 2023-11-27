// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleCompleteTask = (taskId, isCompleted) => {
    // Lógica para marcar como completada/descompletada una tarea
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = taskId => {
    // Lógica para eliminar una tarea
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = newTask => {
    // Lógica para agregar una nueva tarea
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;