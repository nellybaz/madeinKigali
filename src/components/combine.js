import React, { Component } from 'react';
import '../css/combinewith.css';

// images

import c1 from '../assets/images/combine1.jpeg'; 
import c2 from '../assets/images/combine2.jpeg'; 
import c3 from '../assets/images/combine3.jpeg'; 
import c4 from '../assets/images/combine4.jpeg'; 



class CombineWith extends Component {

    combineWithDisplay =()=>{
        const Holder = [];
        for (let x = 0; x < 8; x++) {
            Holder.push(
                <div className='inner'>
                    <img src={c1} />
                    <p><span>$23.99</span><br></br>Product name</p>
                </div>
            );
            
        }
        return Holder;
    }
  render() {
    return (
      <div className="CombineWith">
        <h5>Combine it with...</h5>
        <div className="combine-with-outer-div"> 

            {this.combineWithDisplay()}
        
        </div>


       
           
      </div>
    );
  }
}

export default CombineWith;
