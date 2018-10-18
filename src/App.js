import React, {Component} from 'react';
import Header from './components/Header';
import AddNews from './components/AddNews';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import AddNewsModal from "./components/AddNewsModal";
import {connect} from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom'

class App extends Component {

    showModal() {
        window.scrollTo(0,0);
        document.getElementById('modal').style.display = 'block';
        document.getElementById('content').style.filter = 'blur(10px)';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('content').style.filter = 'blur(0px)';
        document.body.style.overflow = 'visible';
    }
    componentDidMount(){
        const self = this;
        document.addEventListener('click', function (e){
            let modal = document.getElementById('modal');
            let containsModal = modal.contains(e.target);

            if (!containsModal && modal.style.display == 'block' && !(e.target.dataset.modal=='open')){
                self.closeModal();
            }

        })
    }
    render() {
        return (
            <div>
                <div id='content'>
                    <Header title={this.props.title}>
                        <AddNews showModal={this.showModal}/>
                    </Header>
                    <main>
                        <Nav items={this.props.navigation.items} active={this.props.navigation.active}/>
                        <BrowserRouter>
                            <Route path='page=:id'>
                                <Content data={this.props.news} uploadedNews={this.props.uploadedNews}/>
                            </Route>
                        </BrowserRouter>
                    </main>
                    <Footer data={this.props.footer}/>
                </div>
                <div>
                    <AddNewsModal categories={this.props.news.categories} closeModal={this.closeModal}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.staticData.title,
        navigation: state.navigation,
        footer: state.staticData.footer,
        news: state.staticData.news,
        uploadedNews: state.news
    }
}

export default connect(mapStateToProps)(App);