import React, { Component } from 'react';
import '../css/blog.css';
import fb from '../assets/images/facebook-logo.png';
import insta from '../assets/images/instagram-logo.png';
import twitter from '../assets/images/twitter-logo.png';
import linkedin from '../assets/images/linkedin-logo.png';

import Instafeed from 'react-instafeed';
// import InstagramEmbed from 'react-instagram-embed'

import pinterest from '../assets/images/pinterest.png';
import g_plus from '../assets/images/g_plus.png';
import wiebo from '../assets/images/weibo.png';
import youtube from '../assets/images/youtube.png';
import tumblr from '../assets/images/tumblr.png';
import image_ads from '../assets/images/sidebar_ads.jpg';

import Divider from '../components/divider';

import { FacebookProvider, Page } from 'react-facebook';
import { Timeline } from 'react-twitter-widgets'

class BlogSidebar extends Component {

    constructor(props) {
        super(props)


        this.state = {
            searchclass: 'hide',
        }
    }

    render() {
        const instafeedTarget = 'instafeed';
        return (

            <div className="BlogSidebar">

                <div className="subscribe-div">
                    <h5>STAY IN THE KNOW</h5>
                    <p style={{ textAlign: 'center' }}>Enter your email address to receive the Topshop newsletter</p>
                    <input name="subscribe-input" placeholder="Input your email address" type="text" className="form-control" />
                    <button className=" btn btn-post-subscribe">SUBSCRIBE</button>
                </div>


                <div className="about-us">
                    <Divider blogBorder="blog-border-width" name="About Us" />

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>

                <div className="article-follow-us-div">
                    <div>
                        <Divider blogBorder="blog-border-width" name="Follow Us" />
                    </div>
                    <div className="post-social-media-div">
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

                    <div className="sidebar-ads">
                        <img src={image_ads} />
                    </div>

                </div>
                <div className="facebook-page-div">
                    <FacebookProvider appId="203119847024539">
                        <Page href="https://www.facebook.com/MadeInKigali/" tabs="timeline" />
                    </FacebookProvider>
                </div>

                <div className="twitter-timeline">
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'MadeinKigaliRW'
                        }}
                        options={{
                            username: 'MadeinKigaliRW',
                            height: '400'
                        }}
                        onLoad={() => console.log('Timeline is loaded!')}
                    />
                </div>

                {/* <div className='insta-feed'>
                    <InstagramEmbed
                        url='https://www.instagram.com/p/BN4dQ2TgN0z/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {
                            console.log('loading insta');
                            
                         }}
                        onSuccess={() => { console.log('success insta');}}
                        onAfterRender={() => { }}
                        onFailure={(err) => { console.log(err);}}
                    />
                </div> */}
            </div>
        );
    }
}

export default BlogSidebar;
