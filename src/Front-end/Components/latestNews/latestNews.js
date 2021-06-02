import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Card,Accordion} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './latestNews.css'

class latestNews extends Component{
    render(){
         return(
                <section className="latest-news">
                    <div className="container">
                        <Row>
                            <Col md="6">
                               <div className="sec-title">
                                   <h4>Most Recent <span>News</span></h4>
                                </div>
                                <div className="event-box d-flex">
                                    <div className="event-date text-center">
                                        <p>25 March</p>
                                    </div>
                                    <div className="event-details">
                                        <h6><a href="/event-details">2020 admidion fair going on this week</a></h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-clock-o"></i>5:30pm - 7.00pm</li>
                                            <li className="list-inline-item"><i className="fa fa-map-marker"></i>Newyork,NY.</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet consectetur. Como Ssee hou</p>
                                    </div>
                                </div>

                                <div className="event-box d-flex">
                                    <div className="event-date text-center">
                                        <p>25 March</p>
                                    </div>
                                    <div className="event-details">
                                        <h6><a href="/event-details">2020 admidion fair going on this week</a></h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-clock-o"></i>5:30pm - 7.00pm</li>
                                            <li className="list-inline-item"><i className="fa fa-map-marker"></i>Newyork,NY.</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet consectetur. Como Ssee hou</p>
                                    </div>
                                </div>

                                <div className="event-box d-flex">
                                    <div className="event-date text-center">
                                        <p>25 March</p>
                                    </div>
                                    <div className="event-details">
                                        <h6><a href="/event-details">2020 admidion fair going on this week</a></h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-clock-o"></i>5:30pm - 7.00pm</li>
                                            <li className="list-inline-item"><i className="fa fa-map-marker"></i>Newyork,NY.</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet consectetur. Como Ssee hou</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md="6">
                                <div className="sec-title">
                                   <h4>Frequently <span>Asked Questions</span></h4>
                                </div>
                                <Accordion defaultActiveKey="0" className="faq-box">
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>I don't know What should I write here?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon.
                                            Enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>I don't know What should I write here?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>I don't know What should I write here?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>I don't know What should I write here?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>Anim pariatur cliche reprehenderit, enim eiusm high life accusamus terry richardson ad squid. 3 wolf moon.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                </section>
         )
    }
}
export default latestNews;