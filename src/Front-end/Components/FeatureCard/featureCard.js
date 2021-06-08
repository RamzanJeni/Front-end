import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './featureCard.css'

class featureCard extends Component{
    render(){
         return(
                <section className="icon-box-area">
                    <div className="container">
                        <Row>
                            <Col>
                                <div className="full-icon-box">
                                    <div className="icon-box d-flex">
                                        <div className="box-icon box1"><i className="fa fa-hand-o-right"></i>
                                        </div>
                                        <div className="box-title">
                                            <h6>Popular Universities</h6><p>Popular universities in Lahore, Pakistan</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="full-icon-box">
                                    <div className="icon-box d-flex">
                                        <div className="box-icon box2">
                                            <i className="fa fa-book"></i>
                                        </div>
                                        <div className="box-title">
                                            <h6>Admission Systems</h6><p>We are couselling the admission system of different universities. </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        <Col>
                            <div className="full-icon-box">
                                <div className="icon-box d-flex">
                                    <div className="box-icon box3">
                                        <i className="fa fa-user"></i>
                                        </div>
                                        <div className="box-title">
                                            <h6>Experienced Staff</h6>
                                            <p>We are providing you the experienced staff  </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
        );
    }   
}

export default featureCard;