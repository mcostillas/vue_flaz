<template>
  <header class="site-header" :class="{ 'transparent': isTransparent, 'scrolled': hasScrolled }">
    <nav class="nav-container">
      <router-link to="/" class="logo">
        <div class="logo-container">
          <img src="@/IMAGE/Flaz/3d logo.png" alt="FLAZ Technical Services Logo" class="logo-image">
        </div>
        <span class="logo-text">Flaz Technical Services</span>
      </router-link>
      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <i class="fas fa-bars"></i>
      </button>
      <div class="nav-links" :class="{ 'active': mobileMenuOpen }">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/contact" class="schedule-consultation" :class="{ 'no-active': $route.path === '/contact' }">Schedule Consultation</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      mobileMenuOpen: false,
      hasScrolled: false
    }
  },
  computed: {
    isTransparent() {
      return this.$route.path === '/' && !this.hasScrolled;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    handleScroll() {
      this.hasScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Check initial scroll position
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.site-header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.site-header.transparent {
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: none;
}

.site-header.transparent .nav-links a {
  color: var(--white);
}

.site-header.transparent .logo-text {
  color: var(--white);
}

.site-header.transparent .schedule-consultation {
  background-color: var(--accent-gold);
  color: var(--primary-blue) !important;
}

.site-header.scrolled {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-blue);
}

.logo-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.logo-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.logo-text {
  font-weight: 700;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dark);
  margin-left: 30px;
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary-blue);
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-blue);
}

.nav-links a.no-active.router-link-active::after {
  display: none;
}

.schedule-consultation {
  background-color: var(--accent-gold);
  color: var(--primary-blue) !important;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  margin-left: 30px;
  font-weight: 600;
  transition: var(--transition);
}

.schedule-consultation:hover {
  background-color: var(--primary-blue);
  color: var(--white) !important;
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-blue);
  cursor: pointer;
}

@media (max-width: 992px) {
  .mobile-menu-toggle {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--white);
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    z-index: 99;
  }
  
  .nav-links.active {
    transform: translateY(0);
  }
  
  .nav-links a {
    margin: 10px 0;
    width: 100%;
  }
  
  .schedule-consultation {
    margin: 10px 0 0;
    text-align: center;
    width: 100%;
  }
}
</style>
