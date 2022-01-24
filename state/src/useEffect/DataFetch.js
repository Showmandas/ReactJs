import React,{useState,useEffect} from 'react'

const loadingMsg=<p>Todo is loading...</p>;
const DataFetch = () => {
    const [todos,setTodos]=useState(null);
    const [isLoading,setisLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
                if(!res.ok){
                    throw Error("Fetching failed");
                }else{
                    return res.json();
                }

            })
            .then((data)=>{
                setTodos(data);
                setisLoading(false);
                setError(null);
            })
            .catch((error)=>{
                setError(error.message);
                setisLoading(false);
            })
        
        },[])

        const todosElement=todos && todos.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>;
             });
    return (
        <div>
       <h1>Datafetch </h1>
       {error && <p>{error}</p>}
       {isLoading && loadingMsg}
        {todosElement}
        </div>
        
       
    )
}

export default DataFetch
