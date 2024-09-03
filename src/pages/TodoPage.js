// src/pages/TodoPage.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import tasksData from '../data/tasks.json';
import '../style.css';  // Import styles

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const markAsDone = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: true } : task)));
  };

  const searchTasks = (query) => {
    return tasks.filter((task) => task.task.toLowerCase().includes(query.toLowerCase()));
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchParams({ search: query });
  };

  const searchQuery = searchParams.get('search') || '';
  const filteredTasks = searchTasks(searchQuery);

  return (
    <center>
    <div className="todo-page">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} markAsDone={markAsDone} />
    </div>
    </center>
  );
};

export default TodoPage;
