import React, {Component} from 'react';
class  Loader extends Component{
    render(){
        return(
            <div className='' style={{
                height:'100vh', width:'100vw',
                // border: '1px solid red',
                // margin: '0 auto',
                display:'flex',
                justifyCcontent: 'center',
                alignItems:'center',
                // flexDirection:;
            }}>
                    <img style={{
                        width: '100px',
                        marginLeft: '43vw',
                    }} src={require('../assets/images/blog-spinner.gif')} />
            </div>
        )
    }
}

export default Loader;