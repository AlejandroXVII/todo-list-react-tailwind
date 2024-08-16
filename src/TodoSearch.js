
function TodoSearch({searchTodo,setSearchTodo}){
    
    return (
        <input onChange={(event)=>setSearchTodo(event.target.value)} value={searchTodo} placeholder="Ingrese un todo" className="h-9 w-64 p-3 rounded shadow-lg focus:outline-indigo-500"/>
    );
  }

export { TodoSearch };