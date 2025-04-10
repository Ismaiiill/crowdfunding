import React from "react";
import Layout from "../components/Layouts/Layout";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import "./media.css";

const VideoCard = ({ thumbnailUrl, title, description, date }) => (
  <div className="video-card">
    <div className="thumbnail-container">
      <img src={thumbnailUrl} alt={title} className="thumbnail" />
      <div className="play-overlay">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
    <div className="video-infos">
      <div className="video-metas">
        <h3 className="video-title">{title}</h3>
        <p className="video-description">{description}</p>
      </div>
      <p className="video-date">{date}</p>
    </div>
  </div>
);

const Media = () => {
  const videoData = [
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/333333/FFFFFF?Text=Video+1", // Replace with actual URL
      title: "A Supercomputer for Everyone",
      description: "",
      date: "December 2024",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/555555/EEEEEE?Text=Video+2", // Replace with actual URL
      title: "Nexus 2.0: Jolt, HyperNova and a New SDK",
      description: "",
      date: "July 2024",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/444444/DDDDDD?Text=Video+3", // Replace with actual URL
      title: "Title of Video 3",
      description: "Short description of video 3",
      date: "August 2024",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/666666/CCCCCC?Text=Video+4", // Replace with actual URL
      title: "Another Interesting Video Title",
      description: "Brief explanation of what this video is about",
      date: "September 2024",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/777777/BBBBBB?Text=Video+5", // Replace with actual URL
      title: "The Future of Something",
      description: "Discussing the advancements in a specific field",
      date: "October 2024",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/888888/AAAAAA?Text=Video+6", // Replace with actual URL
      title: "Learning New Technologies",
      description: "A tutorial or discussion on emerging technologies",
      date: "November 2024",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/999999/000000?Text=Video+7", // Replace with actual URL
      title: "Building Great Products",
      description: "Insights into product development and strategy",
      date: "January 2025",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/AAAAAA/111111?Text=Video+8", // Replace with actual URL
      title: "Exploring Data Science",
      description: "An introduction to the world of data science",
      date: "February 2025",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/BBBBBB/222222?Text=Video+9", // Replace with actual URL
      title: "The Art of Programming",
      description: "Discussing best practices and elegant coding solutions",
      date: "March 2025",
    },
    {
      thumbnailUrl:
        "https://via.placeholder.com/400x225/CCCCCC/333333?Text=Video+10", // Replace with actual URL
      title: "Scaling Applications",
      description: "Strategies for handling large user bases",
      date: "April 2025",
    },
  ];

  return (
    <Layout>
      <div>
        {/* media upper section */}
        <div className="media-section">
          <h1 className="media-title">Media</h1>

          <div className="media-cards">
            <div className="media-card">
              <div className="media-text">Nexus Blog</div>
              <a href="#" className="media-button">
                Nexus Blog <FiArrowUpRight />
              </a>
            </div>

            <div className="media-card">
              <div className="media-text">Brand Assets</div>
              <a href="#" className="media-button">
                Download .ZIP <FiDownload />
              </a>
            </div>
          </div>
        </div>
        {/* media  */}
        <div className="mediaup-header">
          <h3 className="mediaup-title">MEDIA</h3>
          <div className="mediaup-underline"></div>
        </div>

        {/* videos */}
        <div className="videos-section">
          <h1 className="videos-title">Videos</h1>

          <div className="video-wrapper">
            <video className="video-player" controls>
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="video-meta">
              <span className="video-name">Nexus Layer 1</span>
              <span className="video-date">February 2025</span>
            </div>
          </div>
        </div>
        {/* grid */}
        <div className="video-grid">
          {videoData.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Media;
