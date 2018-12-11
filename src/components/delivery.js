import React, { Component } from 'react';
import '../css/info.css';




class Delivery extends Component {

    constructor(props){
        super(props)

        this.state={
          toggleDeliveryClassLocal: '',
          toggleDeliveryClass:'hide',
          delivery_active_int: '',
          delivery_active_rw: 'active2',
            
        }
    }


    handleClassToggle=(x)=>{
      if(x === 1){
          this.setState({
          toggleDeliveryClass:'',
          toggleDeliveryClassLocal:'hide',
          delivery_active_rw: '',
          delivery_active_int: "active2"
          })
      }


      else{
        this.setState({
          toggleDeliveryClass:'hide',
          toggleDeliveryClassLocal:'',
          delivery_active_rw: 'active2',
          delivery_active_int: ""
          })

      }
    }
  

   
  render() {
    return (
      <div className="Delivery">

        <div className="sub-title">
          <div className={`${this.state.delivery_active_rw}`} onClick={()=> this.handleClassToggle(2)}>
            Rwanda Delivery
          </div>
          <div className={`${this.state.delivery_active_int}`} onClick={()=> this.handleClassToggle(1)}>
            International
          </div>
         

        </div>


        <div className={`local-shipping ${this.state.toggleDeliveryClassLocal}`}>
        <div style={{textAlign:'center', background:'white', color:'black', fontSize:'1.5rem', padding:"10px" }}>
          <b>STANDARD</b>
        </div>

        <div className="middle">
          <div>
            Option
          </div>
          <div>
            Time
          </div>
          <div className="margin-zero">
            Cost <sup>*</sup>
          </div>


          <div className="third">
              Standard Delivery to Home
          </div>

          <div className="third">
              Upto 4 working days
          </div>

          <div className="margin-zero third">
          $10.55
          </div>

          <div className=" third">
              Standard Delivery to Store
          </div>

          <div className="third">
              3-4 working days
          </div>

          <div className="margin-zero third">
              
              Free
          </div>
        </div>

        <div className="third">
         
         
        </div>

        </div>

         <div className={`local-shipping ${this.state.toggleDeliveryClassLocal}`}>
        <div style={{textAlign:'center', background:'white', color:'black', fontSize:'1.5rem', padding:"10px" }}>
          <b>EXPRESS</b>
        </div>

        <div className="middle">
          <div>
            Option
          </div>
          <div>
            Time
          </div>
          <div className="margin-zero">
            Cost <sup>*</sup>
          </div>


          <div className="third">
              Express Delivery to Home
          </div>

          <div className="third">
              Same Day Delivery
          </div>

          <div className="margin-zero third">
            $20.55
          </div>

          <div className=" third">
          Express Delivery to Store
          </div>

          <div className="third">
              Standard Delivery to Home
          </div>

          <div className="margin-zero third">
              Standard Delivery to Home
          </div>


           <div className=" third">
          Express Delivery to Store
          </div>

          <div className="third">
              Standard Delivery to Home
          </div>

          <div className="margin-zero third">
              Standard Delivery to Home
          </div>
        </div>

        <div className="third">
         
         
        </div>

        </div>

        <div className={`international ${this.state.toggleDeliveryClass}`}>
        <p>FREE standard delivery on all international orders over £100 (or over £75 for Australia).</p>
            <p>For more information on standard and express delivery choose your shipping country from the drop down below</p>

            <p>Select your country</p>
            <select className="form-control">
                <option>Rwanda</option>
                <option>Rwanda</option>
                <option>Rwanda</option>
                <option>Rwanda</option>
                <option>Rwanda</option>
                <option>Rwanda</option>
                <option>Rwanda</option>
                <option>Rwanda</option>
            </select>

            <p style={{marginTop:'15px'}}>Canada</p>

            <p>
            <b>Standard Delivery</b>  &nbsp; <br></br>
6 - 9 Working Days <br></br>
Order by 6pm (BST)<br></br>
£10.50</p>
<p>
<b>Tracked and Faster</b> &nbsp; <br></br>
Up to 5 Working Days<br></br>
Order by 6pm (BST)<br></br>
£20.00
            </p>
        </div>
       
   
      </div>
    );
    
  }
}

export default Delivery;
