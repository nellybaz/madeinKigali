import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import '../css/product.css';
import Header from  '../components/header';
import '../css/fabric_single.css';

import CombineWith from '../components/combine';
import Footer from '../components/footer'

import heart from '../assets/images/heart.png';
import star from '../assets/images/star.png';
import bag from '../assets/images/fabric1.jpg';
import envelope from '../assets/images/envelope.png';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class Fabric_Single extends Component {

    constructor(props){
        super(props)

       this.state={
            quantity_value: 0,
            fadein_top_animate_class:'',
            product_header_no: 1,
            product_details_class: ''
       }
    }
    


   componentDidMount(){
    
   }


   handleProductQuantityChange=(event)=> {
    this.setState({quantity_value: event.target.value});
  }


   handleQuantity=(x)=>
   {
       if(x===1){
        this.setState({
            quantity_value: parseInt(this.state.quantity_value)+1
        })
       }
       else{
           if(this.state.quantity_value >= 1){
            this.setState({
                quantity_value: parseInt(this.state.quantity_value)-1
            })
           }
       }
   }


   handleFadeinTop=()=>{
    if( this.state.fadein_top_animate_class === ""){
        this.setState({
            fadein_top_animate_class: "w3-container w3-center w3-animate-top show",
        })
    }
    else
    {
        this.setState({
            fadein_top_animate_class: "",
        })
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
            {/* EXTENDING PRODUCT PAGE */}

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
                            <img className="product-select-img img-select-active" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                        <div className="product-select-img-div">
                            <img className="product-select-img" src={bag}/>
                        </div>
                       
                    </div>

                    <div className="product-section-item div2 div2-fabric">
                            <div></div>
                            <div className="div2-inner-fabric">
                                
                                
                            <div className="fabric-meter-horizontal-div-wrapper">
                            <ul>
                                   
                                    <li><span>&nbsp;</span></li>
                                    <li><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                    <li><span>4</span></li>
                                    <li><span>5</span></li>
                                    <li><span>6</span></li>
                                    <li><span>7</span></li>
                                    <li><span>8</span></li>
                                    <li><span>9</span></li>
                                    <li><span>10</span></li>
                                    <li><span>11</span></li>
                                    <li><span>12</span></li>
                                    <li><span>13</span></li>
                                    <li><span>14</span></li>
                                    <li><span>15</span></li>
                                    <li><span>16</span></li>
                                    <li><span>17</span></li>
                                    <li><span>18</span></li>
                                    <li><span>19</span></li>
                                    <li><span>20</span></li>
                                    
                                    
                                </ul>

                               
                            </div>
                               

                                 <div className="fabric-meter-vertical-div-wrapper hor-meter-image-div">
                            <ul>
                                   
                                    <li><span className="meter-cm-tag">cm</span></li>
                                    <li><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                    <li><span>4</span></li>
                                    <li><span>5</span></li>
                                    <li><span>6</span></li>
                                    <li><span>7</span></li>
                                    <li><span>8</span></li>
                                    <li><span>9</span></li>
                                    <li><span>10</span></li>
                                    <li><span>11</span></li>
                                    <li><span>12</span></li>
                                    <li><span>13</span></li>
                                    <li><span>14</span></li>
                                    <li><span>15</span></li>
                                    <li><span>16</span></li>
                                    <li><span>17</span></li>
                                    <li><span>18</span></li>
                                    <li><span>19</span></li>
                                    <li><span>20</span></li>
                                    
                                    
                                </ul>

                               <div style={{backgroundImage: require('../assets/images/fabric1.jpg')}} className="fabric-big-image-div">
                                    {/* <img className="product-img1-fabric" src={bag} /> */}
                               </div>

                                
                            </div>
    
                            </div>
                            <div></div>

                    </div>
                   
                    
                    <div className="product-section-item div3 div3-fabric">
                        <div className="price-section-div">
                            <h1 style={{fontSize:'2rem'}}>$139.99</h1>
                            <h5 style={{textTransform:'uppercase', fontSize:'1rem'}}>Chickens of the world <br></br></h5>
                            
                        </div>

                        <div className="fabric-design-div">
                            <h5>Design</h5>
                            <div className="fabric-design-inner-wrapper">
                                <img src={bag} />
                                <div>
                                    Chickens of the world<br></br>
                                    <span style={{color:"#9A0022"}}>Change</span>
                                </div>
                                
                            </div>
                        </div>


                           <div className="fabric-design-div">
                            <h5>Fabric</h5>
                            <div className="fabric-design-inner-wrapper">
                                <img src={bag} />
                                <div>
                                    Basic Cotton Extra<br></br>
                                    <span style={{color:"#9A0022"}}>Change</span>
                                </div>
                                
                            </div>
                        </div>     


                         <div className="fabric-type-div">
                       
                           <div className="fabric-type-div-inner">
                                <div>Test Swatch</div>
                                <div>Fat Quarter</div>
                                <div>Meter</div>
                           </div>

                            <p style={{paddingTop: '10px'}}>1 Test Swatch (20cm x 20cm), VAT included (where applicable)</p>
                            
                        </div>                                         

                         <div className="shipping-div shipping-div-fabric">
                         <p>Shipping</p>
                                <p><b>US $4.86 to <span className="shipping-modal-open" onClick={()=>{this.handleFadeinTop()}}>Rwanda via China Post Registered Air Mail</span></b><br></br>
                                    Estimated Delivery Time:29-53days</p>
                        </div>

                       

                        <div className="quantity-div">
                            <p>QUANTITY</p>

                            <div className="div-quantity-inner">
                                <button onClick={()=>
                                    this.handleQuantity(0)
                                } className="btn-quantity">-</button>
                                <input onChange={this.handleProductQuantityChange} type="number" value={this.state.quantity_value}  />
                                <button onClick={()=>
                                   this.handleQuantity(1)
                                } className="btn-quantity">+</button>


                            </div>
                           
                        </div>

                        <div className="add-to-cart-div-fabric">
                            <button className="btn btn-add-to-cart-fabric">ADD TO CART</button>
                            <button className="btn btn-buy-test">BUY TEST SWATCH</button>
                           
                        </div>

                        


                        <div className="social-media-share">
                        <a className="twitter-share-button"
                            href="https://twitter.com/intent/tweet">
                        Tweet</a>


                        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.madeinkigali.com%2Fdev%2Fproduct%2FIsabel%2520Maer%2F4&layout=button_count&size=small&mobile_iframe=true&appId=144879322877728&width=69&height=20" width="69" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>

               
            </div>

             <div className={`modal-wrapper-product ${this.state.fadein_top_animate_class}`}>

                <div>
                        <p><b>SHIPPING COST</b></p>
                        <span>
                            <p>Ship my orders to</p> <input type="text" />
                        </span>
                       
                        
                </div>

                <div>
                    <button className="btn btn-close-modal" onClick={()=>this.handleFadeinTop()}>CLOSE</button>
                </div>
            </div>

            <div className='' style={{marginTop:'100px'}}>
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
            </div>

             <Footer/>

        </div>
       
    );
  }
}

export default withRouter( Fabric_Single);
