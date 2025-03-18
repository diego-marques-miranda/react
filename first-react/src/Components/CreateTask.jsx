import {useState} from "react";

function CreateTask(props)
{
    const [task, setTask] = useState("");

    function HandleEnterClick(e)
    {
        if (e.key === "Enter")
        {
            props.AddTask(task);
            setTask("");
        }
    }
    
    return (
        <div className="shadow-md p-5 m-5 w-100 bg-teal-300 rounded-md">
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" 
                   className=" shadow-md hover:bg-teal-100 hover:text-gray-400 transition-colors duration-300 focus:ring-3 focus:text-black focus:ring-green-200 outline-none w-full h-10 bg-teal-50 p-3 rounded-md text-gray-300" 
                   placeholder="Digite sua tarefa..."
                   onKeyDown={(e) => HandleEnterClick(e)}
            />
            <button onClick={() => {
                props.AddTask(task)
                setTask("");
            }
            } className="shadow-md flex w-full justify-center bg-teal-700 mt-2 p-2 rounded-md hover:bg-teal-900 transition-colors duration-300">Adicionar tarefa</button>
        </div>

    )
}

export default CreateTask