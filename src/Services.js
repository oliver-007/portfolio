import React from "react";

const Services = () => {
  return (
    <React.Fragment>
      <div className="mb-5 pb-5 ">
        <div className="text-center">
          <h1 className="display-4">Services</h1>
          <hr className="w-25 mx-auto " />
        </div>
        <div className="container-fluid services_style">
          <div className="row  mt-5">
            <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png"
                      alt="coding man"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        Front End Development
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta quos eum consequuntur, hic neque explicabo
                        doloremque odit iure, nisi excepturi vero facere
                        blanditiis? Reprehenderit nobis alias dignissimos
                        aspernatur dicta ratione!
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png"
                      alt="coding man"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        Back End Development
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Molestias hic necessitatibus qui error porro
                        nesciunt laborum eaque adipisci. Nam vero ab blanditiis
                        assumenda debitis consectetur error tenetur excepturi
                        qui sunt.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png"
                      alt="coding man"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        <span className="text-success">
                          <strong>MERN</strong>
                        </span>{" "}
                        <span>Stack</span> Development
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore veniam dolores in odit optio harum,
                        blanditiis nobis, necessitatibus expedita obcaecati
                        temporibus vero, tenetur voluptatum incidunt? Officiis
                        sit ipsum quae nemo.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-outline-info">
              More...
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
