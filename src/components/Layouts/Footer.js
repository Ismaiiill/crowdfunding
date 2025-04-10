import React from "react";
import "./Footercss.css";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <img src="/logo.png" alt="" />
          <span>SWASTIK FUNDER</span>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandTelegram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p>© 2025 Swastikk AI tech, Inc.</p>
      </div>

      <div className="footer-right">
        <div className="footer-section">
          <h3>WHO WE ARE</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>WHAT WE DO</h3>
          <ul>
            <li>
              <a href="#">zkVM</a>
            </li>
            <li>
              <a href="#">Network</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>ECOSYSTEM</h3>
          <ul>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>DEVELOPERS</h3>
          <ul>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Specification</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
