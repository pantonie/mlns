import React from 'react';

export const FooterSearch = ({text}) => {
    return (
        <div className='footer_search'>
            <div className='footer_search_input'>
                <input placeholder={text} className='footer_search'></input>
            </div>
            <div className='footer_label'>
            </div>
        </div>
    )
};