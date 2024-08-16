function CreateTodoButton({openModal}){
    return (
        <button onClick={()=>openModal()} className="py-2 px-2 border-solid bg-indigo-500 hover:indigo-600 hover:scale-110 hover:rotate-180 transition-transform delay-75 rounded-full text-white font-bold text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    );
  }

export { CreateTodoButton };