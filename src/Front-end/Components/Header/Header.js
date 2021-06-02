import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './Header.css'

class Header extends Component{
    render(){
         return(
             <div className="header">
                 <div className="container-custom">
                    <Row className="d-flex align-items-center">
                        <Col>
                            <div className="left-column text-left">
                                <a href="#"><img src="images/logo-h.png" width="171px" height="40px"/></a>
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="contact-column">
                                    <div className="head-icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="head-text">
                                        <p>Call Us Now</p>
                                        <h3>(042 12345678)</h3>
                                    </div>
                                </Col>
                                <Col className="contact-column">
                                    <div className="head-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="head-text">
                                        <p>Enquiry Us</p>
                                        <h3>student.counselling@gmail.com</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                 </div>
          </div>
         );
        }   
    }

export default Header;
