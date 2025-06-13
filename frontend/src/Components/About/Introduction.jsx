import React from "react";
import "../../styles/Introduction.css";
import "../../styles/About.css";

import introImg from "../../assets/tempLogo.png";
import missionImg from "../../assets/mission.png";
import workImg from "../../assets/work.jpg";
import volunteerImg from "../../assets/volunteer.jpg";
import journeyImg from "../../assets/journey.jpg"; // ✅ Add journey image
import sdg1 from "../../assets/sdg1.png";
import sdg2 from "../../assets/sdg2.png";
import sdg3 from "../../assets/sdg3.png";

export default function Introduction() {
  return (
    <div className="introduction">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Clean Foundation</h1>
          <p>
            Transforming lives through sustainable solutions and community
            empowerment.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <div className="content">
          <div className="image">
            <img src={introImg} alt="About Clean Foundation" />
          </div>
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              Clean Foundation is a community-powered NGO working to promote
              environmental sustainability, social equity, and educational
              access. We partner with grassroots organizations to deliver
              real-world solutions to today’s most urgent challenges.
            </p>
            <p>
              Established in 2021, we’ve reached thousands across rural India,
              promoting green living, clean water access, and empowering women
              through skill-building programs and awareness campaigns.
            </p>
          </div>
        </div>
      </section>

      

      {/* Our Mission */}
      <section className="mission">
        <div className="content">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to build a sustainable future by educating,
              empowering, and enabling communities to become self-reliant and
              eco-conscious. We focus on long-term impact, fostering change
              from within.
            </p>
            <ul>
              <li>Championing health, hygiene & waste reduction initiatives</li>
              <li>Empowering women through inclusive leadership programs</li>
              <li>
                Partnering with institutions to drive grassroots transformation
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={missionImg} alt="Our Mission" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <h2>Our Work in Action</h2>
        <div className="content-grid">
          <div className="card">
            <img src={workImg} alt="Workshop" />
            <h3>Awareness Workshops</h3>
            <p>
              Conducting interactive sessions in schools and local communities
              on plastic bans, menstrual hygiene, and digital literacy.
            </p>
          </div>
          <div className="card">
            <img src={workImg} alt="Training" />
            <h3>Skill Development</h3>
            <p>
              Providing hands-on vocational training and startup support to
              underrepresented groups.
            </p>
          </div>
          <div className="card">
            <img src={workImg} alt="Campaign" />
            <h3>Cleanliness Drives</h3>
            <p>
              Leading sustainable practices campaigns: tree plantations,
              zero-waste drives, and door-to-door outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer">
        <div className="content">
          <div className="image">
            <img src={volunteerImg} alt="Volunteer" />
          </div>
          <div className="text">
            <h2>Voices of Change</h2>
            <p>
              We believe in the power of people. Here’s what our changemakers
              have to say:
            </p>
            <blockquote>
              “Volunteering here gave me a purpose. I now mentor girls from my
              village and help them stay in school.” <br />
              <span>- Ankita, Mentor</span>
            </blockquote>
            <blockquote>
              “Together we transformed a neighborhood through our cleanliness
              campaign. It felt like real change.” <br />
              <span>- Shivam, Volunteer Leader</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="impact">
        <h2>By the Numbers</h2>
        <div className="stats">
          <div className="stat">
            <h3>150+</h3>
            <p>Community Programs Conducted</p>
          </div>
          <div className="stat">
            <h3>8000+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Women Entrepreneurs Empowered</p>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="sdgs">
        <h2>Supporting the Global Goals</h2>
        <div className="sdg-grid">
          <div className="sdg-item">
            <img src={sdg1} alt="SDG 3" />
            <p>Good Health & Well-being</p>
          </div>
          <div className="sdg-item">
            <img src={sdg2} alt="SDG 5" />
            <p>Gender Equality</p>
          </div>
          <div className="sdg-item">
            <img src={sdg3} alt="SDG 13" />
            <p>Climate Action</p>
          </div>
        </div>
      </section>

      {/* Final Section – Booklet */}
      <section className="booklet">
        <div className="content">
          <h2>Explore Our Journey</h2>
          <p>
            Dive into our detailed report showcasing how Clean Foundation is
            shaping a sustainable and inclusive tomorrow.
          </p>
          <a className="download-btn" href="#" download>
            📘 Download Our Booklet
          </a>
        </div>
      </section>
    </div>
  );
}
