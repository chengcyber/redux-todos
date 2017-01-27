import { createStore }from 'redux';
import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';

import todoApp from './reducers'



/**
 * Add log group to Dispatch method
 */
// const addLoggingToDispatch = (store) => (next) => {
//     /**
//      * Browser not support console.group
//      */
//     if (!console.group) {
//         return next;
//     }
//
//     /**
//      * Log group by action.type
//      */
//     return (action) => {
//         // console.log(action);
//         console.group(action.type);
//         console.log('%c prev state', 'color: grey', store.getState());
//         console.log('%c action', 'color: blue', action);
//         const returnValue = next(action)
//         console.log('%c next state', 'color: green', store.getState());
//         console.groupEnd();
//         return returnValue;
//     }
// }

// const promise = (store) => (next) => (action) => {
//     if (typeof action.then === 'function') {
//         return action.then(next)
//     }
//     return next(action)
// }

// const applyMiddlewares = (store, middlewares) => {
//     middlewares.forEach(middleware =>
//         store.dispatch = middleware(store)(store.dispatch)
//     )
// }


/**
 * replaced by react-thunk module
 */
// const thunk = (store) => (next) => (action) => (
//     typeof action === 'function'?
//         action(store.dispatch, store.getState):
//         next(action)
// )


const configureStore = () => {

    /**
     * presistedState capture from local storage
     */
    // const presistedState = loadState()
    /**
     * Add promise support to dispatch
     */
    /**
     * Add thunk support to dispatch
     */
    const middlewares = [thunk];


     /**
     * If not production env, log when dispatch
     */
    if ( process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }

    // applyMiddlewares(store, middlewares)

    const store = createStore(
        todoApp,
        // presistedState,
        applyMiddleware(...middlewares)
    )
    /**
     * Throttle here to prevent expensive JSON.stringify in saveState() more often than 1 sec
     */
    // store.subscribe(throttle(() => {
    //     const todos = store.getState().todos
    //     saveState({
    //         todos
    //     })
    // }), 1000)

    return store;
}

export default configureStore;
