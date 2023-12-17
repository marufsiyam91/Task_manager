export const reducer = (state, action) => {
     const {type, payload} = action
     console.log(state)
     switch (type) {
          case 'AddTask' :
               return{
                    ...state,
                    Tasks: [...state.Tasks, payload ]
               }
          case 'DeleteTask' :{
               const filteredTask = state.Tasks.filter((task) => task.id !== payload)
               return{
                    ...state,
                    Tasks: filteredTask
               }
          }
     }
}