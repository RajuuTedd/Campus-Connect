import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import Navbar from "./components/Navbar/Navbar";
import Comments from "./components/comments/comments"; // New
import UpvoteDownvote from "./components/Upvotedownvote/Upvotedownvote"; // New

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post" element={<Post />} />
          <Route path="/comments" element={<Comments />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
