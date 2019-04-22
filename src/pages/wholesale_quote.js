import React,{ Component } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/wholesale_quote.css';
class WholeSaleQuote extends Component{
    render(){ 
        return(
            <div className="WholeSaleQuote" style={{background:'white'}}>
                <Header />
                    <div className="quote-wrapper">
                        <div className="quote-left">
                            <h4>Tell us what you need</h4>
                           

                            <h5>
                            Complete Your RFQ
                            </h5>

                            <p>The more specific your information, the more accurately we can match your request to the right suppliers</p>
                            <input className="input-keyword border-gray" placeholder="Keywords for products you're looking for" />
                            <br></br>
                            <select className="quote-category">
                                <option selected hidden>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                            </select>
                            <br></br>

                             <input className="quote-quantity border-gray" placeholder="Enter Quantity" />
                           
                            <select className="quote-pieces border-gray">
                                <option selected hidden>Pieces</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                            </select>
                                <br></br>
                            <textarea className="quote-textarea border-gray" rows="10" value="Dear Sir/Madam, I write to request..."/>
                            <div class="upload-btn-wrapper">
                                <button class="btn-req-upload border-gray">Upload a file</button>
                                <input type="file" name="myfile" />
                            </div>
                            <br></br>

                            <details className="other-req" open>
                                <summary style={{ color: 'rgb(75, 72, 72);'}}>
                                    <span style={{fontSize:'1.2rem',}}><b>Other Requirements</b></span>
                                    <br></br>
                                    Include unit price, payment terms etc.

                                </summary>
                                <p>Describe about 
                                your perferred unit price, destination port
                                 and the payment methods</p>

                                 <div className="other-req-inner-div">
                                    <div>
                                    <select className="border-gray">
                                            <option>FOB</option>
                                            <option>FOB</option>
                                        </select>
                                    </div>

                                    <div>
                                        <input className="unit-price border-gray"/>
                                        <select className="border-gray">
                                            <option>USD</option>
                                            <option>USD</option>
                                        </select>
                                    </div>

                                    

                                 </div>
                                <input className="quote-dest-port border-gray" placeholder="Destination port"/>

                                <select className="last-input input-keyword border-gray" type="text" >
                                    <option>TL</option>
                                </select>
                            </details>


                                <button className="quote-submit">SUBMIT RFQ</button>
                        </div>

                        <div className="w-quote-right">
                                <img src={require('../assets/images/menus/5Brands.jpg')}  />
                        </div>
                    </div>



                <Footer />
            </div>
        )
    }
}


export default WholeSaleQuote;