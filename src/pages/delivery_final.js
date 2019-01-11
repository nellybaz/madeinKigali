import React, {Component} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

import {Link} from 'react-router-dom';
//images
import img1 from "../assets/images/cart1.jpg";
import img2 from "../assets/images/cart2.jpg";

import logo from '../assets/images/logo.png';
import '../css/pages/delivery_final.css';

class Delivery extends Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }

    handleBagCartDisplay =()=>{
        const bagCartDisplay= [];
        
       

        for (let x = 0; x < 3; x++) {
            let img = img1;
            if(x % 2 == 0)
            {
                img = img2;
            }
            else
            {
                img = img1;
            }
            bagCartDisplay.push(
                <div className='bag-cart-display-inner'>
                    <img src={img} />
                    <div className='bag-cart-display-inner-details'>
                        <p className='bag-cart-display-inner-p1'>Faux fur zip Hoodie</p>
                        
                        <p className='bag-cart-display-inner-p2'>Price: $48.00</p>
                        <p className='bag-cart-display-inner-p2'>Size: 43</p>
                        <p className='bag-cart-display-inner-p2'>Quantity: 2</p>
                        <p className='bag-cart-display-inner-p3'>Change  <span>Remove</span></p>
                    
                     </div>
                </div>

            );
            
        }
        return bagCartDisplay;
    }
    render(){
        return(
            <div className='delivery' style={{background:'white'}}>
                {/* <Header /> */}

                    <div className='delivery-logo-div'>
                        <Link to={'/dev/12hdgsikdhlmsdne'}><img src={logo} /></Link>
                    </div>
                    <div className='delivery-progress-bar'>
                        <div className='delivery-active'>DELIVERY</div>
                        <div>PAYMENT</div>
                        <div>THANK YOU</div>
                    </div>
                    <div className='delivery-top-header'>

                        <h5>DELIVERY DETAILS</h5>
                    </div>
                    <div className='delivery-wrapper'>

                        <div className='delivery-details'>
                        <label>
                        Title* <br></br>
                            <select>
                                <option>Pls select a title</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Miss</option>
                                <option>Dr</option>
                            </select>
                        </label>
                         
                            <div>
                                  
                            </div>                   

                             <label className='label-left'>
                                First Name* <br></br>
                                <input />
                            </label>

                            <label>
                                Surname* <br></br>
                                <input />
                            </label>  <br></br>

                            <label className='label-left'>
                                Main phone number* <br></br>
                                <input />
                            </label> 

                            <label>
                                Country* <br></br>
                                <input />
                            </label> <br></br>

                            <label className='label-left'>
                                Address line 1* <br></br>
                                <input />
                            </label> 

                            <label>
                                Address line 2 <br></br>
                                <input />
                            </label> <br></br>

                            <label className='label-left'>
                                Town/City* <br></br>
                                <input />
                            </label>

                            <label>
                                Postal Code* <br></br>
                                <input />
                            </label>

                                <br></br>
                                <br></br>
                                <br></br>
                                
                            <div className='delivery-topayment-btn-div'>
                            <button>PROCEED TO PAYMENT</button>
                            </div>
                        </div>

                        <div className='my-bag'>

                            

                            <div className='bag-cart-display'>
                            <h5>My Bag</h5>

                                {this.handleBagCartDisplay()}
                                
                            </div>

                            <div className='bag-cart-other-details'>
                                <p className='bag-cart-other-detail-p'>Your order will be delivered no later than<br></br><span>
                                Tuesday 8 January 2019</span></p>
                                
                                <div>
                                <p>Subtotal before Delivery <span>£113.00</span></p>
                                <p>Delivery Cost <span>$54.00</span></p>
                                <p className='delivery-cart-total-p'>Total Cost incl. delivery <span>$189.00</span></p>
                                </div>

                                
                            </div>

                           
                            
                        </div>

                        <div></div>
                         <div className='delivery-topayment-btn-div'>
                            <button>PROCEED TO PAYMENT</button>
                        </div>
                        
                    </div>
                <Footer />
                
            </div>   

         
        )
        }
    }
export default Delivery;