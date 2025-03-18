 function Tasks(props)
 {
     const check = "🗸";
     const upArrow = "↑";
     const downArrow = "↓";
     const exclude = "✕";
     
     return (
         <div className="shadow-md bg-teal-300 w-100 p-5 rounded-md">

             {props.tasks.length === 0 && (
                 <h1 className="text-xl text-teal-950 text-center">Adicione uma tarefa!</h1>
             )}
             
             {props.tasks.length > 0 && ( 
                 <ol className="flex flex-col gap-1.5">
                 {
                     props.tasks.map((task) =>
                         (
                             <li className="flex shadow-md bg-teal-700 p-2 rounded-md hover:bg-teal-900 transition-colors duration-300" key={task.id}>
                                 <span className={`${task.isCompleted ? "pl-1" : ""} pt-0.5`}>{task.isCompleted ? "✓" : ""}</span>
                                 <span onClick={() => props.TaskOnClick(task.id)} className={`text-lg ${task.isCompleted ? "line-through" : ""} cursor-pointer ${task.isCompleted ? "pl-2" : ""}`}>
                                     {task.title}
                                 </span>

                                 <div className="flex gap-0.5 ml-auto">
                                     <button onClick={() => props.MoveTaskUp(task.id)} className="shadow hover:bg-teal-950 transition-colors duration-300 mx-0.5 bg-teal-800 px-2.5 rounded-md">{upArrow}</button>
                                     <button onClick={() => props.MoveTaskDown(task.id)} className=" shadow hover:bg-teal-950 transition-colors duration-300 mx-0.5 bg-teal-800 px-2.5 rounded-md">{downArrow}</button>
                                     <button onClick={() => props.ExcludeTask(task.id)} className="shadow hover:bg-teal-950 transition-colors duration-300 mx-0.5 bg-teal-800 px-2 rounded-md">{exclude}</button>
                                 </div>
                             </li>
                         )
                     )
                 }
                 </ol>
             )}
             
         </div>
         
     )
 }
 
 export default Tasks