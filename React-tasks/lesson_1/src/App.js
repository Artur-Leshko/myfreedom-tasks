import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

export default () => {
    return (
        <React.Fragment>
            <Header />
            <Form />
            <ToDoList />
        </React.Fragment>
    )
}
