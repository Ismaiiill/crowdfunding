import React from "react";
import Layout from "../components/Layouts/Layout";
import "./about.css";
import { FaHome, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const images = [
  "https://framerusercontent.com/images/JLMvydTzJBtpYoZk0J3jhUNEpuE.jpg?scale-down-to=512",
  "https://framerusercontent.com/images/77bioz1E7yeqECbaHVambVssY.jpg?scale-down-to=1024",
  "https://framerusercontent.com/images/rARE6qbFnMjrFVjARThRHThCF8.jpg?scale-down-to=512",
  "https://framerusercontent.com/images/EEI3f5kB0NSDEEo2xfsSWMJ1R48.jpeg?scale-down-to=1024",
];

const leaders = [
  {
    name: "Daniel Marin",
    title: "Chief Executive",
    details: ["B.S. in CS @ Stanford", "2x IPhO Medallist"],
    icons: [<FaHome />, <FaGithub />, <FaLinkedin />],
  },
  {
    name: "Jens Groth",
    title: "Chief Scientist",
    details: [
      "Inventor of pairing-based zkSNARKs",
      "Prev. Director of Research @ DFINITY",
      "Prev. Professor of Cryptography @ UCL, London",
    ],
    icons: [<FaHome />, <FaGoogle />, <FaLinkedin />],
  },
  {
    name: "Alex Fowler",
    title: "Chief Strategy Officer",
    details: [
      "B.A. @ Brown, M.A. @ George Washington",
      "Prev. Co-Founder & SVP @ Blockstream",
      "Prev. Chief Privacy Officer @ Mozilla",
      "Prev. with Transparent, PwC, Zero-Knowledge Systems, EFF, and AAAS",
    ],
    icons: [<FaLinkedin />],
  },
  {
    name: "John Slater",
    title: "Vice President, Brand",
    details: [
      "Prev. Brand Creative Director @ Meta",
      "Prev. Creative Director @ Twitter",
      "Prev. Director of Creative @ Mozilla",
    ],
    icons: [<FaHome />, <FaLinkedin />],
  },
  {
    name: "Lauren Dresnick",
    title: "Vice President, Global Marketing",
    details: [
      "Prev. Director, Growth Marketing @ Ripple",
      "Prev. Head of US Growth & Customer Marketing @ Arta Finance",
      "Prev. Marketing Advisor & Interim VP of Marketing @ Mina Foundation",
    ],
    icons: [<FaLinkedin />],
  },
  {
    name: "Lisa Haugh",
    title: "Vice President, People",
    details: [
      "Prev. Chief People Officer @ Agility Robotics",
      "Prev. Chief People Officer and General Counsel @ SigFig",
      "Prev. VP of People and General Counsel @ Udemy",
      "BA @ UCLA, JD @ Santa Clara University",
    ],
    icons: [<FaLinkedin />],
  },
  {
    name: "Diego Prats",
    title: "Vice President, Engineering",
    details: ["20+ years in ML, Systems & Web3 @ USC, Google, & OpenAI"],
    icons: [<FaGithub />, <FaLinkedin />],
  },
];

const engineering = [
  {
    name: "Michel Abdalla",
    title: "Member of Technical Staff",
    details: ["B.S. in CS @ Stanford", "2x IPhO Medallist"],
    icons: [<FaHome />, <FaGithub />, <FaLinkedin />],
  },
  {
    name: "Jens Groth",
    title: "Member of Technical Staff",
    details: [
      "Inventor of pairing-based zkSNARKs",
      "Prev. Director of Research @ DFINITY",
      "Prev. Professor of Cryptography @ UCL, London",
    ],
    icons: [<FaHome />, <FaGoogle />, <FaLinkedin />],
  },
  {
    name: "Ben Hoberman",
    title: "Member of Technical Staff",
    details: [
      "B.A. @ Brown, M.A. @ George Washington",
      "Prev. Co-Founder & SVP @ Blockstream",
      "Prev. Chief Privacy Officer @ Mozilla",
      "Prev. with Transparent, PwC, Zero-Knowledge Systems, EFF, and AAAS",
    ],
    icons: [<FaLinkedin />],
  },
  {
    name: "Alec Huang",
    title: "Member of Technical Staff",
    details: [
      "Prev. Brand Creative Director @ Meta",
      "Prev. Creative Director @ Twitter",
      "Prev. Director of Creative @ Mozilla",
    ],
    icons: [<FaHome />, <FaLinkedin />],
  },
  {
    name: "Collin Jackson",
    title: "Member of Technical Staff",
    details: [
      "Prev. Director, Growth Marketing @ Ripple",
      "Prev. Head of US Growth & Customer Marketing @ Arta Finance",
      "Prev. Marketing Advisor & Interim VP of Marketing @ Mina Foundation",
    ],
    icons: [<FaLinkedin />],
  },
  {
    name: "Samuel Judson",
    title: "Member of Technical Staff",
    details: [
      "Prev. Chief People Officer @ Agility Robotics",
      "Prev. Chief People Officer and General Counsel @ SigFig",
      "Prev. VP of People and General Counsel @ Udemy",
      "BA @ UCLA, JD @ Santa Clara University",
    ],
    icons: [<FaLinkedin />],
  },
  {
    name: "Victor Miller",
    title: "Member of Technical Staff",
    details: ["20+ years in ML, Systems & Web3 @ USC, Google, & OpenAI"],
    icons: [<FaGithub />, <FaLinkedin />],
  },
];

const About = () => {
  return (
    <Layout>
      {/* What is Nexus? */}
      <div className="nexus-section-about">
        <div className="nexus-container">
          <div className="nexus-left-about">
            <h1>
              What is
              <br />
              Nexus?
            </h1>
          </div>
          <div className="nexus-right">
            <p>
              Nexus is building a world supercomputer by leveraging the latest
              advancements in cryptography, engineering and science. The goal of
              the supercomputer is to enable verifiable computation at planetary
              scale, or what we call the <strong>Verifiable Internet</strong>.
            </p>
            <p>
              Nexus is backed by premier investors and has a team of
              world-leading experts developing and deploying the Nexus Layer 1,
              the Nexus Network and Nexus zkVM in support of our mission.
            </p>
            <p>
              Whether as an <a href="#">employee</a>, <a href="#">partner</a> or{" "}
              <a href="#">community</a> member, we invite you to join us and be
              part building the verifiable Internet.
            </p>
          </div>
        </div>
      </div>
      {/* Image sections */}
      <div className="gallery-section ">
        <div className="gallery-container">
          {images.map((src, index) => (
            <div key={index} className="gallery-image-wrapper">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
        <p className="caption">
          <em>First three photos from ZK Proof 6</em>
        </p>
      </div>
      {/* internal */}
      <div className="internal-container">
        <div className="internal-header">
          <p className="internal-title">INTERNAL</p>
          <div className="internal-underline"></div>
        </div>
      </div>
      {/* Leadership */}

      <div className="leadership-section">
        <h2 className="section-title">Leadership</h2>
        <div className="grid">
          {leaders.map((person, index) => (
            <div className="cardd" key={index}>
              <h3 className="name">{person.name}</h3>
              <p className="title">{person.title}</p>
              <div className="details">
                {person.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="iconsss">
                {person.icons.map((icon, i) => (
                  <span key={i} className="icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering & Research */}
      <div className="leadership-section">
        <h2 className="section-title">Engineering & Research</h2>
        <div className="grid">
          {engineering.map((person, index) => (
            <div className="cardd" key={index}>
              <h3 className="name">{person.name}</h3>
              <p className="title">{person.title}</p>
              <div className="details">
                {person.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="iconsss">
                {person.icons.map((icon, i) => (
                  <span key={i} className="icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* external */}
      <div className="external-container">
        <div className="external-header">
          <p className="external-title">EXTERNAL</p>
          <div className="external-underline"></div>
        </div>
      </div>
      {/* Advisors */}
      <div className="leadership-section">
        <h2 className="section-title">Advisors</h2>
        <div className="grid">
          {engineering.map((person, index) => (
            <div className="cardd" key={index}>
              <h3 className="name">{person.name}</h3>
              <p className="title">{person.title}</p>
              <div className="details">
                {person.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="iconsss">
                {person.icons.map((icon, i) => (
                  <span key={i} className="icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
