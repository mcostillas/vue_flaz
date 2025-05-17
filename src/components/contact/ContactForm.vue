<template>
  <div class="contact-form-container">
    <div class="section-header">
      <span class="section-subtitle">SEND A MESSAGE</span>
      <h2>Get in Touch</h2>
      <p>Fill out the form below and we'll get back to you as soon as possible.</p>
    </div>
    
    <form class="contact-form" @submit.prevent="submitForm" name="flaz-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="flaz-contact" />
      <p class="hidden">
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" v-model="formData.name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" v-model="formData.email" required>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" v-model="formData.phone" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" v-model="formData.subject" required>
        </div>
      </div>
      
      <div class="form-group">
        <label for="service">Service of Interest</label>
        <select id="service" name="service" v-model="formData.service">
          <option value="">Select a Service</option>
          <option value="Maintenance">Maintenance Services</option>
          <option value="Fitout">Fitout Solutions</option>
          <option value="Electrical">Electrical Services</option>
          <option value="Plumbing">Plumbing Services</option>
          <option value="Painting">Painting Services</option>
          <option value="HVAC">HVAC Solutions</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="message">Your Message *</label>
        <textarea id="message" name="message" rows="5" v-model="formData.message" required></textarea>
      </div>
      
      <div class="form-group form-checkbox">
        <input type="checkbox" id="privacy" name="privacy" v-model="formData.privacy" required>
        <label for="privacy">I agree to the <router-link to="/privacy-policy">Privacy Policy</router-link> and <router-link to="/terms-of-service">Terms of Service</router-link>.</label>
      </div>
      
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
  
  <!-- Success Modal -->
  <div class="modal" v-if="formSubmitted" @click.self="resetForm">
    <div class="modal-content">
      <div class="success-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <h3>Thank You!</h3>
      <p>Your message has been sent successfully. We'll get back to you shortly.</p>
      <button class="btn btn-primary" @click="resetForm">Send Another Message</button>
      <button class="modal-close" @click="resetForm"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
        privacy: false
      },
      formSubmitted: false
    }
  },
  methods: {
    submitForm() {
      // Create a FormData object to submit to Netlify
      const formData = new FormData();
      
      // Add form-name field which Netlify requires
      formData.append('form-name', 'flaz-contact');
      
      // Add all form fields
      Object.keys(this.formData).forEach(key => {
        formData.append(key, this.formData[key]);
      });
      
      // Submit the form to Netlify
      fetch('/', {
        method: 'POST',
        body: formData
      })
      .then(() => {
        console.log('Form submitted successfully');
        this.formSubmitted = true;
      })
      .catch(error => {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: '',
        privacy: false
      };
      this.formSubmitted = false;
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
.contact-form-container {
  background-color: var(--white);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 31, 84, 0.1);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-header {
  margin-bottom: 30px;
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
  color: var(--text-light);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary-blue);
  outline: none;
  box-shadow: 0 0 0 3px rgba(26, 27, 58, 0.1);
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
}

.form-checkbox input {
  width: auto;
  margin-right: 10px;
  margin-top: 5px;
}

.form-checkbox label {
  font-weight: 400;
  font-size: 0.9rem;
}

.form-checkbox a {
  color: var(--primary-blue);
  text-decoration: underline;
}

button.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white);
  border: 2px solid var(--primary-blue);
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--transition);
}

button.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-blue);
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  animation: slideIn 0.3s ease;
}

.success-icon {
  font-size: 4rem;
  color: #4CAF50;
  margin-bottom: 20px;
}

.modal-content h3 {
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.modal-content p {
  margin-bottom: 30px;
  color: var(--text-light);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
}

.modal-close:hover {
  color: var(--primary-blue);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .contact-form-container {
    padding: 30px 20px;
  }
}
</style>
