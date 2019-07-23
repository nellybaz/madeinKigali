import React, { Component } from 'react';
import '../css/pages/new_flashdeals.css';
import { Link } from "react-router-dom";
import Img from "react-image";
import svgPlaceholder from "../assets/images/new_placeholder.svg";

class Flashdeals2 extends Component {
    constructor(props) {
        super(props)
    }

    displayHolderFunction = () => {
        const holder = [];

        let firstImgClass = "";
        for (let i = 0; i < this.props.ObjectToDisplay.length; i++) {

            if (i == 0) {
                firstImgClass = "firstImage";
            } else firstImgClass = "";
            holder.push(
                
                <Link className={`flashdeals2-img-div ${firstImgClass}`} to={`product/${this.props.ObjectToDisplay[i].brand}/${this.props.ObjectToDisplay[i].id}`}>                    <Img className='flashdeals2-img' 
                        src={[
                            `https://madeinkigali.com/images/products/webp/${this.props.ObjectToDisplay[i].img}.webp`,
                            `https://madeinkigali.com/images/products/${this.props.ObjectToDisplay[i].img}.png`
                        ]}
                        loader={
                            <img className='flashdeals2-img'  src={svgPlaceholder}  alt=""/>
                        }
                    />
                    <p>                       
                        $120.00
                        <br></br>
                        <strike>
                            {'$150.00'}
                        </strike>
                        
                    </p>
                </Link>

            )
        }
        return holder;
    }

    componentDidMount() {

    }
    render() {
        return (
            <div className='Flashdeals2'>
                {this.displayHolderFunction()}
            </div>
        )
    }
}

export default Flashdeals2;