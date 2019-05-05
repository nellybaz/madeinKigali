import React, { Component } from 'react';
import '../css/pages/new_flashdeals.css';
import { Link } from "react-router-dom";

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
                // <div className='flashdeals2-img-div'>
                <Link className={`flashdeals2-img-div ${firstImgClass}`} to={`/dev/product/${this.props.ObjectToDisplay[i].brand}/${this.props.ObjectToDisplay[i].id}`}>
                    <picture>
                        <source className='flashdeals2-img' srcset={`https://madeinkigali.com/images/products/webp/${this.props.ObjectToDisplay[i].img}.webp`} type="image/webp" />
                        <img className='flashdeals2-img' src={`https://madeinkigali.com/images/products/${this.props.ObjectToDisplay[i].img}.png`} />
                    </picture>
                    {/* <img className='flashdeals2-img' src={`https://madeinkigali.com/images/products/${this.props.ObjectToDisplay[i].img}`} /> */}

                    <p>
                        <strike>
                            {'$150.00'}
                        </strike>
                        <br></br>
                        $120.00
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