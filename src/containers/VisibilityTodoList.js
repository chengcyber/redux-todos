import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../components/TodoList.js';
import FetchError from '../components/FetchError.js'
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching, getFetchErrorMessage } from '../reducers';

/**
 * To invoke life cycle method to update todos
 */
class VisibilityTodoList extends Component {

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos, isFetching } = this.props
        if (!isFetching) {
            fetchTodos(filter)
        }
            // .then(() => console.log('done'))
            // all thunk function returns promise
    }

    render () {
        const { toggleTodo, isFetching, fetchErrorMessage, todos } = this.props
        if (isFetching && !todos.length)
            return <p>Loading</p>
        if (fetchErrorMessage && !todos.length)
            return <FetchError
                        error={fetchErrorMessage}
                        onRetry={() => this.fetchData()}
                    />
        return <TodoList
            todos={todos}
            onTodoClick={toggleTodo}/>
    }
}


const mapStateToProps = (state, { params }) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        fetchErrorMessage: getFetchErrorMessage(state, filter),
        filter
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id))
//         }
//     }
// }

// const mapActionCreators = {
//     onTodoClick : toggleTodo
// }

VisibilityTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibilityTodoList));


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