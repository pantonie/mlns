import React from 'react';

export const NewsItem = ({header, date, views}) => {
    return (
        <div className='news_item'>
            <div className='header'>
                {header}
            </div>
            <div className='news_item_footer'>
                <div className='viewIcon'></div>
                <div className='viewsCount'>{views}</div>
                {date}
            </div>
        </div>
    )
}