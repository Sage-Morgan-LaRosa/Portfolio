// Portfolio Navigation System
(function() {
  'use strict';

  // Configuration
  const config = {
    transitionDuration: 500,
    loadingDelay: 300,
    backButtonText: '← Back'
  };

  // Create loading overlay
  function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  // Create sticky back button
  function createStickyBackButton() {
    const button = document.createElement('button');
    button.className = 'sticky-back';
    button.textContent = config.backButtonText;
    button.setAttribute('aria-label', 'Go back to previous page');
    
    button.addEventListener('click', function() {
      navigateBack();
    });
    
    document.body.appendChild(button);
    return button;
  }

  // Smooth page transition
  function navigateTo(url) {
    const overlay = document.querySelector('.loading-overlay') || createLoadingOverlay();
    overlay.classList.add('active');
    
    setTimeout(() => {
      window.location.href = url;
    }, config.loadingDelay);
  }

  // Navigate back
  function navigateBack() {
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
      window.history.back();
    } else {
      // If no referrer, go to home
      window.location.href = 'Home.html';
    }
  }

  // Add click handlers to cards and images
  function addCardClickHandlers() {
    const cards = document.querySelectorAll('.cardWrap');
    const fakeImages = document.querySelectorAll('.fakeimg');
    
    const projectLinks = [
      'The-Butler-Project.html',
      'project2.html',
      'project3.html',
      'project4.html',
      'project5.html'
    ];

    // Make entire cards clickable
    cards.forEach((card, index) => {
      if (projectLinks[index]) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
          navigateTo(projectLinks[index]);
        });
      }
    });

    // Make images clickable
    fakeImages.forEach((img, index) => {
      if (projectLinks[index]) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent card click if image is clicked
          navigateTo(projectLinks[index]);
        });
        
        // Add visual feedback for clickable images
        img.style.transition = 'all 0.3s ease';
        img.addEventListener('mouseenter', function() {
          img.style.transform = 'scale(1.05)';
          img.style.boxShadow = '0 5px 15px rgba(0, 255, 247, 0.5)';
        });
        
        img.addEventListener('mouseleave', function() {
          img.style.transform = 'scale(1)';
          img.style.boxShadow = 'none';
        });
      }
    });
  }

  // Initialize page
  function initPage() {
    // Add page transition class
    document.body.classList.add('page-transition');
    
    // Create sticky back button (except on home page)
    if (!window.location.pathname.includes('Home.html') && window.location.pathname !== '/') {
      createStickyBackButton();
    }
    
    // Add card click handlers on home page
    if (window.location.pathname.includes('Home.html') || window.location.pathname === '/') {
      addCardClickHandlers();
    }
    
    // Hide loading overlay when page loads
    window.addEventListener('load', function() {
      const overlay = document.querySelector('.loading-overlay');
      if (overlay) {
        overlay.classList.remove('active');
      }
    });
  }

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navigateBack();
    }
  });

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }

})();
