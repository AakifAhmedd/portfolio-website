import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState('home');

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setIsOpen(false);
  }

  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo">Logo</div>
          <div className={isOpen ? "menu-links open" : "menu-links"}>
            <ul>
              <li>
                <a href="#" onClick={() => handlePageChange('home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handlePageChange('about')}>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="burger" onClick={toggleNav}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
      {page === 'home' ? (
        <Home />
      ) : page === 'about' ? (
        <About />
      ) : null}
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="subpage subpage1">
        <h2>Subpage 1</h2>
        <p>This is the content of subpage 1.</p>
      </div>
      <div className="subpage subpage2">
        <h2>Subpage 2</h2>
        <p>This is the content of subpage 2.</p>
      </div>
      <div className="subpage subpage3">
        <h2>Subpage 3</h2>
        <p>This is the content of subpage 3.</p>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="content">
      <h1>About Page</h1>
      <p>Learn more about me and my work.</p>
    </div>
  );
}

export default App;
