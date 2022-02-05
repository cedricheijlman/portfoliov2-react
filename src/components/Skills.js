import React from "react";

function Skills() {
  return (
    <section id="skills">
      <div data-aos="fade-left" class="skills__title">
        <h1>Skills</h1>
      </div>
      <h2>Basic Level</h2>
      <div class="skills__items">
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-php-plain"></i>
          <span>PHP</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-mysql-plain-wordmark"></i>
          <span>MySQL</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-nodejs-plain"></i>
          <span>Node JS</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-express-original"></i>
          <span>Express</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-mongodb-plain-wordmark"></i>
          <span>MongoDB</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-sass-original"></i>
          <span>SASS</span>
        </div>
      </div>
      <h2>Expert Level</h2>

      <div class="skills__items">
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-css3-plain"></i>
          <span>CSS3</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-html5-plain"></i>
          <span>HTML5</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-javascript-plain"></i>
          <span>Javascript</span>
        </div>
        <div data-aos="zoom-in" class="skills_item">
          <i class="devicon-react-original"></i>
          <span>React JS</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
