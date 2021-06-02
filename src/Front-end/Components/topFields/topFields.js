import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Tab, Tabs } from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './topFields.css'

class topFields extends Component{
    render(){
         return(
            <div className="fields-section">
                <div className="tab-wrapper">
                    <div className='container' >
                        <div className="row">
                        <div className="col-sm-12">

                          <Tabs defaultActiveKey="profile">
                            <Tab eventKey="home" title="Computer Science">
                                <div className="tab-item-wrapper">
                                  <Row className="filter-items">
                                      <Col lg="4" md="6">
                                            <div class="field-item">
                                                <a href="/themes/edulyn-v1.0/field-details">
                                                    <div class="field-image">
                                                        <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                    </div>
                                                </a>
                                                <div class="field-content">
                                                    <h6 class="heading">
                                                        <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                    </h6>
                                                    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                    <div class="field-face d-flex justify-content-between">
                                                        <div class="duration">
                                                            <p><i class="fa fa-clock-o"></i>120</p>
                                                        </div>
                                                        <div class="rating">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="list-inline-item">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                        <div class="student">
                                                            <p><i class="fa fa-bullhorn"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </Col>
                                      <Col lg="4" md="6">
                                            <div class="field-item">
                                                <a href="/themes/edulyn-v1.0/field-details">
                                                    <div class="field-image">
                                                        <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                    </div>
                                                </a>
                                                <div class="field-content">
                                                    <h6 class="heading">
                                                        <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                    </h6>
                                                    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                    <div class="field-face d-flex justify-content-between">
                                                        <div class="duration">
                                                            <p><i class="fa fa-clock-o"></i>120</p>
                                                        </div>
                                                        <div class="rating">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="list-inline-item">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                        <div class="student">
                                                            <p><i class="fa fa-bullhorn"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </Col>
                                      <Col lg="4" md="6">
                                            <div class="field-item">
                                                <a href="/themes/edulyn-v1.0/field-details">
                                                    <div class="field-image">
                                                        <img src="/images/pu.jpg" className="img-fluid" alt=""/>
                                                    </div>
                                                </a>
                                                <div class="field-content">
                                                    <h6 class="heading">
                                                        <a href="/themes/edulyn-v1.0/field-details">Punjab University</a>
                                                    </h6>
                                                    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                    <div class="field-face d-flex justify-content-between">
                                                        <div class="duration">
                                                            <p><i class="fa fa-clock-o"></i>120</p>
                                                        </div>
                                                        <div class="rating">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="list-inline-item">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                        <div class="student">
                                                            <p><i class="fa fa-bullhorn"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </Col>
                                      <Col lg="4" md="6">
                                            <div class="field-item">
                                                <a href="/themes/edulyn-v1.0/field-details">
                                                    <div class="field-image">
                                                        <img src="/images/umt.jpg" className="img-fluid" alt=""/>
                                                    </div>
                                                </a>
                                                <div class="field-content">
                                                    <h6 class="heading">
                                                        <a href="/themes/edulyn-v1.0/field-details">University of Management Sciences
                                                        </a>
                                                    </h6>
                                                    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                    <div class="field-face d-flex justify-content-between">
                                                        <div class="duration">
                                                            <p><i class="fa fa-clock-o"></i>120</p>
                                                        </div>
                                                        <div class="rating">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="list-inline-item">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                        <div class="student">
                                                            <p><i class="fa fa-bullhorn"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </Col>
                                      <Col lg="4" md="6">
                                            <div class="field-item">
                                                <a href="/themes/edulyn-v1.0/field-details">
                                                    <div class="field-image">
                                                        <img src="/images/nust.png" className="img-fluid" alt=""/>
                                                    </div>
                                                </a>
                                                <div class="field-content">
                                                    <h6 class="heading">
                                                        <a href="/themes/edulyn-v1.0/field-details">National University of Science & Technology</a>
                                                    </h6>
                                                    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                    <div class="field-face d-flex justify-content-between">
                                                        <div class="duration">
                                                            <p><i class="fa fa-clock-o"></i>120</p>
                                                        </div>
                                                        <div class="rating">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="list-inline-item">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                        <div class="student">
                                                            <p><i class="fa fa-bullhorn"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </Col>
                                      <Col lg="4" md="6">
                                            <div class="field-item">
                                                <a href="/themes/edulyn-v1.0/field-details">
                                                    <div class="field-image">
                                                        <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                    </div>
                                                </a>
                                                <div class="field-content">
                                                    <h6 class="heading">
                                                        <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                    </h6>
                                                    <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                    <div class="field-face d-flex justify-content-between">
                                                        <div class="duration">
                                                            <p><i class="fa fa-clock-o"></i>120</p>
                                                        </div>
                                                        <div class="rating">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="list-inline-item">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                        <div class="student">
                                                            <p><i class="fa fa-bullhorn"></i>60</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </Col>
                                  </Row>
                                </div>
                            </Tab>

                            <Tab eventKey="profile" title="Software Engineering">
                                <div className="tab-item-wrapper">
                                    <Row className="filter-items">
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/pu.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Punjab University</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/umt.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">University of Management Sciences
                                                            </a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/nust.png" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">National University of Science & Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>

                            <Tab eventKey="contact" title="Information Technology">
                                <div className="tab-item-wrapper">
                                    <Row className="filter-items">
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/pu.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Punjab University</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/umt.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">University of Management Sciences
                                                            </a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/nust.png" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">National University of Science & Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                        <Col lg="4" md="6">
                                                <div class="field-item">
                                                    <a href="/themes/edulyn-v1.0/field-details">
                                                        <div class="field-image">
                                                            <img src="/images/comsats.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </a>
                                                    <div class="field-content">
                                                        <h6 class="heading">
                                                            <a href="/themes/edulyn-v1.0/field-details">Comsats Institute of Technology</a>
                                                        </h6>
                                                        <p class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.</p>
                                                        <div class="field-face d-flex justify-content-between">
                                                            <div class="duration">
                                                                <p><i class="fa fa-clock-o"></i>120</p>
                                                            </div>
                                                            <div class="rating">
                                                                <ul class="list-unstyled list-inline">
                                                                    <li class="list-inline-item">
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </li>
                                                                    <li class="list-inline-item">(4.5)</li>
                                                                </ul>
                                                            </div>
                                                            <div class="student">
                                                                <p><i class="fa fa-bullhorn"></i>60</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                          </Tabs>
                          
                          <Row>
                              <Col md="12">
                                 <button className="btn btn-view-more">View All Courses</button>
                              </Col>
                          </Row>

                        </div>
                       </div>
                    </div>
                </div>
            </div>
            
        );
    }   
}

export default topFields;