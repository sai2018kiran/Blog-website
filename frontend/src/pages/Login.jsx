import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button  type="submit" >Login</button>
      </form>

      {/* Sign Up link */}
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
