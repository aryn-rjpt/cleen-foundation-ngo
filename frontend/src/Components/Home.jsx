import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";


import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const Home = () => {
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-slider-section">
        <div className="hero-slider">
          <Slider {...heroSliderSettings}>
            {[hero1, hero2, hero3, hero4].map((img, i) => (
              <div className="hero-slide" key={i}>
                <img src={img} alt={`Hero Slide ${i + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="hero-caption-section">
        <div className="hero-caption">
          <h1>Your Impact Matters</h1>
          <p>Empowering Lives Through Education and Action</p>
          <div className="hero-buttons">
            <NavLink className="btn-primary" to="/donation">
              +Donate Now
            </NavLink>
            <NavLink className="btn-secondary" to="/apply">
              Volunteer
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
