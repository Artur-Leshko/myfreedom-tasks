import React from 'react';

function PetsItem({ item }) {
    return(
        <li>
            <div className="petItem__top">
                <div className="name">
                    {item.name}
                    <button className="deleteButton" type="button">Удалить</button>
                </div>
                <div className="date">
                    {item.date}
                </div>
            </div>

            <div className="owner">
                {item.owner}
            </div>

            <div className="description">
                {item.description}
            </div>
        </li>
    )
}

export default PetsItem;