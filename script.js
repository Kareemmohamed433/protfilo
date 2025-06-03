document.addEventListener('DOMContentLoaded', () => {
  // Page Load Animation
  document.body.classList.add('page-loaded');

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Translations for English and Arabic
  const translations = {
    en: {
      welcome: "Hello! Please choose your language:<br><button class='lang-btn' data-lang='en'>English</button> <button class='lang-btn' data-lang='ar'>العربية</button>",
      projects: "Projects",
      cv: "CV",
      contact: "Contact",
      placeholder: "Type your message...",
      defaultResponse: "I'm sorry, I didn't understand your question. Could you please clarify?",
      projectPrompt: "You can ask about projects like: Face Recognition, Potato Leaf Detection, ESP32 IoT System, Shop Website, or Data Dashboard. Or request CV by typing 'CV'.",
      cvResponse: 'You can download the CV from <a href="kareem.pdf" download>here</a>.',
      contactResponse: `You can contact me through:
        - Email: <a href="mailto:km0848230@gmail.com">km0848230@gmail.com</a>
        - WhatsApp: <a href="https://wa.me/201022957599">+20 102 295 7599</a>
        - LinkedIn: <a href="#" class="linkedinTrigger">Kareem Mohamed</a>
        - GitHub: <a href="https://github.com/Kareemmohamed433">Kareemmohamed433</a>`,
      prev: "Previous",
      next: "Next",
      welcomeAfterLang: "Hello! How can I assist you today?"
    },
    ar: {
      welcome: "مرحبًا! من فضلك، اختر لغتك:<br><button class='lang-btn' data-lang='en'>English</button> <button class='lang-btn' data-lang='ar'>العربية</button>",
      projects: "المشاريع",
      cv: "السيرة الذاتية",
      contact: "التواصل",
      placeholder: "اكتب رسالتك...",
      defaultResponse: "عذرًا، لم أفهم سؤالك. هل يمكنك توضيحه من فضلك؟",
      projectPrompt: "يمكنك السؤال عن المشاريع مثل: التعرف على الوجوه، كشف أمراض أوراق البطاطس، نظام إنترنت الأشياء ESP32، موقع التسوق، أو لوحة بيانات. أو اطلب السيرة الذاتية بكتابة 'السيرة الذاتية'.",
      cvResponse: 'يمكنك تحميل السيرة الذاتية من <a href="kareem.pdf" download>هنا</a>.',
      contactResponse: `يمكنك التواصل معي عبر:
        - البريد الإلكتروني: <a href="mailto:km0848230@gmail.com">km0848230@gmail.com</a>
        - واتساب: <a href="https://wa.me/201022957599">+20 102 295 7599</a>
        - لينكدإن: <a href="#" class="linkedinTrigger">كريم محمد</a>
        - جيت هب: <a href="https://github.com/Kareemmohamed433">Kareemmohamed433</a>`,
      prev: "السابق",
      next: "التالي",
      welcomeAfterLang: "مرحبًا! كيف يمكنني مساعدتك اليوم؟"
    }
  };

  // Projects data
  const projectsData = {
    "face recognition": {
      en: {
        name: "Face Recognition System",
        description: "Smart attendance system using face recognition, developed with OpenCV, Flask, and Supabase. The system automatically recognizes people and records their attendance in a database.",
        tech: "Python, OpenCV, Flask, Supabase",
        link: "https://github.com/Kareemmohamed433/attendanceprogram"
      },
      ar: {
        name: "نظام التعرف على الوجوه",
        description: "نظام حضور ذكي يستخدم التعرف على الوجوه، تم تطويره باستخدام OpenCV، Flask، وSupabase. يقوم النظام بالتعرف على الأشخاص تلقائيًا وتسجيل حضورهم في قاعدة بيانات.",
        tech: "بايثون، OpenCV، Flask، Supabase",
        link: "https://github.com/Kareemmohamed433/attendanceprogram"
      }
    },
    "potato leaf detection": {
      en: {
        name: "Potato Leaf Detection",
        description: "AI model to detect diseases in potato leaves using Convolutional Neural Networks (CNN), developed with TensorFlow and Jupyter Notebook.",
        tech: "Python, TensorFlow, CNN, Jupyter",
        link: "https://github.com/Kareemmohamed433/detect_potato/blob/main/classfication_the_image.ipynb"
      },
      ar: {
        name: "كشف أمراض أوراق البطاطس",
        description: "نموذج ذكاء اصطناعي لكشف الأمراض في أوراق البطاطس باستخدام الشبكات العصبية الالتفافية (CNN)، تم تطويره باستخدام TensorFlow وJupyter Notebook.",
        tech: "بايثون، TensorFlow، CNN، Jupyter",
        link: "https://github.com/Kareemmohamed433/detect_potato/blob/main/classfication_the_image.ipynb"
      }
    },
    "esp32 iot system": {
      en: {
        name: "ESP32 IoT System",
        description: "IoT system using ESP32 to control and monitor devices through a web dashboard, with SinricPro and CloudAMQP.",
        tech: "ESP32, IoT, SinricPro, CloudAMQP",
        link: "https://github.com/Kareemmohamed433/smarthome"
      },
      ar: {
        name: "نظام إنترنت الأشياء ESP32",
        description: "نظام إنترنت الأشياء يستخدم ESP32 للتحكم ومراقبة الأجهزة من خلال لوحة تحكم ويب، مع SinricPro وCloudAMQP.",
        tech: "ESP32، إنترنت الأشياء، SinricPro، CloudAMQP",
        link: "https://github.com/Kareemmohamed433/smarthome"
      }
    },
    "shop website": {
      en: {
        name: "Shop Website",
        description: "Modern e-commerce website built with HTML, CSS, JavaScript, and Flask backend, featuring an attractive UI and smooth user experience.",
        tech: "HTML, CSS, JavaScript, Flask",
        link: "https://drive.google.com/drive/folders/1g12XKBTCF49xgMm7xN8OdW4Bq4g0RRQM?usp=sharing"
      },
      ar: {
        name: "موقع التسوق",
        description: "موقع تجارة إلكترونية حديث تم بناؤه باستخدام HTML، CSS، JavaScript، وFlask للواجهة الخلفية، يتميز بواجهة مستخدم جذابة وتجربة مستخدم سلسة.",
        tech: "HTML، CSS، JavaScript، Flask",
        link: "https://drive.google.com/drive/folders/1g12XKBTCF49xgMm7xN8OdW4Bq4g0RRQM?usp=sharing"
      }
    },
    "data dashboard": {
      en: {
        name: "Data Dashboard",
        description: "Data visualization dashboard built with Python for analytical insights using Matplotlib, Seaborn, and Streamlit.",
        tech: "Python, Matplotlib, Seaborn, Streamlit",
        link: ""
      },
      ar: {
        name: "لوحة بيانات",
        description: "لوحة بيانات لتصور البيانات تم بناؤها باستخدام بايثون لتقديم رؤى تحليلية باستخدام Matplotlib، Seaborn، وStreamlit.",
        tech: "بايثون، Matplotlib، Seaborn، Streamlit",
        link: ""
      }
    }
  };

  // Map Arabic project names to English keys
  const projectNameMap = {
    'التعرف على الوجوه': 'face recognition',
    'كشف أمراض أوراق البطاطس': 'potato leaf detection',
    'نظام إنترنت الأشياء esp32': 'esp32 iot system',
    'موقع التسوق': 'shop website',
    'لوحة بيانات': 'data dashboard'
  };

  let currentLanguage = 'en'; // Default language

  // Update chat UI based on selected language
  function updateChatUI() {
    const lang = translations[currentLanguage];
    document.getElementById('chatTitle').textContent = currentLanguage === 'en' ? 'AI Assistant' : 'المساعد الذكي';
    document.getElementById('chatInput').placeholder = lang.placeholder;
    document.querySelectorAll('.quick-reply').forEach((btn, index) => {
      if (index === 0) btn.textContent = lang.projects;
      if (index === 1) btn.textContent = lang.cv;
      if (index === 2) btn.textContent = lang.contact;
    });
  }

  // Dynamic Footer Year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Formspree Form Submission
  const contactFormspree = document.getElementById('contactForm');
  const formspreeStatus = document.getElementById('form-status');
  const submitFormspree = contactFormspree?.querySelector('button[type="submit"]');
  const submitTextFormspree = submitFormspree?.querySelector('.submit-text');
  const spinnerFormspree = submitFormspree?.querySelector('.spinner');

  if (contactFormspree) {
    contactFormspree.addEventListener('submit', async (e) => {
      e.preventDefault();

      submitFormspree.disabled = true;
      submitTextFormspree.style.display = 'none';
      spinnerFormspree.style.display = 'inline-block';

      try {
        const response = await fetch(contactFormspree.action, {
          method: 'POST',
          body: new FormData(contactFormspree),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formspreeStatus.textContent = currentLanguage === 'en' ? 'Thank you for your message! I will get back to you soon.' : 'شكرًا على رسالتك! سأرد عليك قريبًا.';
          formspreeStatus.className = 'form-status success';
          contactFormspree.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formspreeStatus.textContent = currentLanguage === 'en' ? 'Oops! There was a problem sending your message. Please try again later.' : 'عذرًا، حدثت مشكلة أثناء إرسال رسالتك. حاول مرة أخرى لاحقًا.';
        formspreeStatus.className = 'form-status error';
      } finally {
        submitFormspree.disabled = false;
        submitTextFormspree.style.display = 'inline';
        spinnerFormspree.style.display = 'none';
      }
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Navigation Active State
  const navItems = document.querySelectorAll('.nav-links a:not(.cv-link)');
  function setActiveNav() {
    const scrollPosition = window.scrollY + 100;
    navItems.forEach(item => {
      const sectionId = item.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveNav);

  // Typed.js for Hero Section
  new Typed('.typing-text', {
    strings: currentLanguage === 'en' ? ['AI Engineer', 'IoT Developer', 'Software Engineer', 'Machine Learning Engineer'] : ['مهندس ذكاء اصطناعي', 'مطور إنترنت الأشياء', 'مهندس برمجيات', 'مهندس تعلم آلي'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

  // Profile Image Enhancements
  const profileImg = document.querySelector('.profile-img');
  profileImg?.addEventListener('click', () => {
    profileImg.classList.toggle('enhanced-profile');
    profileImg.classList.toggle('animated-border');
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
      if (!link.classList.contains('linkedinTrigger')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });

  // LinkedIn Modal Handling
  const linkedinModal = document.getElementById('linkedinModal');
  const closeLinkedin = document.getElementById('closeLinkedin');
  const linkedinTriggers = document.querySelectorAll('#linkedinTrigger, #linkedinTriggerContact, #linkedinTriggerFooter, .linkedinTrigger');

  linkedinTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      linkedinModal.classList.add('active');
    });
  });

  closeLinkedin.addEventListener('click', () => {
    linkedinModal.classList.remove('active');
  });

  linkedinModal.addEventListener('click', (e) => {
    if (e.target === linkedinModal) {
      linkedinModal.classList.remove('active');
    }
  });

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Image Zoom Functionality
  let currentImageIndex = 0;
  let images = [];
  let modal = null;
  let zoomImage = null;

  // Collect all images for zoom functionality
  document.querySelectorAll('.project-image img, .gallery-item img').forEach((img, index) => {
    if (img.src) {
      images.push(img.src);
      img.addEventListener('click', () => {
        currentImageIndex = index;
        showZoomModal();
      });
    } else {
      console.error('Image missing src attribute:', img);
    }
  });

  function showZoomModal() {
    if (!modal) {
      if (images.length === 0) {
        console.error('No images available for zoom modal');
        return;
      }
      modal = document.createElement('div');
      modal.className = 'zoom-modal';
      modal.innerHTML = `
        <img class="zoom-image" src="${images[currentImageIndex]}" alt="Zoomed Image">
        <div class="zoom-nav">
          <button class="prev">${translations[currentLanguage].prev}</button>
          <button class="next">${translations[currentLanguage].next}</button>
        </div>
      `;
      document.body.appendChild(modal);
      zoomImage = modal.querySelector('.zoom-image');

      // Close modal on click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });

      // Navigation buttons
      modal.querySelector('.prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        zoomImage.src = images[currentImageIndex];
      });

      modal.querySelector('.next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        zoomImage.src = images[currentImageIndex];
      });
    } else {
      zoomImage.src = images[currentImageIndex];
      modal.querySelector('.prev').textContent = translations[currentLanguage].prev;
      modal.querySelector('.next').textContent = translations[currentLanguage].next;
    }
    modal.classList.add('active');
  }

  // Handle lazy-loaded image visibility
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    if (img.complete) {
      img.classList.add('loaded');
    }
  });

  // Chatbot Functionality
  const chatIcon = document.getElementById('chatIcon');
  const chatContainer = document.getElementById('chatContainer');
  const closeChat = document.getElementById('closeChat');
  const chatInput = document.getElementById('chatInput');
  const sendMessage = document.getElementById('sendMessage');
  const chatBox = document.getElementById('chatBox');

  // Hide input area and chat options initially
  document.querySelector('.input-area').style.display = 'none';
  document.querySelector('.chat-options').style.display = 'none';

  // Toggle chat window
  chatIcon.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
  });

  closeChat.addEventListener('click', () => {
    chatContainer.classList.remove('active');
  });

  // Add message to chat
  function addMessage(content, isUser = false, includeImage = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    if (includeImage && !isUser) {
      const img = document.createElement('img');
      img.src = 'person/kareem.jpeg';
      img.alt = 'Kareem Mohamed';
      img.className = 'chat-image';
      img.loading = 'lazy';
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/300';
        console.error('Failed to load chat image');
      };
      messageDiv.appendChild(img);
    }
    const messageContent = document.createElement('span');
    messageContent.innerHTML = content;
    messageDiv.appendChild(messageContent);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.appendChild(timeSpan);

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Add LinkedIn modal trigger for chatbot response
    const linkedinTrigger = messageDiv.querySelector('.linkedinTrigger');
    if (linkedinTrigger) {
      linkedinTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        linkedinModal.classList.add('active');
      });
    }

    // Add language button event listeners
    messageDiv.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLanguage = btn.getAttribute('data-lang');
        updateChatUI();
        document.querySelector('.input-area').style.display = 'flex';
        document.querySelector('.chat-options').style.display = 'flex';
        addMessage(translations[currentLanguage].welcomeAfterLang, false, true);
      });
    });
  }

  // Process user input
  function processMessage(input) {
    const lowerInput = input.toLowerCase().trim();
    const lang = translations[currentLanguage];
    let response = lang.defaultResponse;

    if (lowerInput === 'cv' || lowerInput.includes('download cv') || lowerInput.includes('download resume') || (currentLanguage === 'ar' && (lowerInput === 'السيرة الذاتية' || lowerInput.includes('تحميل السيرة الذاتية')))) {
      response = lang.cvResponse;
    } else if (lowerInput === 'contact' || lowerInput === 'contact info' || (currentLanguage === 'ar' && (lowerInput === 'التواصل' || lowerInput.includes('معلومات التواصل')))) {
      response = lang.contactResponse;
    } else if (lowerInput.includes('project') || lowerInput.includes('مشاريع')) {
      response = lang.projectPrompt;
    } else if (lowerInput === 'time' || (currentLanguage === 'ar' && lowerInput === 'الوقت')) {
      const now = new Date();
      response = currentLanguage === 'en'
        ? `The current time is ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short', hour12: true })} on ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`
        : `الوقت الحالي هو ${now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', hour12: true })} يوم ${now.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;
    } else if (lowerInput === 'hello' || lowerInput === 'hi' || (currentLanguage === 'ar' && (lowerInput === 'مرحبا' || lowerInput === 'مرحبًا'))) {
      response = lang.welcomeAfterLang;
    } else {
      // Check for project names in both English and Arabic
      let projectKey = Object.keys(projectsData).find(key => lowerInput.includes(key));
      if (!projectKey && currentLanguage === 'ar') {
        projectKey = Object.keys(projectNameMap).find(arName => lowerInput.includes(arName.toLowerCase()));
        if (projectKey) {
          projectKey = projectNameMap[projectKey];
        }
      }
      if (projectKey) {
        const project = projectsData[projectKey][currentLanguage];
        response = `
          <strong>${project.name}</strong><br>
          ${project.description}<br>
          <em>${currentLanguage === 'en' ? 'Technologies' : 'التقنيات'}:</em> ${project.tech}<br>
          ${project.link ? `<a href="${project.link}" target="_blank">${currentLanguage === 'en' ? 'View Code' : 'عرض الكود'}</a>` : ''}
        `;
      }
    }

    addMessage(response, false, true); // Bot response with image
  }

  // Send message event
  sendMessage.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, true); // User message
      processMessage(message);
      chatInput.value = '';
    }
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage.click();
    }
  });

  // Quick reply buttons
  document.querySelectorAll('.quick-reply').forEach(button => {
    button.addEventListener('click', () => {
      const message = button.getAttribute('data-message');
      addMessage(message, true); // User message
      processMessage(message);
    });
  });

  // Initialize chat with language selection message
  addMessage(translations[currentLanguage].welcome, false, true);

  // Update UI on load
  updateChatUI();
});