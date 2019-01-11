import React, {Component} from 'react';
import Header from '../components/header';

import {withRouter} from 'react-router-dom';
import Footer from '../components/footer';
import '../css/pages/fabric_upload_select.css';
// import '../css/pages/fabric_upload.css';
import '../css/m2m2.css';
import img from '../assets/images/radio_activity.jpg';
import fabric_switch_1 from '../assets/images/fabric_switch_1.png';
import fabric_switch_2 from '../assets/images/fabric_swtich_2.png';
import fabric_switch_3 from '../assets/images/fabric_switch_3.png';
import fabric_switch_4 from '../assets/images/fabric_swtich_4.png';

import bag from '../assets/images/fabric1.jpg';

class Fabric_Upload_Select extends Component{
    constructor(props){
        super(props)

        this.state={
            fabric_design: 3,
            fab_class: "",
            product_header_no: 1,
            product_details_class:''
        }
    }

    fabric_design=()=>{
        this.setState({
            fabric_design: parseInt(this.props.match.params.fabric_id),
        })

        // alert(this.props.match.params.fabric_id)

    }

    componentDidMount(){
        this.handleDesignChange();
        this.fabric_design();
       
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


   shuffleProductDetailsHeader(x){
    // if(){
        //alert(x)
        this.setState({
            product_header_no: x
        });
    //}
}

      handleDesignChange =()=>{
       
        
        const canvas = this.refs.fabric_canvas;
        const ctx = canvas.getContext('2d');
       
        const img = this.refs.canvas_img;
        const img_width = 70
        const img_height = 30
        let img_x = 0
        let img_y = 0
        let row_counter = 1
        let total = 30
        let per_row = 4
        img.onload = () => {
            for (let i = 0; i < total; i++) {
                if(i % per_row == 0 && i != 0){
                    img_y += img_height;
                    img_x = 0;
                    row_counter += 1
                }

               if(this.state.fabric_design === 2){
                    if(i == 2 || i%2==0){
                        img_y-= img_height/2
                    }
                    else{
                        img_y += img_height/2
                    }
               }

               else if(this.state.fabric_design === 3){
                    if( row_counter %2 == 0){
                        img_x-= 5
                        per_row = 5
                    }
                    else{
                        img_x += 5
                        per_row = 4
                    }
               }

               else if(this.state.fabric_design === 4){
                total = 1
                img_y = canvas.height/3
                img_x = canvas.width/2
                // img_width= 10
                // img_height = 10
           }
                ctx.drawImage(img, img_x, img_y, img_width,img_height);
                img_x += img_width;
                
            }
          
         
       
        }
      }
    

      flipDesign =(x)=>{
         window.location.href="/dev/fabric/upload/select/"+x
          this.handleDesignChange();
       
      }


    render(){
        return(
            <div className="fabric_upload_select" style={{background:'white'}}>
                <Header />

                    <div className="fabric_upload_select-wrapper">
                        <div className="fabric-select-left">
                            <h5>Design Tips</h5>
                            <p>Make the most of your Spoonflower experience</p>

                            <ul>
                                <li>Sizing Your Image</li>
                                <li>Color: A Beginner's Guide</li>
                                <li>Accepted File Formats</li>
                                <li>Testing Your Design
Repeats</li>
                            </ul>
                        </div>
                        <div className="fabric_select-right">
                            <div className="fabric-meter-wrapper">
                                <div className="meter-hor">
                                    <ul>
                                        <li>0</li>
                                        <li>4</li>
                                        <li>|</li>
                                        <li>8</li>
                                        <li>|</li>
                                        <li>16</li>
                                        <li>|</li>
                                        <li>20</li>
                                        <li>|</li>
                                        <li>24</li>
                                        
                                    </ul>
                                </div>


                                <div className="meter-vert">
                                    <ul>
                                        <li>0</li>
                                        <li>4</li>
                                        <li>--</li>
                                        <li>8</li>
                                        <li>--</li>
                                        <li>16</li>
                                        <li>--</li>
                                        <li>20</li>
                                        <li >--</li>
                                        
                                    </ul>
                                    <div className="image-metered">
                                    {/* <p>{this.state.fabric_design}</p> */}
                                    <img style={{display:"none"}} ref="canvas_img" src={img} />                                        
                                    <canvas className={`${this.state.fab_class} ${this.state.fabric_design}`} ref="fabric_canvas">

                                    </canvas>

                                  
                                    </div>
                                </div>

                                
                            </div>
                            <div style={{}}>
                                <div className="fabric_design_switch-div">
                                    <button onClick={()=> this.flipDesign(1)}><img src={fabric_switch_1} /></button>
                                    <button onClick={()=> this.flipDesign(2)}><img src={fabric_switch_2} /></button>
                                    <button onClick={()=> alert('Design pattern not yet available')}><img src={fabric_switch_3} /></button>
                                    <button onClick={()=> this.flipDesign(4)}><img src={fabric_switch_4} /></button>
                                </div>


                                  <div className="product-section-item div3 div3-fabric fab_right_section">
                        <div className="price-section-div">
                            <h1 style={{fontSize:'2rem'}}>$139.99</h1>
                            {/* <h5 style={{textTransform:'uppercase', fontSize:'1rem'}}>Chickens of the world <br></br></h5> */}
                            
                        </div>

                        {/* <div className="fabric-design-div">
                            <h5>Design</h5>
                            <div className="fabric-design-inner-wrapper">
                                <img src={bag} />
                                <div>
                                    Chickens of the world<br></br>
                                    <span style={{color:"#9A0022"}}>Change</span>
                                </div>
                                
                            </div>
                        </div> */}


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


                        
                    </div>

                    <div className=''>
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

                <Footer />
            </div>
        );
    }
}

export default Fabric_Upload_Select;