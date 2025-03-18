function CreateTask()
{
    return (
        <div className="p-5 m-5 w-100 bg-slate-300 rounded-md">
            <input type="text" className=" shadow hover:bg-slate-200 hover:text-gray-400 transition-colors duration-400 focus:ring-3 focus:ring-fuchsia-200 outline-none w-full h-10 bg-gray-50 p-3 rounded-md text-gray-300" placeholder="Digite sua tarefa..."/>
            <button className="bg-slate-500 w-full p-2 mt-3 rounded-md">Adicionar tarefa</button>
        </div>

    )
}

export default CreateTask