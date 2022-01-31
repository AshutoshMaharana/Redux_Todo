import { addTodo } from "../redux/todo/todoactions";
import { useSelector,useDispatch } from "react-redux";
import React,{useState} from "react";


const AddTodo = () => {
    const [input,setInput] = useState("")
    const addTodoDispatch = useDispatch()

    const handleTodo =()=>{
        addTodoDispatch(addTodo(input))
        setInput("")
    }
  return <div>
      <input
        value = {input}
        onChange={(e)=>setInput(e.target.value)}
        />
      <button className="add_todo" onClick={handleTodo}>
        Add Todo
      </button>


  </div>;
};

export default AddTodo;
