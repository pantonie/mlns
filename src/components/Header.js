import React, {Component} from 'react';
import TodayIs from './TodayIs';

function Header(props) {

    return (
        <header>
            <div></div>
            <div className='header__center'>
                <title>
                    {props.title}
                </title>
                <TodayIs header/>
            </div>
            {props.children}
            <div></div>
        </header>
    )
};

export default Header;