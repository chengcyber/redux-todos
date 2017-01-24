import { createStore }from 'redux';

import todoApp from './reducers'
import { loadState, saveState } from './modules/localStorage'
import throttle from 'lodash/throttle';


/**
 * Add log group to Dispatch method
 */
const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    /**
     * Browser not support console.group
     */
    if (!console.group) {
        return rawDispatch;
    }

    /**
     * Log group by action.type
     */
    return (action) => {
        // console.log(action);
        console.group(action.type);
        console.log('%c prev state', 'color: grey', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = rawDispatch(action)
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd();
        return returnValue;
    }
}

const addPromiseSupport = (store) => {
    const rawDispatch = store.dispatch
    return (action) => {
        if (typeof action.then === 'function') {
            // console.log(action);
            return action.then(rawDispatch)
        }
        return rawDispatch(action)
    }
}


const configureStore = () => {

    /**
     * presistedState capture from local storage
     */
    const presistedState = loadState()
    const store = createStore(todoApp, presistedState)

    /**
     * If not production env, log when dispatch
     */
    if ( process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store)
    }

    /**
     * Add promise support to dispatch
     */
    store.dispatch = addPromiseSupport(store)

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
