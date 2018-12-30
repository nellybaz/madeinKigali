import React, { Component } from 'react';
import '../css/m2m.css';
import Header from '../components/header';
import Footer from '../components/footer';
import men from '../assets/images/men.jpeg';
import men2 from '../assets/images/men2.jpeg';


class M2M extends Component {

    constructor(props){
      super(props)

      this.state={
        quantity_value: 0,
        
      }
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
  
  render() {
  
    
    return (
      <div className="M2M" style={{background:'white'}}>
        <Header/>
        
        <div className="m2m-outer">
            {/* left div */}
            <div className="m2m-left">

                <div className="m2m-left-1">
                    <img style={{width:'100%', objectFit:'contain'}} src={men} />
                    <img style={{width:'100%', objectFit:'contain'}} src={men} />
                    <img style={{width:'100%', objectFit:'contain'}} src={men} />
                
                </div>

                <div className="m2m-left-2">
                    <img src={men} />
                </div>

                <div className="m2m-left-3">
                    <h5><b>NANA COLLECTIONS STLES 06</b></h5>

                    <p>Long Sleeves Afican Mens' Print</p>
                    <p><b>$87.45</b></p>

        
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


                       <span> <b>CHOOSE FABRIC</b></span>
                    <div className="m2m-choose-fabric-div">
                        <div>
                            <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={men} />
                        </div>
                        <div>
                            <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={men2} />
                        </div>
                        <div>
                            <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={men} />
                        </div>
                        <div>
                            <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={men2} />
                        </div>
                    </div>

                    <div>
                        <p style={{fontSize:"0.8rem"}}>Please select fabric from above. If you don't find please click here to view more fabric</p>
                    </div>
                </div>

            </div>


            {/* right div */}
            <div className="m2m-right">
               <h6><b>MEASUREMENT</b></h6>
               <p>Click here to view how to measure</p>
               <p>Click here to view size code</p>

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
                           Shoulder Width
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

                <div>
                    
                <button onClick={()=>
                                    this.handleQuantity(0)
                                } className="btn-quantity">-</button>
                                <input style={{width:'10%', height:'34px'}} type="number" value={this.state.quantity_value}  />
                                <button onClick={()=>
                                   this.handleQuantity(1)
                                } className="btn-quantity">+</button>

                    <button className="btn btn-m2m-bag">ADD TO BAG</button>

                </div>
               
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default M2M;
