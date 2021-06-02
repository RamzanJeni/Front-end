import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col,Nav,Tab,Tabs} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './reviewCarousel.css'

class reviewCarousel extends Component{
    render(){
         return(
            <div className="multiSlider" style={{ backgroundImage: "url(/images/slider-bg.jpg)"}}>
                <p>Test WOrks</p>
            </div>
         );
        }   
    }
    
    export default reviewCarousel;