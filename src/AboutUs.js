import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="mainabout_style my-5 ">
        <div className="text-center">
          <h1 className="display-4">About Us</h1>
          <hr className="w-25 mx-auto " />
        </div>
        <div className="container my-5">
          <div className="row bg-light ">
            <div className="col-sm-12 col-md-6 col-lg-6  col-xl-6">
              <figure className="d-flex justify-content-around about_img">
                <img
                  className="img-fluid "
                  src="https://cdn.pixabay.com/photo/2015/10/08/10/39/river-977476_960_720.jpg"
                  alt="river1"
                />
              </figure>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6  col-xl-6 d-flex justify-content-center align-items-start flex-column">
              <h1>My Journey</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                quibusdam, porro odit libero itaque tempora dignissimos eveniet
                alias beatae corrupti quae veniam perferendis? Voluptate quas
                repellat itaque praesentium placeat quod beatae provident?
                Ratione voluptatem accusamus veniam libero, a, assumenda vero
                ullam, adipisci rerum nihil mollitia. Culpa voluptates eligendi
                laudantium praesentium.
              </p>
              <button className="btn btn-outline-info" type="button">
                Explore..
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
