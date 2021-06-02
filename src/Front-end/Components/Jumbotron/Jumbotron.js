import React from 'react';
import { Row, Col, Card, Jumbotron as Jumbo} from 'react-bootstrap';
import "./Jumbotron.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

 const Jumbotron = () => (
      <Jumbo fluid className="jumboClass">
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows= {false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
              <div><img   className="jumboImg }" src="./Images/NUST.png"/></div>
              <div><img  className="jumboImg }" src="./Images/PU.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/PUCAD.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/UMT.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/PU.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/PUCAD.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/UMT.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/NUST.png"/></div>
              <div><img  className="jumboImg }" src="./Images/PU.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/PUCAD.jpg"/></div>
              <div><img  className="jumboImg }" src="./Images/UMT.jpg"/></div>
           </Carousel>  
      </Jumbo>
 );
export default Jumbotron;