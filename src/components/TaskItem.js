// src/components/TaskItem.js
import React, { useState } from 'react';
import '../style.css';  // Import styles

const TaskItem = ({ task, updateTask, markAsDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask(task.id, { ...task, task: newTask, description: newDescription, timestamp: new Date().toLocaleString() });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <br/>
          <br/>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <br/>
          <br/>
          <button onClick={handleUpdate} style={{color: "black",backgroundColor:"ButtonHighlight"}}>Save</button>
          
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <h3>{task.task}</h3>
          <p>{task.description}</p>
          <small>Last updated: {task.timestamp}</small>
          <br/>
          <br/>
          <button onClick={() => markAsDone(task.id)} style={{color: "black",backgroundColor:"ButtonHighlight"}}>Upadte</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
