import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Layout from "../components/Layouts/Layout";
import "./research.css";
import {
  FaHome,
  FaGoogle,
  FaLinkedin,
  FaTrophy,
  FaExternalLinkAlt,
  FaVideo,
} from "react-icons/fa";

const talks = [
  {
    speaker: "Carla Ràfols",
    title: "FLIP-and-prove R1CS",
    link: "#",
  },
  {
    speaker: "Giacomo Fenzi",
    title: "STIR (and WHIR), proximity testing and constraint testing",
    link: "#",
  },
  {
    speaker: "Hendrik Waldner",
    title: "Field-Agnostic SNARKs from Expand-Accumulate Codes",
    link: "#",
  },
  {
    speaker: "Helger Lipmaa",
    title: "Polymath: Groth16 Is Not The Limit",
    link: "#",
  },
];

const teamMembers = [
  {
    name: "Jens Groth",
    title: "Chief Scientist",
    description: [
      "Inventor of pairing-based zkSNARKs",
      "Inventor of pairing-based zkSNARKs",
      "Inventor of pairing-based zkSNARKs",
      "Prev. Director of Research @ DFINITY",
      "Prev. Professor of Cryptography @ UCL, London",
    ],
    socials: ["home", "google", "linkedin", "x"],
  },
  {
    name: "Michel Abdalla",
    title: "Member of Technical Staff",
    description: [
      "Ph.D. in Cryptography @ UCSD",
      "Advised by Mihir Bellare",
      "President @ International Association for Cryptologic Research (IACR)",
      "Prev. Professor of Cryptography @ ENS, France",
    ],
    socials: ["home", "google", "linkedin", "x"],
  },
  {
    name: "Arka Rai Choudhuri",
    title: "Member of Technical Staff",
    description: [
      "Ph.D. in Cryptography @ Johns Hopkins University",
      "Advised by Abhishek Jain",
      "Prev: Postdoctoral researcher, NTT Research",
      "Prev: Postdoctoral researcher, UC Berkeley",
    ],
    socials: ["home", "google", "linkedin"],
  },
  {
    name: "Victor Miller",
    title: "Member of Technical Staff",
    description: [
      "Co-inventor of Elliptic Curve Cryptography.",
      "Ph.D. in Mathematics @ Harvard (advised by Barry Mazur)",
      "Fellow of the IACR, IEEE, and ACM. IEEE Third Millennium Medal, ISSA Hall of Fame",
    ],
    socials: ["linkedin"],
  },
];

const principles = [
  {
    title: "We invent and innovate",
    description:
      "The goal of our research team is to create new tools and techniques that scale verifiable computation.",
  },
  {
    title: "We build in public",
    description:
      "Our research, development, and thinking are shared openly to inspire and engage with the broader community.",
  },
  {
    title: "We learn by doing",
    description:
      "We test hypotheses by implementing them, learning directly from the results and iterating rapidly.",
  },
];

const data = [
  {
    name: "Jens Groth",
    awards: [
      {
        year: 2023,
        title: "IACR Test-of-Time Award 2023",
        link: "#",
        details: [
          "Paper: Efficient Non-interactive Proof Systems for Bilinear Groups",
          "Published at Eurocrypt 2008",
          "For providing efficient Groth-Sahai proofs that have given rise to many applications including succinct non-interactive arguments.",
        ],
      },
      {
        year: 2021,
        title: "IACR Test-of-Time Award 2021",
        link: "#",
        details: [
          "Paper: Simulation-sound NIZK proofs for a practical language and constant size group signatures",
          "Published at Asiacrypt 2006",
          "For constructing asymptotically optimal NIZK proofs and group signatures without using random oracles, and paving the way to practical constructions.",
        ],
      },
    ],
  },
  {
    name: "Michel Abdalla",
    awards: [
      {
        year: 2022,
        title: "PKC Test-of-Time Award 2022",
        link: "#",
        details: [
          "Paper: Password-Based Authenticated Key Exchange in the Three-Party Setting",
          "Published at PKC 2005",
          "For making a significant contribution to the theory and practice of public key cryptography",
        ],
      },
    ],
  },
];
const iconMap = {
  home: <FaHome />,
  google: <FaGoogle />,
  linkedin: <FaLinkedin />,
  x: <FaGoogle />,
};

