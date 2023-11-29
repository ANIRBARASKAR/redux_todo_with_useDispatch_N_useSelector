import { createStore, combineReducers } from "redux"
import { counterReducers } from "../reducers/counterReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import { todoReducer } from "../reducers/todoReducer"

const rootReducer = combineReducers({
    counter: counterReducers,
    myTodo: todoReducer
})
const reduxStore = createStore(rootReducer, {}, composeWithDevTools())


export default reduxStore