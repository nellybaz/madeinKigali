import React, { Component } from 'react';
import '../css/search.css';
import Header from '../components/header';
import Footer from '../components/footer';
import prd1 from '../assets/images/product1.jpeg';
import prd9 from '../assets/images/product9.jpg';
// import prd3 from '../assets/images/product3.jpeg';
// import prd4 from '../assets/images/product4.jpeg';

class SearchSidebar extends Component {

    constructor(props){
      super(props)

      this.state={

        sidebar_class: ''

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
                     sidebar_class: 'sidebar-fixed'
                 })
                 
                 }

        else{
            this.setState({
                sidebar_class: ''
            })
            
        }
                }
            
  
  render() {

   

   
    
    return (
       
      <div className={`SearchSidebar ${this.state.sidebar_class}`} >
        <div className="sidebar-item">
            <button className="btn btn-sidebar-search"><p><b>Product Type</b> </p><span>+</span></button>          
        </div>

        <div className="sidebar-item">
            <button className="btn btn-sidebar-search"><p><b>Size</b> </p><span>+</span></button>          
        </div>
        <div className="sidebar-item">
            <button className="btn btn-sidebar-search"><p><b>Price</b></p> <span>+</span></button>          
        </div>
        <div className="sidebar-item">
            <button className="btn btn-sidebar-search"><p><b>Brand</b></p> <span>+</span></button>          
        </div>
        <div className="sidebar-item">
            <button className="btn btn-sidebar-search"><p><b>Fabric</b> </p><span>+</span></button>          
        </div>
        <div className="sidebar-item">
            <button className="btn btn-sidebar-search"><p><b>Size</b> </p><span>+</span></button>          
        </div>
      
      </div>
    );
  }
}

export default SearchSidebar;
