<template>
  <div class="contact-info">
    <div class="section-header">
      <span class="section-subtitle">GET IN TOUCH</span>
      <h2>Contact Information</h2>
      <p>Reach out to us for any inquiries or to schedule a consultation. Our team is ready to assist you.</p>
    </div>
    
    <div class="info-items">
      <div class="info-item" v-for="(item, index) in contactInfo" :key="index">
        <div class="info-icon">
          <i :class="item.icon"></i>
        </div>
        <div class="info-content">
          <h3>{{ item.title }}</h3>
          <p v-for="(line, i) in item.details" :key="i">{{ line }}</p>
        </div>
      </div>
    </div>
    
    <div class="social-links">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" :aria-label="social.name">
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  data() {
    return {
      contactInfo: [
        {
          title: 'Our Location',
          icon: 'fas fa-map-marker-alt',
          details: ['Office No. 231, 2nd Floor, Al Barsha Business Center, Al Barsha 1, Dubai, UAE']
        },
        {
          title: 'Phone Number',
          icon: 'fas fa-phone-alt',
          details: ['+971-XXX-XXXX', '+971-XXX-XXXX']
        },
        {
          title: 'Email Address',
          icon: 'fas fa-envelope',
          details: ['info@flaztechnical.com', 'support@flaztechnical.com']
        },
        {
          title: 'Working Hours',
          icon: 'fas fa-clock',
          details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM']
        }
      ],
      socialLinks: [
        {
          name: 'Facebook',
          icon: 'fab fa-facebook-f',
          url: '#'
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          url: '#'
        },
        {
          name: 'LinkedIn',
          icon: 'fab fa-linkedin-in',
          url: '#'
        },
        {
          name: 'Instagram',
          icon: 'fab fa-instagram',
          url: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contact-info {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 40px;
  border-radius: var(--border-radius);
  height: 100%;
}

.section-header {
  margin-bottom: 30px;
}

.section-subtitle {
  color: var(--accent-gold);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.section-header h2 {
  color: var(--white);
  margin-bottom: 15px;
}

.section-header p {
  color: rgba(255, 255, 255, 0.8);
}

.info-items {
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  margin-bottom: 25px;
}

.info-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.info-icon i {
  font-size: 1.2rem;
  color: var(--accent-gold);
}

.info-content h3 {
  color: var(--white);
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.info-content p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
  font-size: 0.95rem;
}

.social-links h3 {
  color: var(--white);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.social-icons {
  display: flex;
}

.social-icons a {
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

.social-icons a:hover {
  background-color: var(--accent-gold);
  transform: translateY(-3px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .contact-info {
    margin-bottom: 30px;
  }
}
</style>
