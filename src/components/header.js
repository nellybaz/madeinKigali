import React, { Component } from 'react';
import '../css/header.css';

import Cookies from 'universal-cookie';
import '../css/components/header.css';
import logo from '../assets/images/logo.png';
import heart from '../assets/images/heart2.png';
import heart_mobile from '../assets/images/heart-mobile.png';
import bag from '../assets/images/shopping-bag.png';
import bag_mobile from '../assets/images/bag-mobile.png';
import search from '../assets/images/search.png';
import search_mobile from '../assets/images/search-mobile.png';
import profile from '../assets/images/profile.png';
import menu_grid_sub_img from '../assets/images/banner1.jpg';
import {Link} from 'react-router-dom';
import play from '../assets/images/play.gif';
import pause from '../assets/images/pause.png';


import music from '../assets/music/music.mp3';

import little_banner from '../assets/images/little_banner.jpg';

import mobile_menu from '../assets/images/menu.png';

class Header2 extends Component {

    constructor(props){
        super(props)

        this.state={
            mobile_search: 'hide',
            searchclass: 'hide',
            search_query:'jeans',
            nav_class: '',
            music_icon: play,
        }
    }


    async componentDidMount() {
     
        
               

        setInterval(async () => {

          window.addEventListener('scroll', this.handleScroll());
          
        }, 10);
      } 

    
      handleTunePause=()=>{
        var myAudio = this.mytune;
        if (myAudio.paused) {
            myAudio.play();
            // this.setState({
            //     music_icon: play
            // })
        } else {
            myAudio.pause();
            // this.setState({
            //     music_icon: pause,
            // })
        }
      }
  
  handleScroll=(event)=> {
      if (Math.round(window.scrollY) >= 420) {
              // alert('yes')

               this.setState({
                   nav_class: 'nav-fixed'
               })
               
               }

      else{
          this.setState({
              nav_class: ''
          })
          
      }
              }


    handleSearchHighlight =()=>{
        
        const search_input = this.refs.search_input;
        search_input.focus();
    }

   
    disableCookies =()=>{
        const cookies = new Cookies();
        if(cookies.get('email') != undefined){
            cookies.remove('email', {path:'/'});
            
        }

        if(cookies.get('userID') != undefined){
            cookies.remove('userID');
        }

        window.location.href="/dev";

    }

   searchBoxHandler =()=>{
    // alert('Searching....');
    window.location.href=`/dev/search/${this.state.search_query}`;

    //call search api
   }


