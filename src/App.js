import './App.css';
import Topbar from './Front-end/Components/Topbar/Topbar';
import Header from './Front-end/Components/Header/Header';
import ReactCarousel from './Front-end/Components/Carousel/Carousel.js'
import Navbar from './Front-end/Components/Navbar/Navbar'
import Home from './Front-end/Components/HomePage/Home'
// import Reviews from './Front-end/Components/reviewCarousel/reviewCarousel'
import Jumbotron from './Front-end/Components/Jumbotron/Jumbotron';
import TopNews from './Front-end/Components/latestNews/latestNews';
import PictureGallery from './Front-end/Components/pictureGallery/pictureGallery'
import Newsletter from './Front-end/Components/newsLetter/newsletter';
import Footer from './Front-end/Components/Footer/Footer';
import AboutUs from './Front-end/Components/AboutUs/AboutUs'
import Comparison from './Front-end/Components/Comparison/Comparison'
import Admissions from './Front-end/Components/Admissions/admissions'
import contactUs from './Front-end/Components/ContactUs/contactUs'
import FAQs from './Front-end/Components/FAQs/FAQs'
import Scholarships from './Front-end/Components/Scholarships/scholarships'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router> 
      <div className="App">
      <Topbar></Topbar> 
      <Header></Header>
      <div className="mainSection">
          <ReactCarousel></ReactCarousel> 
          <Navbar />
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/Comparison" component={Comparison} />
      <Route path="/Admissions" component={Admissions} />
      <Route path="/contactUs" component={contactUs} />
      <Route path="/FAQs" component={FAQs} />
      <Route path="/Scholarships" component={Scholarships} />
      <Jumbotron></Jumbotron>
      <TopNews></TopNews>
      <PictureGallery></PictureGallery>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  </Router>
  );
}

export default App;
