import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light sticky-top">
        <nav className="navbar  navbar-expand-lg navbar-light mb-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h3
                style={{
                  margin: "10px 0px 0px 0px",
                  padding: "0px",
                  lineHeight: "0px",
                }}
              >
                Oliver Ahmed
              </h3>
              <br />
              <h6
                className="text-center text-info"
                style={{ margin: "0px", padding: "0px", lineHeight: "0px" }}
              >
                MERN Stack Developer
              </h6>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/services"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="services">
                        Front End
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services">
                        Back End
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services">
                        MERN Stack
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link "
                    aria-current="page"
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active_class"
                    className="nav-link "
                    aria-current="page"
                    to="/contactus"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
