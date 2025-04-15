document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const closeBtn = document.querySelector('.close-btn');
  
    if (hamburger && navMenu && closeBtn) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
  
      closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    }
  
    // Read More functionality for blog posts
    const readMoreLinks = document.querySelectorAll('.read-more');
  
    readMoreLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const blogPost = link.closest('.blog-post');
        const fullContent = blogPost.querySelector('.full-content');
  
        if (fullContent.style.display === 'none' || fullContent.style.display === '') {
          fullContent.style.display = 'block';
          link.textContent = 'Read Less';
        } else {
          fullContent.style.display = 'none';
          link.textContent = 'Read More';
        }
      });
    });
  });