import React, {Component} from 'react';
import '../css/pages/cart.css';

import Header from "../components/header";
import Footer from "../components/footer";

import {Link} from 'react-router-dom';
//images
import img1 from "../assets/images/cart1.jpg";
import img2 from "../assets/images/cart2.jpg";



class Cart extends Component{

    handeleCartDisplay =()=>{
        const cartDisplay = [];
        let img = img1;

        for (let x = 0; x < 3; x++) {

            if( x === 1)
            {
                img = img2
            }
            else
            {
                img = img1;
            }
            cartDisplay.push(
                <tr className='cart-product-data-row'>
                    <td>
                        <div className='cart-product-data-div'>
                            <img className='cart-product-data-div-img' src={img} />
                            <div className='cart-product-data-div-inner-div'>
                                <h5 className='cart-product-data-div-inner-div-prd-title'>ASHTON LOW ANKLE BOOTS</h5>
                                <p className='cart-product-data-div-inner-div-p'>32A04QSND</p>
                            </div>

                        </div>

                        <p className='cart-bottom-action'><a href="#">Save For Later</a> &nbsp; &nbsp; &nbsp; <a href="#">Remove</a></p>
                    </td>
                    <td className='cart-options-div'>
                        <div>
                            <p>Size: 39</p>
                            <p>Quantity: 1</p>

                            <p onClick={()=> alert('changed')} className='cart-options-change'>Change</p>
                        </div>

                    </td>
                    <td style={{verticalAlign:'top'}} >
                        <div className='cart-price-div'>
                        Price: $89.00
                        </div>
                    </td>
                </tr>
            );
            
        }
        return cartDisplay;
    }
    render(){
        return(
            <div className='Cart' style={{background:'white'}}>
                <Header />

                    <div className='cart-wrapper'>
                        <div className='cart-title-div'>
                            <h5 className='h5-title'>SHOPPING BAG SUMMARY</h5>
                            <Link className="checkout-btn" to={'/dev/delivery'}>CHECKOUT</Link>
                        </div>

                        <section className='cart-table'>
                            <table>
                                <tr>
                                    <th className='products-col'>PRODUCTS</th>
                                    <th>YOUR OPTIONS</th>
                                    <th>PRICE</th>
                                </tr>

                               {this.handeleCartDisplay()}
                            </table>
                        </section>


                        <section className='cart-free-shipping'>
                            <div>
                                <h5><span>FREE SHIPPING*</span> FIND OUT MORE</h5>
                            </div>
                        </section>


                        <section className='cart-promotion-ceheckout-section'>
                            <div className='cart-coupon-div'>
                                <h5 className='cart-coupon-div-h5'>Promottion code and student discount</h5>
                                

                                <p className='cart-coupon-div-p'>If you have a promotion code or a student discount code please enter it here:</p>

                                <div className='cart-coupon-div-form'>
                                    <input />

                                    <button>APPLY CODE</button>
                                </div>

                                <p className='cart-coupon-div-p2'>ADD ANOTHER <span>Help?</span></p>
                            </div>    

                            <div className='cart-checkout-div'>
                               <p className='cart-checkout-div-p1'>Subtotal before delivery <span>$189.00</span></p>


                               <select>
                                   <option>Free delivery in Rwanda</option>
                                   <option>International Delivery $54</option>
                               </select>

                               <p className='cart-checkout-div-p2'>You can change delivery Country at checkout</p>



                                <p className='cart-checkout-div-p3'>Total cost incl. Delivery <span>$189.00</span></p>

                                <Link className='checkout-btn-2' to={'/dev/delivery'}><button>CHECKOUT</button></Link>
                            </div>
                        </section> 
                        
                    </div>

                <Footer />                
            </div>
        )
        }
    }
export default Cart;