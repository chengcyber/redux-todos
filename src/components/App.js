import React, { Component } from 'react';
import store from '../reducers/index.js';

import TodoEntry from './TodoEntry.js'
import TodoList from './TodoList.js';
import Footer from './Footer.js'


export default class App extends Component {

    render () {

        return (
        <div>
            <TodoEntry store={store} />
            <TodoList store={store} />
            <Footer store={store} />
        </div>
        )
    }

}