import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/footer.css';


import fb from '../assets/images/facebook-logo.png';
import insta from '../assets/images/instagram-logo.png';
import twitter from '../assets/images/twitter-logo.png';
import linkedin from '../assets/images/linkedin-logo.png';
import { isMobileOnly } from 'react-device-detect';

import pinterest from '../assets/images/pinterest.png';
import g_plus from '../assets/images/g_plus.png';
import wiebo from '../assets/images/weibo.png';
import youtube from '../assets/images/youtube.png';
import tumblr from '../assets/images/tumblr.png';

class Footer extends Component {

  constructor(props){
    super(props);
    this.state={
        mobileClass: 'flex-wrap',
        mobile_font_class: 'footer-mobile-font-size',
        footerSwitch: false,
        footerClass:"hide fadeout"
    }
  }


  toggleFooter=()=>{
    if (this.state.footerSwitch == false){
        this.setState({
          footerClass: "footer-expand fadein",
          footerSwitch:true
        })
        
        
    }

    else{
      this.setState({
        footerClass: "hide fadeout",
        footerSwitch:false
      })
    }


  }


  render() {

  

    return (
      <div className={`Footer ${isMobileOnly && this.state.mobile_font_class}`}>
        <div className={`signup-div ${isMobileOnly && this.state.mobileClass}`}>
          <div className="footer-first-text-div">
            <p>SIGN UP TO RECIEVE 10% OFF YOUR FIRST ORDER</p>
          </div>

          <div className={`footer-signup-div-inner ${isMobileOnly && this.state.mobileClass}`} >
            <input className="form-control signup-newsletter-home" name="email-newsletter" placeholder="Enter Email"/>
            <button className="btn btn-sigup-newsletter">SIGNUP</button>
          </div>
        </div>




        <div className="footer-second-div">
          <div className="text-icon-footer">

            {/* <img src={info} alt="made in kigali"/>  */}
            <p onClick={()=> this.toggleFooter()}>HELP</p>
          </div>

           <div className="text-icon-footer">

            {/* <img src={factory} alt="made in kigali"/>  */}
            <p onClick={()=> this.toggleFooter()}>COMPANY</p>
            </div>


             <div className="text-icon-footer">

              {/* <img src={delivery} alt="made in kigali"/>  */}
              <p onClick={()=> this.toggleFooter()}>DELIVERY & RETURNS</p>
              </div>
              


            <div className="text-icon-footer">

            {/* <img src={contact} alt="made in kigali"/>  */}
            <p onClick={()=> this.toggleFooter()} > CONTACT US</p>
            </div>

             <div className="text-icon-footer">
                <button onClick={()=> this.toggleFooter()} className="btn btn-open-footer">+</button>
            </div>
        </div>



        <div className={`${this.state.footerClass}`}>
            <div className="expand-item">
            <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>

            </div>

            <div className="expand-item">
            <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>

            </div>
            <div className="expand-item">
              
            <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>

            </div>
            
            <div className="expand-item">
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>
              <Link to={'/dev/contact'}>Contact Us</Link> <br></br>
              <Link to={'/dev/help'}>Help</Link><br></br>

            </div>

            <div className="expand-item">

            </div>    
        </div>

        <div className="footer-third-div">
          <div className="social-media-div">
            <a href="#"><img src={fb} alt="facebook" /></a>

          </div>

          <div className="social-media-div">
            <a href="#"><img src={twitter} alt="twitter" /></a>

          </div>

          <div className="social-media-div">
            <a href="#"><img src={insta} alt="insta" /></a>

          </div>

          <div className="social-media-div">
            <a href="#"><img src={linkedin} alt="linkedin" /></a>

          </div>

          <div className="social-media-div">
          <a href="#" target="_blanck" > <img src={g_plus} alt="g_plus" /></a>

          </div>

          <div className="social-media-div">
          <a href="#" target="_blanck" > <img src={pinterest} alt="pinterest" /></a>
          </div>

          <div className="social-media-div">
          <a href="#" target="_blanck" > <img src={youtube} alt="youtube" /></a>

          </div>

          <div className="social-media-div">
          <a href="#" target="_blanck" > <img src={wiebo} alt="wiebo" /></a>

          </div>

          <div className="social-media-div">
          <a href="#" target="_blanck" > <img src={tumblr} alt="tumblr" /></a>

          </div>
        </div>

        {/* map API Key
        AIzaSyCMRJ7kiGqluy7WJRc43vd6LxyvOtt_6OE */}

        
      </div>
    );
  }
}

export default Footer;
