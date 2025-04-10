import Layout from "../components/Layouts/Layout";
import React, { useState } from "react";
import "./blog.css";

const GridPostCard = ({ title, subtitle, imageUrl, date, readTime }) => (
  <div className="grid-post-card">
    <div className="grid-image-container">
      <img src={imageUrl} alt={title} className="grid-post-image" />
    </div>
    <div className="grid-content">
      <h3 className="grid-post-title">{title}</h3>
      {subtitle && <p className="grid-post-subtitle">{subtitle}</p>}
      <div className="grid-post-meta">
        <span className="grid-post-date">{date}</span>
        {readTime && <span className="grid-post-read-time">{readTime}</span>}
      </div>
    </div>
  </div>
);

const PostCard = ({ title, imageUrl, author, date, description }) => (
  <div className="posst-card">
    <div className="image-blog-container">
      <img src={imageUrl} alt={title} className="post-image" />
    </div>
    <div className="blog-content">
      <h2 className="post-title">{title}</h2>
      <div className="post-meta">
        <div className="author-info">
          {author && (
            <div className="author-image">
              {/* You can add an author image here */}
            </div>
          )}
          <span className="author-name">{author || "Anonymous"}</span>
        </div>
        <span className="post-date">{date || "Unknown Date"}</span>
      </div>
      <p className="blog-post-description">
        {description || "No description available."}
      </p>
      <button className="read-more-button">Read More</button>
    </div>
  </div>
);

