import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Summary from './components/Summary';
import Task from './components/Task';

function App() {

  const [initialTasks, setInitialTasks] = useState([
    {
      _id: "1a",
      name: "Task1",
      description: "Do something important",
      isDone: false                                    // <== ADD
    },
    {
      _id: "2b",
      name: "Task2",
      description: "Do something important",
      isDone: true                                    // <== ADD
    },
    {
      _id: "3c",
      name: "Task3",
      description: "Do something important",
      isDone: true                                    // <== ADD
    }
  ]);

  const updateTask = (taskId) => {
    const copyTaskArray = [...initialTasks];
    const foundIndex = copyTaskArray.findIndex(t => t._id === taskId);
    copyTaskArray[foundIndex].isDone = !copyTaskArray[foundIndex].isDone;
    setInitialTasks(copyTaskArray);
  }

  return (
    <div className="App">
      <Summary initialTasks={initialTasks} />
      {initialTasks.map(singleTask => {
        return (
          // <Task
          //   task={singleTask}
          //   initialTasks={initialTasks}
          //   setInitialTasks={setInitialTasks}
          // />
          <Task
            task={singleTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
}

export default App;
