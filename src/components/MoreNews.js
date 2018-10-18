import React from 'react';
import { Link } from 'react-router-dom'

export const MoreNews = ({total}) => {
    const pages = (total) => {
        let divs = [];
        for (let i=0; i < Math.ceil(total/2); i++){
            divs.push(
                <Link to={`page=${i+1}`}  key={i}>
                    <div key={i}>{i+1}</div>
                </Link>
            )
        }
        return divs;
    };

    return(
        <div className='more_news'>
            <div className='header'>Больше новостей</div>
            <div className='pagination'>
                {pages(total)}
            </div>
        </div>
    )

}