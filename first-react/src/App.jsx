import {use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from "./Components/Tasks.jsx";
import CreateTask from "./Components/CreateTask.jsx";

function App() {
    
    const [tasks, setTasks] = useState([
        {
            title: "Estudar react",
            isCompleted: false,
            id: 0,
        },
        {
            title: "Estudar tailwind",
            isCompleted: false,
            id: 1,
        },
        {
            title: "Malhar",
            isCompleted: false,
            id: 2,
        }
    ])
    
    function TaskOnClick(taskId)
    {
        
        const newTasks = tasks.map((task) => {
            if (task.id === taskId)
            {
                return {...task, isCompleted: !task.isCompleted}
            }
            return task;
        });
        
        setTasks(newTasks);
    }

    function MoveTaskUp(taskId) 
    {
        let position = 0;
        
        for (let i = 0; i < tasks.length; i++)
        {
            if (tasks[i].id === taskId)
            {
              position = i;
              break;
            }
        }
        
        const newTasks = [...tasks];
        
        let currentTask = newTasks[position];
        
        if (position === 0)
        {
            newTasks[position] = newTasks[newTasks.length - 1];
            newTasks[newTasks.length - 1] = currentTask;
        } else
        {
            newTasks[position] = newTasks[position - 1];
            newTasks[position - 1] = currentTask;
        }
        
        setTasks(newTasks);
      
    }

    function MoveTaskDown(taskId)
    {
        let position = 0;

        for (let i = 0; i < tasks.length; i++)
        {
            if (tasks[i].id === taskId)
            {
                position = i;
                break;
            }
        }

        const newTasks = [...tasks];

        let currentTask = newTasks[position];

        if (position === newTasks.length - 1)
        {
            newTasks[position] = newTasks[0];
            newTasks[0] = currentTask;
        } else
        {
            newTasks[position] = newTasks[position + 1];
            newTasks[position + 1] = currentTask;
        }

        setTasks(newTasks);

    }
    
    function ExcludeTask(taskId)
    {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }
    
        
    return (
    <div className="w-screen h-screen bg-slate-400 text-gray-200 flex flex-col items-center p-5">
        <h1 className="text-3xl text-center font-bold">Gerenciador de tarefas</h1>
        <CreateTask/>
        <Tasks tasks={tasks} TaskOnClick={TaskOnClick} MoveTaskUp={MoveTaskUp} MoveTaskDown={MoveTaskDown} ExcludeTask={ExcludeTask}/>
    </div>
  )
}

export default App
