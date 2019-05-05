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
      btn_openned: '',
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
          footerSwitch:true,
          btn_openned: 'btn-openned',
        })
        
        
    }

    else{
      this.setState({
        footerClass: "hide fadeout",
        footerSwitch:false,
        btn_openned:''
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

        <div className='footer-new-design'>
          <table>
              <tr>
                <th onClick={()=> this.toggleFooter()}>HELP</th>
                <th onClick={()=> this.toggleFooter()}>DELIVERY & RETURNS</th>
                <th onClick={()=> this.toggleFooter()}>CARDS & OFFERS</th>
                <th onClick={()=> this.toggleFooter()}>ABOUT US</th>
                {/* <th onClick={()=> this.toggleFooter()}>CONTACT</th> */}
                <th  onClick={()=> this.toggleFooter()}><p className={`btn-open-footer ${this.state.btn_openned}`}>+</p></th>
                
              </tr>

              <tr className={`${this.state.footerClass}`}>
              <td><Link to={'/dev/points'}>Store Finder</Link></td>
                <td><Link to={'/dev/help'}>Track your order</Link></td>
                <td><Link to={'/dev/student_discount'}>Student Discount</Link></td>
                <td><Link to={'/dev/company2'}>Company</Link></td>
                {/* <td><Link to={'/dev/contact'}>Contact us</Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>

              <tr className={`${this.state.footerClass}`}>
              <td><Link to={'/dev/help'}>FAQs</Link></td>
                <td><Link to={'/dev/info/delivery'}>Delivery</Link></td>
                <td><Link to={'/dev/gift_card'}>Gift Cards</Link></td>
                <td><Link to={'/dev/affiliates'}>Affiliates</Link></td>
                {/* <td><Link to={''}>Returns & Exchanges</Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>


              <tr className={`${this.state.footerClass}`}>
              <td><Link to={'/dev/contact'}>Contact us</Link></td>
                <td><Link to={'/dev/info/returns'}>Returns</Link></td>
                <td><Link to={'/dev/gift_card'}>MIK Cards</Link></td>
                <td><Link to={'/dev/mik_kigali_fashion_week'}>MIK at KFC</Link></td>
                {/* <td><Link to={''}>Subscribe to our Emails</Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>

              <tr className={`${this.state.footerClass}`}>
                <td><Link to={'/dev/size-guide'}>Size Guide</Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={'/dev/refer_a_friend'}>Refer a friend</Link></td>
                <td><Link to={'/dev/careers&Opportunities'}>Careers & opportunities</Link></td>
                {/* <td><Link to={''}>Contact us</Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>

              <tr className={`${this.state.footerClass}`}>
              <td><Link to={'/dev/washcare'}>Washcare & AfterCare</Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={'/dev/happiness_guaranteed'}>Happiness Guaranteed</Link></td>
                <td><Link to={'/dev/socialresponsibility'}>Social Responsibility</Link></td>
                {/* <td><Link to={''}>Payment Method</Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>

              <tr className={`${this.state.footerClass}`}>
              <td><Link to={'/dev/sitemap'}>Site map</Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={'/dev/seller_licence'}>Legal Notice: Terms & Conditions/ Privacy/ Cookie/ Sales conditions / Seller/Buyer Agreement</Link></td>
                {/* <td><Link to={''}>Shipping Method</Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>


              <tr className={`${this.state.footerClass}`}>
              <td><Link to={'/dev/locations/remera_corner'}>MadeInKigali at Remera Corner</Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                {/* <td><Link to={''}></Link></td> */}
                <td><Link to={''}></Link></td>
              </tr>

              <tr className={`${this.state.footerClass}`}>
              <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                {/* <td><Link to={''}></Link></td> */}
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
              </tr>

              {/* <tr className={`${this.state.footerClass}`}>
              <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
                <td><Link to={''}></Link></td>
              </tr> */}


          </table>
        
        </div>

{/* 
        <div className="footer-second-div">
          <div className="text-icon-footer">

            
            <p onClick={()=> this.toggleFooter()}>HELP</p>
          </div>

           <div className="text-icon-footer">

            
            <p onClick={()=> this.toggleFooter()}>DELIVERY & RETURNS</p>
            </div>


             <div className="text-icon-footer">

              
              <p onClick={()=> this.toggleFooter()}>CARDS & OFFERS</p>
              </div>
              


            <div className="text-icon-footer">

           
            <p onClick={()=> this.toggleFooter()} > CONTACT US</p>
            </div>

             <div className="text-icon-footer">
                <button onClick={()=> this.toggleFooter()} className="btn btn-open-footer">+</button>
            </div>
        </div> */}


        


{/* 
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
            <Link to={'/dev/company2'}>Company</Link> <br></br>
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
              
            <Link to={'/dev/student_discount'}>Student Discount</Link> <br></br>
              <Link to={'/dev/gift_card'}>Gift Cards</Link><br></br>
              <Link to={'/dev/contact'}>MIK Cards</Link> <br></br>
              
             

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
        </div> */}

         <div className="footer-third-div">
          <div className="social-media-div">
            <Link target="_blank" to="https://www.facebook.com/MadeInKigali/"><img src={fb} alt="facebook" /></Link>

          </div>

          <div className="social-media-div">
            <Link target="_blank" to="https://twitter.com/MadeinKigaliRW"><img src={twitter} alt="twitter" /></Link>

          </div>

          <div className="social-media-div">
            <Link target="_blank" to="https://www.instagram.com/madeinkigali/"><img src={insta} alt="insta" /></Link>

          </div>

          <div className="social-media-div">
            <Link target="_blank" to="https://www.linkedin.com/in/madeinkigali/"><img src={linkedin} alt="linkedin" /></Link>

          </div>

          <div className="social-media-div">
          <Link to="https://plus.google.com/u/2/112933730940706528592?tab=mX" target="_blank" > <img src={g_plus} alt="g_plus" /></Link>

          </div>

          <div className="social-media-div">
          <Link to="https://www.pinterest.com/madeinkigali/pins/" target="_blank" > <img src={pinterest} alt="pinterest" /></Link>
          </div>

          <div className="social-media-div">
          <Link to="https://www.youtube.com/channel/UCfCedXqAFLRVdk1EUPosvAw?view_as=subscriber" target="_blanck" > <img src={youtube} alt="youtube" /></Link>

          </div>

          <div className="social-media-div">
          <Link to="#" target="_blanck" > <img src={wiebo} alt="wiebo" /></Link>

          </div>

          <div className="social-media-div">
          <Link to="https://madeinkigali-blog.tumblr.com/" target="_blanck" > <img src={tumblr} alt="tumblr" /></Link>

          </div>
        </div>

        {/* map API Key
        AIzaSyCMRJ7kiGqluy7WJRc43vd6LxyvOtt_6OE */}

        
      </div>
    );
  }
}

export default Footer;
