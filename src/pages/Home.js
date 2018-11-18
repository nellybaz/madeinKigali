import React, { Component } from 'react';
import '../css/home.css';
import Header from '../components/header.js'; 
import Carousel from '../components/carousel.js';
import Divider from '../components/divider.js'; 
import FlashDeals from '../components/flash-deals.js';

import bag from '../assets/images/product1.jpeg';
import shoe from '../assets/images/shoe1.png';
import shoe2 from '../assets/images/shoe3.png';
import brand1 from '../assets/images/brands1.jpg';
import p1 from '../assets/images/popular1.jpg';
import p2 from '../assets/images/popular2.jpg';
import lingerir from '../assets/images/lingerir.jpg';
import lingerir2 from '../assets/images/lingerir2.jpg';
import pop2 from '../assets/images/pop4.png'
import pop from '../assets/images/pop2.jpg'
import pop3 from '../assets/images/pop3.jpg';
import tr1 from '../assets/images/trending5.jpg';
import Instafeed from 'react-instafeed';
import left_arrow from '../assets/images/left-arrow.png'
import right_arrow from '../assets/images/right-arrow.png';
import Footer from '../components/footer';

import madeinkigali from '../assets/images/madeinkiali.jpg';
import mik2 from '../assets/images/mik2.jpeg';
import mik3 from '../assets/images/mik3.jpeg';
import mik4 from '../assets/images/mik4.jpeg';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly
} from "react-device-detect";


