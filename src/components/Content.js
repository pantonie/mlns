import React, {Component} from 'react';
import MainNews from './MainNews';
import { OtherNews } from './OtherNews';
import { MoreNews } from './MoreNews';
import { withRouter } from 'react-router-dom';

 class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
            currentPage: 1,
            total: 0
        };
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount(){
        this.setState({news: this.props.uploadedNews.slice(0,2)})
        if (this.props.location.pathname.includes('page')){
            this.setState({currentPage: this.props.location.pathname.split('=')[1]})
        }
        this.setState({total: this.props.uploadedNews.length})
    }
    componentWillReceiveProps(next){
        this.setState({total: next.uploadedNews.length})
        this.setState({currentPage: next.location.pathname.split('=')[1]})
    }
    nextPage(page){
        if (page === this.state.currentPage) return;
        this.setState({news: this.props.uploadedNews.slice(page*2-2, page*2)})
        this.setState({currentPage: page});
    }
    render() {
        const news = this.props.uploadedNews.slice(this.state.currentPage*2-2, this.state.currentPage*2);
        return (
            <div className='news'>
                <MainNews data={this.props.data.mainNews} categories={this.props.data.categories}/>
                <OtherNews items={news} categories={this.props.data.categories} />
                <MoreNews nextPage={this.nextPage} total={this.state.total}/>
            </div>
        )
    }
}

export default withRouter(Content);