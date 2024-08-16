import { useState } from "react";

function ModalCreateNewTodo ({closeModal,addTodo}){
    const [newTodoText, setNewTodoText] = useState("");
    function onSubmit(event){
        event.preventDefault()
        closeModal();
        addTodo(newTodoText);
    }

    return (
        <div className="mix-blend-normal backdrop-blur absolute bg-slate-400 bg-opacity-70 min-h-screen w-screen flex justify-center items-center">
            <div className=" bg-slate-200 h-64 w-64 flex justify-center p-2 rounded relative">
                <form onSubmit={onSubmit} className="flex flex-col space-y-3 justify-center items-center">
                    <label className="font-semibold">Inserte new TODO</label>
                    <textarea className="ring-2 ring-indigo-400 rounded px-3 py-1" value={newTodoText} onChange={(event)=>setNewTodoText(event.target.value)}/>
                    <button className="bg-indigo-500 text-white px-5 py-1 rounded ">Create</button>
                </form>
                <span onClick={()=>closeModal()} className="absolute right-3 text-slate-400 hover:text-slate-700 top-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>  
        </div>  
    );
}

export  {ModalCreateNewTodo}