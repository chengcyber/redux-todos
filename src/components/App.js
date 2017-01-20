import React, { Component } from 'react';

import TodoEntry from './TodoEntry.js'
import VisibilityTodoList from '../containers/VisibilityTodoList.js';
import Footer from './Footer.js'


const App = () => {

        return (
        <div>
            <TodoEntry />
            <VisibilityTodoList />
            <Footer />
        </div>
        )


 }

export default App;