const Research = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
      {/* Research at Nexus */}
      <div className="researchhh-section">
        <div className="researchhh-content">
          <h1 className="researchhh-title">
            Research
            <br />
            at Nexus
          </h1>
          <p className="researchhh-description">
            Scientific researchhh informs everything we do at Nexus. Decades of
            researchhh at the frontier of computing and zero-knowledge
            cryptography provides a foundation for our work on the world’s most
            powerful supercomputer. Our researchhh team “stands on the shoulders
            of giants” while creating immediate and real-world applications
            along the road toward building a better Internet.
          </p>

          <div className="researchhh-buttons">
            <a href="#" className="researchhh-btn">
              zkVM 3.0 Specification <span>↗</span>
            </a>
            <a href="#" className="researchhh-btn">
              Nexus Speaker Series <span>→</span>
            </a>
          </div>
        </div>

        <div className="researchhh-image">
          <img
            src="https://framerusercontent.com/images/dI2B3VOg04kfrfyW6ViQLI2NwsE.svg?scale-down-to=1024"
            alt="Nexus Research Diagram"
          />
        </div>
      </div>
      {/* Research Principles */}

      <div className="principles-section">
        <div className="principles-text">
          <h2>Research Principles</h2>
          <p>
            Nexus is building the world’s most powerful supercomputer.
            <br />
            Our latest research findings help push the boundaries of what’s
            possible with our Nexus zkVM and network.
          </p>
          <p>Our research is informed by three basic principles.</p>
        </div>

        <div className="principles-list">
          {principles.map((p, index) => (
            <div key={index} className="principle-item">
              <div
                className="principle-header"
                onClick={() => toggleIndex(index)}
              >
                {activeIndex === index ? (
                  <FaTimes className="icon" />
                ) : (
                  <FaPlus className="icon" />
                )}
                <h3>{p.title}</h3>
              </div>
              {activeIndex === index && (
                <p className="principle-description">{p.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* research team */}
      <div className="research-team-header">
        <h3 className="research-team-titles">RESEARCH TEAM</h3>
        <div className="research-team-underline"></div>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <ul>
              {member.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className="social-icons">
              {member.socials.map((s, i) => (
                <span key={i}>{iconMap[s]}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* reference */}

      <div className="reference-team-header">
        <h3 className="reference-team-titles"> REFERENCE</h3>
        <div className="reference-team-underline"></div>
      </div>
      {/* Nexus Speaker Series  */}
      <div className="speaker-section">
        <div className="left-title">
          <h1>
            Nexus Speaker
            <br />
            Series
          </h1>
        </div>
        <div className="talks-list">
          {talks.map((talk, index) => (
            <a
              href={talk.link}
              key={index}
              className="talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="talk-left">
                <FaVideo className="video-icon" />
                <span>
                  <strong>{talk.speaker}</strong>, “{talk.title}”
                </span>
              </div>
              <FaExternalLinkAlt className="external-icon" />
            </a>
          ))}
        </div>
      </div>

      {/* Recent Talks */}

      <div className="recent-talk-section">
        <div className="recent-talk-left-title">
          <h1>Recent Talks</h1>
        </div>
        <div className="recent-talk-talks-list">
          {talks.map((talk, index) => (
            <a
              href={talk.link}
              key={index}
              className="recent-talk-talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="recent-talk-talk-left">
                <FaVideo className="recent-talk-video-icon" />
                <span>
                  <strong>{talk.speaker}</strong>, “{talk.title}”
                </span>
              </div>
              <FaExternalLinkAlt className="recent-talk-external-icon" />
            </a>
          ))}
        </div>
      </div>
      {/* Publications */}

      <div className="publications-section">
        <div className="publications-left-title">
          <h1>Publications</h1>
        </div>
        <div className="publications-talks-list">
          {talks.map((talk, index) => (
            <a
              href={talk.link}
              key={index}
              className="publications-talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="publications-talk-left">
                <FaVideo className="publications-video-icon" />
                <span>
                  <strong>{talk.speaker}</strong>, “{talk.title}”
                </span>
              </div>
              <FaExternalLinkAlt className="publications-external-icon" />
            </a>
          ))}
        </div>
      </div>
      {/* Awards */}

      <div className="awards-section">
        <div className="awards-left-title">
          <h1>Awards</h1>
        </div>
        <div className="awards-talks-list">
          {data.map((person, index) => (
            <div key={index} className="person-section ">
              <h3 className="person-name">{person.name}</h3>
              {person.awards.map((award, idx) => (
                <div key={idx} className="award-card">
                  <div className="award-header">
                    <FaTrophy className="trophy-icon" />
                    <a
                      href={award.link}
                      className="award-title"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {award.title}
                    </a>
                  </div>
                  <ul className="award-details">
                    {award.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="awards-section">
        <div className="awards-left-title">
          <h1>Awards</h1>
        </div>
        <div className="awards-talks-list">
          {talks.map((talk, index) => (
            <a
              href={talk.link}
              key={index}
              className="awards-talk-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="awards-talk-left">
                <FaVideo className="awards-video-icon" />
                <span>
                  <strong>{talk.speaker}</strong>, “{talk.title}”
                </span>
              </div>
              <FaExternalLinkAlt className="awards-external-icon" />
            </a>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export default Research;
