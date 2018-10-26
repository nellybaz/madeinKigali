import React, { Component } from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import '../css/product.css';

class Product extends Component {

    // constructor(props){
    //     super(props)

       
    // }
  render() {

    return (
        <div className="Product">
            <p>Product Number is {this.props.match.params.number}</p>
            <p>Brand is: {this.props.match.params.slug}</p>
            <Link to={'/'} >Me</Link>
          
            
        </div>
       
    );
  }
}

export default withRouter( Product);
