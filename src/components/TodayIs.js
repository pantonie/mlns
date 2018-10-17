import React, {Component} from 'react';
import {getDate} from '../utils';

class TodayIs extends Component {
    constructor(props){
        super(props);
        this.state = {time: ''};
    };

    tick() {
        const now = new Date();
        this.setState({time: `${now.getHours()}:${now.getMinutes()<10 ? '0'+now.getMinutes() : now.getMinutes()}`});
    };

    componentWillMount(){
        this.tick();
    }

    componentDidMount(){
        this.tickID = setInterval(()=> this.tick(), 10000);
    };

    componentWillUnmount(){
        clearInterval(this.tickID)
    };

    render(){
        const today = getDate();
        return(
            <span className='dateTime'>
                {this.props.header ? today.toUpperCase() : today}  {this.state.time}
            </span>
        )
    }
}

export default TodayIs;