import React, {Component} from 'react';


class SideBar extends Component{
    render(){
        return(
            <div className='SideBar'>
              <div className='d-left'>

                    <div className='profile-image'>
                    <img src={require('../../assets/images/admin.png')} />
                    
                    </div>
                    <p>Admin Name</p>

                    <div className='sub-menus'>
                    <button><a href={'/dashboard'}>PRODUCTS</a></button>
                    <button><a href={'/dashboard/flashdeals'}>FLASH DEALS</a></button>
                    <button>BLOG</button>
                    <button>FEATURED BLOG</button>

                    <button>BRANDS</button>
                    <button>TRENDING</button>
                    
                    </div>
                
                </div>

            </div>
        )
    }
}

export default SideBar;