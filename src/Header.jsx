import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    state = {  }

    // handleTitle = () => {
    //     if(this.props.tasks.length === 0 ) return 'You have no tasks';
    //     return 'You have ' + this.props.tasks.length + ' left';
    // }

    render() { 
        if(this.props.count.length === 1 ) {return ( 
            <div className="Header">
                <h1>You have {this.props.count.length} task left</h1>
            </div>
         );}else return (
            <div className="Header">
                <h1>You have {this.props.count.length} tasks left</h1>
            </div>
         )
    }
}
 
export default Header;