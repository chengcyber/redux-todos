import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList.js';
import toggleTodo from '../actions/toggleTodo.js';
import { getVisibleTodos } from '../reducers'




const mapStateToProps = (state, { params }) => {
    return {
        todos: getVisibleTodos(state, params.filter || 'all')
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id))
//         }
//     }
// }

const mapActionCreators = {
    onTodoClick : toggleTodo
}

const VisibilityTodoList = withRouter(connect(
    mapStateToProps,
    mapActionCreators
)(TodoList));


// class VisibilityTodoList extends Component {
//
//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe( () => {
//             this.forceUpdate();
//         })
//     }
//
//     componentWillUnmount() {
//         this.unsubscribe();
//     }
//
//     render() {
//         const { store } = this.context;
//         const state = store.getState();
//         return (
//             <TodoList
//                 todos={getVisibleTodos(state.todos, state.visibilityFilter)}
//                 onTodoClick={ (id) => {
//
//                 }}
//             />
//         )
//     }
// }
// VisibilityTodoList.contextTypes = {
//     store: React.PropTypes.object
// }

export default VisibilityTodoList;