import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import '../css/m2m2.css';
import Header from  '../components/header';

import CombineWith from '../components/combine';
import Footer from '../components/footer'

import heart from '../assets/images/heart.png';
import star from '../assets/images/star.png';
import bag from '../assets/images/model_view1.jpg';



import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class M2M extends Component {

    constructor(props){
        super(props)

       this.state={
            quantity_value: 0,
            product_details_class: '',
       }
    }


   componentDidMount(){
    
   }

   handleQuantity=(x)=>
   {
       if(x===1){
        this.setState({
            quantity_value: this.state.quantity_value+1
        })
       }
       else{
           if(this.state.quantity_value >= 1){
            this.setState({
                quantity_value: this.state.quantity_value-1
            })
           }
       }
   }

   openProductDetails=(x)=>{
        if(x === 1){
           if(this.state.product_details_class === "hide"){
            this.setState({
                product_details_class: ''
            });
           }
           else{
            this.setState({
                product_details_class: 'hide'
            });
           }
        }
   }
  render() {

    return (
        <div style={{background:'white'}}>
            <Header/>
            <div className="product-top-info-bar">
                <p>Free delivery and returns + info</p>
            </div>
            <div className="Product">
               
                

                <div className="product-beadcrum-div">
                    <h5> NAXIST ITALIAN BAGS</h5>
                    <p>Fashion / Women / jeans / joni_jeans</p>
                    
                </div>
                <div className="product-section-container">
                    <div className="product-section-item div1">
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                       
                    </div>

                    <div className="product-section-item div2 div2-m2m">
                            <div className="div2-inner ">
                                
                                <img className="product-img1" src={bag} />                                                 
                        
                                
                            </div>

                    </div>
                   
                    
                    <div className="product-section-item div3 div3-m2m">
                        <div className="price-section-div">
                           
                            <h5> <b>NAXIST ITALIAN BAGS</b> <br></br></h5>
                            <p>Long Sleeves Afican Mens' Print</p>
                            <h1 style={{fontSize:'1.2rem'}}>$139.99</h1>
                            {/* <div className="div-stars">
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />

                                <p style={{position:'relative', top: '6px'}}> &nbsp; [172 votes] | 121 Orders</p>
                            </div> */}
                        </div>

                        


                        <div className="color-box-div-m2m">
                            <p>CHOOSE FABRIC</p>
                            <div>
                                <img src={bag} />
                                <img src={bag} />
                                <img src={bag} />
                                <img src={bag} />
                                

                                <p style={{fontSize:'0.8rem'}}>Please select fabric from above. If you don't find please click here to view more fabric</p>
                                
                            </div>
                        </div>
                        {/* <div className="size-div">
                            <p>SIZE</p>
                            <select className="input-size form-control" placeholder="Choose Size">
                                <option value="" disabled selected hidden>Choose Size</option>
                                <option>34</option>
                                <option>36</option>
                                <option>40</option>
                                <option>42</option>
                                <option>44</option>
                            </select>
                        </div> */}

                         {/* <div className="shipping-div">
                            <p>SHIPPING</p>
                           
                        </div> */}

                        {/* <div className="quantity-div">
                            <p>QUANTITY</p>

                            <div className="div-quantity-inner">
                                <button onClick={()=>
                                    this.handleQuantity(0)
                                } className="btn-quantity">-</button>
                                <input type="number" value={this.state.quantity_value}  />
                                <button onClick={()=>
                                   this.handleQuantity(1)
                                } className="btn-quantity">+</button>


                            </div>
                           
                        </div> */}

                        <div className="add-to-cart">
                            <button className="btn btn-add-to-cart">ADD TO CART</button>
                            <img className="wishlist" src={heart} />
                        </div>

                        {/* <div className="availability">
                        <button className="btn btn-availability">SEE AVAILABILITY IN STORE</button>
                        </div> */}

                        <div className="details">
                       
                        
                     <details>
                                <summary className="btn btn-details">
                                    <p>PRODUCT DETAILS</p> <span style={{textAlign:'right'}}>+</span>
                                </summary>
                                
                                <div className={`${this.state.product_details_class}`}>
                            <div className={`fabric-details`}>
                                <ul>
                                    
                                    <li>
                                        Mens' Print
                                    </li>

                                    <li>
                                        Pure Cotton made
                                    </li>

                                    <li>
                                        Modern Design & Customizable
                                    </li>

                                    <li>
                                        Tailored Slim
                                    </li>
                                </ul>

                            </div>

                            <h6 style={{fontSize:'0.8rem'}}><b>MEASUREMENT</b></h6>
                            <p style={{fontSize:'0.8rem'}}>Click here to view how to measure</p>
                            <p style={{fontSize:'0.8rem'}}>Click here to view size code</p>

                            <div className="m2m-size-div">
                                    <span>SIZE</span>

                                    <select>
                                        <option>One</option>
                                        <option>One</option>
                                        <option>One</option>
                                    </select>
                            </div>
                            <div className="m2m-measurement-div">
                            <div className="m2m-measurement-inner inner-left">
                                <div style={{display:'flex'}}>
                                <div>
                                    Body Length
                                </div>

                                <div style={{display:'flex'}}>
                                    <input />
                                    <select>
                                        <option>Inch</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                                
                                </div>

                                


                                <div style={{display:'flex'}}>
                                <div>
                                Shoulder
                                </div>

                                <div style={{display:'flex'}}>
                                    <input />
                                    <select>
                                        <option>Inch</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                                
                                </div>


                                <div style={{display:'flex'}}>
                                <div>
                                    Bottom Width
                                </div>

                                <div style={{display:'flex'}}>
                                    <input />
                                    <select>
                                        <option>Inch</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                                
                                </div>                        
                        </div>

                            <div className="m2m-measurement-inner inner-right">
                            <div style={{display:'flex'}}>
                                <div>
                                    Chest
                                </div>

                                <div style={{display:'flex'}}>
                                    <input />
                                    <select>
                                        <option>Inch</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                                
                                </div>

                                <div style={{display:'flex'}}>
                                <div>
                                    Waist
                                </div>

                                <div style={{display:'flex'}}>
                                    <input />
                                    <select>
                                        <option>Inch</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                                
                                </div>


                                <div style={{display:'flex'}}>
                                <div>
                                    Sleve
                                </div>

                                <div style={{display:'flex'}}>
                                    <input />
                                    <select>
                                        <option>Inch</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                                
                                </div>
                            </div>
                        </div>


                     </div>


                            </details>
                            <details>
                                <summary className="btn btn-details">
                                    <p>SHIPPING DETAILS</p> <span style={{textAlign:'right'}}>+</span>
                                </summary>
                                <p>Shipping Details Here</p>
                            </details>

                             <details>
                                <summary className="btn btn-details">
                                    <p>DELIVERIES & RETURNS</p> <span style={{textAlign:'right'}}>+</span>
                                </summary>
                                <p>Delivery Details Here</p>
                            </details>
                        </div>

                        <div className="social-media-share">
                        <a class="twitter-share-button"
                            href="https://twitter.com/intent/tweet">
                        Tweet</a>


                        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.madeinkigali.com%2Fdev%2Fproduct%2FIsabel%2520Maer%2F4&layout=button_count&size=small&mobile_iframe=true&appId=144879322877728&width=69&height=20" width="69" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>

                <div className="combine-with-div">
                    <CombineWith />
                </div>
            </div>

             <Footer/>

        </div>
       
    );
  }
}

export default withRouter( M2M);
