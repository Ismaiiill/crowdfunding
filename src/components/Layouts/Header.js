import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <nav
      className="navbar"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/">
        <div className="nexus-logo">NEXUS</div>
      </Link>

      <ul className="nav-items">
        <li>WHO WE ARE</li>
        <li>WHAT WE DO</li>
        <li>ECOSYSTEM</li>
        <li>DEVELOPERS</li>
      </ul>
      <ul className="nav-icons ">
        {/* <div className="icons"> */}
        <li class="icon-iteams">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </li>

        <li class="icon-iteams">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="icon" />
          </a>
        </li>

        <li class="icon-iteams">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="icon" />
          </a>
        </li>
      </ul>

      {hover && (
        <div className="dropdown-container">
          <div className="dropdown-column">
            <ul>
              <li>
                <Link to="/about" className="dropdowntext">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/blog" className="dropdowntext">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/media" className="dropdowntext">
                  MEDIA
                </Link>
              </li>
              <li>
                <Link to="/career" className="dropdowntext">
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-column">
            <ul>
              <li>
                <Link to="/zkVM" className="dropdowntext">
                  zkVM
                </Link>
              </li>
              <li>
                <Link to="/network" className="dropdowntext">
                  NETWORK
                </Link>
              </li>
              <li>
                <Link to="/research" className="dropdowntext">
                  RESEARCH
                </Link>
              </li>
            </ul>
          </div>{" "}
          
          <div className="dropdown-column">
            <ul>
              <li>
                <Link to="/partner" className="dropdowntext">
                  PARTNERSHIPS
                </Link>
              </li>
              <li>
                <Link to="/community" className="dropdowntext">
                  COMMUNITY
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-column">
            <ul>
              <li>
                <Link to="/docs" className="dropdowntext">
                  DOCS
                </Link>
              </li>
              <li className="dropdowntext">GITHUB</li>
              <li className="dropdowntext">WHITEPAPER</li>
              <li className="dropdowntext">SPECIFICATION</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
