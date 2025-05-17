<template>
  <section class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <div class="placeholder-image">
            <img src="@/IMAGE/Flaz/team photo.jpg" alt="FLAZ Technical Services Team" class="team-photo">
          </div>
        </div>
        <div class="about-text">
          <span class="section-subtitle">OUR STORY</span>
          <h2>A Fresh Force in Technical Excellence – Powered by Passion and Results</h2>
          <p>FLAZ Technical Services LLC was established in Dubai on July 13, 2024, with a clear mission: to deliver premium technical solutions rooted in quality, reliability, and innovation. While we are a newly founded company, our team brings together a wealth of experience and an unstoppable drive to excel.</p>
          <p>In just a short time, we've completed over 100 projects, built a diverse team of 15+ skilled professionals, and maintained a 100% client satisfaction rate—a testament to our team's dedication and the trust our clients have placed in us.</p>
          <p>As we continue to grow, we remain committed to providing exceptional service, continuous improvement, and tailored solutions that meet the evolving needs of our partners.</p>
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Skilled Proffesionals</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Customer Support</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Projects Completed</span>
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

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Removed overlay gradient to show team photo clearly */

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
