import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";


const BlogDetails = () => {
  const { id } = useParams(); // Get blog post ID from URL

  return (
    <div className="blog-container">
      <h2>Blog Post {id}</h2>
      <p>This is a detailed view of the blog post.</p>
    </div>
  );
};

export default BlogDetails;
