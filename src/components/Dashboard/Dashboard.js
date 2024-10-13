import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Removed the 'Post' import

const Dashboard = () => {
  const recentPosts = [
    { title: "Post 1", description: "This is the first recent post." },
    { title: "Post 2", description: "This is the second recent post." },
    { title: "Post 3", description: "This is the third recent post." },
  ];

  return (
    <div className="dashboard-layout">
      {/* Main section where posts are displayed */}
      <div className="main-section">
        <h1>Dashboard</h1>
        <h2>Recent Posts</h2>
        <div className="post">
          <h3>Sample Post Title</h3>
          <p>This is a sample post description. Click to read more.</p>
          <Link to="/post">Read More</Link>
        </div>
      </div>

      {/* Sidebar for recent posts */}
      <div className="recent-posts-section">
        <h2>Recent Posts</h2>
        {recentPosts.map((post, index) => (
          <div key={index} className="recent-post-item">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to="/post">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
