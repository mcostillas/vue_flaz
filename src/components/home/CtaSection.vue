<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Transform Your Space?</h2>
        <p>Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life.</p>
        <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection'
}
</script>

<style scoped>
/* CTA Section */
.cta-section {
  padding: 80px 0;
  background-color: #1A1B3A;
  background-image: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(var(--accent-gold-rgb), 0.1) 0%, transparent 50%);
  z-index: 1;
}

.cta-section > * {
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 2.2rem;
  font-weight: 700;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  font-size: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-primary {
  background-color: #FFD046;
  color: #1A1B3A;
  padding: 12px 25px;
  border-radius: 4px;
  font-weight: 600;
  display: inline-block;
  border: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #f5c52c;
  transform: translateY(-2px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .cta-section {
    padding: 60px 0;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
}
</style>
