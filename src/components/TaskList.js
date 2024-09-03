// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import '../style.css';  // Import styles

const TaskList = ({ tasks, updateTask, markAsDone }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          markAsDone={markAsDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
