import React, { Component } from 'react';
import '../css/flash_deals.css';
import nextArrow from '../assets/images/r2-arrow.png';
import prevArrow from '../assets/images/l2-arrow.png';
//import '../assets/js/animations.js';





class FlashDeals extends Component {

  componentDidMount () {
    
  }

    constructor(props){
      super(props)
      this.state = {
       count: 0,
       flasDealsSlideEnd: false,
       

        
      }
    }

    changeCount =(x)=>{
      if (11 - this.state.count === 5){
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
      <div className="FlashDeals">
      
        <button className="btn btn-next-prev btn btn-next-prev-left" onClick={()=>this.changeCount(-1)}>
        <img className="img-next-prev" src={prevArrow}/>
        </button>
      
      

      {/* looping and displaying flashdeals */}
      {
        
        this.props.objectDispay.map((item, index)=> 
          {if((index >= this.state.count && index < this.state.count+5) && 11 - this.state.count > 3){
            return(
            <div className={'flash-deals-item'}>
            <div className="flasdeals-img-div">
              <img className="flashdeals-img" src={item.img}/>
            </div>
            <div className="flashdeals-text">
              <p>{item.brand}</p>
              <p>Red Leather Bag</p>
              <p>$120</p>
            </div>
        </div>
            )
          }
          
        }
         
        )
      }
       {/* <p>Index is  {this.state.count}</p> */}

       
        <button className="btn btn-next-prev" onClick={()=>this.changeCount(1)}>
          <img className="img-next-prev" src={nextArrow}/>
        </button>
      </div>
    );
  }
}

export default FlashDeals;
