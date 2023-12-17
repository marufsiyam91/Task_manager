import "./App.css";
import TaskItem from "../src/Components/TaskItem";
import { GlobalProibider } from "./globalProvider/GlobalProibider";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  return (
    <>
      <GlobalProibider>
        <AddTaskForm />
        <TaskItem />
      </GlobalProibider>
    </>
  );
};

export default App;
