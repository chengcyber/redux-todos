import React, { Component } from 'react';
import TodoList from '../components/TodoList.js'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL': return todos;
        case 'SHOW_ACTIVE':　return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED': return todos.filter(t => t.completed)
        default: return todos;
    }
}


export default class VisibilityTodoList extends Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe( () => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        return (
            <TodoList
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={ (id) => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }}
            />
        )
    }
}
VisibilityTodoList.contextTypes = {
    store: React.PropTypes.object
}