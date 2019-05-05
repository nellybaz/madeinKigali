import React, { Component } from 'react';
import '../css/pages/visitrwanda2.css';
import '../css/pages/visitRwanda.css';
import Header from '../components/header';
import Footer from '../components/footer';

import { Link } from 'react-router-dom';
import vr2 from '../assets/images/vr2.gif';
import vr3 from '../assets/images/vr3.gif';
import right_arrow from '../assets/images/next_black.png';
import left_arrow from '../assets/images/back_black.png';
import img_title from '../assets/images/visit_rwanda_title.png';

class VisitRwanda2 extends Component {

    constructor(props){
        super(props)
        this.state={
            scroll_no: 0,
        }
    }


    diplayImageGifs=()=>{
        const holder = [];
        let img = "";
        for (let x = 1; x <= 13; x++) {
            // img  = require(`../assets/images/vr${x}.gif`);

            if(x == 11){
                img  = require(`../assets/images/vr${8}.gif`);
            }

            else if(x == 13){
                img  = require(`../assets/images/vr${12}.gif`);
            }
            else{
                img  = require(`../assets/images/vr${x}.gif`);
            }
            holder.push(
                <Link className={`img-div img${x}`} to={`/dev/search/jeans/category/${x}`}>
                    <div>
                        <img  src={img} alt="mik" />
                        <p>STATEMENT COATS</p>
                        <p>The gift she'll be showing off</p>
                    </div>
                </Link>
            );
            
        }
        return holder;
    }
    handleScroll =(x)=>{
       if(x === 1)
        {   
           if(this.state.scroll_no > -2000){
                this.setState({
                    scroll_no: this.state.scroll_no - 300,
                });
           }
        
        }
       else
        {
            if(this.state.scroll_no < 0){
                this.setState({
                    scroll_no: this.state.scroll_no + 300,
                });
            }
        }
        

        
    }

    displaySlideShow =()=>{
        const slideShow = [];
        let imgg = vr2;
        let idd= "";

        for (let x = 0; x < 10; x++) {
            if(x % 2 == 0){
                imgg = vr3
            }
                       
            else{
                imgg = vr2
            }
            slideShow.push(
                <div id={idd} key={x}>
                    <div className="slide-content-img-div">
                        <img src={imgg} />
                        <div className="slide-content-other-div">
                    
                        <button>FASHION</button>

                        <Link to="#">Boutique</Link>
                        <Link to="/dev/blog/post/2/title">Shop by story</Link>
                    </div>
                    </div>
                    
                </div>
            )
            
        }

        return slideShow;
    }


    render() {
        return (
            <div className='VisitRwanda2'>
                <Header />

                <div className='img-title-div'>
                <img src={img_title} />
            </div>

                <div className='vr-wrapper'>

                    {this.diplayImageGifs()}



                </div>


                <div className="btn-div">
                    <Link style={{ textAlign: 'center' }} className="shop-all" to={'/dev/search/jeans/category/1'}><button className='btn-vr' >SHOP ALL GIFTS</button></Link>
                </div>
                <br></br>


                 <div className="slideshow-wrapper">
                    <div className='slideshow-wrapper-div'>
                        <button onClick={()=>this.handleScroll(0)} className="slide-previous"><img style={{width:24}} src={left_arrow}/></button>
                    </div>
 
                    <div className="slideshow-content-wrapper">
                    <span id="target-tool"></span>
                       <div className="slideshow-content" style={{left: this.state.scroll_no}}>
                            

                          {this.displaySlideShow()}

                           
                       </div>
                    </div>

                     <div>
                         
                        <button onClick={()=>this.handleScroll(1)} className="slide-next" ><img style={{width:24}} src={right_arrow}/></button>
                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}
export default VisitRwanda2;