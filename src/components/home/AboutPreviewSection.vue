<template>
  <section class="about-preview" id="about">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <div class="placeholder-image">
            <img src="https://placehold.co/600x400/E9ECEF/212529/png?text=Team+Photo" alt="FLAZ Technical Services Team" class="logo-image">
            <div class="placeholder-text">FLAZ Technical Services Team</div>
          </div>
          <div class="experience-badge">
            <span class="years">10+</span>
            <span class="text">Years of<br>Experience</span>
          </div>
        </div>
        <div class="about-text">
          <span class="section-subtitle">ABOUT US</span>
          <h2>A Legacy of Technical Excellence in Dubai</h2>
          <p>FLAZ Technical Services LLC was established in Dubai with a vision to provide premium technical solutions that meet the highest standards of quality and reliability. Over the years, we have built a reputation for excellence in maintenance services, fitout solutions, and technical consultancy.</p>
          <div class="about-features">
            <div class="feature" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">
                <i :class="feature.icon"></i>
              </div>
              <div class="feature-text">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
          <router-link to="/about" class="btn btn-primary">Learn More About Us</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPreviewSection',
  data() {
    return {
      features: [
        {
          title: 'Our Mission',
          description: 'To deliver exceptional technical services that exceed client expectations and set new industry standards.',
          icon: 'fas fa-bullseye'
        },
        {
          title: 'Our Vision',
          description: 'To be the leading technical services provider in the UAE, known for innovation, quality, and customer satisfaction.',
          icon: 'fas fa-eye'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* About Preview Section */
.about-preview {
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
}

.placeholder-image {
  width: 100%;
  height: 400px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
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
  font-weight: 600;
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
}

.experience-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 150px;
  height: 150px;
  background-color: var(--accent-gold);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  box-shadow: var(--box-shadow);
}

.experience-badge .years {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.experience-badge .text {
  font-size: 1rem;
  font-weight: 500;
}

.about-text h2 {
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 30px;
  color: var(--text-light);
}

.about-features {
  margin-bottom: 30px;
}

.feature {
  display: flex;
  margin-bottom: 20px;
}

.feature-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(26, 27, 58, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
}

.feature-icon i {
  font-size: 1.2rem;
  color: var(--primary-blue);
}

.feature-text h3 {
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.feature-text p {
  margin-bottom: 0;
  font-size: 0.95rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    margin-bottom: 50px;
  }
  
  .experience-badge {
    bottom: -20px;
    right: -20px;
    width: 120px;
    height: 120px;
  }
  
  .experience-badge .years {
    font-size: 2rem;
  }
  
  .experience-badge .text {
    font-size: 0.9rem;
  }
}
</style>
