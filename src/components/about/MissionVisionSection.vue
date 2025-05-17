<template>
  <section class="mission-vision">
    <div class="container">
      <div class="mission-vision-content">
        <div class="mission-box">
          <div class="icon">
            <i class="fas fa-bullseye"></i>
          </div>
          <h3>Our Mission</h3>
          <p>To deliver exceptional technical services that exceed client expectations through innovation, quality workmanship, and unwavering commitment to excellence.</p>
        </div>
        <div class="vision-box">
          <div class="icon">
            <i class="fas fa-eye"></i>
          </div>
          <h3>Our Vision</h3>
          <p>To be the leading technical services provider in Dubai, recognized for our integrity, reliability, and the transformative impact of our solutions.</p>
        </div>
        <div class="values-box">
          <div class="icon">
            <i class="fas fa-heart"></i>
          </div>
          <h3>Our Values</h3>
          <ul>
            <li><i class="fas fa-check-circle"></i> Excellence in every detail</li>
            <li><i class="fas fa-check-circle"></i> Integrity in all interactions</li>
            <li><i class="fas fa-check-circle"></i> Innovation in our approach</li>
            <li><i class="fas fa-check-circle"></i> Reliability in our commitments</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MissionVisionSection'
}
</script>

<style scoped>
.mission-vision {
  padding: 100px 0;
  background-color: var(--primary-blue);
  background-image: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  position: relative;
  overflow: hidden;
}

.mission-vision::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(var(--accent-gold-rgb), 0.15) 0%, transparent 60%);
  z-index: 1;
}

.mission-vision::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  opacity: 0.2;
  z-index: 1;
}

.mission-vision > * {
  position: relative;
  z-index: 2;
}

.mission-vision-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
}

.mission-box, .vision-box, .values-box {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
}

.mission-box:hover, .vision-box:hover, .values-box:hover {
  transform: translateY(-10px);
  background-color: rgba(255, 255, 255, 0.15);
}

.icon {
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.icon i {
  font-size: 2rem;
  color: var(--accent-gold);
}

h3 {
  color: var(--white);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

li {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
}

li i {
  color: var(--accent-gold);
  margin-right: 10px;
}

@media (max-width: 992px) {
  .mission-vision-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .mission-box, .vision-box, .values-box {
    padding: 30px 20px;
  }
}

@media (max-width: 576px) {
  .mission-vision {
    padding: 60px 0;
  }
  
  .icon {
    width: 60px;
    height: 60px;
  }
  
  .icon i {
    font-size: 1.5rem;
  }
}
</style>
