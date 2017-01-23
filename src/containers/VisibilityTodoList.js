import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList.js';
import toggleTodo from '../actions/toggleTodo.js';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all': return todos;
        case 'active':　return todos.filter(t => !t.completed)
        case 'completed': return todos.filter(t => t.completed)
        default: return todos;
    }
}


const mapStateToProps = (state, { params }) => {
    return {
        todos: getVisibleTodos(state.todos, params.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibilityTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
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