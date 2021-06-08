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
                                        <p>06 June</p>
                                    </div>
                                    <div className="event-details">
                                        <h6><a href="https://www.eduvision.edu.pk/admissions/information-technology-university-lahore-admissions-bachelor-level-1348766915">Information Technology University, Lahore, ITU admission</a></h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-clock-o"></i>5:30pm - 7.00pm</li>
                                            <li className="list-inline-item"><i className="fa fa-map-marker"></i>Lahore, Pakistan.</li>
                                        </ul>
                                        <p>Management Sciences, Engineering, CS & IT, Social Sciencesu</p>
                                    </div>
                                </div>

                                <div className="event-box d-flex">
                                    <div className="event-date text-center">
                                        <p>06 June</p>
                                    </div>
                                    <div className="event-details">
                                        <h6><a href="https://www.eduvision.edu.pk/admissions/pakistan-institute-of-management-lahore-admissions-pg-diploma-cert-level-1365525584">Pakistan Institute Of Management, Lahore, PIM admission</a></h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-clock-o"></i>24 / 7</li>
                                            <li className="list-inline-item"><i className="fa fa-map-marker"></i>Lahore, Pakistan.</li>
                                        </ul>
                                        <p>Management Sciences</p>
                                    </div>
                                </div>

                                <div className="event-box d-flex">
                                    <div className="event-date text-center">
                                        <p>09 June</p>
                                    </div>
                                    <div className="event-details numl-uni">
                                        <h6><a href="https://www.eduvision.edu.pk/admissions/national-university-of-modern-languages-lahore-campus--lahore-admissions-diploma-cert-after-matric-level-3217">National University Of Modern Languages, Lahore</a></h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-clock-o"></i>8:30am - 7.00pm</li>
                                            <li className="list-inline-item"><i className="fa fa-map-marker"></i>Lahore, Pakistan.</li>
                                        </ul>
                                        <p>Computer Sciences & Information Technology, Languages, Art & Design, Management Sciences, Media Studies</p>
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
                                                <p>Why is Computer Science important?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Computer Science is a rapidly growing field that develops essential knowledge and skills for today’s world. Between 2008 and 2018 there will be 2.4 million job openings for STEM (Science, Technology, Engineering, and Math) workers and by 2018, 51% of all STEM jobs will be dominated by computer occupations. STEM majors make substantially more over their lifetimes than non-STEM majors, by about $300,000 ($2.1 million versus $2.4 million). Computer Science also cultivates computational thinking, problem solving skills and creative thinking; foundational learning for all occupations.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>What does it mean to have equity in Computer Science?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Women and students of color are underrepresented in Computer Science. In 2010, although there were about 14% Latinas/os in the U.S. only 5.6% were in the Science and Engineering Fields (this includes Computer Science). While African Americans were almost 12% of the population they were 4.6% of the Science and Engineering workforce. Further, in 2010, women constituted only 28% of workers in these occupations, even though they accounted for nearly half of the college-educated workforce. Additionally, only 18% of Computer Science majors in college are women (Sax, 2015). To achieve equity in Computer Science we need greater numbers of women and underrepresented students, such as Latinas/os and African-Americans, in Computer Science. The diversity in the U.S. population should be reflected in Computer Science.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>How do you know students are successful in Computer Science?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>Several of the classes offered have assessments, rubrics, and other tools to measure student success in the Computer Science courses.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className="faq-item">
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <button className="accordion-button">
                                                <div className="accordion-icon">
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                                <p>What kind of a student succeeds as a Computer Science major?</p>
                                            </button>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>Most successful Computer Science students have demonstrated the ability to be flexible and adaptable (i.e. they MORPH well). Specifically, the MORPH traits include (i) Mature: Clarity of thought (long-term focused career vision). (ii) Organized: Able to manage time and balance personal work habits. (iii) Responsible: Ability to take lead and handle responsibility. (iv) Persistence: Ability to be tenacious and deliberative in problem solving. (v) Helpful: Team-oriented, societal-issues consciousness and supportive of diverse needs and reach of the discipline.</Card.Body>
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