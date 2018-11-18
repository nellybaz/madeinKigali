import React, { Component } from 'react';
import '../css/main.css'; 
import Countdown from 'react-countdown-now';

class Divider extends Component {

    constructor(props){
        super(props)

        this.state ={
            
        }
       
    }
  render() {



    // Random component
const Completionist = () => <span>tIMER FINISHED! CALL FUNCTION</span>;
 
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="flash-deals-timer">{hours}:{minutes}:{seconds}</span>;
  }
};

    return (
        <div className={`Divider ${this.props.class}`}>
            <div className="horizontal-bar hbar-left"></div>
            <div className="text">
                <p className='divider-name'>{this.props.name}
                
                    {
                        // check if shoud display timer in divider     
                        this.props.displayTimer &&  <Countdown
                date={Date.now() + 9000000000}
                renderer={renderer}
            />
            }</p>
            </div>
            <div className="horizontal-bar hb-right"></div>
        
        </div>
    );
  }
}

export default Divider;
