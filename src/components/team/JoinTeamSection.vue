<template>
  <section class="join-team">
    <div class="container">
      <div class="join-content">
        <div class="join-text">
          <span class="section-subtitle">CAREERS</span>
          <h2>Join Our Team</h2>
          <p>We're always looking for talented professionals to join our growing team. If you're passionate about technical excellence and customer satisfaction, we'd love to hear from you.</p>
          <ul class="join-benefits">
            <li><i class="fas fa-check-circle"></i> Competitive Salary & Benefits</li>
            <li><i class="fas fa-check-circle"></i> Professional Development</li>
            <li><i class="fas fa-check-circle"></i> Collaborative Work Environment</li>
            <li><i class="fas fa-check-circle"></i> Work-Life Balance</li>
          </ul>
          <router-link to="/contact" class="btn btn-primary">Apply Now</router-link>
        </div>
        <div class="join-image">
          <div class="placeholder-image">
            <div class="placeholder-text">Join Our Team</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinTeamSection'
}
</script>

<style scoped>
.join-team {
  padding: 100px 0;
  background-color: var(--light-gray);
}

.join-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.section-subtitle {
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.join-text h2 {
  margin-bottom: 20px;
}

.join-text p {
  margin-bottom: 30px;
  color: var(--text-light);
}

.join-benefits {
  margin-bottom: 30px;
  list-style: none;
  padding: 0;
}

.join-benefits li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.join-benefits i {
  color: var(--primary-blue);
  margin-right: 10px;
  font-size: 1.2rem;
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

.placeholder-image {
  width: 100%;
  height: 400px;
  background-color: var(--primary-blue);
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
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .join-content {
    grid-template-columns: 1fr;
  }
  
  .join-text {
    order: 2;
  }
  
  .join-image {
    order: 1;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .join-team {
    padding: 60px 0;
  }
  
  .placeholder-image {
    height: 300px;
  }
}
</style>
