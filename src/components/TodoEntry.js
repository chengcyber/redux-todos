import React from 'react';


let newTodoId = 0;
class TodoEntry extends React.Component {

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe( () => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        let input;
        const props = this.props;
        const store = props.store;
        const onAddClick = (text) => {
            store.dispatch({
                type: 'ADD_TODO',
                id: newTodoId++,
                text
            })
            }
        return (
            <div>
                <input ref={node => { input = node }}
                       placeholder="Enter new task"/>
                <button onClick={ () => {
                    onAddClick(input.value);
                    input.value = '';
                }
                }>Create</button>
            </div>
        )
    }
}

export default TodoEntry;