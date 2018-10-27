import React, { Component } from 'react';
import '../css/home.css';
import Header from '../components/header.js'; 
import Carousel from '../components/carousel.js';
import Divider from '../components/divider.js'; 
import FlashDeals from '../components/flash-deals.js';

import bag from '../assets/images/bag1.png';
import shoe from '../assets/images/shoe1.png';
import shoe2 from '../assets/images/shoe3.png';
import brand1 from '../assets/images/brands1.jpg';
import middleBanner from '../assets/images/middle-banner.png';

import Instafeed from 'react-instafeed';


class Home extends Component {
  constructor(props){
    super()
    this.state = {
      flashdealsObj:[
        {
          id: 1,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 2,
          img: shoe,
          brand: 'Isabel Maer',
        },
        {
          id: 3,
          img: shoe2,
          brand: 'Isabel Maer',
        },
        {
          id: 4,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 5,
          img: shoe,
          brand: 'Isabel Maer',
        },

        {
          id: 6,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 7,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 8,
          img: shoe,
          brand: 'Isabel Maer',
        },
        {
          id: 9,
          img: shoe2,
          brand: 'Isabel Maer',
        },
        {
          id: 10,
          img: shoe,
          brand: 'Isabel Maer',
        },

        {
          id: 11,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 12,
          img: shoe,
          brand: 'Isabel Maer',
        },


      ],
      brandsObj:[
        {
          id: 1,
          img: brand1,
          brand: 'Isabel Maer',
        },
        {
          id: 2,
          img: shoe,
          brand: 'Isabel Maer',
        },
        {
          id: 3,
          img: shoe2,
          brand: 'Isabel Maer',
        },
        {
          id: 4,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 5,
          img: shoe,
          brand: 'Isabel Maer',
        },

        {
          id: 6,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 7,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 8,
          img: shoe,
          brand: 'Isabel Maer',
        },
        {
          id: 9,
          img: shoe2,
          brand: 'Isabel Maer',
        },
        {
          id: 10,
          img: shoe,
          brand: 'Isabel Maer',
        },

        {
          id: 11,
          img: bag,
          brand: 'Isabel Maer',
        },
        {
          id: 12,
          img: shoe,
          brand: 'Isabel Maer',
        },
      ]
    }
  }
  
  render() {

    const instafeedTarget = 'instafeed';

    return (
      <div className="Home">
      {/* <Header/> */}
      <Carousel/>

      <div className="middle-nav">
        <div className="middle-nav-item">
          <a>REQUEST FOR WHOLE SALE QUOTATION</a>
        </div>
        <div className="middle-nav-item">
        <a>FREE RETURNS</a>
        </div>
        <div className="middle-nav-item">
        <a>POINTS OF SALE</a>
        </div>
        <div className="middle-nav-item">
        <a>FREE RETURNS</a>
        </div>
        <div className="middle-nav-item">
        <a>FREE RETURNS</a>
        </div>

      </div>

      <div>

        {/* flas deals section start */}

          <Divider name='FlashDeals' displayTimer={true}/>

          <FlashDeals objectDispay={this.state.flashdealsObj} showNav={true}/>
      </div>

      {/* flashdeals section ends */}

       {/* fabric section starts */}

            <div>

      <Divider name='Create Your Own Dream'/>
      <div className="middleBanner"></div>
      </div>

      {/* fabric section ends */}
      
        {/* blog section starts */}
       <div>

        <Divider name='In The Know'/>

        <FlashDeals objectDispay={this.state.brandsObj} showNav={false}/>
      </div>

      {/* bog section ends */}

     

        <div className="instagram-section">
            <div className="left">
            
            </div>
            <div className="right">
              <Divider name="Shop Instagram Look"/>

                  <div id={instafeedTarget} className="insta-feed-grid-box">
                <Instafeed
                  limit='5'
                  ref='instafeed'
                  resolution='standard_resolution'
                  sortBy='most-recent'
                  target={instafeedTarget}
                  template="<a href='{{link}}' target='_blank' class='instafeed__item'>
                  <img class='instafeed__item__background' src='{{image}}' />
                    <div class='instafeed__item__overlay'>
                      <div class='instafeed__item__overlay--inner'>
                       
                        <p class='instafeed__item__location'>{{location}}</p>
                      </div>
                    </div>
                </a>"
                  userId='7164727307'
                  clientId='31f47f9c02fe4e9da98cbe56b17c598d'
                  accessToken='7164727307.1677ed0.828dacf9419f4a80a57344cdf80a99a4'
                />

            </div>



            </div>
          

        </div>
        
        
            
      </div>
    );
  }
}

export default Home;
