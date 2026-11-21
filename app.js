/* ==========================================================================
   CREATIVE PORTFOLIO - JS ENGINE & CONFIG
   Author: Abhishek Sen
   ========================================================================== */

/**
 * PORTFOLIO DATA CONFIGURATION
 * Simply edit this object below to update all text and data on the website!
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "Abhisekh mohanty",
    title: "Aspiring Data Analyst",
    bio: "I specialize in engineering high-fidelity, interactive, and visually stunning digital products. Crossing the boundaries between modern frontend design systems and robust backend architecture.",
    resumeUrl: "#",
    avatarUrl: "./assets/avatar.png",
    socials: [
      { name: "github", url: "https://github.com", icon: "fa-brands fa-github" },
      { name: "linkedin", url: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" },
      { name: "twitter", url: "https://twitter.com", icon: "fa-brands fa-x-twitter" },
      { name: "codepen", url: "https://codepen.io", icon: "fa-brands fa-codepen" }
    ],
    typingRoles: [
      "Data Analyst & Visualization Specialist",
      "Statistical Modeling Engineer",
      "Machine Learning Enthusiast",
      "Problem Solver & Tech Innovator"
    ]
  },
  stats: [
    { number: "5+", label: "Years Experience" },
    { number: "35+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" }
  ],
  skills: {
    technical: [
      { name: "Python", percent: 92, icon: "fa-brands fa-python" },
      { name: "SQL", percent: 90, icon: "fa-solid fa-database" },
      { name: "Pandas", percent: 88, icon: "fa-solid fa-table" },
      { name: "NumPy", percent: 85, icon: "fa-solid fa-calculator" }
    ],
    creative: [
      { name: "PowerBI", percent: 90, icon: "fa-solid fa-chart-pie" },
      { name: "Matplotlib", percent: 85, icon: "fa-solid fa-chart-line" },
      { name: "Seaborn", percent: 82, icon: "fa-solid fa-chart-area" },
      { name: "Advance Excel", percent: 92, icon: "fa-solid fa-file-excel" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Vigil CyberSecurity Dashboard",
      desc: "A futuristic real-time network attack visualizer and control center utilizing WebSockets and modern canvas graphics.",
      img: "./assets/project-dashboard.png",
      tags: ["React.js", "Canvas API", "Socket.io", "Tailwind"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "Synthetix AI Code Editor",
      desc: "A browser-based cloud IDE featuring real-time collaborative editing, live compilation, and inline AI suggestions.",
      img: "./assets/project-editor.png",
      tags: ["TypeScript", "Next.js", "Monaco Editor", "AI SDK"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Apex Crypto Analytics",
      desc: "A responsive analytics terminal tracking global cryptocurrency trends, indices, and asset forecasting using 3D chart systems.",
      img: "./assets/project-crypto.png",
      tags: ["Vue.js", "D3.js", "Three.js", "FastAPI"],
      category: "backend",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ],
  experience: [
    {
      role: "Lead Interactive Engineer",
      company: "Aetherial Labs",
      duration: "2024 - Present",
      descList: [
        "Architecting complex, responsive design systems and micro-frontends with high UX standards.",
        "Created an interactive visual programming compiler tool reducing asset deployment cycles by 30%.",
        "Mentoring team members on modular CSS variables, design tokens, and smooth, responsive animations."
      ]
    },
    {
      role: "Senior Full-Stack Developer",
      company: "Quantum Systems",
      duration: "2022 - 2024",
      descList: [
        "Engineered secure, scalable Node.js/Python REST API endpoints handling over 2M requests daily.",
        "Integrated modern real-time visualization frameworks boosting user interaction metrics by 45%.",
        "Refactored styling layer into a performance-driven CSS architecture, removing redundant bundle footprint."
      ]
    },
    {
      role: "Software Developer",
      company: "NovaTech Solutions",
      duration: "2021 - 2022",
      descList: [
        "Built responsive SPAs for clients in fintech and logistics, prioritizing clean layouts and usability.",
        "Optimized frontend bundle sizes, yielding a 40% speed increase in mobile paint/hydration cycles."
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  // Populate dynamically
  initDataBinding();
  
  // Navigation scrolling & active link highlighting
  initNavigation();
  
  // Scroll reveal system
  initScrollReveal();
  
  // Floating canvas particle system
  initParticleBackground();
  
  // Typewriter effect
  initTypewriter();
  
  // Project filtering
  initProjectFiltering();
  
  // Form submission
  initContactForm();
});

/* ==========================================================================
   DYNAMIC DATA BINDING
   ========================================================================== */
