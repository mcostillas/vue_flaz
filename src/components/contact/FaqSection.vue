<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
        <h2>Common Questions</h2>
        <p>Find answers to commonly asked questions about our services.</p>
      </div>
      
      <div class="faq-container">
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <div class="faq-question" @click="toggleFaq(index)">
            <h3>{{ faq.question }}</h3>
            <span class="faq-icon"><i :class="activeFaq === index ? 'fas fa-minus' : 'fas fa-plus'"></i></span>
          </div>
          <div class="faq-answer" :class="{ 'active': activeFaq === index }">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      activeFaq: null,
      faqs: [
        {
          question: 'What areas in Dubai do you serve?',
          answer: 'We provide our technical services throughout Dubai and neighboring emirates, including Abu Dhabi, Sharjah, and Ajman.'
        },
        {
          question: 'Do you offer emergency services?',
          answer: 'Yes, we offer 24/7 emergency services for urgent technical issues. Our team is available round the clock to address critical maintenance needs.'
        },
        {
          question: 'Are your technicians certified?',
          answer: 'Absolutely. All our technicians are certified professionals with extensive training and experience in their respective fields.'
        },
        {
          question: 'How do I schedule a consultation?',
          answer: 'You can schedule a consultation by filling out the contact form on this page, calling our office, or sending us an email. Our team will get back to you promptly to arrange a convenient time.'
        },
        {
          question: 'What types of projects do you handle?',
          answer: 'We handle a wide range of projects including residential maintenance, commercial fitouts, electrical installations, plumbing services, HVAC solutions, and more. No project is too big or too small for our team.'
        },
        {
          question: 'Do you provide free quotes?',
          answer: 'Yes, we provide free quotes for all our services. Our team will assess your requirements and provide a detailed quote with no obligation.'
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      if (this.activeFaq === index) {
        this.activeFaq = null;
      } else {
        this.activeFaq = index;
      }
    }
  }
}
</script>

<style scoped>
.faq-section {
  padding: 80px 0;
  background-color: var(--light-gray);
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
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background-color: var(--white);
  border-radius: var(--border-radius);
  margin-bottom: 15px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
}

.faq-question:hover {
  background-color: rgba(26, 27, 58, 0.02);
}

.faq-question h3 {
  font-size: 1.1rem;
  margin: 0;
}

.faq-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-blue);
  color: var(--white);
  border-radius: 50%;
  flex-shrink: 0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.active {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 25px 20px;
  margin: 0;
  color: var(--text-light);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .faq-section {
    padding: 60px 0;
  }
  
  .faq-question h3 {
    font-size: 1rem;
  }
}
</style>
