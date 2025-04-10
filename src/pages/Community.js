import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import "./community.css";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    name: "Twitter",
    icon: "/icons/x.svg", // Replace with the correct path
    url: "https://twitter.com",
  },
  {
    name: "Discord",
    icon: "/icons/discord.svg",
    url: "https://discord.com",
  },
  {
    name: "Telegram",
    icon: "/icons/telegram.svg",
    url: "https://telegram.org",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    url: "https://linkedin.com",
  },
];

const Community = () => {
  return (
    <Layout>
      <div>
        {/* 1st */}
        <div className="community-banner">
          <div className="community-title">Community</div>
        </div>
        {/* 2nd */}
        <div className="network-container">
          <div className="community-header">
            <h3 className="community-titles">nexus ambassadors</h3>
            <div className="community-underline"></div>
          </div>
          <div className="ambassador-section">
            <div className="ambassador-content">
              <div className="left">
                <h1 className="ambassador-title">Nexus Ambassador Program</h1>
                <p className="ambassador-description">
                  The Nexus Ambassador Program is a community initiative to help
                  scale Nexus products and further our global mission to enable
                  the Verifiable Internet, an Internet that is secure,
                  accessible and trustworthy.
                </p>
                <button className="apply-button">
                  Apply now <span className="arrow">↗</span>
                </button>

                <p className="ambassador-note">
                  There are two tracks for Nexus Ambassadors - Builders and
                  Catalysts.
                </p>

                <div className="tracks">
                  <div className="track">
                    <h2>Builder</h2>
                    <p>
                      The <strong>Builder</strong> track is for technical
                      community members who want to explore and experiment with
                      the Nexus zkVM and prover network. You will create
                      proof-of-concepts, technical content, tutorials and more
                      to help developers understand the power of the Verifiable
                      Internet. You’ll support the growth of zero knowledge
                      cryptography and help establish industry standards by
                      sharing your technical expertise and best practices.
                    </p>
                  </div>
                  <div className="track">
                    <h2>Catalyst</h2>
                    <p>
                      The <strong>Catalyst</strong> track is for non-technical
                      people who thrive in engaging and nurturing communities.
                      You’ll use your skills to drive discussions, create
                      educational content, and build awareness of Nexus products
                      and developments. You’ll contribute to building the future
                      of the Internet by growing and energizing the global
                      community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="right">
                <img
                  src="/images/cube-grid.png"
                  alt="Cube illustration"
                  className="cube-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3nd */}
        <div className="community-container">
          <div className="community-header">
            <h3 className="community-titles">connect with nexus</h3>
            <div className="community-underline"></div>
          </div>
          <div className="social-grid">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <span className="social-name">{link.name}</span>
                <div className="icon-box">
                  <img src={link.icon} alt={`${link.name} icon`} />
                  <span className="external-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
