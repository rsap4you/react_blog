import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';



function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">RSAP4YOU</h1>
          <p>Step into the future with RSAP4YOU, where innovation is not just a buzzword but the heartbeat of our existence. Our homepage is a portal to a realm where custom software solutions dance with creativity, and cutting-edge education becomes the catalyst for personal and professional growth. Join us in sculpting a digital masterpiece – RSAP4YOU: Your Gateway to Unleashing Possibilities, Your Home for Innovation and Excellence. </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
              In 2024, emerging technologies such as Quantum Computing and 5G, along with established fields like Artificial Intelligence and Cybersecurity, continue to shape educational courses, providing students with opportunities to explore cutting-edge advancements and contribute to the ever-evolving tech landscape.
              </p>
              <Link to="/courses">
                <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCoursesImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>
    </div>
  );
}

export default Home;
