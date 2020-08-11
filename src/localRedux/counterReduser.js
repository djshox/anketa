const num = 0

const getCounter = (state = num, action) => {
    console.log(action)
    if (action.type === "add") return state + action.count;
    else if (action.type === "sub") return state - action.count;
    else if (action.type === "reset") return 0;
    else return state
}

export const countUp = (count) => ({ type: "add", count })
export const countDown = (count) => ({ type: "sub", count })
export const countReset = () => ({ type: "reset" })

export default getCounter