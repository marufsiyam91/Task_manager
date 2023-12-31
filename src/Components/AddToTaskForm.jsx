import { useContext, useState } from "react";
import { Context } from "../TaskContext/TaskContext"
import './Taskform.css'


const AddTaskForm = () => {
  
  const { addTask } = useContext(Context)
  
  const [input, setInput] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault()
    if(input.trim() === ""){
      return
    }
    else{
      const taskItem = {
        id: Date.now(),
        task: input
      };
      addTask(taskItem);
      setInput('')
    }

  }
  // this is a regster from 

  return (
    <div className="task_form">
        <form onSubmit={handleSubmit}>
            <input 
            className="taskInput"
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add your task"
            />
            <button className="addTaskbtn">Add Task</button>
        </form>
    </div>
  )
}

export default AddTaskForm
