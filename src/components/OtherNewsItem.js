import React from 'react';

export const OtherNewsItem = ({category, date, header, image, categories}) => {
    const style = {
        backgroundImage: 'url('+ image + ')',
        backgroundRepeat: 'no-repeat',
        backGroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <div className='main_news_card other_news_item' style={style}>
            <div className='news_card_top'>
                <div className={'label ' + category}>{categories[category]}</div>
                <div className='share'></div>
            </div>
            <div>
                <div className='date'>{date}</div>
                <div className='header'>{header}</div>
            </div>
        </div>
    )
};