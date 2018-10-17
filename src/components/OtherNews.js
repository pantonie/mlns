import React from 'react';
import { OtherNewsItem } from './OtherNewsItem'

export const OtherNews = ({items, categories}) => {
    return (
        <div className='other_news'>
            {items.map((item) => {
                return (
                    <OtherNewsItem key={item.id} header={item.text} date={item.date} category={item.category} image={item.file} categories={categories}/>
                )
            })}
        </div>
    )
}