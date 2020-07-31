import React from 'react';

export default () => {
    return(
        <form>
            <input type="text" placeholder="Enter your ToDo"></input>
            <button className="addBtn">Add</button>
            <button className="editBtn">Edit</button>
            <button className="deleteBtn">Delete</button>
        </form>
    )
}
