import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/pages/dashboard.css';

class SideBar extends Component{
    render(){
        return(
           
              <div className='d-left'>

                    <div className='profile-image'>
                    <img src={require('../../assets/images/admin1.png')} />
                    
                    </div>
                    <p>Admin Name</p>

                    <div className='sub-menus'>
                    <button><Link to={'/admin/dashboard'}>PRODUCTS</Link></button>
                    <button><Link to={'/admin/dashboard/flashdeals'}>FLASH DEALS</Link></button>
                    <button><Link to={'/admin/dashboard/blog'}>BLOG</Link></button>
                    <button>FEATURED BLOG</button>

                    <button>BRANDS</button>
                    <button><Link to={'/admin/dashboard/trending'}>TRENDING</Link></button>
                    
                    </div>
                
                </div>

            
        )
    }
}

export default SideBar;