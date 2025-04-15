// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Add a simple animation for page elements
    const pageContent = document.querySelector('header');
    if (pageContent) {
        pageContent.style.opacity = '0';
        setTimeout(() => {
            pageContent.style.transition = 'opacity 1s ease';
            pageContent.style.opacity = '1';
        }, 100);
    }

    // Add functionality to blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            // Add a read more/less functionality
            const postContent = post.querySelector('p');
            const originalText = postContent.textContent;
            
            if (originalText.length > 100) {
                const shortText = originalText.substring(0, 100) + '...';
                
                // Create read more button
                const readMoreBtn = document.createElement('button');
                readMoreBtn.textContent = 'Read More';
                readMoreBtn.className = 'read-more-btn';
                
                // Set initial state
                postContent.textContent = shortText;
                post.appendChild(readMoreBtn);
                
                // Toggle functionality
                let expanded = false;
                readMoreBtn.addEventListener('click', function() {
                    if (expanded) {
                        postContent.textContent = shortText;
                        readMoreBtn.textContent = 'Read More';
                    } else {
                        postContent.textContent = originalText;
                        readMoreBtn.textContent = 'Read Less';
                    }
                    expanded = !expanded;
                });
            }
        });
    }

    // Add image zoom functionality for gallery
    const galleryImages = document.querySelectorAll('.gallery img');
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                // Create a modal for the clicked image
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1000';
                
                // Create the large image
                const largeImg = document.createElement('img');
                largeImg.src = this.src;
                largeImg.style.maxWidth = '80%';
                largeImg.style.maxHeight = '80%';
                largeImg.style.borderRadius = '5px';
                
                // Add close functionality
                modal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                modal.appendChild(largeImg);
                document.body.appendChild(modal);
            });
        });
    }

    // Add form validation for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let valid = true;
            
            if (!name.trim()) {
                alert('Nama tidak boleh kosong');
                valid = false;
            }
            
            if (!email.trim() || !email.includes('@')) {
                alert('Masukkan email yang valid');
                valid = false;
            }
            
            if (!message.trim()) {
                alert('Pesan tidak boleh kosong');
                valid = false;
            }
            
            if (valid) {
                alert('Pesan berhasil dikirim!');
                contactForm.reset();
            }
        });
    }
});