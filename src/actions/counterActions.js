import { DEC, INC } from "../constants/counterConstants"
import reduxStore from "../redux/store"

export const increment = e => {
    reduxStore.dispatch({ type: INC })
}

export const decrement = e => {
    reduxStore.dispatch({ type: DEC })
}