const Blog = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Simulate subscription process
    setIsSubscribed(true);
    setErrorMessage("");
    setEmail("");
    // In a real application, you would send this email to your backend
    console.log("Subscribed with email:", email);
  };

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // You can implement your search logic here as the user types
  };

  const handleInputBlur = () => {
    // Optional: Handle what happens when the input loses focus
    // For example, you might want to hide it after a delay if no input is present
  };

  const dummyPosts = Array.from({ length: 10 }, (_, index) => ({
    title: `The Nexus zkVM ${3.0 + index / 10}`, // Dummy titles
    // imageUrl: `https://via.placeholder.com/600x300/${Math.floor(
    //   Math.random() * 16777215
    // ).toString(16)}?Text=Post+${index + 1}`, // Random placeholder images
    imageUrl: `https://blog.nexus.xyz/content/images/size/w2000/2025/02/testnet2_blog-header.png`, // Random placeholder images
    author: `User ${index + 1}`,
    date: `April ${9 + index}, 2025`,
    description: `This is a dummy post description for post number ${
      index + 1
    }. It talks about some interesting things related to the topic.`,
  }));

  const griddummyPosts = [
    {
      title:
        "Partnering with Orbiter Finance to Unlock Seamless Cross-Chain Transfers",
      subtitle:
        "The Nexus ecosystem continues to expand, and we’re excited to announce our partnership with Orbiter Finance, a leading cross-chain bridge provider. This...",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/04/blog_header-partnership-Orbiter@2x.png",
      date: "April 01, 2025",
      readTime: "1 min read",
    },
    {
      title: "The Nexus zkVM 3.0",
      subtitle:
        "We’re excited to announce the Nexus zkVM 3.0, our next-generation zero-knowledge virtual machine. This release is a full, ground-up rewrite of the previous",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/03/blog-zkvm3.0_header.png",
      date: "March 28, 2025",
      readTime: "4 min read",
    },
    {
      title: "Dummy Post Title 3",
      subtitle: "A brief description for the third dummy post.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/02/blog_header-partnership-Clique@2x.png",
      date: "April 05, 2025",
      readTime: "2 min read",
    },
    {
      title: "Another Dummy Post Title 4",
      subtitle: "More content for the fourth placeholder post.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/02/blog_header-partnership-Clique@2x.png",
      date: "April 10, 2025",
      readTime: "3 min read",
    },
    {
      title: "Yet Another Dummy Post Title 5",
      subtitle: "Details about the fifth sample article.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/02/blog_header-partnership-Clique@2x.png",
      date: "April 15, 2025",
      readTime: "5 min read",
    },
    {
      title: "Dummy Post Title 6",
      subtitle: "A short summary of the sixth dummy post.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/03/blog-zkvm3.0_header.png",
      date: "April 20, 2025",
      readTime: "1 min read",
    },
    {
      title: "Another Dummy Post Title 7",
      subtitle: "Content for the seventh example post.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/03/blog-zkvm3.0_header.png",
      date: "April 25, 2025",
      readTime: "4 min read",
    },
    {
      title: "Yet Another Dummy Post Title 8",
      subtitle: "Information regarding the eighth placeholder article.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/03/blog-zkvm3.0_header.png",
      date: "April 30, 2025",
      readTime: "2 min read",
    },
    {
      title: "Dummy Post Title 9",
      subtitle: "A quick overview of the ninth dummy post.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/03/blog-zkvm3.0_header.png",
      date: "May 05, 2025",
      readTime: "3 min read",
    },
    {
      title: "Another Dummy Post Title 10",
      subtitle: "More details about the tenth sample post.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/03/blog-zkvm3.0_header.png",
      date: "May 10, 2025",
      readTime: "5 min read",
    },
    {
      title: "The Final Dummy Post 11",
      subtitle: "The very last dummy post in this list.",
      imageUrl:
        "https://blog.nexus.xyz/content/images/size/w2000/2025/02/blog_header-partnership-Clique@2x.png",
      date: "May 15, 2025",
      readTime: "1 min read",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visiblePosts = dummyPosts.slice(startIndex, startIndex + 1); // Show 2 cards at a time

  const handleNext = () => {
    if (startIndex + 2 < dummyPosts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      {/* ata navbar */}
      <div className={`navbarr ${isSearchActive ? "search-active" : ""}`}>
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71L12 2z" />
          </svg>
          <span>NEXUS</span>
        </div>
        <ul className="nav-links">
          <li>HOME</li>
          <li>WEBSITE</li>
        </ul>
        <div className="search-container">
          {!isSearchActive ? (
            <button className="search-button" onClick={handleSearchClick}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          ) : (
            <input
              type="text"
              className="search-input active"
              placeholder="Search blogs,posts, and more..."
              value={searchTerm}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              autoFocus
            />
          )}
        </div>

        {isSearchActive && <div className="blurry-background"></div>}
      </div>
      {/* ata card ar jonno */}

      <div className="app-container">
        <div className="post-list">
          {visiblePosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
        <div className="navigation">
          <button
            className="nav-button prev"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            &larr;
          </button>
          <button
            className="nav-button next"
            onClick={handleNext}
            disabled={startIndex + 2 >= dummyPosts.length}
          >
            &rarr;
          </button>
        </div>
      </div>
      {/* grid-container ar jonno */}
      <div className="post-grid ">
        {griddummyPosts.slice(0, 10).map((post, index) => (
          <GridPostCard key={index} {...post} />
        ))}
        <div className="single-card-row-grid ">
          {griddummyPosts.slice(10).map((post, index) => (
            <GridPostCard key={index + 10} {...post} />
          ))}
        </div>
      </div>
      {/* Join our mission */}
      <div className="subscription-container">
        <h1 className="h11">Join our mission</h1>
        <p className="description">
          Subscribe to get regular updates as we continue our mission to build
          the Verifiable Internet. We send a monthly digest of news and
          important updates about new releases.
        </p>
        <form onSubmit={handleSubmit} className="subscription-form">
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
            />
            <label htmlFor="email" className="required-indicator">
              *indicates required
            </label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {isSubscribed && (
            <p className="success-message">Thank you for subscribing!</p>
          )}
          <p className="consent-text">
            You consent to receive communications from Nexus. See our{" "}
            <a href="#" className="privacy-link">
              Privacy Policy
            </a>{" "}
            for details.
          </p>
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Blog;
