import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import BlogDetails from "./pages/BlogDetails";
import Profile from "./pages/Profile";
import Topics from "./pages/Topics";

import "/src/styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </>
  );
};

export default App;
