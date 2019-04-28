import React, {Component} from 'react';
import '../css/pages/notFound.css';

import not from '../assets/images/404.png';

class notFound extends Component{
    render(){
        return(
            <div style={{height:window.innerHeight, background:'white'}} className='notFound'>
            <img src={not} />
                <h1 className="not-text">OOPS!! PAGE NOT AVAILABLE  <br></br>
                <span>Go <a href="dev/company/about2"  style={{fontStyle:'underline', fontWeight:'bold'}}>Here</a></span></h1>
                
            </div>
        )
        }
    }
export default notFound;