import React from "react";
import "../../styles/Introduction.css";  // ✅ correct
import "../../styles/About.css";         // ✅ correct

import introImg from "../assets/tempLogo.png";
import missionImg from "../assets/mission.png";
import workImg from "../assets/work.jpg";
import volunteerImg from "../assets/volunteer.jpg";
import sdg1 from "../assets/sdg1.png";
import sdg2 from "../assets/sdg2.png";
import sdg3 from "../assets/sdg3.png";



export default function Introduction() {
  return (
    <div className="introduction">

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Clean Foundation</h1>
          <p>Empowering communities through sustainable development and social change.</p>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <div className="content">
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              Clean Foundation is a community-driven NGO focused on environmental sustainability,
              education, gender equality, and social welfare. We work at the grassroots level
              to bring positive and measurable change to underprivileged communities.
            </p>
            <p>
              Since our inception in 2021, we have collaborated with schools, self-help groups,
              local authorities, and government institutions to promote education, clean water, waste
              management, and gender empowerment initiatives.
            </p>
          </div>
          <div className="image">
            <img src={introImg} alt="About Clean Foundation" />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission">
        <div className="content">
          <div className="image">
            <img src={missionImg} alt="Our Mission" />
          </div>
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to transform society by empowering communities through education,
              health, and sustainable living practices. We aim to instill awareness among youth,
              women, and rural populations to take action towards a cleaner, greener future.
            </p>
            <ul>
              <li>Spread awareness on health, hygiene, and environment.</li>
              <li>Promote gender equality and women-led initiatives.</li>
              <li>Build community capacity through workshops and training.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="content-grid">
          <div className="card">
            <img src={workImg} alt="Workshop" />
            <h3>Community Workshops</h3>
            <p>We conduct awareness sessions on plastic ban, menstrual hygiene, and proper sanitation practices in schools and local communities.</p>
          </div>
          <div className="card">
            <img src={workImg} alt="Training" />
            <h3>Skill Training</h3>
            <p>Providing self-help groups and rural women access to skill-building programs to foster financial independence.</p>
          </div>
          <div className="card">
            <img src={workImg} alt="Campaign" />
            <h3>Environmental Campaigns</h3>
            <p>Tree plantation drives, cleanliness campaigns, and door-to-door outreach for sustainable lifestyle practices.</p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer">
        <div className="content">
          <div className="text">
            <h2>Voices of Volunteers</h2>
            <p>
              Our volunteers are the backbone of our success. With passion and dedication, they
              support every mission and drive every initiative. Hear what our volunteers say:
            </p>
            <blockquote>
              “Joining Clean Foundation changed my life. I got the opportunity to educate young
              girls in my village and help them dream big.”
              <br /> <span>- Aarti, Volunteer</span>
            </blockquote>
            <blockquote>
              “We worked on a plastic-free market campaign and saw real results. I’m proud to
              be a changemaker.”
              <br /> <span>- Rohit, Field Worker</span>
            </blockquote>
          </div>
          <div className="image">
            <img src={volunteerImg} alt="Volunteer" />
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>100+</h3>
            <p>Community Workshops</p>
          </div>
          <div className="stat">
            <h3>5000+</h3>
            <p>People Reached</p>
          </div>
          <div className="stat">
            <h3>120+</h3>
            <p>Women Empowered</p>
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="sdgs">
        <h2>Supporting UN SDG Goals</h2>
        <div className="sdg-grid">
          <div className="sdg-item">
            <img src={sdg1} alt="SDG 3" />
            <p>Good Health and Well-being</p>
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
          <h2>Download Our Booklet</h2>
          <p>Get detailed information about our initiatives and achievements. Read how Clean Foundation is making an impact in society.</p>
          <a className="download-btn" href="#" download>
            📘 Download PDF
          </a>
        </div>
      </section>

    </div>
  );
}
