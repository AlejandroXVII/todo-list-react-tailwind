function TodoItem({text,completed,delateTodoHandler,toggleTodoHandler}){
    return (
        <>
          <li className="w-64 bg-white shadow p-3 flex space-x-1 relative hover:translate-x-4 rounded transition-transform">
            <span onClick={()=>toggleTodoHandler(text)} className={completed?"text-green-500":" hover:text-slate-700"&&""}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </span>
            <p className={completed?"line-through":""}>{text}</p>
            <span onClick={()=>delateTodoHandler(text)} className="absolute right-3 text-slate-400 hover:text-slate-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </span>
          </li>
        </>
    );
  }

export { TodoItem };