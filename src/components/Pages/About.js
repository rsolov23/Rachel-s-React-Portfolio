import React from "react";
import profileImage from "../Projects/images/ss34png.png";
function About() {
  return (
    <section className="my-5" id="about">
      <div className="about">
        <img src={profileImage} />
        <div>
          <span className="title">Rachel Solov</span>
        </div>

        <p>
          I am a Full Stack Web Developer. I am currently enjoying the rigorous
          fast-paced Coding Boot Camp at the University of Texas. I am a
          motivated, creative, and dependable individual. I thrive when handling
          multiple tasks on a daily basis competently and I work well under
          pressure. In my free time I enjoy spending time in the outdoors with
          my two dogs, attending concerts, and spending time with my
          grandfather.
        </p>
      </div>
    </section>
  );
}
export default About;
