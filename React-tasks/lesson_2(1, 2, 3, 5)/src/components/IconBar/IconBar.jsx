import React from 'react';
import './IconBar.css';

export function IconBar({ orientation, children }) {
    let className = 'icon-bar-h';

    if (orientation === 'vertical') {
        className = 'icon-bar-v';
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export function ChangeButton({ className, children }) {
    return (
        <button className={className} onClick={() => {
            let bar_class = document.querySelector('.icon-bar-v');

            if(bar_class) {
                bar_class.className = 'icon-bar-h';
            } else {
                document.querySelector('.icon-bar-h').className = 'icon-bar-v';
            }
        }}>
            {children}
        </button>
    )
}
