import React from 'react';
import './SocialButton.css';
import clsx from 'clsx';

export const ButtonType = {
    FACEBOOK: "facebook",
    TWITTER: "twitter",
};

export function SocialButton({ type }) {
    const className = clsx('fa', {
      'fa-facebook': type === ButtonType.FACEBOOK,
      'fa-twitter': type === ButtonType.TWITTER,
    });

    return (
      <a href="#" className={className}></a>
    );
}
