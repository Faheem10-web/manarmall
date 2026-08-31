import React from 'react';
import { 
  ChevronLeft, 
  Globe, 
  ChevronDown, 
  User, 
  Lock, 
  EyeOff, 
  ArrowRight 
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';

export default function LoginScreen({ onBack }) {
  return (
    <div className="login-screen-container">
      {/* Background with Ambient Glow & Line Art */}
      <div className="login-ambient-glow"></div>
      <div className="login-line-art"></div>

      <div className="login-content-wrapper">
        {/* Top Navigation Bar */}
        <div className="login-top-bar">
          <button className="login-back-btn" onClick={onBack} aria-label="Go Back">
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          
          <button className="login-lang-btn">
            <Globe size={18} strokeWidth={1.5} />
            <span>English</span>
            <ChevronDown size={16} strokeWidth={1.5} />
          </button>
        </div>

        <div className="login-scroll-content">
          {/* Brand Section */}
          <div className="login-brand-section">
            <img src="/assets/flashlogo.png" alt="Manar Mall" className="login-brand-logo" />
            <div className="login-divider-wrapper">
              <div className="login-divider-line"></div>
              <div className="login-divider-star">✦</div>
              <div className="login-divider-line"></div>
            </div>
            <p className="login-brand-tagline">SHOP &bull; DINE &bull; EXPERIENCE</p>
          </div>

          {/* Form Section */}
          <div className="login-form-section">
            <div className="login-headings">
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Login to continue your Manar Mall experience</p>
            </div>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input Field 1: Mobile/Email */}
              <div className="login-input-group">
                <div className="login-input-icon">
                  <User size={20} strokeWidth={1.5} />
                </div>
                <input 
                  type="text" 
                  placeholder="Mobile Number or Email" 
                  className="login-input"
                />
              </div>

              {/* Input Field 2: Password */}
              <div className="login-input-group">
                <div className="login-input-icon">
                  <Lock size={20} strokeWidth={1.5} />
                </div>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="login-input"
                />
                <button type="button" className="login-pwd-toggle">
                  <EyeOff size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Forgot Password */}
              <div className="login-forgot-wrapper">
                <a href="#" className="login-forgot-link">Forgot Password?</a>
              </div>

              {/* Submit Button */}
              <button type="submit" className="login-submit-btn">
                <span>Login</span>
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </form>

            {/* Social Login */}
            <div className="login-social-section">
              <div className="login-social-divider">
                <span>OR</span>
              </div>
              
              <div className="login-social-buttons">
                {/* Google */}
                <button type="button" className="social-btn" aria-label="Sign in with Google">
                  <FcGoogle size={24} />
                </button>
                {/* Apple */}
                <button type="button" className="social-btn" aria-label="Sign in with Apple">
                  <FaApple size={24} color="#000000" />
                </button>
                {/* Facebook */}
                <button type="button" className="social-btn" aria-label="Sign in with Facebook">
                  <FaFacebook size={24} color="#1877F2" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Footer Sign Up */}
          <div className="login-footer">
            <p>Don't have an account? <a href="#" className="login-signup-link">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
