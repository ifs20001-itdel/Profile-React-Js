import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import Experience from './Experience';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Project from './Project';
import Contact from './Contact';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);


const konten = ReactDOM.createRoot(document.getElementById('konten'));
konten.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);

const experience = ReactDOM.createRoot(document.getElementById('experience'));
experience.render(
  <React.StrictMode>
    <Experience />
  </React.StrictMode>
);

const project = ReactDOM.createRoot(document.getElementById('project'));
project.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);

const contact = ReactDOM.createRoot(document.getElementById('contact'));
contact.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
