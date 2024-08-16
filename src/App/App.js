import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { TodoItemLoading } from "../TodoItemLoading";
import { ModalCreateNewTodo } from "../ModalCreateNewTodo";

 /* const defoultTodo = [
  {text: "Cortar cebolla", completed: true},
  {text: "Bañase", completed: true},
  {text: "Caminar", completed: false},
  {text: "Comer", completed: true},
  {text: "Usar estado derivado", completed: false}
]

localStorage.setItem("TODOS_V1",JSON.stringify(defoultTodo))  */


function App() {
  const {
    item: todo, 
    updateItem: updateTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1",[])
  const [searchTodo,setSearchTodo] = useState(''); 
  const [modalState,setModalState] = useState(false); 

  let complatedTodo = todo.filter(todo=> todo.completed).length;
  let totalTodo = todo.length;

  let filteredTodo = todo.filter(todo => todo.text.toLocaleLowerCase().includes(searchTodo.toLocaleLowerCase()));

  function addTodoHandler(newTodoText){
    const newTodos = [...todo]
    const newTodo = {
      text: newTodoText, 
      completed: false,
    }
    newTodos.push(newTodo);
    updateTodos(newTodos);
  }

  function delateTodoHandler(todoToDelateText){
    updateTodos(todo.filter(todo => todo.text !== todoToDelateText))
  }

  function toggleTodoHandler(todoToDelateText){
    const newTodos = [...todo]
    let todoToToggle=todo.find((todo)=>todo.text === todoToDelateText);
    todoToToggle.completed=!todoToToggle.completed;
    updateTodos(newTodos);
  }

  function closeModal(){
    setModalState(false);
  }

  function openModal(){
    setModalState(true);
  }
  return (
    <div className="flex flex-col content-center justify-center items-center min-h-screen bg-slate-100 gap-9">
      {loading?<h1 className="text-2xl font-bold">Cargando...</h1>:<TodoCounter total={complatedTodo} complated={totalTodo} />}
      <TodoSearch searchTodo={searchTodo} setSearchTodo={setSearchTodo}/>

      <TodoList>
        {loading && <><TodoItemLoading /><TodoItemLoading /><TodoItemLoading /></>}
        {error && <p>Ha habido un error cargando los todos</p>}
        {(!loading && totalTodo === 0) && <p>Ingresa tu primer TODO!</p>}
        {
          filteredTodo.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} toggleTodoHandler={toggleTodoHandler} delateTodoHandler={delateTodoHandler}/>
          ))
        }
      </ TodoList>

      {!loading && <CreateTodoButton openModal={openModal}/>}
      {modalState && <ModalCreateNewTodo closeModal={closeModal} addTodo={addTodoHandler}/>}
    </div>
  );
}

export default App;
