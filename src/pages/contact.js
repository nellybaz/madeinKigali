import React, { Component } from 'react';
import '../css/contact.css';

import GoogleMapReact from 'google-map-react';

import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import love_location from '../assets/images/love.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Contact extends Component {

  constructor(props){
    super(props);
    this.state={
        
    }
  }

  static defaultProps = {
    center: {
      lat: -1.948840,
      lng: 30.077600
    },
    zoom: 13
  };
  


  render() {
        
   

    return (
      <div className="Contact" style={{background:'white'}}>
        <Header />
        
        <div className="contact-outer">

            <div>
            {/* <h2>MADEINKIGALI: Contact Us</h2> */}

            <h4>Write to Us</h4>
            <p>Complete the following fields to raise a query</p>

            <div>

        </div>
            Email *
            <input className="form-control input" placeholder=""/>
            Full Name *
            <input className="form-control input" placeholder=""/>
            Category *
            <select className="form-control input">
                <option selected hidden>Choose Category</option>
                <option >Fabrics</option>
                <option >Request Quotation</option>
                <option >Dresses</option>
                <option >Website</option>
                <option>Brands</option>
            </select>
            Subject *
            <input className="form-control input" placeholder=""/>
            Message *
            <textarea className="form-control input" rows="6"></textarea>

            <input className="form-control input" type="file" />

            <p className="data-protection">Basic information regarding Data Protection 
                The personal data you provide us will be processed by MadeInKigali, as data controller, 
                for the purpose of responding to your query. Your data will not be transferred to third parties,
                except where owing to a legal obligation. </p>

            <button className="btn btn-send-contact">Send</button>
        </div> 

        

        <div style={{ height: '300px', width: '50%', marginLeft:'30px', marginTop:'30px', border: '2px solid black' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCMRJ7kiGqluy7WJRc43vd6LxyvOtt_6OE'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
                lat={-1.948840}
                lng={30.077600}
                text={'MADE IN KIGALI'}
            />
            </GoogleMapReact>
      </div>
      </div>

      <div className="contact-lower-section">
        <h3 style={{marginBottom: '15px', fontSize:'1.5rem'}}> <b>MadeInKigali Offices</b></h3>

        <div className="offices-inner">
          <div>
            <p><img src={love_location} alt="mik locations"/><b className="location-title">Worldwide</b></p>
            <p className="loc-address">MadeInKigali SpainPg Mare Nostrum, 1508039 Barcelona</p>
          </div>


          <div>
            <p><img src={love_location} alt="mik locations"/><b className="location-title">Rwanda</b></p>
            <p className="loc-address">MadeInKigali KG 7 Ave, Kigali Heights, Rwanda</p>
          </div>


          <div>
            <p><img src={love_location} alt="mik locations"/><b className="location-title">Nigeria</b></p>
            <p className="loc-address"> MadeInKigali Plot 122 Lekki, Lagos Island, Nigeria</p>
          </div>

        </div>

      </div>

      <div className="contact-section">
        <h3>Contact MadeInKigali for </h3>
        <div>
          <a href="mailTo: info@mik.com" className="btn" >PRESS INQUIRIES</a>
          <a href="mailTo: info@mik.com" className="btn" >RETAILERS AND FRANCHISERS</a>
        </div>
      </div>

        <Footer />  

        </div> 
    );
  }
}

export default Contact;
