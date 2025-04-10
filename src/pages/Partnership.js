import React from "react";
import Layout from "../components/Layouts/Layout";
import "./partnership.css";
import { Link } from "react-router-dom";

const logos = [
  { name: "Polyhedra", src: "/logos/polyhedra.svg" },
  { name: "Aligned", src: "/logos/aligned.svg" },
  { name: "Fermah", src: "/logos/fermah.svg" },
  { name: "QED", src: "/logos/qed.svg" },
  { name: "Pi Squared", src: "/logos/pi2.svg" },
  { name: "Caldera", src: "/logos/caldera.svg" },
  { name: "SparkleBox", src: "/logos/sparkle.svg" },
  { name: "Snarkify", src: "/logos/snarkify.svg" },
  { name: "BCW", src: "/logos/bcw.svg" },
  { name: "GeVulot", src: "/logos/gevulot.svg" },
  { name: "Nethermind", src: "/logos/nethermind.svg" },
  { name: "Halliday", src: "/logos/halliday.svg" },
];

const Partnership = () => {
  return (
    <Layout>
      <div>
        {/* 1st */}
        <div className="ecosystem-section">
          <div className="ecosystem-left">
            <h1>
              Nexus <br /> Ecosystem
            </h1>
            <p>
              Unleash the power of verifiable computation with Nexus. Our
              cutting-edge technology enables users to prove any computation,
              scale decentralized systems, benefit from advanced proof systems,
              and leverage a powerful zero-knowledge virtual machine. We're
              building a future where the integrity of computations and data are
              protected by proofs, empowering your company to create more
              secure, efficient, and trustworthy applications.
            </p>
            <button className="ecosystem-btn">
              Partner With Us <span>&rarr;</span>
            </button>
          </div>

          <div className="ecosystem-right">
            <div className="symbol-row">
              <img src="/cube.svg" alt="cube" />
              <span>+</span>
              <img src="/circle.svg" alt="circle" />
            </div>
            <div className="symbol-row">
              <img src="/cube.svg" alt="cube" />
              <span>+</span>
              <img src="/square.svg" alt="square" />
            </div>
            <div className="symbol-row">
              <img src="/cube.svg" alt="cube" />
              <span>+</span>
              <img src="/triangle.svg" alt="triangle" />
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="Partner-container">
          <div className="Partner-header">
            <p className="investors-title">PARTNERS</p>
            <div className="Partner-underline"></div>
          </div>
        </div>
        <div className="Partner">
          <section className="partners-section">
            <div className="partners-grid">
              {logos.map((logo, index) => (
                <div className="partner-card" key={index}>
                  <img src={logo.src} alt={logo.name} />
                  <div className="arrow-box">
                    <span>&#8599;</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 3nd */}
        <div className="ecosystem-container">
          <div className="ecosystem-header">
            <h3 className="investors-title">ecosYstem</h3>
            <div className="ecosystem-underline"></div>
          </div>
          <div className="ecosystem-content">
            <div className="ecosystem-para">
              <h1 className="ecosystem-title">Partner with Nexus</h1>
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
      </div>
    </Layout>
  );
};

export default Partnership;
