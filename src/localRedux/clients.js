const getClients = (state = [], action) => {
    if (action.type === "ADD_CLIENTS") {
        return action.payload
    }

    else if (action.type === "ADD_CLIENT") {
        action.payload.key = state.length + 1;
        return [...state, action.payload]
    }

    else if (action.type === "CHANGE_CLIENT") {
        return state.map(function (item) {
            if (item.key === action.payload.key) {
                return action.payload
            }
            return item;
        })
    }

    else if (action.type === "DELETE_CLIENT") {
        return state.filter(function (item) {
            return item.key !== action.payload
        })
    }
    else { return state }
}

export const addAllClients = (payload) => ({ type: "ADD_CLIENTS", payload })
export const addUser = (payload) => ({ type: "ADD_CLIENT", payload })
export const changeUser = (payload) => ({ type: "CHANGE_CLIENT", payload })
export const deleteUser = (payload) => ({ type: "DELETE_CLIENT", payload })
export default getClients;