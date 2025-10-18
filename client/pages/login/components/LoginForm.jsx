import React, { useState } from 'react';
import eyeRegular from '../../images/eye-regular.svg' ;
import eyeSlashRegular from '../../images/eye-slash-regular.svg' ;

// Component that contains the login form
function LoginForm() {
  // 1. Basic form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  // 2. Server connection management states (simulation)
  const [isLoading, setIsLoading] = useState(false); // to activate the loading indicator
  const [error, setError] = useState('');         // to store the error message
  const [message, setMessage] = useState('');     // to store the success message

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {  
    setShowPassword(!showPassword);
  };

  // Submission handler (Submit Handler)
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    // Reset states on every login attempt
    setError('');
    setMessage('');
    
    // Simple field validation check
    if (!email || !password) {
      setError("please enter your email and password.");
      return;
    }

    setIsLoading(true); // Start loading state

    // -----------------------------------------------------------------
    // Backend Simulation
    // -----------------------------------------------------------------
    try {
      // Wait for 2 seconds to simulate server response time
      await new Promise(resolve => setTimeout(resolve, 2000)); 

      // Simulated verification logic:
      if (email === 'admin' && password === '12345') {
        // Success state
        setMessage('Welcome!');
        setError('');
      } else {
        // Error state
        setError('username or password is not correct.');
        setMessage('');
      }
    } catch (err) {
      setError('Error in connection.');
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  return (
    <div className="login-form-area">
      <div className="login-content-wrapper">
        <h1 className="welcome-title title-font">Welcome back to the CodeSquid Community</h1>
        
        <form className="login-form" onSubmit={handleSubmit}>
          
          {/* Email/Username field */}
          <label htmlFor="email">Email or Use</label>
          <input 
            type="text" 
            id="email" 
            placeholder="johndadev" 
            className="input-field"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading} // Disable field during loading
          />
          
          {/* Password field */}
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input 
              type={showPassword ? 'text' : 'password'} 
              id="password" 
              placeholder="******" 
              className="input-field"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              disabled={isLoading} // Disable field during loading
            />
            <span className="password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <img src={eyeSlashRegular} alt="eye Slash Regular" /> : <img src= {eyeRegular} alt="eye Regular" />  }
            </span> 
          </div>

          {/* ------------------------------------------------ */}
          {/* Displaying error and success messages (NEW) */}
          {/* ------------------------------------------------ */}
          {error && <p className="form-message error">{error}</p>}
          {message && <p className="form-message success">{message}</p>}
          
          {/* Remember me option and Log In button */}
          <div className="form-actions">
            <div className="remember-me">
              <input type="checkbox" id="remember" disabled={isLoading} />
              <label htmlFor="remember">Remember me</label>
            </div>
            
            <button 
              type="submit" 
              className="login-button" 
              disabled={isLoading} 
            >
              {/* Change button text to "Loading..." during load */}
              {isLoading ? '...LOADING' : 'LOG IN'} 
            </button>
          </div>
          
          {/* Sign Up link styling */}
          <p className="signup-prompt">
            No Account yet? <a href="#" className="signup-link">SIGN UP</a>
          </p>
          
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
