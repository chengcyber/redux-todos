import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Root from './components/Root'

import configureStore from './configureStore';

// class Provider extends React.Component {
//
//     getChildContext () {
//         return {
//             store: this.props.store
//         }
//     }
//
//     render() {
//         return this.props.children
//     }
// }
// Provider.childContextTypes = {
//     store: React.PropTypes.object
// }

const store = configureStore();


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);









/* const todoApp = (
  state = {},
  action
) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
} */



//
//
// console.log('initial state')
// console.log(store.getState())
// console.log('------------')
//
// console.log('create a todo')
//
// store.dispatch({
// 	type: 'ADD_TODO',
//   text: 'brilliant new',
//   id: 0
// })
//
// console.log(store.getState())
// console.log('create another todo')
// store.dispatch({
// 	type: 'ADD_TODO',
//   text: 'second to none',
//   id: 1
// })
//
// console.log(store.getState())
// console.log('------------')
//
// console.log('toggle second todo')
// store.dispatch({
// 	type: 'TOGGLE_TODO',
//   id: 1
// })
//
// console.log(store.getState())
// console.log('------------')
//
// console.log('set visibility filter')
//
// store.dispatch({
// 	type: 'SET_VISIBILITY_FILTER',
//   filter: 'SHOW_COMPLETED'
// })
//
// console.log(store.getState())
// console.log('------------')




