function TodoCounter({total,complated}){
    return (
        <h1 className="text-2xl font-bold">
            {total===complated?"Todos los todos han sido completados":
            <>Has completado <span className="text-indigo-800">{total}</span> Todo de <span className="text-indigo-800">{complated}</span></>}
        </h1>
    );
  }

export { TodoCounter };