function initDataBinding() {
  const data = PORTFOLIO_DATA;
  
  // Profile elements
  document.getElementById("profile-name").textContent = data.profile.name;
  document.getElementById("profile-name-nav").textContent = data.profile.name;
  document.getElementById("profile-bio").textContent = data.profile.bio;
  document.getElementById("profile-avatar").src = data.profile.avatarUrl;
  document.getElementById("profile-avatar").alt = data.profile.name;
  document.getElementById("profile-footer-name").textContent = data.profile.name;
  
  // Social Links
  const socialContainers = document.querySelectorAll(".social-links-target");
  socialContainers.forEach(container => {
    container.innerHTML = "";
    data.profile.socials.forEach(s => {
      const a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.className = "social-link";
      a.setAttribute("aria-label", s.name);
      a.innerHTML = `<i class="${s.icon}"></i>`;
      container.appendChild(a);
    });
  });
  
  // Stats
  const statsGrid = document.getElementById("stats-grid");
  statsGrid.innerHTML = "";
  data.stats.forEach(st => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <span class="stat-num">${st.number}</span>
      <span class="stat-lbl">${st.label}</span>
    `;
    statsGrid.appendChild(card);
  });
  
  // Technical Skills
  const technicalList = document.getElementById("technical-skills-list");
  technicalList.innerHTML = "";
  data.skills.technical.forEach(sk => {
    const item = document.createElement("div");
    item.className = "skill-item";
    const iconHTML = sk.icon ? `<i class="${sk.icon}" style="margin-right: 0.6rem; color: var(--accent-cyan); width: 1.2rem; text-align: center;"></i>` : "";
    item.innerHTML = `
      <div class="skill-info">
        <span class="skill-name">${iconHTML}${sk.name}</span>
        <span class="skill-percent">${sk.percent}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-width="${sk.percent}%"></div>
      </div>
    `;
    technicalList.appendChild(item);
  });
  
  // Creative Skills
  const creativeList = document.getElementById("creative-skills-list");
  creativeList.innerHTML = "";
  data.skills.creative.forEach(sk => {
    const item = document.createElement("div");
    item.className = "skill-item";
    const iconHTML = sk.icon ? `<i class="${sk.icon}" style="margin-right: 0.6rem; color: var(--accent-cyan); width: 1.2rem; text-align: center;"></i>` : "";
    item.innerHTML = `
      <div class="skill-info">
        <span class="skill-name">${iconHTML}${sk.name}</span>
        <span class="skill-percent">${sk.percent}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-width="${sk.percent}%"></div>
      </div>
    `;
    creativeList.appendChild(item);
  });
  
  // Timeline Experience
  const timeline = document.getElementById("experience-timeline");
  timeline.innerHTML = "";
  data.experience.forEach(exp => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    
    let bulletPointsHTML = "";
    exp.descList.forEach(desc => {
      bulletPointsHTML += `<li>${desc}</li>`;
    });
    
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h4 class="timeline-role">${exp.role}</h4>
            <div class="timeline-company">${exp.company}</div>
          </div>
          <span class="timeline-date">${exp.duration}</span>
        </div>
        <div class="timeline-desc">
          <ul>${bulletPointsHTML}</ul>
        </div>
      </div>
    `;
    timeline.appendChild(item);
  });
  
  // Projects
  renderProjects(data.projects);
}

