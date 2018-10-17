import React from 'react';



const AddNews = ({showModal}) => {
    return (
        <div className='addNews' onClick={() => showModal()} data-modal='open'>
            <p data-modal='open'>ДОБАВИТЬ НОВОСТЬ</p>
            <p data-modal='open'>+</p>
        </div>
    )
}

export default AddNews;