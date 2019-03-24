import React, { Component } from 'react';
import '../css/flash_deals.css';
import nextArrow from '../assets/images/r2-arrow.png';
import prevArrow from '../assets/images/l2-arrow.png';
import {Link} from 'react-router-dom';
//import '../assets/js/animations.js';

import { 
  
  isBrowser,
  isMobileOnly,
  isTablet
} from "react-device-detect";
 

class FlashDeals extends Component {
  componentDidMount () {
    if(this.props.isBlog){
        this.setState({
          flash_deals_class: "flash-deals-item-blog",
          flash_deals_outer: "outer-for-blog",

        })
    }
  }
  

    constructor(props){
      super(props)
      this.state = {
       count: 0,
       flash_deals_class: "flash-deals-item",
       flash_deals_outer: "",
       flasDealsSlideEnd: false,
      
      }
    }

    changeCount =(x)=>{
     let limit;
      if(isMobileOnly){
        limit = 6
      }
      else{
        limit = 5
      }
      if ((this.props.objectDispay.length-1) - this.state.count === limit){
        this.setState(
          {flasDealsSlideEnd: true}
        )
      }

      if(x == 1){
        //increase count
        if (this.state.flasDealsSlideEnd === false){
         
          this.setState(
            {count:this.state.count+1}
          )
  
        }
      }
        else{
               //decrease count
        if ( this.state.count > 1){
          this.setState(
            {count:this.state.count-1,
            flasDealsSlideEnd: false,
            }
          )
  
        }
        }

       

      }
     
      
      
      
      
    
  render() {
    
    return (
      <div className={`FlashDeals ${this.state.flash_deals_outer}`}>
        {
          !this.props.isBlog &&
        <button className="btn btn-next-prev btn btn-next-prev-left" onClick={()=>this.changeCount(-1)}>
        <img className="img-next-prev" src={prevArrow}/>
        </button>
        }
      
      

      {/* looping and displaying flashdeals */}
      {

        
        this.props.objectDispay.map((item, index)=> 
          {
            let limit;
            if(isBrowser || isTablet){
              limit = 5;
            }
            if(isMobileOnly || this.props.isBlog){
              limit = 2;
            }
            
            
            if((index >= this.state.count && index < this.state.count+limit) && 6 - this.state.count > 3){
            return(

              // changing class name with states if its for blog display or not
            <div className={`${this.state.flash_deals_class}`} key={item.id}>
            <div className="flashdeals-img-div">
              {/* rendering image if blog */}
              {
                this.props.isBlog && 
                <Link to={`/dev/blog/post/${item.id}/${item.name}`} ><img className="flashdeals-img" src={`https://madeinkigali.com/images/blog/${item.img}`}/></Link>
              }
              {
                !this.props.isBlog && 
              <Link to={`/dev/product/${item.brand}/${item.id}`} ><img className="flashdeals-img" src={`https://madeinkigali.com/images/products/${item.img}`}/></Link>
              }
              </div>
            <div className="flashdeals-text">
              {!this.props.isBlog && <div>

                <p className="f-brands">{item.brand}</p>
              <p className="f-name">{item.name}</p>
              <p className="f-price">${item.price}</p>
              </div>}

              {
                this.props.isBlog && <div>
                  <p className="flashdeals-blog-description">{item.name} <br></br> <span>{item.description}</span> </p>
                  
                </div>
              }
            </div>
        </div>
            )
          }
          
        }
         
        )
      }
       
        {
          !this.props.isBlog &&
          <button className="btn btn-next-prev" onClick={()=>this.changeCount(1)}>
          <img className="img-next-prev" src={nextArrow}/>
          </button>
          
        }
      </div>
    );
  }
}

export default FlashDeals;
