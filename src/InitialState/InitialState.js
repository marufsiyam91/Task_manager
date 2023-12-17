import { dataInLocalStore } from "../localStore/dataInLocalStore"

const InitialState = {
     Tasks: dataInLocalStore()
}
console.log(InitialState)

export default InitialState