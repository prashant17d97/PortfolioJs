import React from 'react';
import './App.css';
import Header from './component/Header.js';
import AboutMe from './component/aboutme/AboutMe.js';
import ContactForm from './component/ContactForm.js';
import Footer from './component/Footer.js';
import ScrollToTop from './component/ScrollToTop.js';
import WorkAndSkills from './component/WrokAndSkills.js';
import AboutUser from './component/AboutUser.js';

function App() {
  return (
    <div>
      <Header />
      <AboutUser/>
      <AboutMe />
      <WorkAndSkills/>
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
