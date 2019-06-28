import React, { Component } from 'react';
import Header from '../components/header';
import '../css/info.css';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import Delivery from '../components/delivery';
import Returns from '../components/returns';



class Info extends Component {

    constructor(props){
        super(props)

        this.state={
            category: this.props.match.params.infocategory,
            contentToShowClassDelivery:"", 
            contentToShowClassReturns: "",
            delivery_active: "",
            return_active: ''
            
        }

    }

    componentDidMount(){
        let cat  = this.state.category
        if (cat === "delivery"){
            this.setState({
                contentToShowClassDelivery:'',
                contentToShowClassReturns:'hide',
                delivery_active: "active3",
                return_active: '',
            })
        }
        else if(cat === "returns"){
            this.setState({
                contentToShowClassReturns:'',
                contentToShowClassDelivery:'hide',
                return_active: 'active3',
                delivery_active: '',
            })
        }
       
       
    }
  

   
  render() {
    return (
      <div className="Info" style={{background:'white'}}>
        <Header/>

        <div className="info-outer">
        <div className="info-titles">
          

            <div className={``}>
                <h1><Link to={'#'}>Points of Sale</Link></h1>
            </div>

             <div className={`${this.state.delivery_active}`}>
                <h1><Link to={'/info/delivery'}>Delivery</Link></h1>
            </div>

             <div className={`${this.state.return_active}`}>
                <h1><Link to={'/info/returns'} >Returns</Link></h1>
            </div>
        </div>

        <div className={`content ${this.state.contentToShowClassDelivery}`}>
            <Delivery/> 
           
        </div> 

        <div className={`content ${this.state.contentToShowClassReturns}`}>
            <Returns/> 
           
        </div> 
          
    
        </div>

        <div style={{marginTop:'50px'}}>

            <Footer />
        </div>
        
     
      </div>
    );
    
  }
}

export default withRouter(Info);
