
import "./Login.css";
import tree from "./assets/tree.png";
import facebookicon from "./assets/Rectangle 17.png";
import googleicon from "./assets/Group 9.png";
import errorSign from "./assets/error.svg";

const Login = () => {
  return (
    <div className="container">
      {/* Background Section */}
      <div className="background"></div>

      {/* Card Section */}
      <div className="card">
        {/* Logo Section */}
        
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="logo"
          />
        

        {/* Login Heading */}
        <h2 className="heading">Login</h2>

        {/* Illustration */}
        <img src={tree} alt="Tree" className="tree-image" />

        {/* Form Section */}
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  />
            <div className="error"><img src={errorSign} style={{ padding: '.2rem' }} />The email field is required</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  />
          </div>

          {/* Sign In Button */}
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>

        {/* Links */}
        <div className="links">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <a href="#" className="sign-up">New User? Sign Up</a>
        </div>

        {/* Divider */}
        <div className="divider">or</div>

        {/* Social Buttons */}
        <div className="social-login">
          <button className="social-btn google">
            <img
              src={googleicon}
              alt="Google"
              className="social-btn-img"
             
            />
            <p className="login-text">Continue with Google</p>
            <div></div>
          </button>
          <button className="social-btn facebook">
            <img
              src={facebookicon}
              alt="Facebook"
              className="social-btn-img"
            />
            <p className="login-text">Continue with Facebook</p>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
