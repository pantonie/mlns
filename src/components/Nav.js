import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navClick } from '../actions/navClickAction'

class Nav extends Component {
    render() {
        return (
            <nav>
                {this.props.items.map((item, index) => {
                    const style = index === this.props.active ? 'navItem active' : 'navItem';
                    return (
                        <div className={style} key={index} onClick={() => this.props.click(index)}>{item}</div>)
                })}
            </nav>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        click: bindActionCreators(navClick, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Nav);