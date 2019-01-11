import React, { Component } from 'react';
import '../css/combinewith.css';

// images

import c1 from '../assets/images/product9.jpg'; 
import c2 from '../assets/images/combine2.jpeg'; 
import c3 from '../assets/images/combine3.jpeg'; 
import c4 from '../assets/images/combine4.jpeg'; 



class CombineWith extends Component {

    combineWithDisplay =(size)=>{
        const Holder = [];
        let img = c1;
        
        for (let x = 0; x < size; x++) {
            if(size === 5){
                img = require('../assets/images/mik5.jpeg');
            }
            else{
                img = c1;
            }
            Holder.push(
                <div className='inner'>
                    <img src={img} />
                    <p><span>$23.99</span><br></br>Product name</p>
                </div>
            );
            
        }
        return Holder;
    }
  render() {
    return (
      <div className="CombineWith">
       <h5 style={{fontSize:'1rem'}}>Combine it with...</h5>
       
        <div className="combine-with-outer-div1"> 
       

            {this.combineWithDisplay(4)}
        
        </div>
        <h5 style={{fontSize:'1rem'}}>Hey! You might also like</h5>
        <div className='combine-with-outer-div2'>           
            {this.combineWithDisplay(5)}
        </div>
        
        


       
           
      </div>
    );
  }
}

export default CombineWith;
