import React,{ Component } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/wholesale_quote.css';
class WholeSaleQuote extends Component{
    constructor(props){
        super(props)
        this.state = {
            orderText:"Dear Sir/Madam, I write to request..."
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    handleOrderText=(e)=>{
        this.setState({
            orderText: e.target.value
        });
    }
    render(){ 
        return(
            <div className="WholeSaleQuote" style={{background:'white'}}>
                <Header />
                    <div className="quote-wrapper">
                        <div className="quote-left">
                            <h4>Make your order to be processed </h4>
                           

                            <h5>
                            Complete Your RFQ
                            </h5>


                            <p>The more specific your information, the more accurately we can match your request to the right suppliers</p>
                            <br></br>
                            <p>Product Name</p>
                            <input className="input-keyword border-gray" placeholder="Keywords for products you're looking for" value={this.props.match.params.product_name} />
                            <br></br>
                            {/* <p>Category</p>
                            <select className="quote-category">
                                <option selected hidden>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                            </select>
                            <br></br> */}

                            <p>Quantity Ordered</p>
                             <input className="quote-quantity border-gray" placeholder="Enter Quantity" value={this.props.match.params.quantity_order} />
                           
                            {/* <select className="quote-pieces border-gray">
                                <option selected hidden>Pieces</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                                <option>Please select category</option>
                            </select> */}
                                <br></br>
                            <textarea className="quote-textarea border-gray" onChange={this.handleOrderText} rows="10" value={this.state.orderText}/>
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
                                <img src={require('../assets/images/quotation_pic.png')}  />
                        </div>
                    </div>



                <Footer />
            </div>
        )
    }
}


export default WholeSaleQuote;