import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/product.css';
import Header from '../components/header';

import CombineWith from '../components/combine';
import Footer from '../components/footer'

import heart from '../assets/images/heart.png';
import star from '../assets/images/star.png';
import bag from '../assets/images/model_view1.jpg';
import bag2 from '../assets/images/cart2.jpg';
// import bag3 from '../assets/images/model_view1.jpg';
// import bag4 from '../assets/images/model_view1.jpg';
// import bag5 from '../assets/images/model_view1.jpg';
import envelope from '../assets/images/envelope.png';

import shipping_example from "../assets/images/shipping.png";

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity_value: 0,
            fadein_top_animate_class: '',
            fadein_top_animate_class2: '',
            modal_opacity_big: '',
            start_show: 1,
            image_selected_active: 'img-select-active',
        }
    }


   async componentDidMount() {
        window.scrollTo(0,0);

        const img_div = this.refs.div2_inner;
        let scrollPos  = img_div.scrollLeft;

       setInterval( async ()=> {       
        
        if(img_div.scrollLeft < 140){
            // img_div.scrollLeft == 0 || 
            this.setState({
                start_show: 1,
            });
        }


        else if(img_div.scrollLeft > 850){
            // img_div.scrollLeft == 0 || 
            this.setState({
                start_show: 4,
            });
        }

        else if(img_div.scrollLeft > 540){
            // img_div.scrollLeft == 0 || 
            this.setState({
                start_show: 3,
            });
        }

        else if(img_div.scrollLeft >= 150){
            this.setState({
                start_show: 2,
            });

        }
        
    }, 10)
    }


    handleImageDisplayAndScroll = (which, start=this.state.start_show) =>{
        const holder1 = [];
        const holder2 = [];
        let class_show = '';

        for (let x = 1; x <= 5; x++) {

            if(x == start || x - start ==1){
                class_show = this.state.image_selected_active;
            }
            else{
                class_show = "";
            }
            holder1.push(
                <div className="product-select-img-div" onClick={()=> {

                const img_div = this.refs.div2_inner;

                switch (x) {
                    case 1:
                    img_div.scrollLeft = 140;
                        break;
                

                        case 2:
                        img_div.scrollLeft = 140;
                            break;
                    

                            case 3:
                    img_div.scrollLeft = 540;
                        break;

                        case 4:
                    img_div.scrollLeft = 850;
                        break;
                

                        case 5:
                    img_div.scrollLeft = 850;
                        break;
                
                
                    default:
                        break;
                }
                
                               
            }
                
                }>
                    <img className={`product-select-img ${class_show}`} src={bag} />
                </div>
            );
            
        }


        if(which == "small"){
            return holder1
        }
        return holder2;
    }


    handleProductQuantityChange = (event) => {
        this.setState({ quantity_value: event.target.value });
    }


    handleQuantity = (x) => {
        if (x === 1) {
            this.setState({
                quantity_value: parseInt(this.state.quantity_value) + 1
            })
        }
        else {
            if (this.state.quantity_value >= 1) {
                this.setState({
                    quantity_value: parseInt(this.state.quantity_value) - 1
                })
            }
        }
    }


    handleFadeinTop = (x) => {

        if(x === 1)
        {
            if (this.state.fadein_top_animate_class === "") {
                this.setState({
                    fadein_top_animate_class: "w3-container w3-center w3-animate-top show",
                    fadein_top_animate_class2:'',
                    modal_opacity_big: "modal_opacity_big_class",
                })
            }
            else {
                this.setState({
                    fadein_top_animate_class: "",
                    fadein_top_animate_class2: "",
                    modal_opacity_big: ''
                })
            }
        }

        else
        {
            if (this.state.fadein_top_animate_class2 === "") {
                this.setState({
                    fadein_top_animate_class2: "w3-container w3-center w3-animate-top show",
                    fadein_top_animate_class: '',
                    modal_opacity_big: "modal_opacity_big_class",
                })
            }
            else {
                this.setState({
                    fadein_top_animate_class2: "",
                    modal_opacity_big: ''
                })
            }
        }

    }



    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <div className="product-top-info-bar">
                    <p style={{fontSize: '0.8rem'}}>Free delivery and returns + info</p>
                </div>
                <div className={`Product ${this.state.modal_opacity_big}`}>



                    <div className="product-beadcrum-div">
                        <div className='more'>
                            <span>MORE PRODUCTS &nbsp; &nbsp;</span>
                            <button><img src={require('../assets/images/back_black.png')} /></button>
                            <button><img src={require('../assets/images/next_black.png')} /></button>
                        </div>
                        <h5 style={{ fontSize: '0.8rem' }}> NAXIST ITALIAN BAGS</h5>
                        <p style={{ fontSize: '0.8rem' }}>Fashion / Women / jeans / joni_jeans</p>
                    </div>

                    <div className="product-section-container">
                        <div className="product-section-item div1">
                            {this.handleImageDisplayAndScroll('small')}
                        </div>


                        <div className="product-section-item div2">
                            <div ref="div2_inner" className="div2-inner ">

                                <img className="product-img1" src={bag} />
                                <img className="product-img1" src={bag2} />
                                <img className="product-img1" src={bag} />
                                <img className="product-img1" src={bag2} />
                                <img className="product-img1" src={require('../assets/images/product1.jpeg')} />
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

                                    <p style={{ position: 'relative', top: '6px' }}> &nbsp; [172 votes] | 121 Orders</p>
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
                            <div className="size-div-m2m">
                                <p>SIZE <span title="see size guide">SIZE GUIDE</span></p>


                                <div className="size-div-m2m-inner">
                                    <div>
                                        XS
                                </div>

                                    <div>
                                        S
                                </div>

                                    <div>
                                        M
                                </div>

                                    <div>
                                        L
                                </div>

                                    <div>
                                        XL
                                </div>

                                    <div>
                                        2XL
                                </div>

                                    <div>
                                        3XL
                                </div>
                                    <div>
                                        4XL
                                </div>
                                </div>
                                <div className="no-size-span-div">
                                    <span onClick={()=>this.handleFadeinTop(0)} className="no-size-span"> <img src={envelope} /> We don't have your size?</span>
                                </div>

                            </div>

                            <div className="shipping-div">
                                <p>SHIPPING</p>
                                <p style={{ fontSize: '0.8rem' }}><b>US $4.86 to <span className="shipping-modal-open" onClick={() => { this.handleFadeinTop(1) }}>Rwanda via China Post Registered Air Mail</span></b><br></br>
                                    Estimated Delivery Time:29-53days</p>
                            </div>

                            <div className="quantity-div">
                                <p>QUANTITY</p>

                                <div className="div-quantity-inner">
                                    <button onClick={() =>
                                        this.handleQuantity(0)
                                    } className="btn-quantity">-</button>
                                    <input onChange={this.handleProductQuantityChange} type="number" value={this.state.quantity_value} />
                                    <button onClick={() =>
                                        this.handleQuantity(1)
                                    } className="btn-quantity">+</button>


                                </div>

                            </div>

                            <div className="add-to-cart">
                                <button className="btn btn-add-to-cart"><a href="/dev/cart">ADD TO BAG</a></button>
                                <img className="wishlist" src={heart} />
                            </div>

                            {/* <div className="availability">
                        <button className="btn btn-availability">SEE AVAILABILITY IN STORE</button>
                        </div> */}

                            <div className="details">
                            <details className='summary-m2m'>
                                <summary className="">
                                    <p>PRODUCT DETAILS <span style={{textAlign:'right'}}>+</span></p>
                                </summary>
                                <p>Shipping Details Here</p>
                            </details>

                             <details className='summary-m2m'>
                                <summary className="">
                                    <p>DELIVERIES & RETURNS<span style={{textAlign:'right'}}>+</span></p> 
                                </summary>
                                <p>Delivery Details Here</p>
                            </details>
                            </div>

                            <div className="social-media-share">
                                <a class="twitter-share-button"
                                    href="https://twitter.com/intent/tweet">
                                    Tweet</a>


                                <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.madeinkigali.com%2Fdev%2Fproduct%2FIsabel%2520Maer%2F4&layout=button_count&size=small&mobile_iframe=true&appId=144879322877728&width=69&height=20" width="69" height="20" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="combine-with-div">
                        <CombineWith />
                    </div>
                </div>

                <div className={`modal-wrapper-product ${this.state.fadein_top_animate_class}`}>

                    <div>

                        <label><b>Ship my orders to</b> &nbsp;</label>
                        <select className='shipping-select'>
                            <option>Rwanda</option>
                            <option>Nigeria</option>
                            <option>Kenya</option>
                        </select>
                    </div>

                    <div>
                        <img src={shipping_example} />
                    </div>

                    <div className='close-shipping-div'>
                        <button className="btn btn-close-modal" onClick={() => this.handleFadeinTop(1)}>OK</button>
                    </div>
                </div>


                {/* modal for no available size */}


                <div className={`modal-wrapper-product ${this.state.fadein_top_animate_class2}`}>

                    <div>

                        <h5 style={{fontSize:'2rem', color:'black'}}>We'll tell you when its availbale</h5>

                       <label>Size*<br></br>
                       <input  style={{width:'250px', padding:'5px', border:'1px solid black'}}/>
                       </label>

                        <br></br>
                        <label>Email*<br></br>
                       <input  style={{width:'250px', padding:'5px',border:'1px solid black'}}/>
                       </label>

                    </div>

                    

                    <div className='close-shipping-div'>
                        <button className="btn btn-close-modal" onClick={() => this.handleFadeinTop()}>SEND</button>
                    </div>
                </div>

                <Footer />

            </div>

        );
    }
}

export default withRouter(Product);
