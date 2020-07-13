import React from 'react';

function Settings() {
    return(
        <div className="settings">
            <select className="sort">
                <option value="">No Sort</option>
            </select>
            <input className="search" placeholder="Search by name"></input>
        </div>
    )
}

export default Settings;