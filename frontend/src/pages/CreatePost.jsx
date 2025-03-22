import React, { useState } from "react";
import "../styles.css";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate preview
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Post</h2>
      <form>
        <input type="text" placeholder="Title" required />
        <textarea placeholder="Write your blog post here..." required></textarea>
        
        {/* Image Upload Section */}
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="image-upload" 
        />

        {/* Image Preview */}
        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
