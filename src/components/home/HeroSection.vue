<template>
  <section class="hero-section">
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
  name: 'HeroSection'
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  color: var(--white);
  padding: 100px 0 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-text {
  flex: 1;
  max-width: 600px;
  z-index: 2;
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
  flex: 1;
  position: relative;
  z-index: 2;
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
