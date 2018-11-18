import React, { Component } from 'react';
import '../css/header.css';
import logo from '../assets/images/logo.png';
import heart from '../assets/images/heart2.png';
import heart_mobile from '../assets/images/heart-mobile.png';
import bag from '../assets/images/shopping-bag.png';
import bag_mobile from '../assets/images/bag-mobile.png';
import search from '../assets/images/search.png';
import search_mobile from '../assets/images/search-mobile.png';
import profile from '../assets/images/profile.png';
import menu_grid_sub_img from '../assets/images/banner1.jpg';
import {Link, Route} from 'react-router-dom';

import mobile_menu from '../assets/images/menu.png';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            mobile_search: 'hide',
            searchclass: 'hide',
            search_query:'jeans',
            nav_class: ''
        }
    }


    async componentDidMount() {
     

               

        setInterval(async () => {

          window.addEventListener('scroll', this.handleScroll());
          
        }, 10);
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
          <p>Register now to get <span className="top-bar-white-text">10% off*</span> your first order with code <span className="top-bar-white-text"><b>NEWCUSTOMER10</b></span></p>
      </div>
      <div className="Header-one">
        <div className="sigin-wishlist header-items">
            <a href="#" className="sigin"><b>SIGN IN</b></a>
            <a href="#" ><b>WISHLIST</b></a>
            <a href ="#" className="wishlist-icon-link"><img className="wishlist-icon" src={heart} /></a>

        </div>

        <div className=" header-items logo-item">
            <Link to={'/dev'}><img src={logo} className="logo"/></Link>
        </div>

        <div className=" header-items right-icons">
            <input className="search-input" onChange={(e)=> this.setState({search_query: e.target.value})} onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                    // Do code here
                   
                    this.searchBoxHandler();
                    ev.preventDefault();
                    }
  }} type="text" placeholder="Search" />
            <a ><img src={search}></img></a>
            <a><img src={profile}></img></a>
            <a><img src={bag}></img></a>

            
        </div>
        </div>


        {/* mobile navigation */}

        <div className={`mobile-nav`}>
            <a style={{fontSize: '0.8rem'}} className="btn btn-open-nav mobile-nav-item"><img src={mobile_menu} alt="mik"/><br></br>MENU</a>
            <Link to={'/dev'} className="mobile-nav-item" ><img className="mobile-logo" src={logo} /></Link>
            
                {/* 
                
                <div className="mobile-nav-item">
                <button className="btn btn-search-mobile">Search</button> */}
                {/* 
            
             </div>*/}

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
            <div className="new-in" ><a href="#" >NEW IN </a>
                <div className="drop-down-content-new-in">
                    

                    <div className="mega-menu-sub-grid-new-in mega-menu-sub-grid">
                        <div className="mega-menu-sub-grid-content grid-item">
                        <h4 className="newin-title mega-menu-title">NEW IN</h4>
                        <a href="#">New Arrivals</a>
                        <a href="#">Latest Trends</a>
                        <a href="#"> &nbsp;</a>
                        <a href="#">New in Designs</a>
                        <a href="#">New in M2M</a>
                        <a href="#">New in Bags</a>
                        <a href="#">New in Accessories</a>
                        <a href="#">New in WholeSale</a>                       
                        
                        </div>

                        

                        <div className="mega-menu-sub-grid-img-div grid-item">
                            <img className="mega-menu-sub-grid-img" src={menu_grid_sub_img} />
                        </div>
                       
                    </div>
                    
                    
                </div>
            </div>
            <div><Link to={'dev/shop'}>SHOP</Link></div>
            <div><a href="#"><Link to={'/dev/wholesale/new/2'}>WHOLESALE</Link> </a></div>
            <div className="brands"><a href="#">BRANDS </a>
            <div className="drop-down-content-brands">

                    <div className="mega-menu-sub-grid-brands mega-menu-sub-grid">
                        <div className="mega-menu-sub-grid-content grid-item">
                        <h4 className="newin-title mega-menu-title">SHOP BY CATEGORY</h4>
                        <a href="#">Brand A-Z</a>
                        <a href="#">Clothing Brands</a>                        
                        <a href="#">Shoe Brands</a>
                        <a href="#">Accessories Brands</a>
                        <a href="#">Beauty Brands</a>
                        
                        </div>

                         <div className="mega-menu-sub-grid-content grid-item">
                         <h4 className="newin-title mega-menu-title">FEATURED BRANDS</h4>
                        <a href="#">Amami</a>
                        <a href="#">MIK Boutique</a>                        
                        <a href="#">Made in Rwanda</a>
                      
                                             
                        
                        </div>

                        <div className="mega-menu-sub-grid-img-div grid-item">
                            <img className="mega-menu-sub-grid-img" src={menu_grid_sub_img} />
                        </div>
                       
                    </div>
                    
                    
                </div>
            </div>
            <div className="sale" ><a href="#">SALE </a>
            <div className="drop-down-content-sale">
                    {/* <div>
                        <h4 className="newin-title mega-menu-title">SHOP BY CATEGORY</h4>
                    </div> */}
                    {/* <p>hi</p> */}

                    <div className="mega-menu-sub-grid-sale mega-menu-sub-grid">
                        <div className="mega-menu-sub-grid-content grid-item">
                        <h4 className="newin-title mega-menu-title">SALES & OFFERS</h4>
                        <a href="#">Shop all Sales</a>
                        <a href="#">Sale Fabrics</a>                        
                        <a href="#">Sale M2M</a>
                        <a href="#">Sale Top/Dresses</a>
                        <a href="#">Sale Shoes/Beauty</a>
                        
                        </div>

                         <div className="mega-menu-sub-grid-content grid-item">
                         <h4 className="newin-title mega-menu-title">SPECIAL OFFERS</h4>
                        <a href="#">2 for £10 Jersey</a>
                        <a href="#">3 for £8 Socks</a>                        
                        <a href="#">Student discounts</a>
                        <a href="#">MIK * 10 Mystery bag</a>
                      
                                             
                        
                        </div>

                        <div className="mega-menu-sub-grid-img-div grid-item">
                            <img className="mega-menu-sub-grid-img" src={menu_grid_sub_img} />
                        </div>
                       
                    </div>
                    
                    
                </div>
            
            </div>
            <div><a href="#"><Link to={'/dev/blog'}>STYLE</Link> </a></div>
            
            

        </div>
      </div>
    );
  }
}

export default Header;
