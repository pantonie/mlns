import React, { Component } from 'react';
import { FooterSearch } from './FooterSearch'
import { FooterNav } from './FooterNav'

class Footer extends Component{
    render() {
        return(
            <footer>
                <div className='footer_content'>
                    <FooterSearch text={this.props.data.search}/>
                    <FooterNav items={this.props.data.nav} copyright={this.props.data.copyright}/>
                </div>
            </footer>
        )
    }

}


 export default Footer;