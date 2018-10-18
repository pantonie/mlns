import React, {Component} from 'react';
import MainNews from './MainNews';
import { OtherNews } from './OtherNews';
import { MoreNews } from './MoreNews';
import { withRouter } from 'react-router-dom';

 class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: props.uploadedNews.slice(0,2),
            currentPage: 1,
            total: props.uploadedNews.length || 0
        };
    }

    componentDidMount(){
        this.setState({news: this.props.uploadedNews.slice(0,2)})
        if (this.props.location.pathname.includes('page')){
            this.setState({currentPage: this.props.location.pathname.split('=')[1]})
        }
        this.setState({total: this.props.uploadedNews.length})
    }
     static getDerivedStateFromProps(props){
        return ({
            total: props.uploadedNews.length,
            currentPage: props.location.pathname.split('=')[1] || 1,
        })
    }
    render() {
        const news = this.props.uploadedNews.slice(this.state.currentPage*2-2, this.state.currentPage*2) || this.state.news;
        return (
            <div className='news'>
                <MainNews data={this.props.data.mainNews} categories={this.props.data.categories}/>
                <OtherNews items={news} categories={this.props.data.categories} />
                <MoreNews total={this.state.total}/>
            </div>
        )
    }
}

export default withRouter(Content);