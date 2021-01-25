import { FETCH_COMICS } from "./actionTypes"

export const getComics = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/api/v1/comedians")
            .then(resp => resp.json())
            .then(data => dispatch({ type: FETCH_COMICS, payload: data }))
    }
}