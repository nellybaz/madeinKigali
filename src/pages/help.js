import React, { Component } from 'react';
import '../css/help.css';

import GoogleMapReact from 'google-map-react';

import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import loyalty from '../assets/images/loyalty.png';
import orders from '../assets/images/orders.png';
import returns from '../assets/images/returns.png';
import accounts from '../assets/images/accounts.png';

import store from '../assets/images/store.png';
import sale from '../assets/images/sale.png';

import {isBrowser} from 'react-device-detect';

class Help extends Component {

  constructor(props){
    super(props);
    this.state={
        
    }
  }



  render() {
        
   

    return (
      <div className="Help" style={{background:'white'}}>
        <Header />

        <div className="div-outer">
           {
            isBrowser && 
        <div className="inner-left">
        <h4>Help</h4>
        </div>
           } 

            <div className="inner-right">
                <div style={{width:'100%'}}>
                    <input type="search" className="help-search" placeholder="What do you need to know?" />
                </div>


                <div className="inner-right-in">

                

<div className="right-inner">
<img src={loyalty} alt="mik loyalty" />
    <h5><b>Loyalty program</b></h5>

    <p>How can I use my points?
What is the Magic program?
Can I add purchases to my account?</p>
</div>
<div className="right-inner">
<img src={orders} alt="mik loyalty" />
    <h5><b>Orders</b></h5>

    <p>Where can I have my order sent?
Can I exchange one garment for another?
Can I request a sales receipt?</p>

</div>
<div className="right-inner">
<img src={returns} alt="mik loyalty" />
    <h5><b>Returns</b></h5>

    <p>How do I return a garment?
Have you received my return?
When and how will I receive the refund?</p>
</div>
<div className="right-inner">
<img src={accounts} alt="mik loyalty" />
    <h5><b>My Account</b></h5>

    <p>How do I consult my points balance?
How can I update my details?
How do I register?</p>
</div>
<div className="right-inner">
<img src={sale} alt="mik loyalty" />
    <h5><b>Shop Online</b></h5>

    <p>How do I know my size?
Deliveries and returns
How can I buy online?</p>
</div>
<div className="right-inner">
<img src={store} alt="mik loyalty" />
    <h5><b>Stores</b></h5>

    <p>Where's my nearest Desigual shop?
Can I find authorized dealers?
When are Desigual stores open?</p>

</div>

</div>
            </div>

            
        </div>
        
       
        <Footer />  

        </div> 
    );
  }
}

export default Help;
