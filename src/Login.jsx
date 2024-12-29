import { useState } from "react";
import "./Login.css";
import tree from "./assets/Tree.png";
import facebookicon from "./assets/facebook.png";
import googleicon from "./assets/google.png";
import errorSign from "./assets/error.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: "", password: "" };

    
    if (!email) {
      newErrors.email = "The email field is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    
    if (!password) {
      newErrors.password = "The password field is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one digit";
    } else if (!/[@$!%*?&#]/.test(password)) {
      newErrors.password = "Password must contain at least one special character (@, $, !, %, *, ?, & or #)";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      alert("Login successful!");
    }
  };

  return (
    <div className="container">
      
      <div className="card">
        <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="logo"
        />
        </div>
        <h2 className="heading">Login</h2>
        <img src={tree} alt="Tree Illustration" className="tree-image" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="error">
                <img src={errorSign} alt="Error" />
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="error">
                <img src={errorSign} alt="Error" />
                {errors.password}
              </div>
            )}
          </div>
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
        <div className="links">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <a href="#" className="sign-up">New User? Sign Up</a>
        </div>
        <div className="divider">or</div>
        <div className="social-login">
          <button className="social-btn google">
            <img src={googleicon} alt="Google Icon" className="social-btn-img" />
            Continue with Google
            <div></div>
          </button>
          <button className="social-btn facebook">
            <img src={facebookicon} alt="Facebook Icon" className="social-btn-img" />
            Continue with Facebook
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
