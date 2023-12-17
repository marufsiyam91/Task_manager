import { useEffect, useReducer } from "react"
import { reducer } from "../Reducer/Reducer"
import InitialState from "../InitialState/InitialState"
import { Context } from "../TaskContext/TaskContext"



// eslint-disable-next-line react/prop-types
export const GlobalProibider = ({children}) => {

     const [state, dispatch] = useReducer(reducer, InitialState)


     function addTask (task) {
          dispatch({type: 'AddTask', payload: task})
     }

     function deleteTask (id) {
          dispatch({type: 'DeleteTask', payload: id})
     }

     useEffect (() => {
          localStorage.setItem('Tasks', JSON.stringify(state.Tasks))
        }, [state.Tasks])

     const values = {
          Tasks: state.Tasks,
          addTask,
          deleteTask,
     }

  return (
    <div>
      <Context.Provider value={values}>
          {children}
      </Context.Provider>
    </div>
  )
}
