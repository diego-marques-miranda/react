import {useState} from "react";

function CreateTask(props)
{
    const [task, setTask] = useState("");

    function HandleEnterClick(e)
    {
        if (e.key === "Enter")
        {
            props.AddTask(task);
        }
    }
    
    return (
        <div className="p-5 m-5 w-100 bg-slate-300 rounded-md">
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" 
                   className=" shadow hover:bg-slate-200 hover:text-gray-400 transition-colors duration-300 focus:ring-3 focus:text-black focus:ring-fuchsia-200 outline-none w-full h-10 bg-gray-50 p-3 rounded-md text-gray-300" 
                   placeholder="Digite sua tarefa..."
                   onKeyDown={(e) => HandleEnterClick(e)}
            />
            <button onClick={() => {
                props.AddTask(task)
                setTask("");
            }
            } className="flex w-full justify-center bg-slate-500 my-2 p-2 rounded-md hover:bg-slate-600 transition-colors duration-300">Adicionar tarefa</button>
        </div>

    )
}

export default CreateTask