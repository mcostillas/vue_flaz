<template>
  <section class="hero-section">
    <div class="video-background">
      <!-- Image background -->
      <img src="@/imgfiles/Flaz/heropath.jpg" alt="Building Hero Image" class="video-element">
      <!-- Enhanced overlay with gradient and pattern -->
      <div class="video-overlay">
        <div class="overlay-pattern"></div>
        <div class="overlay-gradient"></div>
      </div>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">
          <i class="fas fa-star"></i> 
          PREMIER TECHNICAL SERVICES IN DUBAI
        </div>
        <h1 class="hero-title">
          Elevate Your Space<br>
          With Excellence
        </h1>
        <p class="hero-subtitle">
          Dubai's trusted partner for premium maintenance and fitout solutions. Experience unmatched quality, innovation, and reliability.
        </p>
        <div class="hero-cta">
          <router-link to="/contact" class="primary-btn">Schedule Consultation</router-link>
          <a href="#services" class="secondary-btn">View Services</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="project-showcase">
          <div class="project-card" :class="{ 'active': activeProject === 0 }">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Modern Office Building" class="project-image">
            <div class="project-info">
              <h3>Commercial Excellence</h3>
              <p>Premium technical solutions for modern offices</p>
            </div>
          </div>
          <div class="project-card" :class="{ 'active': activeProject === 1 }">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Luxury Residential Tower" class="project-image">
            <div class="project-info">
              <h3>Residential Expertise</h3>
              <p>High-end technical services for luxury living</p>
            </div>
          </div>
          <div class="project-card" :class="{ 'active': activeProject === 2 }">
            <img src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Smart Building Complex" class="project-image">
            <div class="project-info">
              <h3>Smart Building Solutions</h3>
              <p>Integrated technical systems for modern facilities</p>
            </div>
          </div>
          <div class="project-controls">
            <button @click="prevProject" class="control-btn"><i class="fas fa-chevron-left"></i></button>
            <div class="project-indicators">
              <span v-for="(dot, index) in 3" :key="index" 
                    :class="{ 'active': activeProject === index }" 
                    @click="activeProject = index"></span>
            </div>
            <button @click="nextProject" class="control-btn"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="wave-wrapper">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="0" fill="#fff" />
        </g>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      activeProject: 0
    };
  },
  methods: {
    nextProject() {
      this.activeProject = (this.activeProject + 1) % 3;
    },
    prevProject() {
      this.activeProject = (this.activeProject - 1 + 3) % 3;
    }
  },
  mounted() {
    // Auto-rotate projects every 5 seconds
    setInterval(() => {
      this.nextProject();
    }, 5000);
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  color: var(--white);
  padding: 190px 0 0; /* Increased top padding to account for nav height */
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
  margin-top: -100px; /* Pull the section up further to start above the top of the page */
}

/* Video/Image Background */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%; /* Position the image to show the top-middle part */
  z-index: 0;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(var(--primary-blue-rgb), 0.7) 0%,
    rgba(var(--secondary-blue-rgb), 0.55) 50%,
    rgba(var(--primary-blue-rgb), 0.65) 100%
  );
}

.overlay-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(var(--accent-gold-rgb), 0.15) 0%, transparent 60%);
  z-index: 1;
}

.overlay-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></svg>');
  opacity: 0.3;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  text-align: left;
  position: relative;
}

.hero-text {
  flex: 1;
  max-width: 500px;
  z-index: 2;
  margin-left: 15px;
}

.hero-badge {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 25px;
}

.hero-badge i {
  color: var(--accent-gold);
  margin-right: 5px;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 25px;
  color: var(--white);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.8);
}

.hero-cta {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
}

.primary-btn {
  background-color: var(--accent-gold);
  color: var(--primary-blue);
  padding: 15px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
}

.primary-btn:hover {
  background-color: var(--white);
}

.secondary-btn {
  background-color: transparent;
  color: var(--white);
  padding: 15px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  border: 2px solid var(--white);
  transition: var(--transition);
}

.secondary-btn:hover {
  background-color: var(--white);
  color: var(--primary-blue);
}

.hero-image {
  flex: 1.2;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -200px;
}

.project-showcase {
  width: 700px;
  height: 550px;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.project-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.project-card.active {
  opacity: 1;
  z-index: 2;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: var(--white);
}

.project-info h3 {
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.project-info p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.project-controls {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.control-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition);
}

.control-btn:hover {
  background: var(--accent-gold);
  color: var(--primary-blue);
}

.project-indicators {
  display: flex;
  margin: 0 15px;
}

.project-indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: var(--transition);
}

.project-indicators span.active {
  background-color: var(--accent-gold);
  transform: scale(1.2);
}

.logo-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.spinning-logo-container {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;
}

.spinning-logo {
  width: 100%;
  height: auto;
  animation: spin 20s linear infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  transform-style: preserve-3d;
}

@keyframes spin {
  0% { transform: rotateY(0deg) rotateX(10deg); }
  25% { transform: rotateY(90deg) rotateX(5deg); }
  50% { transform: rotateY(180deg) rotateX(10deg); }
  75% { transform: rotateY(270deg) rotateX(5deg); }
  100% { transform: rotateY(360deg) rotateX(10deg); }
}

.placeholder-logo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-blue);
  color: var(--white);
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 3px solid var(--accent-gold);
  z-index: 2;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.placeholder-logo img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
}

.placeholder-logo span {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.placeholder-logo .subtitle {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 5px;
}

.floating-shapes .shape {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  animation: float 6s infinite ease-in-out;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 50px;
  left: 0;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 200px;
  right: 50px;
  animation-delay: 2s;
}

.shape-3 {
  width: 40px;
  height: 40px;
  bottom: 50px;
  left: 100px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.wave-wrapper {
  position: relative;
  height: 150px;
  width: 100%;
}

.waves {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}

/* Responsive Styles */
@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-text {
    margin-bottom: 50px;
  }
  
  .hero-cta {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
