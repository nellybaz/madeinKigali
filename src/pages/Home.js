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

          <Divider name='FlashDeals' displayTimer={true}/>

          <FlashDeals objectDispay={this.state.flashdealsObj} showNav={true}/>
      </div>

       <div>

        <Divider name='In The Know'/>

        <FlashDeals objectDispay={this.state.brandsObj} showNav={false}/>
      </div>

       <div>

        <Divider name='Create Your Own Dream'/>
        <div className="middleBanner"></div>
        {/* <img className="middleBanner" src={middleBanner} />
        <img className="middleBanner" src={middleBanner} /> */}
        </div>

            
      </div>
    );
  }
}

export default Home;
