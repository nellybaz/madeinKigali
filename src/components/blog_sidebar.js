import React, { Component } from 'react';
import '../css/blog.css';
import fb from '../assets/images/facebook-logo.png';
import insta from '../assets/images/instagram-logo.png';
import twitter from '../assets/images/twitter-logo.png';
import linkedin from '../assets/images/linkedin-logo.png';

import Divider from '../components/divider';

import { FacebookProvider, Page } from 'react-facebook';
import { Timeline } from 'react-twitter-widgets'

class BlogSidebar extends Component {

    constructor(props){
        super(props)


        this.state={
            searchclass: 'hide',
        }
    }

  render() {
    return (
      <div className="BlogSidebar">

        <div className="subscribe-div">
            <input name="subscribe-input" placeholder="Input your email address" type="text" className="form-control" />
            <button className=" btn btn-post-subscribe">SUBSCRIBE</button>
        </div>
        

        <div className="about-us">
            <Divider name="About Us" />

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>

        <div className="article-follow-us-div">
            <div>
            <Divider name="Follow Us" />
            </div>
            <div className="post-social-media-div">
                <a href="#" target="_blanck" > <img src={fb} alt="facebook" /></a>
                <a href="#" target="_blanck" > <img src={insta} alt="insta" /></a>
                <a href="#" target="_blanck" > <img src={twitter} alt="twitter" /></a>
                <a href="#" target="_blanck" > <img src={linkedin} alt="linkedin" /></a>
                
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
      </div>
    );
  }
}

export default BlogSidebar;
