import React from 'react';

export const FooterNav = ({items, copyright}) => {

    return (
        <div className='footer_nav'>
            <div className='footer_nav_items'>
                {items.map((item, index) => {
                    return (
                        <span key={index}>{item}</span>
                    )
                })}
            </div>
            <div>
                <p>&copy; {copyright[0]}-{(new Date()).getFullYear()} {copyright[1]} </p>
            </div>
        </div>
    )
};