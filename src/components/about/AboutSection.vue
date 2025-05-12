<template>
  <section class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <div class="placeholder-image">
            <div class="placeholder-text">FLAZ</div>
          </div>
        </div>
        <div class="about-text">
          <span class="section-subtitle">OUR STORY</span>
          <h2>A Legacy of Technical Excellence in Dubai</h2>
          <p>FLAZ Technical Services LLC was established in Dubai with a vision to provide premium technical solutions that meet the highest standards of quality and reliability. With over 15 years of industry experience, we have grown to become a trusted partner for businesses and individuals seeking exceptional technical services.</p>
          <p>Our journey began with a small team of dedicated professionals and has evolved into a comprehensive technical services company with a wide range of specialized offerings. Throughout our growth, we have maintained our commitment to excellence, innovation, and customer satisfaction.</p>
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background-color: var(--white);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-image {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.placeholder-image {
  width: 100%;
  height: 500px;
  background-color: var(--primary-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.placeholder-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 27, 58, 0.8) 0%, rgba(26, 27, 58, 0.9) 100%);
}

.placeholder-text {
  color: var(--white);
  font-weight: 700;
  font-size: 3rem;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
}

.section-subtitle {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.about-text h2 {
  margin-bottom: 20px;
  font-size: 2.2rem;
}

.about-text p {
  margin-bottom: 20px;
  color: var(--text-light);
  line-height: 1.7;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 5px;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-light);
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    order: 2;
  }
  
  .about-text {
    order: 1;
  }
  
  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .about-section {
    padding: 60px 0;
  }
  
  .placeholder-image {
    height: 300px;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
