import React, {Component} from 'react';
import '../css/pages/coming_soon.css';
import Countdown from 'react-countdown-now';

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


const Completionist = () => <span>You are good to go!</span>;
class ComingSoon extends Component{
    
    render(){

        const renderer = ({ days,hours, minutes, seconds, completed }) => {
            if (completed) {
              // Render a completed state
              return <Completionist />;
            } else {
              // Render a countdown
              return <span ><span className="days">{days}</span>:<span className='hours'>{hours[0]}</span><span className='hours'>{hours[1]}</span>:<span className="mins">{minutes[0]}</span><span className="mins">{minutes[1]}</span>:<span className='secs'>{seconds[0]}</span><span className='secs'>{seconds[1]}</span></span>;
            }
          };

        return(
            <div className='ComingSoon'>
                <div className='coming-soon-header'>
                    <img src={require('../assets/images/logo.png')} alt="mik logo"/>
                </div>

                <div className='content' height={window.innerHeight}>

                        <div className='content-inner'>
                        {/* <h2>COMING SOON</h2>
                        <p>We're working really hard on creating something fantastic and are pretty intersted
                            to see what you think! 
                            Its nothing revolutionary, but it will fix some things that aren't working as well as they should. 
                            In the meantime follow our social media feeds or click the buttons below for more information abut MIK
                        </p> */}

                        <img src={require('../assets/images/coming.png')} />

                            <div className='btns-div'>
                                <button>ABOUT US</button>
                                <button>WHO WE ARE</button>
                                <button>WHAT WE DO</button>
                            </div>


                            <div className='count-down-div'>
                           
                                <Countdown
                                // zeroPadDays = {6}
                                date={'Fri, 01 Mar 2019 00:00:00' }
                                renderer={renderer}
                            />
                            
                            </div>

                            <div className='count-down-labels'>
                            <ul>
                                <li>DAYS</li>
                                <li>HOURS</li>
                                <li>MINUTES</li>
                                <li>SECONDS</li>
                            </ul>
                            </div>


                            <div className='social-sub'>
                            <input type="email" placeholder="We'll be here soon, subscribe to be notified...          >"  />
                            
                            </div>

                            <div className="footer-third-div">
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
          <a href="#" target="_blanck" > <img src={wiebo} alt="wiebo" /></a>

          </div>

          <div className="social-media-div">
          <a href="https://madeinkigali-blog.tumblr.com/" target="_blanck" > <img src={tumblr} alt="tumblr" /></a>

          </div>
        </div>
                        </div>
                
                </div>

            </div>
        )
    }
}

export default ComingSoon;