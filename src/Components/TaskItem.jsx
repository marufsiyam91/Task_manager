import { useContext } from "react"
import { Context } from "../TaskContext/TaskContext"
import TaskList from "./TaskList"

const TaskItem = () => {
  const { Tasks } = useContext(Context)


  return (
    <div>

        {
          Tasks && Tasks.length > 0 ?
          <div className="task_container">
            {
              Tasks.map((task) => <TaskList key={task.id} taskItem={task}/>)
            }
          </div>
          :
          <div className="emptyTask">
            No task have been added yet!
          </div>
        }

    </div>
  )
}

export default TaskItem


