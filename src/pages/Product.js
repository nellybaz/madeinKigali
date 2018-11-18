import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import '../css/product.css';
import Header from  '../components/header';
import Upload from './upload';
import CombineWith from '../components/combine';
import Footer from '../components/footer'

import heart from '../assets/images/heart.png';
import bh2 from '../assets/images/b-h2.jpg';
import bh3 from '../assets/images/bh3.jpg';
import bag from '../assets/images/product1.jpeg';
import bh4 from '../assets/images/bh4.jpg';
import bh5 from '../assets/images/bh5.jpg';
import bh6 from '../assets/images/bh6.jpg';
import bh7 from '../assets/images/bh7.jpg';
import bh8 from '../assets/images/bh8.jpg';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class Product extends Component {

    // constructor(props){
    //     super(props)

       
    // }


   componentDidMount(){
    // if (isMobile){
    //     alert('its mobile')
    // }
   }
  render() {

    return (
        <div>
            <Header/>
            <div className="product-top-info-bar">
                <p>Free delivery and returns + info</p>
            </div>
            <div className="Product">
                {/* <p>Product Number is {this.props.match.params.number}</p>
                <p>Brand is: {this.props.match.params.slug}</p>
                <Link to={'/'} >Me</Link>
            
                <Upload /> */}

                {/* product top bar */}
                

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

                        <div className="add-to-cart">
                            <button className="btn btn-add-to-cart">ADD TO CART</button>
                            <img className="wishlist" src={heart} />
                        </div>

                        {/* <div className="availability">
                        <button className="btn btn-availability">SEE AVAILABILITY IN STORE</button>
                        </div> */}

                        <div className="details">
                        <button className="btn btn-details">PRODUCT DETAILS</button>
                        <button className="btn btn-details">DELIVERIES & RETURNS</button>
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

export default withRouter( Product);
