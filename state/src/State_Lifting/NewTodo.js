import React,{useState} from 'react'

const NewTodo = (props) => {

    const [todo,setTodo]=useState("");
    const handleInput=(event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit=(event)=>{
     event.preventDefault();
     props.onTodo(todo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Todo</label>
            <input type="text" id="todo" name="todo" value={todo} onChange={handleInput} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
