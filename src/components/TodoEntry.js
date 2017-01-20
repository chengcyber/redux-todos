import React from 'react';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo.js';


let TodoEntry = ({
    dispatch
}) => {

    let input;
    return (
        <div>
            <input ref={node => {
                input = node
            }}
                   placeholder="Enter new task"/>
            <button onClick={ () => {
                dispatch(addTodo(input.value))
                input.value = '';
            }
            }>Create
            </button>
        </div>
    )
}
TodoEntry = connect()(TodoEntry);


// class TodoEntry extends React.Component {
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
//         let input;
//         const { store } = this.context;
//         const onAddClick = (text) => {
//             store.dispatch({
//                 type: 'ADD_TODO',
//                 id: newTodoId++,
//                 text
//             })
//             }
//         return (
//             <div>
//                 <input ref={node => { input = node }}
//                        placeholder="Enter new task"/>
//                 <button onClick={ () => {
//                     onAddClick(input.value);
//                     input.value = '';
//                 }
//                 }>Create</button>
//             </div>
//         )
//     }
// }
// TodoEntry.contextTypes = {
//     store: React.PropTypes.object
// }

export default TodoEntry;