// Portfolio Enhancement Script - Adds transitions and navigation
(function() {
  'use strict';

  // Add CSS and JS to head
  function addResources() {
    // Add transitions CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'transitions.css';
    document.head.appendChild(link);

    // Add navigation JS (already loaded via script tag)
  }

  // Enhance existing cards with project links
  function enhanceCards() {
    const cards = document.querySelectorAll('.cardWrap');
    const projectLinks = [
      'The-Butler-Project.html',
      'project2.html',
      'project3.html',
      'project4.html',
      'project5.html'
    ];

    cards.forEach((card, index) => {
      if (projectLinks[index]) {
        // Add visual indicator
        const indicator = document.createElement('div');
        indicator.innerHTML = '→ View Project';
        indicator.style.cssText = `
          position: absolute;
          bottom: 10px;
          right: 15px;
          background: rgba(0, 0, 255, 0.8);
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
          transition: all 0.3s ease;
        `;
        
        card.style.position = 'relative';
        card.appendChild(indicator);
        
        // Add hover effect for indicator
        card.addEventListener('mouseenter', () => {
          indicator.style.transform = 'translateX(5px)';
        });
        
        card.addEventListener('mouseleave', () => {
          indicator.style.transform = 'translateX(0)';
        });
      }
    });
  }

  // Initialize enhancements
  function init() {
    addResources();
    
    // Only enhance cards on home page
    if (window.location.pathname.includes('Home.html') || window.location.pathname === '/') {
      enhanceCards();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