class Home extends Component {
  constructor(props){
    super()
    this.state = {
      mobileWrapClass: '',
      is_mobile: false,
      popularObj:[
        {
          id: 1,
          img: pop2,
          
        },
        {
          id: 2,
          img: lingerir,
        },
        {
          id: 3,
          img: pop3,
         
        },
        {
          id: 4,
          img: pop,
         
        },
        {
          id: 5,
          img: lingerir2,
         
        },

        {
          id: 6,
          img: p1,
         
        },
       


      ],

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



  componentDidMount(){
   
    if(isMobileOnly){
      this.setState({
        mobileWrapClass: 'flex-wrap',
        is_mobile: true,
      })
    }
  }

  popularDisplay =(m)=>{
    let Popular1 = [];
    let Popular2 = [];
    for (let x = 0; x < this.state.popularObj.length; x++) {
      
      if (x < this.state.popularObj.length/2){
        Popular1.push(
          <div className="popular-brands-item" key={x}>
            <img src={this.state.popularObj[x].img} />

          </div>

        )
      }

      else{
        Popular2.push(
          <div className="popular-brands-item popular-brands-item-2" key={x} >
               <img src={this.state.popularObj[x].img} />
          </div>

        )
      }
     
      
    }

    if (m==1){
      return Popular1;
    }
    else{
      return Popular2;
    }
  }
  
  render() {

    const instafeedTarget = 'instafeed';



    return (
      <div>
       <Header/>
      <div className="Home">
     
      <Carousel/>

      <div className="middle-nav">
        <div className="middle-nav-item">
          <a>Request for Wholesale Quo</a>
        </div>
        <div className="middle-nav-item">
        <a>Fabric FAQs</a>
        </div>
        <div className="middle-nav-item">
        <a>Points of Sale</a>
        </div>
        <div className="middle-nav-item">
        <a>Delivery</a>
        </div>
        <div className="middle-nav-item">
        <a>Returns</a>
        </div>

      </div>

      <div className="flashdeals-div">

        {/* flas deals section start */}

          <Divider name='FlashDeals' displayTimer={true}/>

          <FlashDeals objectDispay={this.state.flashdealsObj} showNav={true}/>
      </div>

      {/* flashdeals section ends */}

       {/* fabric section starts */}

        <div className="fabric">

          <Divider name='Create Your Own Dream'/>
          {/* fabric miidle banner image */}
          <div className="middleBanner"></div>

          <div className={`fabric-small-box ${this.state.mobileWrapClass}`}>
            <div className="fabric-small-box-item">
              <h4><b>Fabrics</b></h4>
              <p>Cottons, Polys, Knit, Woven, Organics</p>
            </div>
            <div className="fabric-small-box-item">
            <h4><b>Wallpaper</b></h4>
            <p>Peel & Stick or Water-Activated</p>
            </div >
            <div className="fabric-small-box-item">
            <h4><b>Gift Wrap</b></h4>
            <p>By the Roll</p>
            </div>
            
            <div className="fabric-small-box-item">
            <h4><b>Roostery</b></h4>
            <p>Home Decor</p>
            </div>
            <div className="fabric-small-box-item">
            <h4><b>Sprout Patterns</b></h4>
            <p>Cut and Sew</p>
            </div>

          </div>
      </div>

      {/* fabric section ends */}


      {/* popular brands section   start    */}

      <div className="popular-brands-outer-div">

        <Divider name='Discover Our Most Popular Brands'/>

        <div className="popular-brands-holder">

          {this.popularDisplay(1)}
          
        </div>


         <div className="popular-brands-holder ">

          {this.popularDisplay(2)}
        </div>

        <div className={`brands-subitem ${this.state.mobileWrapClass}` }>
          <div className="brands-subitem-item">
            <h3>Made In Kigali</h3>
            <p>#MadeinRwanda, #MadeinKigali_RW, #Madetogetitright</p>
            
          </div>
          <div className="brands-subitem-item">
            <h3>Amami</h3>
            <p>#Sexy Lingerir, #Intimates, #Bold & Beautiful, #Dentelles</p>
          </div>
          <div className="brands-subitem-item">
            <h3>MIK & CO</h3>
            <p>#MadeinRwanda, #MadeinKigali_RW, #Madetogetitright</p>
          </div>
        </div>

        </div>

      {/* popular brands end */}

      {/* trending starts  */}
      <Divider name="# Trending"/>
        <div className="trending-div-container">
          <div className="trending-item">

            <img  className="trending-left-arrow" src={left_arrow} />
            <div className="trending-inner">
            
                <img src={tr1} />
                <div className="trending-details">
                  <p>$120<br></br><span>black tie front kimono</span>
                  </p>
                </div>
            </div>
            
          </div>


          <div className="trending-item">
            <div className="trending-inner">
            
                <img src={tr1} />
                <div className="trending-details">
                  <p>$120<br></br><span>black tie front kimono</span>
                  </p>
                </div>
            </div>
            
          </div>

           <div className="trending-item">
            <div className="trending-inner">
            
                <img src={tr1} />
                <div className="trending-details">
                  <p>$120<br></br><span>black tie front kimono</span>
                  </p>
                </div>
            </div>

             <img className="trending-right-arrow" src={left_arrow} />
            
          </div>

        </div>

      {/* trending ends */}
        {/* blog section starts */}
       <div className="in-the-know">

        <Divider name='In The Know'/>

        <FlashDeals objectDispay={this.state.brandsObj} showNav={false}/>
      </div>

      {/* bog section ends */}

     <div className="madeinkigali-section">
        <Divider name="MadeinKigali_RW"/>  

        <div className="madeinkigali-inner-div">
          <img alt="mik" src={madeinkigali} />
          <img alt="mik" src={mik2} />
          <img alt="mik" src={mik3} />
          <img alt="mik" src={mik4} />
          <img alt="mik" src={mik2} />
          <img alt="mik" src={mik3} />
        </div>


     </div>

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
                      </div>
                    </div>
                </a>"
                  userId='4242984811'
                  clientId='035fca9dd2b84d6aaec758d945b931ad'
                  accessToken='4242984811.1677ed0.744ef950db2e48dc9f8f76cf6f9aab0e'
                />

            </div>



            </div>
          

        </div>
        
        
            
      </div>
      <Footer is_mobile={this.state.is_mobile}/>
      </div>
    );
  }
}

export default Home;
