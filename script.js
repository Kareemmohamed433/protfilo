document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Typed.js for Hero Section
  new Typed('.typing-text', {
    strings: ['AI Engineer', 'IoT Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

  // Gallery Toggle
  document.querySelectorAll('.gallery-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const galleryId = trigger.getAttribute('href').substring(1);
      const gallery = document.getElementById(galleryId);
      gallery.classList.toggle('active');
    });
  });

  // Smooth Scrolling for Navigation Links and Hero Scroll
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Image Zoom Functionality
  let currentImageIndex = 0;
  let images = [];
  let modal = null;
  let zoomImage = null;

  document.querySelectorAll('.project-image img, .gallery-item img').forEach((img, index) => {
    images.push(img.src);
    img.addEventListener('click', () => {
      currentImageIndex = images.indexOf(img.src);
      showZoomImage(img.src);
    });
  });

  function showZoomImage(src) {
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'zoom-modal';
      const nav = document.createElement('div');
      nav.className = 'zoom-nav';
      nav.innerHTML = `
        <button id="prevBtn"><i class="fas fa-chevron-left"></i></button>
        <button id="nextBtn"><i class="fas fa-chevron-right"></i></button>
      `;
      const img = document.createElement('img');
      img.className = 'zoom-image';
      modal.appendChild(nav);
      modal.appendChild(img);
      document.body.appendChild(modal);

      zoomImage = img;
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
      document.getElementById('prevBtn').addEventListener('click', showPrevImage);
      document.getElementById('nextBtn').addEventListener('click', showNextImage);
    }

    zoomImage.src = src;
    modal.classList.add('active');
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    zoomImage.src = images[currentImageIndex];
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    zoomImage.src = images[currentImageIndex];
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'Escape') modal.classList.remove('active');
    }
  });

  // Animated Border Design for Person Image
  const profileImg = document.querySelector('.profile-img');
  profileImg.addEventListener('click', () => {
    profileImg.classList.toggle('animated-border');
  }); 
});