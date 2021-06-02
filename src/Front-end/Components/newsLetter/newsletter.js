import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './newsletter.css'

class newsletter extends Component{
    render(){
         return(
            <div>
                <section className="newsletter-form-area">
                    <div className="container">
                        <Row>
                            <Col md="12">
                                <div className="newsletter-container">
                                    <div className="newsletter-box">
                                    <div className="sec-title text-center">
                                        <h4>Get The Latest News &amp; Updates On Your Box</h4>
                                    </div>
                                    <form id="form2" className="form">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p className="form-control">
                                                    <input type="text" placeholder="Enter your Name" id="name2"/><span className="input-msg2"></span>
                                                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="form-control">
                                                    <input type="email" placeholder="Enter your Email" id="email2"/><span className="input-msg2"></span>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <button><i className="fa fa-envelope"></i>Subscribe Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>  
            </div>
            
        )
    }
}
export default newsletter;