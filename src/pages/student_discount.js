import React, {Component} from 'react';
import '../css/pages/student_discout.css';

import Header from '../components/header';
import Footer from '../components/footer';


class student_discount extends Component{
    render(){
        return(
            <div className="student_discout-wrapper" style={{background:'white'}}>
            <Header />
                <div className='student_discout'>
                    <div className="student_discout-inner-div">
                        <h5><b>STUDENTS</b></h5>
                        <h5><b>WANT TO GET 10% OFF?</b></h5>

                        <br></br>
                        <br></br>
                        

                        <h5><b>REDEEM YOUR UNIQUE DISCOUNT CODE <br></br>FROM STUDENTBEANS OR UNIDAYS</b></h5>

                        <button title="GET YOUR STUDENT BEANS CODE" className="btn-stdnt btn-stdnt-a">GET YOUR STUDENT BEANS CODE</button> 
                        <button title=" GET YOUR UNIDAYS CODE" className="btn-stdnt">GET YOUR UNIDAYS CODE</button>

                        <p className="p1">NUS codes are no longer accepted online but are valid in store. See terms and conditions for exclusions</p>
                        <p className="p2"><a className="stdnt-link" href="">Terms and Conditions</a> &nbsp; &nbsp; | &nbsp; &nbsp; <a className="stdnt-link" href="">Privacy Policy</a></p>
                    </div>
               
                </div>
            <Footer />
            </div>
            
        )
        }
    }
export default student_discount;