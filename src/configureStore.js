import { createStore }from 'redux';

import todoApp from './reducers'
import { loadState, saveState } from './modules/localStorage'
import throttle from 'lodash/throttle';

const configureStore = () => {

    /**
     * presistedState capture from local storage
     */
    const presistedState = loadState()
    const store = createStore(todoApp, presistedState)
    /**
     * Throttle here to prevent expensive JSON.stringify in saveState() more often than 1 sec
     */
    store.subscribe(throttle(() => {
        const todos = store.getState().todos
        saveState({
            todos
        })
    }), 1000)

    return store;
}

export default configureStore;
