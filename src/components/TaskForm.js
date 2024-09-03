// src/components/TaskForm.js
import React, { useState } from 'react';
import '../style.css';  // Import styles

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task, description, completed: false, timestamp: new Date().toLocaleString() });
    setTask('');
    setDescription('');
  };

  return (<center>
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br/>
      <button type="submit" style={{color: "black",backgroundColor:"ButtonHighlight"}}>Add Task</button>
    </form>
    </center>
  );
};

export default TaskForm;
