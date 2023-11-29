import { ADD_TODO } from "../constants/todoConstants"
import reduxStore from "../redux/store"

export const createTodo = arg => {
    reduxStore.dispatch({ type: ADD_TODO, payload: arg })
}