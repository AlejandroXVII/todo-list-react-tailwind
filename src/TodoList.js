function TodoList(props){
    return (
        <ul className="space-y-3">
            {props.children}
        </ul>
    );
  }

export { TodoList };