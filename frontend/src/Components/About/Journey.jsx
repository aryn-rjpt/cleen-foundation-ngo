import React from "react";
import journeyImg from "../../assets/journey.jpg"; // Replace with actual path

const Journey = () => {
  return (
    <section className="journey">
      <h2>Our Journey So Far</h2>
      <p>
        From humble beginnings to making a real difference — our story is one of passion,
        resilience, and commitment to positive impact.
      </p>

      <div className="content">
        <div className="image">
          <img src={journeyImg} alt="Our journey through the years" />
        </div>

        <div className="text">
          <p>
            In 2019, we started as a small community initiative with a bold vision — to
            empower underserved populations with resources and opportunities. Through
            persistent effort and a growing network of volunteers, we've expanded our reach
            across multiple cities.
          </p>

          <ul>
            <li>Launched 12+ community outreach programs</li>
            <li>Built partnerships with 30+ local organizations</li>
            <li>Impacted over 10,000 lives through education & health drives</li>
            <li>Adopted green practices and digital innovation in 2022</li>
            <li>Recognized by local media and awarded for grassroots impact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Journey;
