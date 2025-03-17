import {use, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from "./Components/Tasks.jsx";
import CreateTask from "./Components/CreateTask.jsx";

function App() {
    
    
  return (
    <>
        <h1>Gerenciador de tarefas</h1>
        <CreateTask/>
        <Tasks/>
    </>
  )
}

export default App
