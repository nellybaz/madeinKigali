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
            product_header_no: 1,
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


   shuffleProductDetailsHeader(x){
        // if(){
            //alert(x)
            this.setState({
                product_header_no: x
            });
        //}
   }
   productDetailsHeader=()=>{

        const holder = [];

        let class_name = "";
        let title = "";
        for (let x = 1; x <= 5; x++) {

            switch (x) {
                case 1:
                    title = "Product Details";
                    break;

                case 2:
                    title = "Browse designs"
                    break;

                case 3:
                    title = "Sell your designs";
                    break;

                case 4:
                    title = "Print Guideline";
                    break;

                case 5:
                    title = "Delivery";
                    break;

                default:
                    title = "";
                    break;
            }

            if(this.state.product_header_no === x){
                //alert(this.state.product_header_no);
                class_name = "product-header-details-active"
            }

            else{
                class_name =''
            }
            holder.push(
                <div className={class_name} key={x} onClick={()=>this.shuffleProductDetailsHeader(x)}>
                    {title}
                </div>
            )          
        }
        return holder;
   }
  render() {

    return (
        <div style={{background:'white'}}>
            <Header/>
            <div className="product-top-info-bar">
                <p style={{fontSize: '0.8rem'}}>Free delivery and returns + info</p>
            </div>
            <div className="Product">
               
                

                <div className="product-beadcrum-div">
                <div className='more'>
                            <span>MORE PRODUCTS &nbsp; &nbsp;</span>
                            <button><img src={require('../assets/images/back_black.png')} /></button>
                            <button><img src={require('../assets/images/next_black.png')} /></button>
                        </div>
                    <h5 style={{ fontSize: '0.8rem' }}> NAXIST ITALIAN BAGS</h5>
                    <p style={{fontSize: '0.8rem'}}>Fashion / Women / jeans / joni_jeans</p>
                    
                </div>
                <div className="product-section-container">
                    <div className="product-section-item div1">
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        {/* <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div> */}
                       
                    </div>

                    <div className="product-section-item div2-m2m">
                            <img src={bag} />             

                    </div>
                   
                    
                    <div className="product-section-item div3 div3-m2m">
                        <div className="price-section-div">
                           
                            <h5> <b>NAXIST ITALIAN BAGS</b> <br></br></h5>
                            <p>Long Sleeves Afican Mens' Print</p>
                            <h1 style={{fontSize:'1.2rem'}}>$139.99</h1>
                        </div>

                        


                        <div className="color-box-div-m2m">
                            <p><b>CHOOSE FABRIC</b></p>
                            <div className='color-box-div-m2m-inner'>
                                <div title="Choose fabric">1</div>

                                <div title="Choose fabric">2</div>

                                <div title="Choose fabric">3</div>

                                <div title="Choose fabric">4</div>                                
                            </div>
                            <p style={{fontSize:'0.8rem'}}>Please select fabric from above. If you don't find please click here to view more fabric</p>
                        </div>
                        
                        <div className="add-to-cart">
                            <button className="btn btn-add-to-cart">ADD TO CART</button>
                            <img className="wishlist" src={heart} />
                        </div>

                        <div className="details">
                       
                        
                     <details className='summary-m2m'>
                                <summary className="">
                                    <p>PRODUCT DETAILS <span style={{textAlign:'right'}}>+</span></p>
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
                            <details className='summary-m2m'>
                                <summary className="">
                                    <p>SHIPPING DETAILS <span style={{textAlign:'right'}}>+</span></p>
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
                        <a className="twitter-share-button"
                            to="https://twitter.com/intent/tweet">
                        Tweet</a>


                        <iframe src="https://www.facebook.com/plugins/share_button.php?to=https%3A%2F%2Fwww.madeinkigali.com%2Fdev%2Fproduct%2FIsabel%2520Maer%2F4&layout=button_count&size=small&mobile_iframe=true&appId=144879322877728&width=69&height=20" width="69" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>

                <section className='m2m2-product-details'>
                    <div className='header'>
                        {this.productDetailsHeader()}

                    </div>


                    <div className='m2m2-section-content'>
                        <div className=''>
                            <h5>Canvas Fabric Printing</h5>
                            <p>Ready in 1-3 days</p>
                        </div>
                        
                        <div className=''>
                            <table className='m2m2-table'>
                                <tr>
                                    <th className='col-1'></th>
                                    <th>Max Print:</th>
                                    <th>Weight:</th>
                                    <th>Roll With:</th>
                                    <th></th>
                                </tr>

                                <tr>
                                    <td className='col-1'>Wooven canvas 300</td>
                                    <td>1.59m</td>
                                    <td>300</td>
                                    <td>1.61m</td>
                                    <td className='m2m2-section-btn'><button>START DESIGN</button></td>
                                </tr>
                                <tr>
                                    <td className='col-1'>Wooven canvas 300</td>
                                    <td>1.59m</td>
                                    <td>300</td>
                                    <td>1.61m</td>
                                    <td className='m2m2-section-btn'><button>START DESIGN</button></td>
                                </tr>
                            </table>

                            <div className=''>
                                    <p style={{marginTop: '15px'}}>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and more recently by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                                    <p style={{marginTop: '15px'}}>The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard text for printing since the 1500s, when an anonymous printer assembled pieces of text together to make a sample book of text fonts. It has not only survived five centuries, but has also adapted to computer office, without its content is changed. It was popularized in the 1960s through the sale of Letraset sheets containing passages from Lorem Ipsum, and more recently by its inclusion in text layout applications, such as Aldus PageMaker.</p>
                            </div>
                        </div>
                    </div>

                </section>

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
