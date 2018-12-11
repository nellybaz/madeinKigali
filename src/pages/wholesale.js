import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import '../css/product.css';
import Header from  '../components/header';

import CombineWith from '../components/combine';
import Footer from '../components/footer'


import heart from '../assets/images/heart.png';
import star from '../assets/images/star.png';
import bag from '../assets/images/product1.jpeg';



class Wholesale extends Component {

    // constructor(props){
    //     super(props)

       
    // }
  render() {

    return (
        <div>
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
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                    </div>

                    <div className="product-section-item div2">
                            <div className="div2-inner ">
                                
                                <img className="product-img1" src={bag} />
                                <img className="product-img1" src={bag} />
                                <img className="product-img1" src={bag} />
                                <img className="product-img1" src={bag} />                       
                        

                            </div>

                    </div>
                   
                    
                    <div className="product-section-item div3">
                        <div className="price-section-div">
                            <h1>$139.99</h1>
                            <h5> NAXIST ITALIAN BAGS <br></br><span className="sku">SKU: 18WSTD02</span></h5>
                            
                            <div className="div-stars">
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />
                                <img className="wishlist" src={star} />

                                <p style={{position:'relative', top: '6px'}}> &nbsp; [172 votes] | 121 Orders</p>
                            </div>
                        </div>


                        <div className="color-box-div">
                            <p>COLOR</p>
                            <div>
                                <img src={bag} />
                                <img src={bag} />
                                <img src={bag} />
                                <img src={bag} />
                                <img src={bag} />
                                
                            </div>
                        </div>
                        <div className="size-div">
                            <p>SIZE</p>
                            <select className="input-size form-control" placeholder="Choose Size">
                                <option value="" disabled selected hidden>Choose Size</option>
                                <option>34</option>
                                <option>36</option>
                                <option>40</option>
                                <option>42</option>
                                <option>44</option>
                            </select>
                        </div>

                         {/* <div className="shipping-div">
                            <p>SHIPPING</p>
                           
                        </div> */}

                      

                        <div className="add-to-cart">
                            <button className="btn btn-add-to-cart">CONTACT SUPLLIER</button>
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
                                <p>Product Details Here</p>
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

export default withRouter( Wholesale);
