function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Scroll animation for header and background image (project area animation removed)
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 700; // max scroll value to trigger full animation

  // Calculate scroll progress between 0 and 1
  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  // Calculate new header height
  const header = document.querySelector('.header');
  const h2 = header.querySelector('h1.title');
  const titleContainer = document.querySelector('.title-container');
  const backgroundImage = document.querySelector('.background-image');

  // Interpolate header height from 1000px to 200px
  const newHeaderHeight = 1000 - (800 * scrollProgress);
  header.style.height = newHeaderHeight + 'px';

  // Remove font size shrinking for title
  // h2.style.fontSize = newFontSize + 'px'; // Removed

  // Fade out title-container opacity from 1 to 0
  const newOpacity = 1 - scrollProgress;
  if (titleContainer) {
    titleContainer.style.opacity = newOpacity;
  }
});

// IntersectionObserver to animate cards on scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const projectArea = document.querySelector('.project-area');
  const cardWraps = document.querySelectorAll('.cardWrap');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cardWraps.forEach(card => card.classList.add('animate-in'));
        const line = document.querySelector('.animated-line');
        if (line) line.classList.add('animate');
      } else {
        cardWraps.forEach(card => card.classList.remove('animate-in'));
        const line = document.querySelector('.animated-line');
        if (line) line.classList.remove('animate');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(projectArea);
});
