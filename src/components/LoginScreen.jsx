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
                <button type="button" className="social-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
                {/* Apple */}
                <button type="button" className="social-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.488 15.35c.017 3.375 2.915 4.49 2.936 4.5-.022.072-.452 1.547-1.503 3.08-.909 1.327-1.854 2.646-3.328 2.671-1.448.026-1.92-.857-3.58-.857-1.657 0-2.184.83-3.559.881-1.425.053-2.528-1.442-3.442-2.766-1.874-2.71-3.313-7.653-1.393-10.988.948-1.644 2.656-2.688 4.475-2.713 1.4-.025 2.698.944 3.558.944.862 0 2.457-1.157 4.15-1.002 1.77.153 3.376 1.036 4.302 2.585-3.7 2.146-3.087 7.42-.616 8.665zM14.945 3.393c.783-.948 1.31-2.267 1.164-3.585-1.127.045-2.493.75-3.298 1.696-.723.843-1.316 2.196-1.144 3.488 1.261.098 2.52-.66 3.278-1.6z"/>
                  </svg>
                </button>
                {/* Facebook */}
                <button type="button" className="social-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.294h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
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
