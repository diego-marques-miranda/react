 function Tasks()
 {
     return (
         <div className="bg-gray-50 w-100 p-5 rounded-md">
             <ol>
                 <li className="flex bg-slate-500 my-2 p-2 rounded-md hover:bg-slate-600 transition-colors duration-300">
                     <span className="text-lg">Estudar react</span> 
                     
                     <div className="flex gap-0.5 ml-auto">
                         <button className="hover:bg-slate-800 transition-colors duration-300 mx-0.5 bg-slate-700 px-2.5 rounded-md">X</button>
                         <button className="hover:bg-slate-800 transition-colors duration-300 mx-0.5 bg-slate-700 px-2.5 rounded-md">^</button>
                         <button className="hover:bg-slate-800 transition-colors duration-300 mx-0.5 bg-slate-700 px-2.5 rounded-md">v</button>
                     </div>
                 </li>
                 
                 
             </ol>
         </div>
         
     )
 }
 
 export default Tasks