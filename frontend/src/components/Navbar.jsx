import React from "react";

const Navbar = () => {
  return (
    <>
      <header id="full_nav">
        <div className="header fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img
                  id="logo"
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  alt="Logo"
                  loading="lazy"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-stream navbar-toggler-icon"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Photo Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      News
                    </a>
                  </li>
                </ul>
                <div className="header_right">
                  <div className="text-lg-end">
                    <span>Call Us!</span>
                    <a className="phone_no" href="tel:0123456789">
                      0123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
