import { dataInLocalStore } from "../localStore/dataInLocalStore"

const InitialState = {
     Tasks: dataInLocalStore()
}

export default InitialState