import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';


const CarouselContainer = () => {
  return (
    <Carousel className="mainCarousel" fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
        className="d-block w-100"
        src='./images/comsats.jpg'
        alt="First slide"
        />
        <Carousel.Caption>
            <p>Welcome to Student Counseling System</p>
            <h3>Best University in Pakistan</h3>
            <button class="btn btn-join">Join Us</button>
            <button class="btn btn-contact">Contact US</button>
        </Carousel.Caption>
        <div className="outerWrappper"></div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='./images/nust.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Welcome to Student Counseling System</p>
          <h3>Best University in Pakistan</h3>
          <button class="btn btn-join">Join Us</button>
          <button class="btn btn-contact">Contact US</button>
        </Carousel.Caption>
        <div className="outerWrappper"></div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src='./images/pu.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Welcome to Student Counseling System</p>
          <h3>Best University in Pakistan</h3>
          <button class="btn btn-join">Join Us</button>
          <button class="btn btn-contact">Contact US</button>
        </Carousel.Caption>
        <div className="outerWrappper"></div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;