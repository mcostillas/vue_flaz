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
          title: 'Contact Numbers',
          icon: 'fas fa-phone-alt',
          details: ['CP: +971 56 095 6689', 'Tel: +971 43 295 536']
        },
        {
          title: 'Email Address',
          icon: 'fas fa-envelope',
          details: ['info@flaztechnicalservices.com']
        },
        {
          title: 'Website',
          icon: 'fas fa-globe',
          details: ['flaztechnicalservices.com']
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
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  color: var(--white);
  padding: 40px;
  border-radius: var(--border-radius);
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 31, 84, 0.2);
}

.contact-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.contact-info > * {
  position: relative;
  z-index: 2;
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
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
  border: 2px solid var(--accent-gold);
  box-shadow: 0 0 15px rgba(255, 193, 7, 0.2);
  transition: all 0.3s ease;
}

.info-item:hover .info-icon {
  transform: scale(1.1);
  background-color: rgba(255, 193, 7, 0.2);
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
  margin-right: 15px;
  color: var(--white);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 193, 7, 0.3);
  position: relative;
  overflow: hidden;
}

.social-icons a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--accent-gold);
  transform: translateY(100%);
  transition: all 0.3s ease;
  z-index: 1;
  opacity: 0;
}

.social-icons a i {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
}

.social-icons a:hover::before {
  transform: translateY(0);
  opacity: 1;
}

.social-icons a:hover i {
  color: var(--primary-blue);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .contact-info {
    margin-bottom: 30px;
  }
}
</style>
