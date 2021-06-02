import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './pictureGallery.css'

class pictureGallery extends Component{
    render(){
         return(
           <section className="picture-gallery">
               <div className="container">
                   <Row>
                       <Col md="12">
                            <div class="sec-title text-center">
                                <h4>We Have Best Services for the followin universities. <br/> Let's explore them </h4>
                            </div>
                       </Col>
                       <Col md="3" lg="2">
                           <div class="tour-box">
                               <div>
                                   <img src="images/tour-1.jpg" alt=""/>
                               </div>
                            </div>
                            <div class="tour-box">
                                <div>
                                    <img src="images/tour-2.jpg" alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6">
                            <Row>
                                <Col md="6" lg="6">
                                    <div class="tour-box">
                                      <div>
                                        <img src="images/tour-3.jpg" alt=""/>
                                      </div>
                                    </div>
                                </Col>
                                <Col md="6" lg="6">
                                    <div class="tour-box">
                                        <div>
                                            <img src="images/tour-4.jpg" alt=""/>
                                        </div>
                                    </div>
                                </Col>
                                <Col class="col-lg-12">
                                    <div class="tour-box">
                                        <div>
                                            <img src="images/tour-wt1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="2" md="3">
                            <div class="tour-box">
                                <div>
                                    <img src="images/tour-ht.jpg" alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="12">
                            <Row>
                                <Col lg="12" md="6">
                                    <div class="tour-box">
                                        <div>
                                            <img src="images/tour-wt2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" lg="6">
                                    <div class="tour-box">
                                        <div>
                                            <img src="images/tour-5.jpg" alt=""/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" lg="6">
                                    <div class="tour-box">
                                        <div>
                                            <img src="images/tour-6.jpg" alt=""/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
               </div>
           </section>
         )
        }
    }
export default pictureGallery;