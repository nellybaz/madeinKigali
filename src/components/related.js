import React, { Component } from 'react';
import '../css/related.css';
import bh8 from '../assets/images/bh8.jpg';
import Divider from '../components/divider';


class Related extends Component {

    constructor(props){
      super(props)

      this.state={

      }

    }
   
  
  render() {

    

   
    
    return (
      <div className="Related">
      <Divider name="RELATED POST" class="full_width"/>


        <div className="related-post-div">
            <div className="related-item">
                <img src={bh8}/>
                <p>BLOG TITLE</p>

            </div>
            <div className="related-item">
                <img src={bh8}/>
                <p>BLOG TITLE</p>

            </div>
            <div className="related-item">
                <img src={bh8}/>
                <p>BLOG TITLE</p>

            </div>
            <div className="related-item">
                <img src={bh8}/>
                <p>BLOG TITLE</p>

            </div>

             <div className="related-item">
                <img src={bh8}/>
                <p>BLOG TITLE</p>

            </div>
    

        </div>
          
      
      </div>
    );
  }
}

export default Related;
