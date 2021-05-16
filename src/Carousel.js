import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <React.Fragment>
      <header className="mb-5">
        <div className="container-fluid">
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://cipe.org.in/wp-content/uploads/2020/12/Indexcreate_react-1024x576-1.png"
                  className="d-block w-100"
                  alt="mountain1"
                />
                <div className="carousel-caption d-md-block">
                  <h5>React Development</h5>
                  <p>We create fully mobile friendly React Site.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://pixel2pixeldesign.com/wp-content/uploads/2018/09/nodejs-frameworks.png"
                  className="d-block w-100"
                  alt="Node Js"
                />
                <div className="carousel-caption  d-md-block">
                  <h5 className="text-capitalize">Node Js Development</h5>
                  <p>We work for server side development with Node Js.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://binaryinformatics.com/wp-content/uploads/2019/01/MERN-Stack-Development-and-Consulting-Services.jpg"
                  className="d-block w-100"
                  alt="MERN STACK"
                />
                <div className="carousel-caption d-md-block text-warning">
                  <h5>MERN STACK Development</h5>
                  <p className="text-capitalize ">
                    you can hire us as reliable MERN stack developer.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-info">We are waiting for you....</h1>
            <Link
              to="/contactus"
              role="button"
              className="btn btn-outline-primary text-center"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Carousel;
