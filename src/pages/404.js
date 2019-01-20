import React, {Component} from 'react';
import '../css/pages/notFound.css';

import not from '../assets/images/404.png';

class notFound extends Component{
    render(){
        return(
            <div style={{height:window.innerHeight, background:'white'}} className='notFound'>
            <img src={not} />
                <h1 className="not-text">PAGE NOT FOUND  <br></br>
                <span>Go to <a href="/dev" >store front</a></span></h1>
                
            </div>
        )
        }
    }
export default notFound;