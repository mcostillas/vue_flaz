<template>
  <section class="services-preview" id="services">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">OUR SERVICES</span>
        <h2>Comprehensive Technical Solutions</h2>
        <p>We offer a wide range of technical services tailored to meet your specific requirements with precision and excellence.</p>
      </div>
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link to="/services" class="service-link">Learn More <i class="fas fa-arrow-right"></i></router-link>
        </div>
      </div>
      <div class="services-cta text-center">
        <router-link to="/services" class="btn btn-primary">View All Services</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Maintenance Services',
          description: 'Comprehensive maintenance solutions to keep your facilities operating at peak performance.',
          icon: 'fas fa-tools'
        },
        {
          title: 'Fitout Solutions',
          description: 'Transform your spaces with our premium fitout solutions designed for functionality and aesthetics.',
          icon: 'fas fa-drafting-compass'
        },
        {
          title: 'Electrical Services',
          description: 'Expert electrical solutions for residential, commercial, and industrial properties.',
          icon: 'fas fa-bolt'
        },
        {
          title: 'Plumbing Services',
          description: 'Professional plumbing services ensuring efficient water systems and drainage solutions.',
          icon: 'fas fa-tint'
        },
        {
          title: 'Painting Services',
          description: 'Premium painting services that enhance the aesthetics and protection of your property.',
          icon: 'fas fa-paint-roller'
        },
        {
          title: 'HVAC Solutions',
          description: 'Comprehensive heating, ventilation, and air conditioning services for optimal comfort.',
          icon: 'fas fa-snowflake'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Services Preview Section */
.services-preview {
  padding: 100px 0;
  background-color: var(--light-gray);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.service-card {
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border-bottom: 3px solid transparent;
}

.service-card:hover {
  transform: translateY(-10px);
  border-bottom: 3px solid var(--accent-gold);
  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.15);
}

.service-icon {
  width: 70px;
  height: 70px;
  background-color: rgba(26, 27, 58, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.service-icon i {
  font-size: 1.8rem;
  color: var(--primary-blue);
}

.service-card h3 {
  margin-bottom: 15px;
}

.service-card p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.service-link {
  color: var(--accent-gold);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.service-link i {
  margin-left: 5px;
  transition: var(--transition);
}

.service-link:hover {
  color: var(--accent-gold);
}

.service-link:hover i {
  transform: translateX(5px);
}

.services-cta {
  margin-top: 30px;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
