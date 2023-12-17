import "./App.css";
import TaskItem from "../src/Components/TaskItem";
import { GlobalProvider } from "./globalProvider/GlobalProibider";
import AddTaskForm from "./Components/AddToTaskForm";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <AddTaskForm />
        <TaskItem />
      </GlobalProvider>
    </>
  );
};

export default App;
