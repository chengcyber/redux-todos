import React, { Component } from 'react';

export default class TodoItem extends Component {


    render () {
        const props = this.props
        const store = props.store
        const liStyle = {
            textDecoration: props.todo.completed?'line-through':''
        }
        return (
            <div>
                <li style={liStyle} onClick={ () => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: props.todo.id
                })}>{props.todo.text}</li>
            </div>
        )
    }

}