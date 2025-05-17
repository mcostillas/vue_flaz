<template>
  <section class="about-preview" id="about">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <div class="placeholder-image">
            <img src="@/imgfiles/Flaz/FLAZ 3D Building.png" alt="FLAZ Technical Services" class="logo-image">
          </div>
          <div class="experience-badge">
            <span class="years">Rapid Growth</span>
            <span class="text">Since 2024</span>
          </div>
        </div>
        <div class="about-text">
          <span class="section-subtitle">ABOUT US</span>
          <h2>Building a Legacy of Technical Excellence in Dubai</h2>
          <p>FLAZ Technical Services LLC was founded with a clear mission: to deliver high-quality technical solutions with a focus on reliability, innovation, and client satisfaction.</p>
          <p>Backed by a skilled team with strong industry experience, we've rapidly completed multiple successful projects and earned a reputation for excellence in maintenance services, fit-out solutions, and technical consultancy.</p>
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
  height: 500px; /* Increased height */
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed from cover to contain to show full image */
  object-position: center;
}

/* Removed overlay gradient to show team photo clearly */

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
  width: 160px;
  height: 160px;
  background-color: var(--accent-gold);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  box-shadow: var(--box-shadow);
  padding: 10px;
}

.experience-badge .years {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 5px;
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
