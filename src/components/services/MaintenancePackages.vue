<template>
  <section class="maintenance-packages">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">MAINTENANCE PLANS</span>
        <h2>Our Maintenance Packages</h2>
        <p>Choose the maintenance package that best suits your requirements and budget.</p>
      </div>
      
      <div class="packages-grid">
        <div class="package-card" v-for="(pkg, index) in packages" :key="index">
          <div class="package-header" :class="{ 'popular': pkg.popular }">
            <span class="popular-tag" v-if="pkg.popular">Most Popular</span>
            <h3>{{ pkg.title }}</h3>
            <div class="package-price">
              <span class="currency">{{ pkg.currency }}</span>
              <span class="amount">{{ pkg.price }}</span>
              <span class="period">{{ pkg.period }}</span>
            </div>
          </div>
          <div class="package-body">
            <ul class="package-features">
              <li v-for="(feature, i) in pkg.features" :key="i">
                <i class="fas fa-check-circle"></i> {{ feature }}
              </li>
            </ul>
            <div class="package-cta">
              <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MaintenancePackages',
  data() {
    return {
      packages: [
        {
          title: 'Basic',
          currency: 'AED',
          price: '999',
          period: '/month',
          popular: false,
          features: [
            'Quarterly Inspections',
            'Basic Electrical Maintenance',
            'Basic Plumbing Services',
            'Emergency Support (Business Hours)',
            'Email Support'
          ]
        },
        {
          title: 'Standard',
          currency: 'AED',
          price: '1,999',
          period: '/month',
          popular: true,
          features: [
            'Monthly Inspections',
            'Comprehensive Electrical Maintenance',
            'Full Plumbing Services',
            'HVAC Maintenance',
            'Emergency Support (24/7)',
            'Priority Response',
            'Dedicated Account Manager'
          ]
        },
        {
          title: 'Premium',
          currency: 'AED',
          price: '3,999',
          period: '/month',
          popular: false,
          features: [
            'Weekly Inspections',
            'Complete Facility Maintenance',
            'Preventive & Corrective Maintenance',
            'All Technical Services Included',
            'Emergency Support (24/7)',
            'Priority Response',
            'Dedicated Technical Team',
            'Quarterly Facility Audit',
            'Annual Renovation Allowance'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.maintenance-packages {
  padding: 100px 0;
  background-color: var(--white);
}

.section-header {
  margin-bottom: 50px;
}

.section-subtitle {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.section-header h2 {
  margin-bottom: 15px;
}

.section-header p {
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.package-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  border: 1px solid var(--light-gray);
}

.package-card:hover {
  transform: translateY(-10px);
}

.package-header {
  background-color: var(--primary-blue);
  padding: 30px;
  text-align: center;
  position: relative;
}

.package-header.popular {
  background-color: var(--accent-gold);
}

.popular-tag {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--primary-blue);
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 10px;
  border-bottom-left-radius: 10px;
}

.package-header h3 {
  color: var(--white);
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.package-price {
  color: var(--white);
}

.currency {
  font-size: 1.2rem;
  font-weight: 600;
  vertical-align: top;
}

.amount {
  font-size: 2.5rem;
  font-weight: 700;
}

.period {
  font-size: 1rem;
  opacity: 0.8;
}

.package-body {
  padding: 30px;
}

.package-features {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.package-features li {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}

.package-features i {
  color: var(--primary-blue);
  margin-right: 10px;
  margin-top: 3px;
}

.package-header.popular + .package-body .package-features i {
  color: var(--accent-gold);
}

.package-cta {
  text-align: center;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 12px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  border: 2px solid var(--primary-blue);
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-blue);
}

.package-header.popular + .package-body .btn-primary {
  background-color: var(--accent-gold);
  border-color: var(--accent-gold);
}

.package-header.popular + .package-body .btn-primary:hover {
  background-color: transparent;
  color: var(--accent-gold);
}

@media (max-width: 1200px) {
  .packages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .packages-grid {
    grid-template-columns: 1fr;
  }
  
  .maintenance-packages {
    padding: 60px 0;
  }
}
</style>
