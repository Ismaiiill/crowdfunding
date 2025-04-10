import React from "react";
import "./docs.css";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Docs = () => {
  return (
    <>
      <header className="nexus-header">
        <div className="header-top">
          <div className="logo">
            <img src="/logo512.png" alt="Nexus Logo" />
            <span>NEXUS</span>
          </div>

          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Nexus Layer 1</a>
            <a href="#">Nexus zkVM</a>
          </nav>

          <div className="search-section">
            <input type="text" placeholder="Search or ask..." />
            <span className="shortcut">Ctrl K</span>
          </div>

          <div className="cta">
            <a href="#">Discord</a>
            <button>Earn NEX Points</button>
          </div>
        </div>

        <div className="hero-section">
          <h1>NEXUS</h1>
          <p>Dive in to learn about Nexus and how you can contribute</p>
        </div>

        <div className="cards">
          <div className="card">
            <h4>Run a node</h4>
            <p>Run a node to earn NEX Points</p>
          </div>
          <div className="card">
            <h4>Deploy an app</h4>
            <p>Deploy an app to the Nexus Layer 1</p>
          </div>
          <div className="card">
            <h4>Run a node</h4>
            <p>Run a node to earn NEX Points</p>
          </div>
          <div className="card">
            <h4>Deploy an app</h4>
            <p>Deploy an app to the Nexus Layer 1</p>
          </div>
        </div>
      </header>
      <footer className="nexus-footer">
        <div className="footer-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
        <p>© 2025 Nexus Laboratories, Inc. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Docs;
