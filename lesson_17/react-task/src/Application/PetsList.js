import React from 'react';
import PetItem from './PetItem';

function PetsList(props) {
    return(
        <ul className="petsList">
            { props.items.map(item => {
                return <PetItem item={item} />
            }) }
        </ul>
    )
}

export default PetsList;