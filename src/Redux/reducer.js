import { combineReducers } from "redux"
import { FETCH_COMICS } from "./actionTypes"

const defaultState = {
    comics: [],
    shows: [],
    fans: [],
    currentUser: null
}

function comicsReducer(state = defaultState.comcis, action) {
    switch (action.type) {
        case FETCH_COMICS:
            return action.payload
        default:
            return state

    }
}

const rootReducer = combineReducers({
    comics: comicsReducer,
    // events: showsReducer,
    // fans: fansReducer,
    // currentUser: usersReducer
})

export default rootReducer