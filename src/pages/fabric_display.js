import React, { Component } from 'react';
import '../css/search.css';
import '../css/pages/fabric_display.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/search_sidebar';
import {Link} from 'react-router-dom';
import trending_icon from '../assets/images/trending_search_display.png';

import prd1 from '../assets/images/fabric1.jpg';
import prd9 from '../assets/images/fabric2.jpg';
import ads from '../assets/images/search_ads.jpg';


class Fabric_Display extends Component {

    constructor(props){
      super(props)

      this.state={

      }

    }
 

searchDisplay =()=>{
    let searchDisplayHolder = [];
    let img = '';
    let ads_class = '';
    let trending_details = '';
    for (let x = 0; x < 15; x++) {
        if(x%2 === 0 && x != 4){
            img = prd9;

            trending_details =  <div className="color-change-image">
                                    <div></div>
                                    <div></div>
                                </div>;
        }

        else if(x === 4){
            img = ads;
            ads_class = 'ads_class';
            trending_details ="";
        }
        else{
            img = prd1;
            ads_class = '';
            trending_details = <div className="search-trending-product-div">
                Trending Product
                <img src={trending_icon} />
            </div>;

        }

        searchDisplayHolder.push(
            <div className="search-prd-item-div search-prd-item-div-fabric" key={x}>
                <Link to={'/fabric_single'} ><img className={ads_class} src={img} alt="mik" /> </Link>
               {
                   x != 4 &&
                   <p><b>Check Velvet Wide Leg Trousers </b><br></br><span>$112.99</span></p>
               }

               {
                    trending_details                 
               }

            </div>
        )
        
    }

    return searchDisplayHolder;
}


   
   
  
  render() {
    return (
       
      <div className="Fabric_Display" style={{background:'white'}}>
       <Header />

        <div className="search-inner-main">
        <div className="search-bar-top"></div>
        <div className="search-top-nav">
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
            <div>
                ncjkdnvkjbd
            </div>
        </div>


        <div className="search-content">
            <div className="search-sidebar">
                <Sidebar />
            </div>
            <div className="search-display-div-outer">
                <div className="search-display-middel-nav"></div>

                <div className="search-display-div">
                    {this.searchDisplay()}
                </div>
            
            </div>
            
            
            
        </div>
      
          
        </div>

        <Footer />
        <div id="end"></div>
      </div>
    );
  }
}

export default Fabric_Display;