   handleMobileSearch =()=>{
    //    alert('cliceked')
       if(this.state.mobile_search == 'hide'){
           this.setState({
               mobile_search: 'search-show-mobile'
           })
       }
       else{
        this.setState({
            mobile_search: 'hide'
        })
       }
   }
  render() {
    return (
      <div className="Header">
        {/* {this.getWindowClick()} */}
      <div className="topmost-bar">
            <audio autoPlay={true} ref = {(ip)=> {this.mytune = ip}}>
            <source src={music} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

        <img className="audio-pause" src={this.state.music_icon} onClick={()=> this.handleTunePause()} />
          <p>Register now to get <span className="top-bar-white-text">10% off*</span> your first order with code <span onClick={()=>this.disableCookies()} className="top-bar-white-text"><b>NEWCUSTOMER10</b></span></p>
      </div>
      <header className="header">
        
            {/* <div className="Header-one">
                <div className="sigin-wishlist header-items">
                    <a href="/dev/signin" className="sigin"><b>SIGN IN</b></a>
                    <a href="#" ><b>WISHLIST</b></a>
                    <a href ="#" className="wishlist-icon-link"><img className="wishlist-icon" src={heart} /></a>

                </div>

                <div className=" header-items right-icons">
                    <input ref="search_input" className="search-input" onChange={(e)=> this.setState({search_query: e.target.value})} onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                            // Do code here
                        
                            this.searchBoxHandler();
                            ev.preventDefault();
                            }
        }} type="text" placeholder="Search" />
                    <a href="#" onClick={()=>this.handleSearchHighlight()}><img src={search}></img></a>
                    <a href="/dev/signin"><img src={profile}></img></a>
                    <a href="/dev/cart"><img src={bag}></img></a>

                    
                </div>
                </div> */}

                <div className='topbar-nav'>
                    <div className='topbar-nav-left'>
                        <p>Student? check our student discount</p>
                    </div>

                    <div className='topbar-nav-right'>
                    <input ref="search_input" className="search-input" onChange={(e)=> this.setState({search_query: e.target.value})} onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                            // Do code here
                        
                            this.searchBoxHandler();
                            ev.preventDefault();
                            }
        }} type="text" placeholder="Search" />
                    <a href="#" onClick={()=>this.handleSearchHighlight()}><img src={search}></img></a>
                    <a href="/dev/signin"><img src={profile}></img></a>
                    <a href="/dev/cart"><img src={bag}></img></a>
                    </div>
                    
                </div>
      </header>
     

        {/* mobile navigation */}

        <div className={`mobile-nav`}>
        
            <a style={{fontSize: '0.8rem'}} className="btn btn-open-nav mobile-nav-item"><img src={mobile_menu} alt="mik"/><br></br>MENU</a>
            <Link to={'/dev'} className="mobile-nav-item" ><img className="mobile-logo" src={logo} /></Link>
            

           <div className="mobile-nav-item right-icons-mobile">
               <a style={{fontSize: '0.8rem'}} onClick={()=> this.handleMobileSearch()} className="btn btn-search mobile-nav-item-b"><img src={search_mobile}></img><br></br>SEARCH</a>
                <a style={{fontSize: '0.8rem'}} className="btn mobile-nav-item-b"><img src={heart_mobile}></img> <br></br>WISHLIST</a>
                <a style={{fontSize: '0.8rem'}} className="btn btn-bag mobile-nav-item-b"><img src={bag_mobile}></img> <br></br>BAG</a>
           </div>

        </div>
        <div className={`${this.state.mobile_search}`}>
            <input type="search" className="form-control btn-search-mobile" placeholder="What are you shopping for?"
                            onChange={(e)=> this.setState({search_query: e.target.value})} onKeyPress={(ev) => {
                                if (ev.key === 'Enter') {
                                // Do code here
                            
                                this.searchBoxHandler();
                                ev.preventDefault();
                                }
            }}
                    
                    />
        </div>


     {/* mobile navigation ends */}

        <div className={`navigation ${this.state.nav_class}`}>

            <div className='logo-div-nav'>
                <Link to={'/dev'} ><img src={logo} alt="mik logo"/></Link>
            </div>
            
            <div className="new-in" ><a href="#" >NEW IN </a>
            <div className="new-in-dropdown dropdowns">
                    <div className="new-in-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>SHOP BY CLOTHING</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>
                  

                    <div className="new-in-dropdown-content">
                        <img src={little_banner} />
                    </div>
                </div>
            </div>

                {/* fabric */}


            <div className="fabric" ><a href="#" >FABRIC </a>
            <div className="fabric-dropdown dropdowns">
                    <div className="fabric-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>FABRICS</h5>
                        
                            <Link to={"/dev/fabric"} >Fabrics</Link>
                            <Link to={"/dev/fabric/upload"} >Upload</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>

                    <div className="fabric-dropdown-content">
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY EDIT</h5>
                    
                        <Link to={"#"} >Last Chance to Buy</Link>
                        <Link to={"#"} >Men’s coats & jacketsBestsellers</Link>
                        <Link to={"#"} >Multi Packs</Link>
                        <Link to={"#"} >Multi-buy deals </Link>
                        <Link to={"#"} >Holiday Shop</Link>
                        
                    </div>

                    </div>

                    <div className="fabric-dropdown-content">
                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY CATEGORY</h5>
                    
                        <Link to={"#"} >RTWMen</Link>
                        <Link to={"#"} >RTWWomen</Link>
                        <Link to={"#"} >Couture Men</Link>
                        <Link to={"#"} >Couture Women </Link>
                        <Link to={"#"} >Children</Link>

                        <Link to={"#"} >Wedding </Link>
                        <Link to={"#"} >Accessories</Link>
                        
                    </div>
                    

                    </div>

                    <div className="fabric-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY COLLECTION</h5>
                    
                        <Link to={"#"} >The MIK Boutique</Link>
                        <Link to={"#"} >The Men guide</Link>
                        <Link to={"#"} >The Women guide</Link>
                        <Link to={"#"} >Workwear </Link>
                        <Link to={"#"} >Suits</Link>

                        <Link to={"#"} >Festival </Link>
                        <Link to={"#"} >Going out</Link>
                        
                    </div>
                    </div>

                    <div className="fabric-dropdown-content">
                        <img width="100%" height="100%" src={little_banner} />
                    </div>
                </div>
            </div>


            {/* fabric ends */}



            <div className="m2m"><a href="/dev/m2m2">MADE TO MEASURE</a>
                <div className="m2m-dropdown dropdowns">
                    <div className="m2m-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>SHOP BY CLOTHING</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>

                    <div className="m2m-dropdown-content">
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY EDIT</h5>
                    
                        <Link to={"#"} >Last Chance to Buy</Link>
                        <Link to={"#"} >Men’s coats & jacketsBestsellers</Link>
                        <Link to={"#"} >Multi Packs</Link>
                        <Link to={"#"} >Multi-buy deals </Link>
                        <Link to={"#"} >Holiday Shop</Link>
                        
                    </div>

                    </div>

                    <div className="m2m-dropdown-content">
                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY CATEGORY</h5>
                    
                        <Link to={"#"} >RTWMen</Link>
                        <Link to={"#"} >RTWWomen</Link>
                        <Link to={"#"} >Couture Men</Link>
                        <Link to={"#"} >Couture Women </Link>
                        <Link to={"#"} >Children</Link>

                        <Link to={"#"} >Wedding </Link>
                        <Link to={"#"} >Accessories</Link>
                        
                    </div>
                    

                    </div>

                    <div className="m2m-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY COLLECTION</h5>
                    
                        <Link to={"#"} >The MIK Boutique</Link>
                        <Link to={"#"} >The Men guide</Link>
                        <Link to={"#"} >The Women guide</Link>
                        <Link to={"#"} >Workwear </Link>
                        <Link to={"#"} >Suits</Link>

                        <Link to={"#"} >Festival </Link>
                        <Link to={"#"} >Going out</Link>
                        
                    </div>
                    </div>

                    <div className="m2m-dropdown-content">
                        <img width="100%" height="100%" src={little_banner} />
                    </div>
                </div>
            
            </div>
            <div className="wholesale"><Link to={'/dev/wholesale/new/2'}>WHOLESALE</Link>
            <div className="wholesale-dropdown dropdowns">
                    <div className="wholesale-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column', flexWrap:'wrap', }}>
                            
                            
                                <h5 style={{ }}>SHOP BY CATEGORY</h5>
                                                       
                            <Link to={"#"} >Women’s suit</Link>
                            <Link to={"#"} >Men’s suit</Link>
                            <Link to={"#"} >Dresses</Link>
                            <Link to={"#"} >Playsuit & Jumpsuit </Link>
                            <Link to={"#"} >Dress Shirts</Link>
                            <Link to={"#"} >Polos</Link>
                            <Link to={"#"} >Tshirts & Vests</Link>
                            <Link to={"#"} >Dress ShirtsBags & accessories</Link>
                            <Link to={"#"} >Swimwear</Link>
                            

                        </div>
                    </div>

                    <div className="wholesale-dropdown-content">
                    



                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                        {/* continuation from above sub menu */}
                        <Link to={"#"} >Tshirts & VestsLingeries & Nightwear</Link>
                        <Link to={"#"} >Hospitality</Link>
                        <Link to={"#"} >School Uniforms</Link>
                        <Link to={"#"} >Industrial wear</Link>
                        {/* <Link to={"#"} >Security uniforms</Link>
                        <Link to={"#"} >Sewing accessories</Link> */}
                        <Link to={"#"} >Fabrics</Link>
                            
                            <h5 style={{ }}>SHOP BY OCCASSION</h5>

                        <Link to={"#"} >Wedding</Link>
                        <Link to={"#"} >Workwear</Link>
                        <Link to={"#"} >Prom</Link>
                        
                        
                    </div>

                    </div>

                    <div className="wholesale-dropdown-content">
                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY CATEGORY</h5>
                    
                        <Link to={"#"} >Petite</Link>
                        <Link to={"#"} >Curves</Link>
                        <Link to={"#"} >Maternity</Link>
                        <Link to={"#"} >Tall </Link>
                        <Link to={"#"} >Muscle fit</Link>

                        <Link to={"#"} >Shop by fit </Link>
                        <Link to={"#"} >Petite</Link>
                        
                    </div>
                    

                    </div>

                    <div className="wholesale-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                      
                            
                            <h5 style={{ }}>SHOP BY BRAND</h5>
                    
                        <Link to={"#"} >Amami</Link>
                        <Link to={"#"} >Ramazani</Link>
                        <Link to={"#"} >MIK boutique </Link>
                        <Link to={"#"} >Shop by brand </Link>
                        <Link to={"#"} >Amami</Link>

                        
                        
                    </div>
                    </div>

                     <div className="m2m-dropdown-content">
                        <img width="100%" height="100%" src={little_banner} />
                    </div>
                </div>
            
            
            </div>
            <div className="brands"><a href="#">BRANDS </a>

                 <div className="brands-dropdown dropdowns">
                    <div className="brands-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>SHOP BY CLOTHING</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>

                    <div className="brands-dropdown-content">
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                            <h5 style={{ }}>SHOP BY EDIT</h5>
                    
                        <Link to={"#"} >Last Chance to Buy</Link>
                        <Link to={"#"} >Men’s coats & jacketsBestsellers</Link>
                        <Link to={"#"} >Multi Packs</Link>
                        <Link to={"#"} >Multi-buy deals </Link>
                        <Link to={"#"} >Holiday Shop</Link>
                        
                    </div>

                    </div>

                   

                    <div className="brands-dropdown-content">
                        <img width="100%" height="100%" src={little_banner} />
                    </div>
                </div>
            </div>
            
            <div className="sale" ><a href="#">SALES </a>

                 <div className="sales-dropdown dropdowns">
                    <div className="sales-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>SHOP BY CLOTHING</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>

                     <div className="sales-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>SHOP BY CLOTHING</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>
                  

                    <div className="sales-dropdown-content">
                        <img src={little_banner} />
                    </div>
                </div>
            
            </div>
            <div className='fashion-stories'><Link to={'/dev/blog'}>FASHION STORIES</Link>
            <div className="fashion-stories-dropdown dropdowns">
                    <div className="fashion-stories-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>ALL FASHION STORIES</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>
                  

                    <div className="fashion-stories-dropdown-content">
                        <img src={little_banner} />
                    </div>
                </div>
            </div>

              <div className='visitrwanda'><Link to={'/dev/visit_rwanda'}>#VISITRWANDA</Link>
              <div className="visitrwanda-dropdown dropdowns">
                    <div className="visitrwanda-dropdown-content">
                        <div style={{display:'flex', flexDirection:'column'}}>
                            
                            
                                <h5 style={{ }}>VISIT RWANDA</h5>
                        
                            <Link to={"#"} >Men’s Blazers</Link>
                            <Link to={"#"} >Men’s coats & jackets</Link>
                            <Link to={"#"} >Men’s dress shirts</Link>
                            <Link to={"#"} >Men’s hoodies & sweatshirts </Link>
                            <Link to={"#"} >Women’s dresses</Link>
                            <Link to={"#"} >Women’s shirts & blouses</Link>
                            <Link to={"#"} >Women’s playsuit & jumpsuit</Link>
                            {/* <Link to={"#"} ></Link> */}
                        </div>
                    </div>
                  

                    <div className="visitrwanda-dropdown-content">
                        <img src={little_banner} />
                    </div>
                </div>
              </div>
            
            

        </div>
      </div>
    );
  }
}

export default Header2;
