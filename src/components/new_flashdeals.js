import React, {Component} from 'react';
import '../css/pages/new_flashdeals.css';
import {Link} from "react-router-dom";

class Flashdeals2 extends Component{
    constructor(props){
        super(props)
    }

    displayHolderFunction=()=>{
        const holder = [];

        for(let i= 0; i < this.props.ObjectToDisplay.length; i++){
                holder.push(
                    // <div className='flashdeals2-img-div'>
                    <Link className='flashdeals2-img-div' to={`/dev/product/${this.props.ObjectToDisplay[i].brand}/${this.props.ObjectToDisplay[i].id}`}>
                    <img className='flashdeals2-img' src ={`https://madeinkigali.com/images/products/${this.props.ObjectToDisplay[i].img}`} />
                    </Link>
             
                )
        }
        return holder;
    }

    componentDidMount(){
            
    }
    render(){
        return(
            <div className='Flashdeals2'>
                {this.displayHolderFunction()}
            </div>
        )
    }
}

export default Flashdeals2;