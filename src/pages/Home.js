import React, { Component } from 'react';
//css imports
import '../css/home.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/flash_deals.css';
import '../css/main.css';
import '../css/components/header.css';


import Cookies from 'universal-cookie';
import DocumentMeta from 'react-document-meta';

import Header from '../components/header.js';
import Carousel from '../components/carousel.js';
import Divider from '../components/divider.js';
import FlashDeals from '../components/flash-deals.js';

import bag from '../assets/images/1A.jpg';
import shoe from '../assets/images/1E.jpg';
import blogpost2 from '../assets/images/1W.jpg';
import blogpost3 from '../assets/images/1S.jpg';
import blogpost4 from '../assets/images/1Q.jpg';
import flashdeals1 from '../assets/images/1R.jpg';
import flashdeals2 from '../assets/images/1Z.jpg';
import shoe2 from '../assets/images/1T.jpg';
import brand1 from '../assets/images/1Y.jpg';
import p1 from '../assets/images/popular1.jpg';
import lingerir from '../assets/images/pop5.jpg';
import lingerir2 from '../assets/images/lingerir2.jpg';
import pop2 from '../assets/images/pop4.jpg'
import pop from '../assets/images/pop2.jpg'
import pop3 from '../assets/images/pop6.jpg';
import tr1 from '../assets/images/trending5.jpg';
import fab1 from '../assets/images/fab_in_home1.jpg';
import fab2 from '../assets/images/fab_in_home2.jpg';


import Footer from '../components/footer';


import returns from '../assets/images/back.png';
import delivery from '../assets/images/logistics.png';
import location from '../assets/images/location.png';
import support from '../assets/images/support.png';

import mik3 from '../assets/images/mik3.jpeg';

import mik5 from '../assets/images/mik6.jpeg';
import mik7 from '../assets/images/mik7.jpeg';

import mik8 from '../assets/images/mik8.jpeg';
import mik9 from '../assets/images/mik9.jpeg';

import insta_left from '../assets/images/insta-left2.jpeg';

import cross_out from '../assets/images/cross-out.png';
import { Link } from 'react-router-dom';

import {
  isMobileOnly
} from "react-device-detect";


