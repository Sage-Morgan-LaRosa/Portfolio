// This script adds navigation to all project pages
(function() {
  'use strict';

  // Check if we're on a project page (not Home.html)
  const isProjectPage = !window.location.pathname.includes('Home.html');
  
  if (isProjectPage) {
    // Add transitions CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'transitions.css';
    document.head.appendChild(link);

    // Add navigation script
    const navScript = document.createElement('script');
    navScript.src = 'navigation.js';
    document.body.appendChild(navScript);
  }
})();
