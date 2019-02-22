import React, {Component} from 'react';
import '../../css/pages/dashboard.css';

class SideBar extends Component{
    render(){
        return(
           
              <div className='d-left'>

                    <div className='profile-image'>
                    <img src={require('../../assets/images/admin.png')} />
                    
                    </div>
                    <p>Admin Name</p>

                    <div className='sub-menus'>
                    <button><a href={'/dev/admin/dashboard'}>PRODUCTS</a></button>
                    <button><a href={'/dev/admin/dashboard/flashdeals'}>FLASH DEALS</a></button>
                    <button><a href={'/dev/admin/dashboard/blog'}>BLOG</a></button>
                    <button>FEATURED BLOG</button>

                    <button>BRANDS</button>
                    <button><a href={'/dev/admin/dashboard/trending'}>TRENDING</a></button>
                    
                    </div>
                
                </div>

            
        )
    }
}

export default SideBar;