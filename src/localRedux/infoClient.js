const infoClient = (state = {}, action) => {
    console.log("infoClient", action.type)
    if (action.type === "GET_USER") {
        return state.find((user) => {
            return user.key === action.payload
        })
    }
    else { return state }
}
export const getUser = (payload) => ({ type: "GET_USER", payload })
export default infoClient;