import React, { Component } from 'react';
import '../css/search.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/search_sidebar';
import {Link} from 'react-router-dom';


import prd1 from '../assets/images/product1.jpeg';
import prd9 from '../assets/images/product9.jpg';
// import prd3 from '../assets/images/product3.jpeg';
// import prd4 from '../assets/images/product4.jpeg';

class Search extends Component {

    constructor(props){
      super(props)

      this.state={

      }

    }
 

searchDisplay =()=>{
    let searchDisplayHolder = [];
    let img = '';
    for (let x = 0; x < 15; x++) {
        if(x%2 == 0){
            img = prd9;
        }
        else{
            img = prd1;
        }
        searchDisplayHolder.push(
            <div className="search-prd-item-div" key={x}>
                <Link to={'/dev/product/jean/2'} ><img src={img} alt="mik" /> </Link>
                <p><b>Check Velvet Wide Leg Trousers </b><br></br><span>$112.99</span></p>

            </div>
        )
        
    }

    return searchDisplayHolder;
}


   
   
  
  render() {

   

   
    
    return (
       
      <div className="Search">
       <Header />

        <div className="search-inner-main">
        <div className="search-bar-top"></div>


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
      </div>
    );
  }
}

export default Search;
