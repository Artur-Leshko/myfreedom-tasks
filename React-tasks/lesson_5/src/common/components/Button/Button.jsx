import React from 'react';
import './Button.css'

const Kinds = {
    EDIT: 'edit_btn',
    DELETE: 'delete_btn',
    ADD: 'add_btn',
    CANCEL: 'cancel_btn'
};

export const Button = ({kind, className, ...others}) => {
    const btnClassName = (className || '') + '' + (Kinds[kind] || '');

    return <button className={btnClassName} {...others} />
};