function renderProjects(projectsArray) {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";
  
  projectsArray.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.setAttribute("data-category", p.category);
    
    let tagsHTML = "";
    p.tags.forEach(tag => {
      tagsHTML += `<span class="project-tag">${tag}</span>`;
    });
    
    card.innerHTML = `
      <div class="project-img">
        <img src="${p.img}" alt="${p.title}">
        <div class="project-overlay">
          <a href="${p.github}" target="_blank" class="project-overlay-btn" aria-label="View Code">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="${p.demo}" target="_blank" class="project-overlay-btn" aria-label="View Demo">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div class="project-content">
        <h4 class="project-title">${p.title}</h4>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${tagsHTML}</div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinksContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  
  // Blur navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  // Mobile Nav Toggle
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinksContainer.classList.contains("open");
    if (isOpen) {
      navLinksContainer.classList.remove("open");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    } else {
      navLinksContainer.classList.add("open");
      menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });
  
  // Close menu when clicking link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("open");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    });
  });
  
  // Active Link Observer
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Active when section fills screen
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   SCROLL REVEAL & SKILLS PROGRESS ANIMATION
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const skillBars = document.querySelectorAll(".skill-progress");
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  reveals.forEach(el => revealObserver.observe(el));
  
  // Skills Animation Observer
  const skillsSection = document.getElementById("skills");
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }
}

/* ==========================================================================
   PARTICLE BACKGROUND CANVAS
   ========================================================================== */
function initParticleBackground() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  // Mouse listeners
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  
  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.8;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * 0.4 - 0.2;
      this.color = Math.random() > 0.5 ? "rgba(0, 242, 254, 0.45)" : "rgba(155, 81, 224, 0.35)";
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Bounce boundaries
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      
      // Mouse interaction (repel slightly)
      if (mouse.x !== null && mouse.y !== null) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let forceX = (dx / distance) * force * 1.5;
          let forceY = (dy / distance) * force * 1.5;
          
          this.x += forceX;
          this.y += forceY;
        }
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
  // Init particle array
  const particleCount = Math.min(65, Math.floor((canvas.width * canvas.height) / 18000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < 115) {
          let alpha = (1 - (distance / 115)) * 0.12;
          ctx.strokeStyle = `rgba(140, 144, 181, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    connect();
    requestAnimationFrame(animate);
  }
  
  animate();
}

/* ==========================================================================
   TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById("hero-role-typed");
  if (!target) return;
  
  const roles = PORTFOLIO_DATA.profile.typingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 120;
    }
    
    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of text
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before starting next text
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start the typewriter loop
  setTimeout(type, 1000);
}

/* ==========================================================================
   PROJECT FILTERING
   ========================================================================== */
function initProjectFiltering() {
  const tabs = document.querySelectorAll(".filter-tab");
  const grid = document.getElementById("projects-grid");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Toggle active states
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const filter = tab.getAttribute("data-filter");
      const cards = grid.querySelectorAll(".project-card");
      
      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        
        if (filter === "all" || category === filter) {
          card.style.display = "block";
          // Subtle trigger re-entry animation
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px) scale(0.95)";
          // Remove from layout after transition finishes
          setTimeout(() => {
            card.style.display = "none";
          }, 350);
        }
      });
    });
  });
}

/* ==========================================================================
   CONTACT FORM HANDLER & SIMULATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successOverlay = document.getElementById("form-success-overlay");
  const successBtn = document.getElementById("success-close-btn");
  
  if (!form || !successOverlay) return;
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");
    
    // Quick client validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Customize thank you message with the user's name
    const senderName = nameInput.value.trim();
    document.getElementById("success-sender").textContent = senderName;
    
    // Change submit button state to simulating progress
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Dispatching Message...';
    
    // Simulate networking delay
    setTimeout(() => {
      // Open success overlay modal inside form card
      successOverlay.classList.add("show");
      
      // Reset form fields
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1500);
  });
  
  // Close Overlay Modal
  if (successBtn) {
    successBtn.addEventListener("click", () => {
      successOverlay.classList.remove("show");
    });
  }
}
