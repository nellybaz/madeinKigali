import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/signin.css';

import {withRouter, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import request from 'superagent';

class Signin extends Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: '',
            is_a_user: false,
            is_logged_in: false,
        }
    }

    componentDidMount(){
        const cookies = new Cookies();
        if(cookies.get('email') != undefined)
        {
            this.setState({
                is_logged_in: true,
            });
        }
    }

    handleChangeState =(ex, x)=>{
       if(x === 1)
       {
        this.setState({
            email: ex.target.value,
        });
       }

       else
       {
        this.setState({
            password: ex.target.value,
        });
       }
    }


    async login() {
        const email_address = this.state.email;
        const pword = this.state.password;
        try {


            let currentComponent = this;

        request
          .post('https://madeinkigali.com/API/api2/signin/index.php')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ token: "mik9876543210", tag:'login', email:email_address, password:pword})
          .end(function(err, res){
         
          if(res != null){
            if(res.body.res === 1)
            {
                const cookies = new Cookies();
                cookies.set('email', currentComponent.state.email, {path:'/', expires: new Date(Date.now()+86400)});
                
                //unset userID and 
                currentComponent.setState({
                    is_a_user:true,
                });
                
            }

            else if(res.body.res === 0)
            {
                console.log('not registered');
                
            }
             
          }
          else{
            console.log(res, err);
            
          }
        
          });
        
        
        } catch(e) {
          console.log(e);
        }
  }

  disableCookies =()=>{
    const cookies = new Cookies();
    if(cookies.get('email') != undefined){
        cookies.remove('email', {path:'/'});
        
    }

    

    window.location.href="/dev/signin";

}

    render(){
        if(this.state.is_a_user)
        {
            return <Redirect to='/dev' />
        }

        if(this.state.is_logged_in)
        {
            return(
                <div>
                    <p onClick={()=>this.disableCookies()}>LOGOUT</p>
                </div>
            );
        }

        return(
            <div className="Signin" style={{background:'white'}}>
            <Header />
                <h4>SIGN IN</h4>
                <section className="signin-wrapper">
                    <div className="login">
                        <h5><b>Returning Customers</b></h5>
                        
                        <div className="login-form">
                            <label>Email*<br></br>
                                <input onChange={(ex)=>this.handleChangeState(ex, 1)}  className="login-email" type="email" /> 
                            </label>
                            <br></br>
                            <br></br> 

                            <label>Password*<br></br>
                            <input onChange={(ex)=>this.handleChangeState(ex, 0)} className="login-password" type="password" />
                            </label>
                            <br></br><br></br>
                            <label  className="container">
                                <input type="checkbox" /> &nbsp; Remember me
                                <span className="checkmark"></span>
                            </label>
                          
                            <br></br><br></br>

                            <button onClick={()=> this.login()} className="btn-login">SIGN IN</button><br></br>
                            <a href="#"> Forgot your password?</a>
                        </div>
                    </div>

                    <div className="login">
                        <h5><b>New Customers</b></h5>

                        <div className="login-form">
                            <label>Email address:</label><br></br>
                            <input   className="login-email" type="email" /> <br></br>
                            <br></br> 

                            <label>Password:</label><br></br>
                            <input   className="login-password" type="password" />
                            <br></br><br></br>

                            <label>Confirm Password:</label><br></br>
                            <input   className="login-password" type="password" />
                            <br></br><br></br>

                            <p className="terms-text">By ticking the below box, you're subscribing to our emails and confirming you are 16 or over. We'll contact you with updates, trend news and special offers. If you change your mind, you can simply click 'unsubscribe' at the bottom of our emails. We'll handle your information in line with our privacy policy.</p>
                            <br></br>
                            <label  className="container">
                                <input type="checkbox" /> &nbsp; Remember me
                                <span  className="checkmark"></span>
                            </label>

                             <label  className="container">
                                <input type="checkbox" /> &nbsp; Sign me up for emails
                                <span  className="checkmark"></span>
                            </label>
                          
                            <br></br><br></br>

                            <button className="btn-login">REGISTER</button><br></br>
                            
                        </div>
                    </div>
                </section>

            <Footer />
            </div>
        );
    }
}

export default withRouter(Signin);