import React, { Component } from 'react';
import Header from '../components/header';
import '../css/info.css';



class Delivery extends Component {

    constructor(props){
        super(props)

        this.state={
            
        }
    }
  

   
  render() {
    return (
      <div className="Delivery">
        <Header/>

        <div className="delivery-outer">
        <div className="delivery-titles">
            <div>
                <h1>Request for Wholesale Quo</h1>
            </div>
           

            <div >
                <h1>Fabric FAQs</h1>
            </div>

             <div>
                <h1>Points of Sale</h1>
            </div>

             <div className="active-title">
                <h1>Delivery</h1>
            </div>

             <div>
                <h1>Returns</h1>
            </div>
        </div>

        <div className="content international">
            <p>FREE standard delivery on all international orders over £100 (or over £75 for Australia).</p>
            <p>For more information on standard and express delivery choose your shipping country from the drop down below</p>
        </div> 
        

        </div>
     
      </div>
    );
    
  }
}

export default Delivery;
