import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
import "./career.css";

const Career = () => {
  return (
    <div className="job-board">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Nexus_logo.png/600px-Nexus_logo.png"
          alt="Nexus Logo"
        />
        <h1>
          <Link to="/">NEXUS</Link>
        </h1>
      </div>

      <div className="content">
        <h2 className="open-title">Open Positions (14)</h2>

        <div className="category">
          <h3>Engineering</h3>

          <div className="job">
            <a href="#">Developer Relations Engineer</a>
            <p>Engineering • San Francisco • Full time • On-site</p>
          </div>

          <div className="job">
            <a href="#">Senior Compiler Engineer</a>
            <p>Engineering • San Francisco • Full time • On-site</p>
          </div>

          <div className="job">
            <a href="#">Software Engineer - Formal Verification</a>
            <p>Engineering • San Francisco • Full time • On-site</p>
          </div>

          <div className="job">
            <a href="#">Software Engineer - High Performance Computing (HPC)</a>
            <p>Engineering • San Francisco • Full time • On-site</p>
          </div>

          <div className="job">
            <a href="#">Software Engineer - Layer 1</a>
            <p>Engineering • San Francisco • Full time • On-site</p>
          </div>

          {/* Add more jobs manually as needed */}
        </div>
      </div>
    </div>
  );
};

export default Career;
