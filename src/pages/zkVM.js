import React from "react";
import Layout from "../components/Layouts/Layout";
import "./zkVM.css";

const features = [
  {
    title: "Stwo Prover",
    description:
      "A transparent, highly efficient Circle STARK (a type of cryptographic proof system), Stwo provides excellent performance on top of a secure, strong, and formal mathematical foundation.",
    image:
      "https://framerusercontent.com/images/sS0MXBg6bvK03M77Oi8LRe1lUQ.png?scale-down-to=512", // replace with your SVG path
  },
  {
    title: "Any RISC-V program",
    description:
      "The zkVM can prove RISC-V programs compiled from any high-level language. A Rust runtime and SDK make developing for the zkVM as simple as writing code for any other application.",
    image:
      "https://framerusercontent.com/images/T41J71Bd2PjGRQ1oIUNuS5vihE.png?scale-down-to=1024",
  },
  {
    title: "Extensible with precompiles",
    description:
      "The Nexus zkVM machine architecture supports extensibility through custom precompile instructions. Developers can write their own custom precompiles and contribute to an open ecosystem.",
    image:
      "https://framerusercontent.com/images/4rTotBnT3Z8FheLCwDD6pFP5E.png?scale-down-to=512",
  },
  {
    title: "Zero-Knowledge Proofs",
    description:
      "Ensures complete data privacy while validating correctness. Critical for identity, finance, and beyond.",
    image:
      "https://framerusercontent.com/images/jNulQ1zErshyIKs9Ia6avFIUhSU.png?scale-down-to=512",
  },
  {
    title: "Modular Design",
    description:
      "Plug-and-play components allow devs to extend or replace parts of the zkVM with ease, maximizing flexibility.",
    image:
      "https://framerusercontent.com/images/i4KZOK7UTRCBfuKKBSwPOgsurDw.png?scale-down-to=1024",
  },
  {
    title: "Open Source Ecosystem",
    description:
      "Built openly, driven by community contributions, fostering innovation in the zero-knowledge space.",
    image:
      "https://framerusercontent.com/images/NXIZRZgjTB3SUDXFk0dWb8SKWuY.png?scale-down-to=512",
  },
];

const ZkVM = () => {
  return (
    <Layout>
      <div className="heroo">
        {/* 1st one */}
        <div className="zkvm-hero">
          <div className="glass-cube">
            <img
              src="https://framerusercontent.com/images/wZrePuCAdLjXtxXdafC0FeuI.gif?scale-down-to=1024"
              alt="Glass Cube"
            />
          </div>
          <h1 className="hero-title">The Nexus zkVM 3.0</h1>
          <p className="hero-description">
            Introducing a full, ground-up rewrite of the previous generations of
            our virtual machine, accompanied by a rigorous formal specification.
          </p>
          <div className="hero-buttons">
            <a href="#" className="hero-btn">
              zkVM 3.0 Specification <span className="arrow">↗</span>
            </a>
            <a href="#" className="hero-btn">
              zkVM Documentation <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        {/* 2nd one */}

        <div className="verifiable-container">
          <h2 className="verifiable-title">
            The <span className="bold">verifiable machine</span>
          </h2>
          <p className="verifiable-desc">
            At the heart of our design is a formally-specified set of Arithmetic
            Intermediate Representation (AIR) constraints for the RISC-V machine
            architecture, as well as a lookup-based memory checking argument.
          </p>
          <p className="verifiable-desc">
            Use the machine and review the implementation on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Github.
            </a>
          </p>
        </div>

        {/* 3rd  */}
        <div className="built-for-performance-container">
          <h2 className="built-for-performance-title">
            Built for <span className="performance-highlight">performance</span>
          </h2>
          <p className="built-for-performance-description">
            Based around a revamped guest runtime, fast memory checking, and
            backed by the{" "}
            <span className="starkware-highlight">Stwo prover</span> from
            StarkWare, this version of the zkVM is more usable, more extensible,
            and ~1000x faster than previous releases. As the engine of our
            supercomputer network, it helped our Testnet II achieve 112
            quadrillion FLOPS of power and a peak speed of 60.4 million
            verifiable Hz.
          </p>
        </div>
        {/* 4th */}
        <div className="chat-background-container">
          <div className="chat-background"></div>
        </div>
        {/* 5th */}
        <div className="zkvm-specification-container">
          <h2 className="zkvm-specification-title">zkVM specification</h2>
          <p className="zkvm-specification-description">
            The Nexus zkVM 3.0 is described by a formal specification of its
            functionality and constraints used to guarantee execution according
            to the specified functionality. Developed according to the
            principles of open science, the goal is to advance zero-knowledge
            research at Nexus, and contribute to the field of advanced
            cryptography more broadly.
          </p>
          <button className="zkvm-specification-button">
            zkVM 3.0 Specification
            <span className="arrow">↗</span>
          </button>
          <div className="zkvm-specification-video-container"></div>
        </div>
        {/* 6th */}
        <div className="ZkVMComponent-container ">
          <div className="ZkVMComponent-header">
            <h3 className="ZkVMComponent-titles">how it's built</h3>
            <div className="ZkVMComponent-underline"></div>
          </div>
          <div className="ZkVMComponent-content  ">
            <div className="zkvm-section">
              <h2 className="zkvm-title">
                zkVM <span className="highlight">components</span>
              </h2>
              <p className="zkvm-text">
                The Nexus zkVM starts with the user providing a normal Rust
                program.
                <br />
                After compiling, it runs the program, generating a trace of its
                execution.
                <br />
                The zkVM then produces a succinct, efficiently verifiable proof
                that the output of the program was correctly generated by its
                execution.
              </p>
            </div>
          </div>

          <div className="zkvm-grid-section">
            <div className="zkvm-grid-container">
              {features.map((feature, index) => (
                <div className="zkvm-grid-item" key={index}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="zkvm-icon"
                  />
                  <h3 className="zkvm-feature-title">{feature.title}</h3>
                  <p className="zkvm-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7th */}
      </div>
    </Layout>
  );
};

export default ZkVM;
