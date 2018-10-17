import React from 'react';
import { NewsItem } from './NewsItem'

export const MainNewsList = ({items}) => {
    return (
        <div className={'main_news_list'}>
            <div className='header'>Главные новости</div>
            <div className='items'>
                {items.map((item, index) => {
                    return (
                        <NewsItem key={index} header={item.header} date={item.date} views={item.views}/>
                    )
                })}
            </div>
        </div>

    )
}