import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section Start */}
      <section className="banner_section">
        <div className="container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <div className="banner-content">
                    <h1>Suresh Ojha</h1>
                    <h3>Right Handed Batsman</h3>
                    <p>
                      Right-handed batsmen have a natural advantage because most
                      fielders are on the leg side, which is easier to hit for a
                      right-handed batsman.Right-handed batsmen are more common
                      in the world of cricket.
                    </p>
                    <a href="" className="btn main-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      <section style={{ height: "800px" }}></section>
    </>
  );
};

export default Home;
