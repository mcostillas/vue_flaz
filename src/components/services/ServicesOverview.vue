<template>
  <section class="services-overview">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">WHAT WE OFFER</span>
        <h2>Comprehensive Technical Solutions</h2>
        <p>We provide a wide range of technical services tailored to meet your specific requirements with precision and excellence.</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, i) in service.features" :key="i">
              <i class="fas fa-check-circle"></i> {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesOverview',
  data() {
    return {
      services: [
        {
          title: 'Maintenance Services',
          icon: 'fas fa-tools',
          description: 'Comprehensive maintenance solutions to keep your facilities operating at peak performance. Our preventive maintenance programs help identify and address potential issues before they become major problems.',
          features: [
            'Preventive Maintenance',
            'Corrective Maintenance',
            'Emergency Repairs',
            'Facility Inspections'
          ]
        },
        {
          title: 'Fitout Solutions',
          icon: 'fas fa-drafting-compass',
          description: 'Transform your spaces with our premium fitout solutions designed for functionality and aesthetics. We handle everything from concept to completion, ensuring a seamless experience.',
          features: [
            'Office Fitouts',
            'Retail Fitouts',
            'Residential Fitouts',
            'Commercial Renovations'
          ]
        },
        {
          title: 'Electrical Services',
          icon: 'fas fa-bolt',
          description: 'Expert electrical solutions for residential, commercial, and industrial properties. Our certified electricians ensure safe and efficient electrical systems that meet all regulatory requirements.',
          features: [
            'Electrical Installations',
            'Lighting Solutions',
            'Power Distribution',
            'Electrical Maintenance'
          ]
        },
        {
          title: 'Plumbing Services',
          icon: 'fas fa-tint',
          description: 'Professional plumbing services ensuring efficient water systems and drainage solutions. We handle everything from routine maintenance to complex installations and emergency repairs.',
          features: [
            'Pipe Installation',
            'Drainage Solutions',
            'Leak Detection',
            'Water Heater Services'
          ]
        },
        {
          title: 'HVAC Solutions',
          icon: 'fas fa-temperature-high',
          description: 'Comprehensive heating, ventilation, and air conditioning solutions for optimal indoor climate control. We ensure energy-efficient systems that provide comfort and air quality.',
          features: [
            'AC Installation & Repair',
            'Heating Systems',
            'Ventilation Solutions',
            'HVAC Maintenance'
          ]
        },
        {
          title: 'Painting & Decoration',
          icon: 'fas fa-paint-roller',
          description: 'Premium painting and decoration services to transform your spaces with color and style. Our professional team ensures flawless finishes and attention to detail.',
          features: [
            'Interior Painting',
            'Exterior Painting',
            'Decorative Finishes',
            'Color Consultation'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-overview {
  padding: 100px 0;
  background-color: var(--light-gray);
}

.section-header {
  margin-bottom: 50px;
}

.section-subtitle {
  color: var(--accent-gold);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.section-header h2 {
  margin-bottom: 15px;
}

.section-header p {
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 40px 30px;
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
  border: 2px solid transparent;
  transition: var(--transition);
}

.service-icon i {
  font-size: 1.8rem;
  color: var(--primary-blue);
}

.service-card h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
  position: relative;
  padding-bottom: 12px;
}

.service-card h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--accent-gold);
}

.service-card p {
  margin-bottom: 20px;
  color: var(--text-light);
  line-height: 1.7;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.service-features i {
  color: var(--accent-gold);
  margin-right: 10px;
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .services-overview {
    padding: 60px 0;
  }
}
</style>
