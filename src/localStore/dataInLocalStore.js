export const dataInLocalStore = () => {
     const data = JSON.parse(localStorage.getItem('Tasks'))
     if(data){
          return data
     }
     return []
}