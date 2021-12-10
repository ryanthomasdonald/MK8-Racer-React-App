import {combineReducers} from "redux"
import builderReducer from "./builderReducer"

const rootReducer = combineReducers({
    builderReducer: builderReducer
})

export default rootReducer