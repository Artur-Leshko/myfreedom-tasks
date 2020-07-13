import React from 'react';

function PetsItem({ item }) {
    return(
        <li>
            {item.name}
        </li>
    )
}

export default PetsItem;