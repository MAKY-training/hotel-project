// src/pages/Login/index.jsx
 
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';

function LoginPage() {
  return (
// The main page container (applies Grid division from index.css)
    <div className="login-page-container">
      <Sidebar />
      <LoginForm />
    </div>
  );
}

// Exporting as LoginPage to distinguish it as a page
export default LoginPage;
