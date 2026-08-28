
import { combineReducers } from "redux";
import { ItemReducer } from "./ItemReducer";

const reducers=combineReducers({

    allItems:ItemReducer

})

export default reducers;