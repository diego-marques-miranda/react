import {use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from "./Components/Tasks.jsx";
import CreateTask from "./Components/CreateTask.jsx";

function App() {
    
    
  return (
    <div className="w-screen h-screen bg-slate-400 text-gray-200 flex flex-col items-center p-5">
        <h1 className="text-3xl text-center font-bold">Gerenciador de tarefas</h1>
        <CreateTask/>
        <Tasks/>
    </div>
  )
}

export default App
