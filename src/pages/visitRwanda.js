import React, {Component} from 'react';
import  Header  from "../components/header";
import  Footer  from "../components/footer";
import '../css/pages/visitRwanda.css';

import {Link} from 'react-router-dom';


//images
import vr1 from '../assets/images/GIFTGUIDE_DESKTOP_2V1.jpg';
import vr2 from '../assets/images/vr2.gif';
import vr3 from '../assets/images/vr3.gif';
import img_title from '../assets/images/visit_rwanda_title.png';


import right_arrow from '../assets/images/next_black.png';

import left_arrow from '../assets/images/back_black.png';


class visitRwanda extends Component{
    constructor(props){
        super(props)
        this.state={
            scroll_no: 0,
        }
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
                        <Link to="/blog/post/2/title">Shop by story</Link>
                    </div>
                    </div>
                    
                </div>
            )
            
        }

        return slideShow;
    }

    
    render(){
        return(
        <div className='visitRwanda' style={{background:'white'}}>
            <Header />

            {/* <h4 className="big-title">#VisitRwanda</h4> */}

            <div className='img-title-div'>
                <img src={img_title} />
            </div>
            <div className="visitRwana-wrapper">
                
                <div className='imageMap'>
                    <img className='visitRwana-wrapper-img' src={vr1}  useMap="#image-link-map"/>

                    <map name="image-link-map">
                        <Linkrea shape="rect" coords="1,2,280,400" title="STATEMENT COATS" alt="statement coats" to="/search/jeans" />
                        

                    </map>
                    
                </div>

                <div className="btn-div">
                    <Link style={{textAlign:'center'}} className="shop-all" to={'/search/jeans'}><button className='btn-vr' >SHOP ALL GIFTS</button></Link>
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

               

            </div>
            

            <Footer />
        </div>
        );
    }
}


export default visitRwanda;



