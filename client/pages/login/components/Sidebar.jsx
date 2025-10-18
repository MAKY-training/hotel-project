import React from 'react';
// Must import the image first and store it as a JavaScript variable
import SidebarImage from '../../images/login-left-center.svg'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon"></span>
          <span className="logo-text">CodeSquid</span>
        </div>
        
        {/* Illustration Image - We use the imported variable */}
        <img 
           src={SidebarImage} 
           alt="Illustration of people working" 
           className="sidebar-image" 
        />
        {/* Marketing text */}
        <div className="marketing-text">
          Simple Stays, Great Memories
        </div>
        <div class="div-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt.
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
