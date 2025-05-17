<template>
  <section class="hero-section-image" id="hero-video">
    <div class="video-background">
      <!-- Video background -->
      <img src="../../imgfiles/Video/Building.jpg" alt="Building Hero Image" class="video-element">
      <!-- Enhanced overlay with gradient and pattern -->
      <div class="video-overlay">
        <div class="overlay-pattern"></div>
        <div class="overlay-gradient"></div>
      </div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge animate-fade-in">
          <i class="fas fa-star"></i> 
          PREMIER TECHNICAL SERVICES IN DUBAI
        </div>
        <h1 class="hero-title animate-slide-up">
          Transforming Visions<br>
          Into Reality
        </h1>
        <p class="hero-subtitle animate-fade-in">
          Dubai's leading technical services provider delivering exceptional maintenance, fitout, and engineering solutions. Where innovation meets craftsmanship.
        </p>
        <div class="hero-cta">
          <router-link to="/contact" class="primary-btn">Schedule Consultation</router-link>
          <a href="#services" class="secondary-btn">View Services</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="logo-wrapper">
          <div class="logo-decoration"></div>
          <div class="placeholder-logo">
            <img src="https://placehold.co/200x200/001F54/FFC107/png?text=FLAZ" alt="FLAZ Technical Services Logo" class="logo-image">
          </div>
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
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
  name: 'HeroSectionVideo'
}
</script>

<style scoped>
/* Hero Section with Video Background */
.hero-section-video {
  position: relative;
  color: var(--white);
  padding: 100px 0 150px; /* Add padding at the bottom for the wave */
  overflow: hidden;
  margin-bottom: 0;
}

/* Video Background */
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
  object-position: center;
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
    rgba(0, 31, 84, 0.5) 0%,
    rgba(0, 31, 84, 0.35) 50%,
    rgba(0, 31, 84, 0.45) 100%
  );
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

/* Hero Content */
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2; /* Above the video */
}

.hero-text {
  flex: 1;
  max-width: 600px;
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
  font-size: 3.8rem;
  line-height: 1.2;
  margin-bottom: 25px;
  color: var(--white);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  font-weight: 800;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  max-width: 90%;
  line-height: 1.6;
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-cta {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  animation: fadeIn 1.5s ease-out forwards;
}

.primary-btn {
  background-color: var(--accent-gold);
  color: var(--primary-blue);
  padding: 15px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
  position: relative;
  overflow: hidden;
}

.primary-btn:hover {
  background-color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
}

.primary-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

.primary-btn:hover::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(20, 20);
    opacity: 0;
  }
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
  flex: 1;
  position: relative;
}

.logo-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.logo-decoration {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(26, 27, 58, 0.7) 0%, rgba(26, 27, 58, 0.9) 100%);
  border-radius: 50%;
  opacity: 0.8;
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
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.floating-shapes .shape {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  animation: float 6s infinite ease-in-out;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 10%;
  animation-delay: 0s !important;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  left: 20%;
  animation-delay: 1s !important;
}

.shape-3 {
  width: 40px;
  height: 40px;
  top: 40%;
  right: 10%;
  animation-delay: 2s !important;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

/* Wave Animation */
.wave-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 3;
  overflow: hidden; /* Ensure no overflow */
}

.waves {
  position: absolute;
  bottom: -1px; /* Ensure it connects with the next section */
  left: 0;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
  display: block;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  display: block;
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

/* Media Queries */
@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-text {
    margin-bottom: 40px;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .logo-wrapper {
    height: 300px;
  }
  
  .logo-decoration {
    width: 280px;
    height: 280px;
  }
  
  .placeholder-logo {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 576px) {
  .hero-section-video {
    padding: 80px 0 0;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 15px;
  }
  
  .wave-wrapper {
    height: 100px;
  }
}
</style>
