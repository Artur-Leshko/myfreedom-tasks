export const add = (array, object) => [...array, object];

export const remove = (array, id) => array.filter((object) => object.id !== id);

export const update = (array, id, changed) => {
    const index = array.findIndex((object) => object.id === id);

    if(index === -1) {
        return array;
    }

    return [
        ...array.slice(0, index),
        { ...changed, id },
        ...array.slice(index + 1)
    ];
};
