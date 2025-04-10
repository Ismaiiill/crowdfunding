import React from "react";
import Layout from "../components/Layouts/Layout";
import "./network.css"; // Assuming you have a CSS file for styles
import { ArrowUpRight } from "lucide-react";

const Network = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("curl https://cli.nexus.xyz/ | sh");
    alert("Copied to clipboard!");
  };

  return (
    <Layout>
      <div>
        {/* 1st one */}
        <div className="networkk-heroo ">
          {/* Image Showcase Section */}
          <div className="networkk-showcase">
            <img
              src="https://framerusercontent.com/images/yNfbH2cQJ9NvNGAagzSvdTyXo.png"
              alt="networkk OS UI"
              className="showcase-image-networkk"
            />
          </div>
          <div className="nexus-network-section">
            <h1 className="nexus-title">Nexus Network</h1>
            <p className="nexus-description">
              The network is currently in Devnet. Please follow us on{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{" "}
              or{" "}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>{" "}
              to learn more.
            </p>
            <div className="nexus-buttons">
              <a href="#" className="nexus-button">
                Connect with Nexus OS <ArrowUpRight size={16} />
              </a>
              <a href="#" className="nexus-button">
                Network Documentation <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 2nd one */}

        <div className="verifiable-section">
          <div className="verifiable-card-a">
            <h2>
              <span className="bold">Verifiable</span>{" "}
              <span className="light">supercomputer</span>
            </h2>
            <p>
              The Nexus Network aggregates the compute power of worldwide
              devices into a single compute supercluster. Each node supplies
              compute by running an instance of the Nexus zkVM.
            </p>
          </div>

          <div className="verifiable-card-b">
            <h2>
              <span className="bold">Multiple ways</span>{" "}
              <span className="light">to prove</span>
            </h2>
            <p>
              When the network testnet is open, there are two ways to
              participate: via our web app or CLI. The web app offers easy and
              instant one-click proving, while the CLI experience is designed
              for heavier compute loads and allows you to prove at levels beyond
              the limits of a browser.
            </p>
          </div>

          <div className="verifiable-card-c">
            <h2>
              <span className="light">Earn </span>
              <span className="bold">NEX Points</span>
            </h2>
            <p>
              Think of these as rewards points for participating in our testnets
              when they’re open. Once you connect your wallet, your NEX will
              accumulate based on your contributions.{" "}
              <a href="#">Learn more about NEX Points.</a>
            </p>
          </div>
        </div>

        {/* 3rd  */}
        <div className="cli-section">
          <div className="cliComponent-header">
            <h3 className="cliComponent-titles">CLI</h3>
            <div className="cliComponent-underline"></div>
          </div>
          <div className="cli-section-below">
            <div className="cli-left">
              <h2 className="cli-heading">For Developers</h2>
              <p className="cli-desc">
                When network testnets are open, you can run CLI nodes to earn
                more NEX points. You can also submit your own programs for
                others to prove.
              </p>
              <p className="cli-link-text">
                Check out the <a href="#">network documentation</a> for more
                information.
              </p>

              <div className="cli-copy-container" onClick={handleCopy}>
                <p className="cli-copy-label">↓ CLICK TO COPY ↓</p>
                <div className="cli-copy-box">
                  curl https://cli.nexus.xyz/ | sh
                </div>
              </div>
            </div>

            <div className="cli-right">
              <img
                src="https://framerusercontent.com/images/5vRPTRtYMrQ31g37FdLQ3nz4.png?scale-down-to=1024"
                alt="Nexus ASCII Terminal"
                className="cli-terminal"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Network;
