import React, { Component, Suspense } from 'react';
import '../css/home.css';

import QueueAnim from 'rc-queue-anim';
import Cookies from 'universal-cookie';
import DocumentMeta from 'react-document-meta';

import Header from '../components/header.js';
import Carousel from '../components/carousel.js';
import Divider from '../components/divider.js';
import FlashDeals from '../components/flash-deals.js';

import FlashDeals2 from '../components/new_flashdeals';

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


import request from 'superagent';

import {
  isMobileOnly,
  is_mobile
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
      trending_holder: [],
      fadein_top_animate_class: "modal-wrapper-product",

      madeinkigali_gallery: [],
      blogObj: [],
      popularObj: [],

      flashdealsObj: [
        {"id": 1},
        {"id": 2},
        {"id": 3},
        {"id": 4},
        {"id": 5},
        {"id": 6},
        {"id": 7},
        {"id": 8},
        {"id": 9},
        {"id": 10},
      ]
    }
  }



  componentDidMount() {
    //calling the APIs
    
    
    this.getTrending();
    this.getBrands();
    this.getFeaturedBlog(); 
    this.flashdealsCall();


    let visited = sessionStorage.getItem('visited');
    if (visited != null) {
      this.setState({
        justVisited: false,
      });
    }

    else {
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

    let galleryImageLimit = window.innerWidth < 900 ? 3 : 6;


    //adding madeinkigali gallery
    for (let x = 0; x < galleryImageLimit; x++) {
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
        })} alt="mik" alt="mik" src={img} key={x} />
      )
    }

    if (isMobileOnly) {
      this.setState({
        mobileWrapClass: 'flex-wrap',
        is_mobile: true,
      })
    }
  }



  async flashdealsCall() {

    try {


      let currentComponent = this;

      request
        .post('https://madeinkigali.com/API/api2/homepage/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ token: "mik9876543210", tag: 'flashdeals' })
        // .parse(({ res }) => JSON.parse(res))
        .end(function (err, res) {

          if (res != null) {
            if (res.body.flashdeals != null) {
              console.log(res.body.flashdeals);


              //loop through the data, and push an array of data to state
              const data1 = [];

              for (let i = 0; i < res.body.flashdeals.length; i++) {
                data1.push({
                  id: res.body.flashdeals[i].product_id,
                  name: res.body.flashdeals[i].product_name,
                  img: res.body.flashdeals[i].primary_img,
                  brand: res.body.flashdeals[i].product_brand,
                  price: res.body.flashdeals[i].product_price,
                }
                );
              }
              currentComponent.setState(
                {
                  flashdealsObj: data1,
                }
              );



            }

            else if (res.body.res === 0) {
              console.log('not registered');

            }

          }
          else {
            console.log(res, err);

          }

        });


    } catch (e) {
      console.log(e);
    }


  }
  // ======== flashdeals end ============== \\


  async getFeaturedBlog() {
    try {


      let currentComponent = this;

      request
        .post('https://madeinkigali.com/API/api2/homepage/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ token: "mik9876543210", tag: 'blog' })
        .end(function (err, res) {



          if (res != null) {
            if (res.body.blog != null) {

              //loop through the data, and push an array of data to state
              const data = [];

              for (let i = 0; i < res.body.blog.length; i++) {
                if (i < 5) {
                  data.push({
                    id: res.body.blog[i].article_no,
                    img: res.body.blog[i].article_image,
                    name: res.body.blog[i].article_name,
                    description: res.body.blog[i].article_post,
                  }
                  );
                }
              }
              currentComponent.setState({
                blogObj: data,
              })


            }

          }

          else {
            console.log(res, err);

          }

        });


    } catch (e) {
      console.log(e);
    }
  }


  async getTrending() {
    try {


      let currentComponent = this;

      request
        .post('https://madeinkigali.com/API/api2/homepage/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ token: "mik9876543210", tag: 'trending' })
        .end(function (err, res) {



          if (res != null) {
            if (res.body.trending != null) {

              //loop through the data, and push an array of data to state

              const data = [];

              for (let i = 0; i < res.body.trending.length; i++) {
                data.push(
                  <div className="trending-item" key={i}>
                    <div className="trending-inner">

                      <img alt='mik' src={tr1} />
                      <div className="trending-details">
                        <p>${res.body.trending[i].product_price}<br></br><span>{res.body.trending[i].product_name}</span>
                        </p>
                      </div>
                    </div>


                  </div>
                );



              }

              currentComponent.setState({
                trending: data,
              });


            }

          }

          else {
            console.log(res, err);

          }

        });


    } catch (e) {
      console.log(e);
    }
  }





  async getBrands() {
    try {


      let currentComponent = this;

      request
        .post('https://madeinkigali.com/API/api2/homepage/')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ token: "mik9876543210", tag: 'brands' })
        .end(function (err, res) {



          if (res != null) {
            if (res.body.brands != null) {
              // console.log(res.body.brands);

              //set state to the data
              currentComponent.setState({
                popularObj: res.body.brands,
              })





            }

          }

          // else if (res.body.res === 0) {
          //   console.log('not registered');

          // }


          else {
            console.log(res, err);

          }

        });


    } catch (e) {
      console.log(e);
    }
  }


  //===============  API CALL ===========================\\

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
    let popularDisplayLength = this.state.popularObj.length;
    for (let x = 0; x < popularDisplayLength; x++) {
      if (window.innerWidth <= 900 && x < 1) {
        console.log(window.innerWidth);

        Popular1.push(

          <div className="popular-brands-item" key={x}>
            <img alt='mik' src={`https://madeinkigali.com/images/brands/${this.state.popularObj[x].brand_big_banner}`} />

          </div>
        )
      }

      if (window.innerWidth > 900) {
        Popular1.push(

          <div className="popular-brands-item" key={x}>
            <img alt='mik' src={`https://madeinkigali.com/images/brands/${this.state.popularObj[x].brand_big_banner}`} />

          </div>
        )
      }



      // Popular2.push(
      //   <div className="popular-brands-item popular-brands-item-2" key={x} >
      //     {/* <img alt='mik' src={`http://madeinkigali.com/images/brands/${this.state.popularObj[x].brand_small_banner}`} /> */}

      //     <div className="brands-subitem-item">
      //       <h3 style={{ color: 'rgb(75, 72, 72)' }}><b>{this.state.popularObj[x].brand_name}</b></h3>
      //       <p>{this.state.popularObj[x].brand_hashtags}</p>

      //     </div>
      //   </div>
      // );



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


      )



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

        <QueueAnim

          delay={0}
          type={"top"}
          duration={1000}

        >

          <div style={{ background: 'white' }}>

            <Header />
            {/* calling popup */}

            {/* {this.showPopUp()} */}

            <div className="Home">

              <Carousel />


              <div className="middle-nav">
                <div className="middle-nav-item">
                  <span><img src={support} /></span> <Link to={'/quote'}>Wholesale Quote</Link>
                </div>
                <div className="middle-nav-item">
                  <span><img src={location} /></span><Link to={'/points'}>Points of Sale</Link>
                </div>
                <div className="middle-nav-item">
                  <span><img src={delivery} /></span><Link to={'/info/delivery'} >Delivery</Link>
                </div>
                <div className="middle-nav-item">
                  <span><img src={returns} /></span><Link to={'/info/returns'}>Returns</Link>
                </div>

              </div>




              <Divider color="red" name='Flash Deals' displayTimer={true} />
              <div className="flashdeals-div">

               
                 {/* <Suspense fallback={<p>Loading</p>}>  */}
                    <FlashDeals2 ObjectToDisplay={this.state.flashdealsObj} />
                 {/* </Suspense> */}
                }

              </div>

              {/* flashdeals section ends */}




              {/* fabric section starts */}

              {/* <div className="fabric">

                <Divider name='Create Your Own Dream' />
                <div className="middleBanner">
                </div>

                <div className="fabric-inner-div-wrapper">

                  <div>
                    <Link to={'/fabric'}>
                      <div className="fabric-inner-div-wrapper-inner" style={{borderRadius:'5px'}}>

                      </div>
                      <p>FABRIC PRINTING</p>
                    </Link>
                  </div>

                  <div>
                    <div className="fabric-inner-div-wrapper-inner" style={{borderRadius:'5px'}}>

                    </div>
                    <p>LEATHER PRINTING</p>

                  </div>
                  <div>
                    <img src={fab1} style={{borderRadius:'5px'}} />
                    <p>CLOTHING</p>

                  </div>
                  <div>
                    <img src={fab2}  style={{borderRadius:'5px'}}/>
                    <p>HOMEWEAR</p>
                  </div>

                </div>
              </div> */}

              {/* fabric section ends */}


              {/* popular brands section   start    */}

              <div className="popular-brands-outer-div">

                <Divider name='Discover Our Most Popular Brands' />

                <div className="popular-brands-holder">

                  {this.state.popularObj.length > 0 ? this.popularDisplay(1) :

                    <div className='loading-spinner'>
                      <img src={require('../assets/images/spinner.gif')} />

                    </div>
                  }

                </div>


                <div className="popular-brands-holder ">

                  {this.popularDisplay(2)}
                </div>

              </div>

              {/* popular brands end */}

              <div className="madeinkigali-section">
                <Divider name="#MadeinKigaliRW" />
                <Link to="/gallery" className="gallery-little-title">VIEW GALLERY</Link>

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

              {/* blog section starts */}
              <div className="in-the-know">

                <Divider name='In The Know' />

                {
                  this.state.blogObj.length > 0 ? <FlashDeals isBlog={true} objectDispay={this.state.blogObj} showNav={false} /> :


                    <div className='loading-spinner'>
                      <img src={require('../assets/images/spinner.gif')} />

                    </div>

                }
              </div>

              {/* bog section ends */}

              {/* modal opening on load */}


              {this.state.justVisited &&
                <div className={`${this.state.fadein_top_animate_class}`}>

                  <div>

                    <h5 style={{ fontSize: '2rem', color: 'black' }}>SIGN IN TO OUR NEWSLETTER</h5>

                    <label>Name*<br></br>
                      <input style={{ width: '250px', padding: '5px', border: '1px solid black', color: 'black' }} />
                    </label>

                    <br></br>
                    <label>Email*<br></br>
                      <input style={{ width: '250px', padding: '5px', border: '1px solid black', color: 'black' }} />
                    </label>

                  </div>



                  <div className='close-shipping-div-home'>
                    <button style={{ marginRight: '15px' }} className="btn btn-close-modal-home" onClick={() => this.handleFadeinTop()}>SUBSCRIBE</button>
                    <button className="btn btn-close-modal-home" onClick={() => this.handleFadeinTop()}>CLOSE</button>
                  </div>
                </div>
              }


              {/* modal end */}

            </div>
            <Footer is_mobile={this.state.is_mobile} />
          </div>

        </QueueAnim>
      </DocumentMeta>
    );
  }
}

export default Home;
