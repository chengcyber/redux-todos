import React, { Component } from 'react';

import TodoEntry from './TodoEntry.js'
import VisibilityTodoList from '../containers/VisibilityTodoList.js';
import Footer from './Footer.js'



const App = ({
    store
}) => {

        return (
        <div>
            <TodoEntry store={store} />
            <VisibilityTodoList store={store} />
            <Footer store={store} />
        </div>
        )


 }

export default App;