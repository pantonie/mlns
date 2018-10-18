/* global FileReader */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { saveNews } from "../actions/saveNewsAction";

class AddNewsModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            text: '',
            category: '',
            file: ''
        };
        this.changeInput = this.changeInput.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.changeFile = this.changeFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.send = this.send.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    changeInput(id){
        const input = document.getElementById(id);
        if(input.value){
            this.setState({[id]: input.value});
            input.setAttribute('style', 'border: solid 1px #000000');
        } else {
            this.setState({[id]: ''});
            input.removeAttribute('style');
        }
    }
    changeSelect(){
        const select = document.getElementById('category');
        const div = document.getElementById('divSelect');
        if(select.value){
            this.setState({category: select.value});
            select.setAttribute('style', 'color: #000000');
            div.setAttribute('style', 'border: solid 1px #000000')
        } else {
            this.setState({category: ''});
        }
    }
    changeFile(){
        const select = document.getElementById('image');
        const div = document.getElementById('file');
        if (select.value){
            this.setState({file: select.value});
            div.childNodes[0].nodeValue = select.value.split('\\').slice(-1)[0]
            div.setAttribute('style', 'border: 1px solid #000000; color: #000000');
        }
    }
    removeFile(e){
        e.stopPropagation();
        const div = document.getElementById('file');
        this.setState({file: ''});
        div.childNodes[0].nodeValue = 'Upload Files';
        div.removeAttribute('style');

    }
    componentDidUpdate(){
        const div = document.getElementById('send');
        if(this.state.header && this.state.category && this.state.text && this.state.file){
            div.setAttribute('style', 'color: #000000')
        } else {
            div.removeAttribute('style');
        }
    }
    closeModal(){
        //TODO: clear modal fields
        this.props.closeModal();
    }
    send(){
        if (this.state.header && this.state.text && this.state.category && this.state.file){
            const file = document.getElementById('image').files[0];

            const reader = new FileReader();
            const self = this;

            reader.onload = function () {
                self.props.save({
                    header: self.state.header,
                    text: self.state.text,
                    file: reader.result,
                    category: self.state.category
                })
                self.closeModal();

            };

            reader.readAsDataURL(file)


        }

    }
    render()
    {
        const options = Object.keys(this.props.categories).map((item, i) => {
            return (
                <option key={i} value={item}>{this.props.categories[item]}</option>
            )
        });
        return (
            <div id='modal' className='add_news_modal'>
                <div className='close_modal' onClick={() => this.props.closeModal()}></div>
                <div className='modal_title'>TITLE</div>
                <input id='header' placeholder='Название' onChange={() => this.changeInput('header')}/>
                <input id='text' placeholder='Текст' onChange={() => this.changeInput('text')}/>
                <div id='divSelect' className='modal_select'>
                    <select id='category' onChange = {() => this.changeSelect()}>
                        <option value="-1" disabled selected hidden>Категория</option>
                        {options}
                    </select>
                </div>
                <input id='image' type='file' hidden onChange={() => this.changeFile()}/>
                <div id='file' onClick={() => document.getElementById('image').click()}>Upload Files
                    <div className='remove_file' onClick={(e) => {this.removeFile(e)}}></div>
                </div>
                <div id='send' className='send' onClick={() => this.send()}>ОТПРАВИТЬ</div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        save: bindActionCreators(saveNews, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(AddNewsModal);