import React, { Component } from 'react';
import '../css/combinewith.css';

// images

import c1 from '../assets/images/combine1.jpeg'; 
import c2 from '../assets/images/combine2.jpeg'; 
import c3 from '../assets/images/combine3.jpeg'; 
import c4 from '../assets/images/combine4.jpeg'; 




class CombineWith extends Component {
  render() {
    return (
      <div className="CombineWith">
        <h5>Combine it with...</h5>
        <div className="combine-with-outer-div"> 
            <div className="combine-with-item-div">
                <img alt="mik"className="combine-img" src={c1} />
                <p>$230 <br/><span>Product Name</span></p>
            </div>

            <div className="combine-with-item-div">
                <img alt="mik"className="combine-img" src={c2} />
                <p>$230 <br/><span>Product Name</span></p>
            </div>

            <div className="combine-with-item-div">
                <img alt="mik"className="combine-img" src={c3} />
                <p>$230 <br/><span>Product Name</span></p>
            </div>

            <div className="combine-with-item-div">
                <img alt="mik"className="combine-img" src={c4} />
                <p>$230 <br/><span>Product Name</span></p>
            </div>
        </div>


       
           
      </div>
    );
  }
}

export default CombineWith;
