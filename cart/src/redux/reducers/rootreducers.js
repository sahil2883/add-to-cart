import { combineReducers } from "redux";
import { cartReducer } from "./reducers";
const rootreducer = combineReducers({cartReducer})

export default rootreducer;