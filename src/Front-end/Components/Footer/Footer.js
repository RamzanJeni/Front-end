import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

class footer extends Component{
    render(){
         return(
           <footer className="footer1">
               <div className="container">
                   <div className="row">
                       <div className="col-md-4">
                           <div className="footer-logo-info">
                               <img src="images/logo-f.png" alt="" className="img-fluid"/>
                               <p>We are providing our best services for the Students. Those who are looking forwar to achieve thier career goals. Welcome! You are on the best site.</p>
                               <ul className="list-unstyled">
                                   <li>
                                       <i className="fa fa-map-marker"></i>Punjab University College of Information Technology, Lahore
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>student.counselling@gmail.com
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>(042 12345678)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="f-links">
                                <h5>Useful Links</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Home Page</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Comparison Page</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Scholarships Page</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Admission Page</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>About Us</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-angle-right"></i>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="f-post">
                                <h5>Recent Post</h5>
                                <div className="post-box d-flex">
                                    <div className="post-img">
                                        <img src="images/blog-2.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <a href="#">PUCIT Admission 2020</a><span>June 15, 2020</span>
                                    </div>
                                </div>
                                <div className="post-box d-flex">
                                    <div className="post-img">
                                        <img src="images/blog-3.jpg" alt=""/>
                                    </div>
                                        <div className="post-content">
                                            <a href="/themes/edulyn-v1.0/blog-details">NUST Admission Creteria</a><span>Mar 30, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <section class="copyright-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="copy-text">
                                        <p>Copyright © 2021 | Designed With <i class="fa fa-heart"></i> by <a href="#" target="_blank" rel="noopener noreferrer">Muhammad Ramzan</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="text-right col-md-6 d-flex justify-content-end align-items-center">
                                    <ul class="social list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#"><i class="fa fa-youtube"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#"><i class="fa fa-dribbble"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
           </footer>
        )
    }
}
export default footer;