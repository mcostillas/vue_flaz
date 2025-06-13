<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>FLAZ Technical Services</h3>
          <p>Your trusted partner for premium maintenance and fitout solutions in Dubai.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61572318343723" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.tiktok.com/@flaztechnicalservices" aria-label="Tiktok"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.instagram.com/flaztechnicalsevices/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Info</h3>
          <p><i class="fas fa-map-marker-alt"></i> Office No. 231, 2nd Floor, Al Barsha Business Center, Al Barsha 1, Dubai, UAE</p>
          <p><i class="fas fa-mobile-alt"></i> CP: +971 56 355 0218</p>
          <p><i class="fas fa-phone"></i> Tel: +971 54 768 8988</p>
          <p><i class="fas fa-envelope"></i> info@flaztechnicalservices.com</p>
          <p><i class="fas fa-globe"></i> flaztechnicalservices.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} FLAZ Technical Services LLC. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 70px 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: var(--accent-gold);
}

.footer-section p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.footer-section i {
  margin-right: 10px;
  color: var(--accent-gold);
}

.footer-social {
  display: flex;
  margin-top: 20px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: var(--white);
  transition: var(--transition);
}

.footer-social a:hover {
  background-color: var(--accent-gold);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: var(--transition);
}

.footer-section ul li a:hover {
  color: var(--accent-gold);
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer {
    padding: 50px 0 20px;
  }
}
</style>
