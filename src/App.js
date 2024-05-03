import React from 'react';
import './App.css';
import { scrollToUp } from './HelperFunction.js';
import gmail from './resources/gmail.svg';
import call from './resources/call.svg';
import github from './resources/github.svg';
import linkedin from './resources/linkedin.svg';
import prashant from './resources/pks.png';
import cv from './resources/PrashantSinghCV.pdf';
import arrow from './resources/arrow_up.svg';

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about_me">About</a></li>
          <li><a href="#getInTouch">Contact</a></li>
        </ul>
      </nav>

      <ul className="nav-icon">
        <li><a href="mailto:prashantsinghsca@gmail.com"><img src={gmail} alt="Gmail logo" /></a></li>
        <li><a href="tel:+917352579915"><img src={call} alt="Call logo" /></a></li>
        <li><a href="https://github.com/prashant17d97"><img src={github} alt="Github logo" /></a></li>
        <li><a href="https://www.linkedin.com/in/prashant-d97/"><img src={linkedin} alt="Linkedin logo" /></a></li>
      </ul>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="about_me">
      <h1>About Me</h1>
      <p>Dynamic and results-driven Android Developer with extensive experience in designing, developing, and optimizing user-friendly and high-performance applications. Proficient in Agile methodologies, I have a proven track record of enhancing project velocity by 20% and reducing feature delivery time by 15%. Skilled in UI/UX design, I've successfully increased user engagement and satisfaction by 20% through the implementation of Material Design Guidelines and Material 3. Adept at integrating RESTful APIs and managing version control using Git and Bitbucket, I've consistently improved app performance and maintained clean and organized codebases. Quick learner and early adopter of new technologies, with a portfolio showcasing innovative projects developed using Kotlin Multiplatform, Kobweb, and other cutting-edge frameworks.</p>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="getInTouch">
      <h2>Get in touch</h2>
      <form className="form" method="POST" name="contact" action="/success" data-netlify="true">
        <div>
          <input type="text" placeholder="First Name" id="firstName" name="firstName" required />
          <input type="text" placeholder="Last Name" id="lastName" name="lastName" required />
        </div>
        <div>
          <input type="email" placeholder="Email" id="email" name="email" required />
          <input type="tel" placeholder="Phone" id="phone" name="phone" required />
        </div>
        <div>
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ScrollToTop() {
  return (
    <div id="scrollToTop" className="scroll-to-top">
      <a href="#header" onClick={scrollToUp}>
        <img src={arrow} alt="" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&#169; Prashant 2023</p>
    </footer>
  );
}

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <Header />
      <div className="about">
        {isMobile ? (
          <>
            <img className="userImage" src={prashant} alt="" />
            <div className="person_detal">
              <p id="name">Hi, I am<br /> Prashant</p>
              <p id="position">Native Android Developer</p>
              <div>
                <a href={cv} target="_blank" rel="noreferrer">
                  <button id="download_cv" type="button">Download CV</button>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="person_detal">
              <p id="name">Hi, I am<br /> Prashant</p>
              <p id="position">Native Android Developer</p>
              <div>
                <a href={cv} target="_blank" rel="noreferrer">
                  <button id="download_cv" type="button">Download CV</button>
                </a>
              </div>
            </div>
            <img className="userImage" src={prashant} alt="" />
          </>
        )}
      </div>
      <AboutMe />
      {/* Add components for other sections here */}
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
