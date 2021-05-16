import React from "react";

const Gallery = () => {
  return (
    <React.Fragment>
      <div className="pb-5 ">
        <div className="text-center">
          <h1 className="display-4">Gallery</h1>
          <hr className="w-25 mx-auto " />
        </div>
        <div className="container">
          <div className="row my-5 gy-3 ">
            <div className="col-sm-12 col-md-4 mx-auto">
              <figure>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/298246/pexels-photo-298246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="flower"
                />
              </figure>
            </div>
            <div className="col-sm-12 col-md-4 mx-auto">
              <figure>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="penguine"
                />
              </figure>
            </div>
            <div className="col-sm-12 col-md-4 mx-auto">
              <figure>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="sea"
                />
              </figure>
            </div>
            <div className="col-sm-12 col-md-4 mx-auto">
              <figure>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="rain"
                />
              </figure>
            </div>
            <div className="col-sm-12 col-md-4 mx-auto">
              <figure>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/6159993/pexels-photo-6159993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="fisherman"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
