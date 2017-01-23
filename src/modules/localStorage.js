export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState) {
            return JSON.parse(serializedState)
        }
        return void 0
    } catch (err) {
        return void 0
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err) {
        // handle error
    }
}