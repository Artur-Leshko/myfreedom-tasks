import React from 'react';

import ListItem from './ListItem';

export default () => {
    const todos = ['Drink tea', 'Read a book', 'Walk a dog', 'Write a letter', 'Phone a friend'];

    return (
        <ol>
            <ListItem text={ todos[0] } />
            <ListItem text={ todos[1] } />
            <ListItem text={ todos[2] } />
            <ListItem text={ todos[3] } />
            <ListItem text={ todos[4] } />
        </ol>
    )
}
