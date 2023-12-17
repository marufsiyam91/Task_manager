import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskItem from '../src/Components/TaskItem'
import { GlobalProibider } from './globalProvider/GlobalProibider'


const App = () => {


  return (
    <>
      <GlobalProibider>
          <AddTaskForm/>
          <TaskItem/>
      </GlobalProibider>
    </>
    
  )
  }

export default App

