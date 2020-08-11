import { getUserData } from "./authReducer"
const Logged = (state = false, action) => {
    if (action.type === 'logged') {
        return true
    }
    return state
}

export const userLogged = () => ({ type: "logged" })
export const loggedThunk = () => (dispatch) => {
    dispatch(getUserData()).then(() => {
        dispatch(userLogged())
    })
}

export default Logged;
