import { AuthAPI } from 'API/api';

let authData = {
    userId: null,
    email: null,
    login: false,
    isAuth: false,
}

const Auth = (state = authData, action) => {
    if (action.type === 'signIn') {
        localStorage.setItem("isAuth", true)
        return {
            ...state, ...action.payload, isAuth: true
        }
    }
    if (action.type === 'clearData') {
        localStorage.setItem("isAuth", false)
        return {
            isAuth: false
        }
    }

    if (action.type === 'checkAuthUser') {
        return localStorage.getItem("isAuth")
    }
    return state
}

export const signUser = (userId, email, password, rememberMe) => ({ type: "signIn", payload: { userId, email, password, rememberMe } })
export const clearUserData = () => ({ type: "clearData" })
export const checkIsAuth = () => ({ type: "checkAuthUser" })


// thunklar
export const getUserData = () => async (dispatch) => {
    const response = await AuthAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(signUser(id, email, login, true))
    }
}
export const signInThunk = (email, password, rememberMe = false) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getUserData())
    }
}
export const signOutThunk = () => async (dispatch) => {
    let res = await AuthAPI.logOut();
    if (res.data.resultCode === 0) {
        dispatch(clearUserData())
    }
}
export default Auth;
