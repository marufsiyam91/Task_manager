import { useContext, useState } from "react"
import { Context } from "../TaskContext/TaskContext"

// eslint-disable-next-line react/prop-types
const TaskList = ({taskItem}) => {
  console.log(taskItem)
  // eslint-disable-next-line react/prop-types
  const {id, task} = taskItem


  const [isChecked, setIsChecked] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState("");

  const {Tasks, deleteTask} = useContext(Context)


  // const deleteTaskbtn = (id) => {
  //   deleteTask(id)
  // }

  const editTask = (id) => {
    const findedTask = Tasks.find((editTask) => editTask.id === id)
    setIsEdit(true)
    setUpdate(findedTask.task)
  }

  const addEdit = (id) => {
    if(update.trim() === ""){
      return
    }else{
      setIsEdit(false)
      const findedTask = Tasks.find((editTask) => editTask.id === id)
      findedTask.task = update
    }
  }


  return (
    <div>

      {
        task &&

        <div className="task_list_area">
        <div className="inputbox">
          <p>
            <input type="checkbox"  onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked}/>
            {
              isEdit ? 
              <input type="text" onChange={(e) => setUpdate(e.target.value)} value={update}/>
                : 
              <span style={{textDecoration: isChecked ? 'line-through' : '', color: isChecked ? 'red' : '', marginLeft: '5px'}}>{task}</span>
            }
          </p>
        </div>

        <div className="button_area">
          <button onClick={() => isEdit ? addEdit(id) : editTask(id)}>{isEdit ? 'save' : 'edit'}</button>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
      </div>
      
      }

      
    </div>
  )
}

export default TaskList
