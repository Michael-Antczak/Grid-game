import React, { Component } from 'react';
import './Box.css';


class Box extends Component {

    render() {
        
            if(this.props.value === "X") {
                return (
                    <div className="box pacman" onClick={() => alert('clicked')}>
                        <img src={require('../img/pacman.jpg')} />
                    </div>
                )
            } else if(this.props.value === ".") {
                return (
                    <div className="box dot" onClick={() => alert('clicked')}>
                        <img src={require('../img/strawberry.jpg')} />
                    </div>
                )
            } else if(this.props.value === "B") {
                return (
                    <div className="box bee" onClick={() => alert('clicked')}>
                        <img src={require('../img/bee.jpg')} />
                    </div>
                )    
            } else if(this.props.value === "boom") {
                return (
                    <div className="box boom" onClick={() => alert('clicked')}>
                        <img src={require('../img/boom.jpg')} />
                    </div>
                )   
            } else {
                return (
                    <div className="box" onClick={() => alert('clicked')}></div>
                )
                
            }
            
        
    }
  
};

export default Box;