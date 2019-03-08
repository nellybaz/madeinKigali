import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/pages/coming1.css';
import Countdown from 'react-countdown-now';


import fb from '../assets/images/icons/facebook-logo.png';
import insta from '../assets/images/instagram-black.png';
import twitter from '../assets/images/icons/twitter-logo-silhouette.png';
import linkedin from '../assets/images/icons/linkedin-logo.png';

import pinterest from '../assets/images/icons/pinterest.png';
import g_plus from '../assets/images/icons/google-plus-black.png';
import wiebo from '../assets/images/icons/weibo-black.png';
import youtube from '../assets/images/icons/youtube.png';
import tumblr from '../assets/images/icons/tumblr-logo.png';


const Completionist = () => <span>You are good to go!</span>;
class ComingSoon1 extends Component {
  render() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span ><span className="d">{days}</span><span className='timer-dots'>:</span><span className='h'>{hours[0]}</span><span className='h'>{hours[1]}</span><span className='timer-dots'>:</span><span className="m">{minutes[0]}</span><span className="m">{minutes[1]}</span><span className='timer-dots'>:</span><span className='s'>{seconds[0]}</span><span className='s'>{seconds[1]}</span></span>;
      }
    };


    const renderer2 = ({ days,hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span ><span className="days">{days}</span>:<span className='hours'>{hours[0]}</span><span className='hours'>{hours[1]}</span>:<span className="mins">{minutes[0]}</span><span className="mins">{minutes[1]}</span>:<span className='secs'>{seconds[0]}</span><span className='secs'>{seconds[1]}</span></span>;
      }
    };
    return (
      <div className='ComingSoon1'>

        <div className='coming1-content'>

          <img src={require('../assets/images/coming3.jpg')} />
          <div className='coming1-btns'>
            <Link to={'/dev/company/about2'}>ABOUT US</Link>
            <Link to={'/dev/company2'}>WHO WE ARE</Link>
            <Link to={'/dev/company/about'}>WHAT WE DO</Link>

          </div>



          <div className='coming1-count-down-div'>

            <Countdown

              date={'Mon, 11 Mar 2019 00:00:00'}
              renderer={renderer}
            />

          </div>


          <div className='coming1-labels'>
            <p className='p-d'>DAYS</p>
            <p className='p-h'>HOURS</p>
            <p className='p-m'>MINS</p>
            <p className='p-s'>SECS</p>
          </div>





          <div className='coming1-social-sub'>
            <input type="email" placeholder="We'll be here soon, subscribe to be notified...          >" />

          </div>


          <div className="coming1-footer">
          <div className="social-media-div">
            <a target="_blank" href="https://www.facebook.com/MadeInKigali/"><img src={fb} alt="facebook" /></a>

          </div>

          <div className="social-media-div">
            <a target="_blank" href="https://twitter.com/MadeinKigaliRW"><img src={twitter} alt="twitter" /></a>

          </div>

          <div className="social-media-div">
            <a target="_blank" href="https://www.instagram.com/madeinkigali/"><img src={insta} alt="insta" /></a>

          </div>

          <div className="social-media-div">
            <a target="_blank" href="https://www.linkedin.com/in/madeinkigali/"><img src={linkedin} alt="linkedin" /></a>

          </div>

          <div className="social-media-div">
          <a href="https://plus.google.com/u/2/112933730940706528592?tab=mX" target="_blank" > <img src={g_plus} alt="g_plus" /></a>

          </div>

          <div className="social-media-div">
          <a href="https://www.pinterest.com/madeinkigali/pins/" target="_blank" > <img src={pinterest} alt="pinterest" /></a>
          </div>

          <div className="social-media-div">
          <a href="https://www.youtube.com/channel/UCfCedXqAFLRVdk1EUPosvAw?view_as=subscriber" target="_blanck" > <img src={youtube} alt="youtube" /></a>

          </div>
          <div className="social-media-div">
          <a href="https://madeinkigali-blog.tumblr.com/" target="_blanck" > <img src={tumblr} alt="tumblr" /></a>

          </div>

          <div className="social-media-div">
          <a href="#" target="_blanck" > <img src={wiebo} alt="wiebo" /></a>

          </div>
        </div>


        </div>




        <div className='coming-mobile-wrapper'>
                    <div className='mobile-logo-div'>
                        <img src={require('../assets/images/logo.png')} />
                    </div>

                    <div className='mobile-header'>
                        <h4>COMING SOON</h4>  
                        <p>
                          We're working really hard on creating something fantastic and are pretty interested to see what you think!
                          Its nothing revolutionary, but it will fix somethings that are just aren't working so well as they should.
                          In the meantime follow our social media feeds or click on the buttons below for more informations about MIK.
                        </p>
                    
                    </div>

                    <div className='mobile-content'>

                      <div className='mobile-content-inner-div2'>

                      <div className='space-div'>
                      
                      </div>
                            <Countdown
                                
                                date={'Mon, 11 Mar 2019 00:00:00' }
                                renderer={renderer2}
                            />

                            <ul className='mobile-content-inner-ul'>
                              <li>DAYS</li>

                              <li>HOURS</li>

                              <li className='coming-min-label'>MINS</li>

                              <li className='coming-sec-label'>SECS</li>
                            </ul>

                            <div className='coming-mobile-btn-div'>
                              <Link to={'/dev/company/about2'}>ABOUT US</Link>
                              <Link to={'/dev/company2'}>WHO WE ARE</Link>
                              <Link to={'/dev/company/about'}>WHAT WE DO</Link>
                            </div>
                      
                      </div>
                      
                    </div>

 
                    <div className='coming-mobile-footer'>
                    <div className='coming-footer-input-div'>
                      <input type="text"  placeholder="We'll be here soon, subscribe to be notfied...   >"/>
                    </div>

                    <div className='coming-footer-social'>

                      <Link to={'https://www.facebook.com/MadeInKigali/'} >
                        <img src={require('../assets/images/icons/facebook_white.png')} />
                      </Link>

                      <Link to={'https://twitter.com/MadeinKigaliRW'} >
                        <img src={require('../assets/images/icons/twitter_white.png')} />
                      </Link>

                      <Link to={'https://www.instagram.com/madeinkigali/'} >
                        <img src={require('../assets/images/icons/instagram_white.png')} />
                      </Link>

                      <Link to={'https://www.linkedin.com/in/madeinkigali/'} >
                        <img src={require('../assets/images/icons/linkedin_white.png')} />
                      </Link>

                      <Link to={'https://www.pinterest.com/madeinkigali/pins/'} >
                        <img src={require('../assets/images/icons/pinterest_white.png')} />
                      </Link>

                      <Link to={'https://www.youtube.com/channel/UCfCedXqAFLRVdk1EUPosvAw?view_as=subscriber'} >
                        <img src={require('../assets/images/icons/youtube_white.png')} />
                      </Link>

                      <Link to={'https://madeinkigali-blog.tumblr.com/'} >
                        <img src={require('../assets/images/icons/tumblr_white.png')} />
                      </Link>

                      <Link to={'https://plus.google.com/u/2/112933730940706528592?tab=mX'} >
                        <img src={require('../assets/images/icons/google_white.png')} />
                      </Link>

                      <Link to={'#'} >
                        <img src={require('../assets/images/icons/weibo_white.png')} />
                      </Link>
                    
                    </div>
                    
                    </div>


                </div>

      </div>
    )
  }
}

export default ComingSoon1; 