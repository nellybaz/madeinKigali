import React, { Component } from 'react';
import '../css/header.css';
import logo from '../assets/images/logo.png';
import heart from '../assets/images/heart2.png';
import bag from '../assets/images/shopping-bag.png';
import search from '../assets/images/search.png';
import profile from '../assets/images/profile.png';
import menu_grid_sub_img from '../assets/images/banner1.jpg';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">

      <div className="topmost-bar">
          <p>Register now to get <span className="top-bar-white-text">10% off*</span> your first order with code <span className="top-bar-white-text"><b>NEWCUSTOMER10</b></span></p>
      </div>
      <div className="Header-one">
        <div className="sigin-wishlist header-items">
            <a href="#" className="sigin"><b>SIGN IN</b></a>
            <a href="#"><b>WISHLIST</b></a>
            <a><img className="wishlist-icon" src={heart} /></a>

        </div>

        <div className=" header-items logo-item">
            <Link to={'/'}><img src={logo} className="logo"/></Link>
        </div>

        <div className=" header-items right-icons">
            <a><img src={search}></img></a>
            <a><img src={profile}></img></a>
            <a><img src={bag}></img></a>
        </div>
        </div>

        <div className="navigation">
            <div className="new-in"><a href="#" >NEW IN </a>
                <div className="drop-down-content-new-in">
                    {/* <div>
                        <h4 className="newin-title mega-menu-title">NEW IN</h4>
                    </div> */}
                    {/* <p>hi</p> */}

                    <div className="mega-menu-sub-grid-new-in">
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

                        {/* <div className="mega-menu-sub-grid-content grid-item">
                        <a href="#">hello</a>
                        <a href="#">hello</a>
                        <a href="#">hello</a>
                        <a href="#">hello</a>
                                               
                        
                        </div> */}

                        <div className="mega-menu-sub-grid-img-div grid-item">
                            <img className="mega-menu-sub-grid-img" src={menu_grid_sub_img} />
                        </div>
                       
                    </div>
                    
                    
                </div>
            </div>
            <div><a href="#">SHOP</a></div>
            <div><a href="#">WHOLESALE </a></div>
            <div className="brands"><a href="#">BRANDS </a>
            <div className="drop-down-content-brands">
                    {/* <div>
                        <h4 className="newin-title mega-menu-title">SHOP BY CATEGORY</h4>
                    </div> */}
                    {/* <p>hi</p> */}

                    <div className="mega-menu-sub-grid-brands">
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
            <div className="sale"><a href="#">SALE </a>
            <div className="drop-down-content-sale">
                    {/* <div>
                        <h4 className="newin-title mega-menu-title">SHOP BY CATEGORY</h4>
                    </div> */}
                    {/* <p>hi</p> */}

                    <div className="mega-menu-sub-grid-sale">
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
            <div><a href="#">STYLE </a></div>
            
            

        </div>
      </div>
    );
  }
}

export default Header;
