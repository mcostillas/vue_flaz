<template>
  <section class="why-choose-us" id="why-choose-us">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">WHY CHOOSE US</span>
        <h2>Excellence in Every Detail</h2>
        <p>We are committed to delivering exceptional quality and reliability in every project we undertake.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseUsSection',
  data() {
    return {
      features: [
        {
          title: 'Licensed & Certified',
          description: 'Our team consists of licensed professionals with certifications from recognized industry authorities.',
          icon: 'fas fa-certificate'
        },
        {
          title: 'Timely Delivery',
          description: 'We understand the importance of deadlines and ensure timely completion of all projects.',
          icon: 'fas fa-clock'
        },
        {
          title: 'Quality Assurance',
          description: 'We maintain rigorous quality standards throughout every phase of our projects.',
          icon: 'fas fa-star'
        },
        {
          title: '24/7 Support',
          description: 'Our dedicated customer support team is available round the clock to address your concerns.',
          icon: 'fas fa-headset'
        },
        {
          title: 'Competitive Pricing',
          description: 'We offer premium services at competitive prices without compromising on quality.',
          icon: 'fas fa-hand-holding-usd'
        },
        {
          title: 'Experienced Team',
          description: 'Our team brings years of industry experience and expertise to every project.',
          icon: 'fas fa-users'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Why Choose Us Section */
.why-choose-us {
  padding: 100px 0;
  background-color: var(--light-gray);
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.feature-card {
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background-color: rgba(26, 27, 58, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon i {
  font-size: 2rem;
  color: var(--primary-blue);
}

.feature-card h3 {
  margin-bottom: 15px;
}

.feature-card p {
  color: var(--text-light);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
