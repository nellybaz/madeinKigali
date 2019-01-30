import React, {Component} from 'react';
import '../../css/pages/dashboard.css';

import SideBar from './sidebar';

class D_flashdeals extends Component{
    render(){
        return(
            <div className='D_flashdeals'>

                <div className='l-flashdeals'>

                    <SideBar />
                
                </div>


                <div className='r-flashdeals'>
                flashdeals
                </div>

                    
            </div>
        )
    }
}

export default D_flashdeals;