class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      viewPopup: false,
      mobileWrapClass: '',
      is_mobile: false,
      justVisited: false,
      mik_dropdown_class: 'hide',
      mik_height: 200,
      trending: [],
      fadein_top_animate_class: "modal-wrapper-product",

      madeinkigali_gallery: [],
      popularObj: [
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

      flashdealsObj: [
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
          img: flashdeals2,
          brand: 'Isabel Maer',
        },
        {
          id: 5,
          img: flashdeals1,
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
      brandsObj: [
        {
          id: 1,
          img: brand1,
          brand: 'Isabel Maer',
          link: '2/BlogTitleTwo'
        },
        {
          id: 2,
          img: blogpost2,
          brand: 'Isabel Maer',
          link: '2/BlogTitleTwo'
        },
        {
          id: 3,
          img: brand1,
          brand: 'Isabel Maer',
          link: '2/BlogTitleTwo'
        },
        {
          id: 4,
          img: blogpost3,
          brand: 'Isabel Maer',
          link: '2/BlogTitleTwo'
        },
        {
          id: 5,
          img: blogpost4,
          brand: 'Isabel Maer',
          link: '2/BlogTitleTwo'
        },

        {
          id: 6,
          img: blogpost3,
          brand: 'Isabel Maer',
          link: '2/BlogTitleTwo'
        },

      ]
    }
  }



  componentDidMount() {
    let visited = sessionStorage.getItem('visited');
    if(visited != null){
      this.setState({
        justVisited: false,
      });
    }

    else{
      sessionStorage.setItem('visited', '1');
      this.setState({
        justVisited: true,
      });
    }
    
    

    // let visited = localStorage["alreadyVisited"];
    //     if(visited) {
    //          this.setState({ viewPopup: false })
    //          //do not view Popup
    //     } else {
    //          //this is the first time
    //          localStorage["alreadyVisited"] = true;
    //          this.setState({ viewPopup: true});
    //     }
    
    // this.handleFadeinTop();

    const cookies = new Cookies();
    // alert(cookies.get('userID'));
    // // cookies.remove('email');
    // alert(cookies.get('email'));

    //set a random userID if user is not signed in
    if (cookies.get('userID') == undefined) {
      cookies.set('userID', this.generateUserID(), { path: '/', expires: new Date(Date.now() + 2592000) })
    }

    //adding to trending

    for (let x = 0; x < 3; x++) {
      this.setState({});
      this.state.trending.push(
        <div className="trending-item" key={x}>
          <div className="trending-inner">

            <img alt='mik' src={tr1} />
            <div className="trending-details">
              <p>$120<br></br><span>black tie front kimono</span>
              </p>
            </div>
          </div>

        </div>
      )
    }


    //adding madeinkigali gallery
    for (let x = 0; x < 6; x++) {
      let img = mik5;
      if (x == 1) {
        img = mik9
      }
      else if (x == 2) {
        img = mik8
      }
      else if (x == 3) {
        img = insta_left
      }

      else if (x == 5) {
        img = mik8
      }
      this.setState({});
      this.state.madeinkigali_gallery.push(
        <img onClick={() => this.setState({
          mik_dropdown_class: ''
        })} alt="mik" src={mik3} alt="mik" src={img} key={x} />
      )
    }

    if (isMobileOnly) {
      this.setState({
        mobileWrapClass: 'flex-wrap',
        is_mobile: true,
      })
    }
  }

  generateUserID = () => {

    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

  }


  popularDisplay = (m) => {
    let Popular1 = [];
    let Popular2 = [];

    let bigText = '';
    for (let x = 0; x < this.state.popularObj.length; x++) {

      if (x < this.state.popularObj.length / 2) {
        Popular1.push(
          <div className="popular-brands-item" key={x}>
            <img alt='mik' src={this.state.popularObj[x].img} />

          </div>

        )
      }

      else {
        if (x === 3) {
          bigText = "Made In Kigali";
        }
        else if (x === 4) {
          bigText = "Amami";
        }

        else {
          bigText = "MIK & CO";
        }
        Popular2.push(
          <div className="popular-brands-item popular-brands-item-2" key={x} >
            <img alt='mik' src={this.state.popularObj[x].img} />

            <div className="brands-subitem-item">
              <h3 style={{ color: 'rgb(75, 72, 72)' }}><b>{bigText}</b></h3>
              <p>#MadeinRwanda, #MadeinKigali_RW, #Madetogetitright</p>

            </div>
          </div>

        )
      }


    }

    if (m === 1) {
      return Popular1;
    }
    else {
      return Popular2;
    }
  }


  handleFadeinTop = () => {
    
    if (this.state.fadein_top_animate_class === "popup-hide") {
      this.setState({
        fadein_top_animate_class: "modal-wrapper-product",
        
      })
    }
    else {
      this.setState({
        fadein_top_animate_class: "popup-hide",
        
      }) 
    }


  }


  // showPopUp =()=>{
  //   // alert('c')
    
  //   // return this.handleFadeinTop();
  // }

  render() {

    const instafeedTarget = 'instafeed';

    const meta = {
      title: 'MadeinKigali - Online Shopping for Clothes, Bags, Shoes, Fashion & more',
      description: 'The leading online fashion store in rwanda, exporting women and men fashion madeinRwanda. #visitrwanda.',
      canonical: 'https://madeinkigali.com',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'womens clothing, fashion, womens fashion, womens clothes, shop online rwanda, visit rwanda, #visitrwanda, madeinkigali, madeinkigali.com'
        }
      }
    };


    return (
      <DocumentMeta {...meta}>
      <div style={{ background: 'white' }}>
        <Header />
      {/* calling popup */}

      {/* {this.showPopUp()} */}

        <div className="Home">

          <Carousel />

          <div className="middle-nav">
            <div className="middle-nav-item">
              <span><img src={support} /></span> <Link to={'/dev/quote'}>Wholesale Quote</Link>
            </div>
            <div className="middle-nav-item">
              <span><img src={location} /></span><Link to={'/dev/info/points-of-sale'}>Points of Sale</Link>
            </div>
            <div className="middle-nav-item">
              <span><img src={delivery} /></span><Link to={'/dev/info/delivery'} >Delivery</Link>
            </div>
            <div className="middle-nav-item">
              <span><img src={returns} /></span><Link to={'/dev/info/returns'}>Returns</Link>
            </div>

          </div>
          

          <div className="flashdeals-div">

            {/* flas deals section start */}

            <Divider color="red" name='Flash Deals' displayTimer={true} />

            <FlashDeals objectDispay={this.state.flashdealsObj} showNav={true} />

          </div>

          {/* flashdeals section ends */}


          {/* blog section starts */}
          <div className="in-the-know">

            <Divider name='In The Know' />

            <FlashDeals isBlog={true} objectDispay={this.state.brandsObj} showNav={false} />
          </div>

          {/* bog section ends */}

          {/* fabric section starts */}

          <div className="fabric">

            <Divider name='Create Your Own Dream' />
            {/* fabric miidle banner image */}
            <div className="middleBanner"></div>

            {/* <div className={`fabric-small-box ${this.state.mobileWrapClass}`}>
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

          </div> */}

            <div className="fabric-inner-div-wrapper">

              <div>
                <Link to={'/dev/fabric'}>
                  <div className="fabric-inner-div-wrapper-inner">

                  </div>
                  <p>FABRIC PRINTING</p>
                </Link>
              </div>

              <div>
                <div className="fabric-inner-div-wrapper-inner">

                </div>
                <p>LEATHER PRINTING</p>

              </div>
              <div>
                <img src={fab1} />
                <p>CLOTHING</p>

              </div>
              <div>
                <img src={fab2} />
                <p>HOMEWEAR</p>
              </div>

            </div>
          </div>

          {/* fabric section ends */}


          {/* popular brands section   start    */}

          <div className="popular-brands-outer-div">

            <Divider name='Discover Our Most Popular Brands' />

            <div className="popular-brands-holder">

              {this.popularDisplay(1)}

            </div>


            <div className="popular-brands-holder ">

              {this.popularDisplay(2)}
            </div>

          </div>

          {/* popular brands end */}

          {/* trending starts  */}

          <Divider name="#Trending" />
          <div className="trending-div-container">

            {this.state.trending}

          </div>

          {/* trending ends */}

          <div className="madeinkigali-section">
            <Divider name="#MadeinKigaliRW" />
            <a href="/dev/gallery" className="gallery-little-title">VIEW GALLERY</a>

            <div className="madeinkigali-inner-div">
              {this.state.madeinkigali_gallery}

            </div>

            <div className={`mik-dropdown-outer ${this.state.mik_dropdown_class}`}>
              <div style={{ display: 'flex', }}>
                <p style={{ width: '90%' }}>Shop @maisiekateyoung's Look</p>

                <img onClick={() => this.setState({
                  mik_dropdown_class: 'hide'
                })} style={{ height: '20px' }} src={cross_out} />

              </div>
              <div className="mik-dropdown">

                <div className="mik-dropdown-item">

                  <img className="mik-dropdown-item-img-left" src={mik5} />
                </div>

                <div className="mik-dropdown-item">
                  <div className="mik-dropdown-item-second-inner">
                    <img className="mik-dropdown-item-img-right" src={mik7} />
                    <p>Womens Houndstooth Chunky Roll Jumper - Ivory</p>
                    <p>$42</p>
                  </div>

                  <div className="mik-dropdown-item-second-inner">
                    <img className="mik-dropdown-item-img-right" src={mik7} />
                    <p>Womens Houndstooth Chunky Roll Jumper - Ivory</p>
                    <p>$42</p>
                  </div>


                  <div className="mik-dropdown-item-second-inner">
                    <img className="mik-dropdown-item-img-right" src={mik7} />
                    <p>Womens Houndstooth Chunky Roll Jumper - Ivory</p>
                    <p>$42</p>
                  </div>
                </div>

              </div>

            </div>



          </div>

          <div className="instagram-section">
            <div className="left">
              <img className="insta-left-img" src={insta_left} />
            </div>
            <div className="right">
              {/* <Divider name="Shop Instagram Look"/> */}

              <div id={instafeedTarget} className="insta-feed-grid-box">
                {/* <Instafeed
                  limit='5'
                  ref='instafeed'
                  resolution='standard_resolution'
                  sortBy='most-recent'
                  target={instafeedTarget}
                  template="<a href='{{link}}' target='_blank' class='instafeed__item'>
      <img alt='mik' class='instafeed__item__background' src='{{image}}' />
                    <div class='instafeed__item__overlay'>
                      <div class='instafeed__item__overlay--inner'>
                      </div>
                    </div>
                </a>"
                  userId='4242984811'
                  clientId='035fca9dd2b84d6aaec758d945b931ad'
                  accessToken='4242984811.1677ed0.744ef950db2e48dc9f8f76cf6f9aab0e'
                /> */}

                <img className="insta-pic" src={mik8} />
                <img className="insta-pic" src={mik9} />
                <img className="insta-pic" src={mik8} />

                <img className="insta-pic" src={mik8} />
                <img className="insta-pic" src={mik9} />
                <img className="insta-pic" src={mik8} />


                <img className="insta-pic" src={mik8} />
                <img className="insta-pic" src={mik9} />
                <img className="insta-pic" src={mik8} />

              </div>



            </div>


          </div>

          {/* modal opening on load */}


          { this.state.justVisited &&
            <div className={`${this.state.fadein_top_animate_class}`}>

            <div>

              <h5 style={{ fontSize: '2rem', color: 'black' }}>SIGN IN TO OUR NEWSLETTER</h5>

              <label>Name*<br></br>
                <input style={{ width: '250px', padding: '5px', border: '1px solid black', color:'black' }} />
              </label>

              <br></br>
              <label>Email*<br></br>
                <input style={{ width: '250px', padding: '5px', border: '1px solid black', color:'black' }} />
              </label>

            </div>



            <div className='close-shipping-div-home'>
              <button style={{marginRight: '15px'}} className="btn btn-close-modal-home" onClick={() => this.handleFadeinTop()}>SUBSCRIBE</button>
              <button className="btn btn-close-modal-home" onClick={() => this.handleFadeinTop()}>CLOSE</button>
            </div>
          </div>
          }

          {/* modal end */}

        </div>
        <Footer is_mobile={this.state.is_mobile} />
      </div>
      </DocumentMeta>
    );
  }
}

export default Home;
