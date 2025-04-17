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
      const blogPostContent = blogPost.querySelector('.blog-post-content');
      const preview = blogPost.querySelector('.preview'); // Ambil elemen preview
      const fullContent = blogPost.querySelector('.full-content');

      if (fullContent.style.display === 'none' || fullContent.style.display === '') {
        preview.style.display = 'block'; // Tampilkan preview
        fullContent.style.display = 'block'; // Tampilkan full content
        link.textContent = 'Read Less';
        blogPostContent.classList.add('expanded'); // Tambah kelas expanded
      } else {
        preview.style.display = 'none'; // Sembunyikan preview
        fullContent.style.display = 'none'; // Sembunyikan full content
        link.textContent = 'Read More';
        blogPostContent.classList.remove('expanded'); // Hapus kelas expanded
      }
    });
  });
});