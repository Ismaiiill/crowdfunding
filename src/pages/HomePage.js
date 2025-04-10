import React from "react";
import Layout from "../components/Layouts/Layout";
import "./Homepagecss.css";
import { Link } from "react-router-dom";

const investors = [
  { name: "Lightspeed", src: "/images/lightspeed.png" },
  { name: "Pantera", src: "/images/pantera.png" },
  { name: "Dragonfly", src: "/images/dragonfly.png" },
  { name: "Faction", src: "/images/faction.png" },
  { name: "BBF", src: "/images/bbf.png" },
  { name: "Alliance", src: "/images/alliance.png" },
  { name: "SVA", src: "/images/sva.png" },
];

const logos = [
  "https://via.placeholder.com/120x40?text=Logo1",
  "https://via.placeholder.com/120x40?text=Logo2",
  "https://via.placeholder.com/120x40?text=Logo3",
  "https://via.placeholder.com/120x40?text=Logo4",
  "https://via.placeholder.com/120x40?text=Logo5",
  "https://via.placeholder.com/120x40?text=Logo6",
  "https://via.placeholder.com/120x40?text=Logo7",
  "https://via.placeholder.com/120x40?text=Logo8",
  "https://via.placeholder.com/120x40?text=Logo9",
];
const HomePage = () => {
  return (
    <Layout>
      <div>
        {/* The Layer 1 Supercomputer */}

        <div className="hero-container">
          <div className="hero-content ">
            <h1 className="hero-titlee">The Layer 1 Supercomputer</h1>
            <p className="hero-subtitle">
              Planetary scale. Exponential performance. <br /> Built for
              everyone.
            </p>
            <button className="hero-button">
              Join the Nexus OS <span className="arrow">↗</span>
            </button>
          </div>
        </div>
        {/* in partnership with */}
        <div className="partners-container">
          <h3 className="partners-title">IN PARTNERSHIP WITH</h3>
          <div className="partners-slider">
            <div className="partners-track">
              {/* Duplicating logos to create an infinite scrolling effect */}
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Nexus OS:  */}
        <div className="nexuss-container ">
          {/* Banner Section */}
          <div className="nexus-banner">
            <div className="bannerr-content">
              <p>Learn more about the </p>
              <p>Nexus Layer 1 vision</p>
              <button className="watch-button">Watch the Announcement</button>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="nexuss-content">
            <h1>
              Nexus OS: <br />
              Made for <span className="highlight">mass adoption</span>
            </h1>
            <p className="description">
              A global network of computing power that rewards network
              participants for their contributions.
            </p>
            <button className="connect-button">
              Connect with Nexus OS <span>→</span>
            </button>

            {/* Image Showcase Section */}
            <div className="nexus-showcase">
              <img
                src="https://framerusercontent.com/images/yNfbH2cQJ9NvNGAagzSvdTyXo.png"
                alt="Nexus OS UI"
                className="showcase-image"
              />
            </div>
          </div>
        </div>
        {/* Ultra-high performance */}
        <div className="performance-container">
          <div className="performance-overlay"></div>
          {/* <img
            src=""
            alt=""
            className="performance-bg"
          /> */}
          <div className="performance-content">
            <h1>
              Ultra-high <span className="highlight">performance</span>
            </h1>
            <p>
              Powered by the Nexus zkVM, the Nexus Layer 1 is an EVM-compatible
              blockchain that gets more powerful with each node that connects.
            </p>
          </div>
        </div>
        {/* Nexus concentrates the world’s compute power into a single Layer 1 */}
        <div className="layer-one-container">
          <div className="layer-one-overlay"></div>
          <div className="layer-one-text">
            Nexus concentrates the world’s compute power into a single Layer 1.
          </div>
        </div>
        {/* A supercomputer engine */}

        <div className="engine-container">
          <div className="engine-header">
            <h3 className="engine-titles">nexus zkvm</h3>
            <div className="engine-underline"></div>
          </div>
          <div className="engine-content">
            <div className="engine-para">
              <h1 className="engine-titlee">
                A <span className="highlight">supercomputer </span> engine
              </h1>
              <p className="engine-description">
                The Nexus zkVM 3.0 powers our supercomputer. Built to make
                verifiable computation possible, this general purpose machine
                can prove any computation and is ~1000x faster than previous
                releases.
              </p>
              <button className="engine-button">
                zkVM 3.0 Specification <span className="arrow">→</span>
              </button>
              <button className="engine-button">
                GitHub <span className="arrow">→</span>
              </button>
            </div>
            <div className="engine-image">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        {/* A supercomputer network */}
        <div className="network-container">
          <div className="network-header">
            <h3 className="network-titles">nexus network</h3>
            <div className="network-underline"></div>
          </div>
          <div className="network-content">
            <div className="network-para">
              <h1 className="network-titlee">
                A <span className="highlight">supercomputer </span> network
              </h1>
              <p className="network-description">
                Nexus introduced the first global distributed zkVM-powered
                supercomputer network. Anyone in the world can connect and
                contribute compute power with just one click.
              </p>
              <button className="network-button">
                Nexus Network <span className="arrow">↗</span>
              </button>
            </div>
            <div className="network-image">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        {/* A blockchain supercomputer */}

        <div className="blockchain-container">
          <div className="blockchain-header">
            <h3 className="blockchain-titles">nexus layer 1</h3>
            <div className="blockchain-underline"></div>
          </div>
          <div className="blockchain-content">
            <div className="blockchain-para">
              <h1 className="blockchain-titlee">
                A <span className="highlight">blockchain</span> supercomputer
              </h1>
              <p className="blockchain-description">
                Designed to capitalize on a new form of Moore’s Law for
                verifiable computation, it gets faster as compute power
                increases.
              </p>
              <button className="blockchain-button">
                Layer 1 Documentation <span className="arrow">↗</span>
              </button>
            </div>
            <div className="blockchain-image">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        {/* ecosYstem section */}
        <div className="ecosystemm-container">
          <div className="ecosystem-header">
            <h3 className="investors-title">ecosYstem</h3>
            <div className="ecosystem-underline"></div>
          </div>
          <div className="ecosystemm-content ">
            <div className="ecosystemm-para ">
              <h1 className="ecosystem-titlee">Partner</h1>
              <h1 className="ecosystem-titlee">with Nexus</h1>
              <p className="ecosystem-description">
                Join our ecosystem and contribute to the future of computation.
                As a partner, you’ll play a crucial role in shaping the next
                generation of secure and scalable verifiable technologies.
              </p>
              <button className="ecosystem-button">
                <Link to="/partner">
                  ecosystem at Nexus <span className="arrow">→</span>
                </Link>
              </button>
            </div>
            <div className="ecosystem-image">
              <img
                src="https://framerusercontent.com/images/UvEY3BdVZiuQPPTztPrnFFXpUd4.jpg?scale-down-to=2048"
                alt="ecosystem Diagram"
              />
            </div>
          </div>
        </div>
        {/* Research section */}
        <div className="research-container">
          <div className="research-header">
            <h3 className="investors-title">nexus research</h3>
            <div className="research-underline"></div>
          </div>
          <div className="research-content">
            <div className="research-para">
              <h1 className="research-title">
                Research at the cutting edge of computing
              </h1>
              <p className="research-description">
                Building the world’s most powerful supercomputer requires
                figuring out things that have never been done before. From
                distributed systems to advanced cryptography, our team includes
                some of the best computer scientists in the world.
              </p>
              <button className="research-button">
                <Link to="/research">Research at Nexus </Link>
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="research-image">
              <img
                src="https://framerusercontent.com/images/dI2B3VOg04kfrfyW6ViQLI2NwsE.svg?scale-down-to=1024"
                alt="Research Diagram"
              />
            </div>
          </div>
        </div>
        {/* investor section */}
        <div className="investors-section">
          <div className="investors-header">
            <h3 className="investors-title">INVESTORS</h3>
            <div className="investors-underline"></div>
          </div>
          <div className="investors-logos">
            {investors.map((investor, index) => (
              <img
                key={index}
                src={investor.src}
                alt={investor.name}
                className="investor-logo"
              />
            ))}
          </div>
          <p className="funding-text">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nexus raises $25M in Series A funding to bring zero-knowledge
              proofs to Internet scale &#8594;
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
