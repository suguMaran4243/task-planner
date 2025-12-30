import React, { useState } from 'react';
import './App.css';

interface Task {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        text: inputValue
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Daily Task Planner</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your task..."
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="tasks-container">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;