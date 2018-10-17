import React, {Component} from 'react';
import TodayIs from './TodayIs';
import {MainNewsCard} from './MainNewsCard';
import {MainNewsList} from "./MainNewsList";

class MainNews extends Component {
    render() {
        return (
            <div className='main_news'>
                <div className='main_news_column1'>
                    <div className='news_date'>
                        <TodayIs/>
                    </div>
                    <MainNewsCard category='sport' date='12/10/1985' header='Дзюба стал человеком года по версии GQ'
                                  image={this.props.data.image} categories={this.props.categories}/>
                </div>
                <div className='main_news_column2'>
                    <MainNewsList items={this.props.data.list}/>
                </div>
            </div>

        )
    }
}

export default MainNews;