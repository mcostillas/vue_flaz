<template>
  <div class="contact-page">
    <!-- Page Header Component -->
    <PageHeader title="Contact Us" />

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info-wrapper">
            <ContactInfo />
          </div>
          
          <div class="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section Component -->
    <MapSection />

    <!-- FAQ Section Component -->
    <FaqSection />
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import ContactInfo from '@/components/contact/ContactInfo.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
import MapSection from '@/components/contact/MapSection.vue';
import FaqSection from '@/components/contact/FaqSection.vue';

export default {
  name: 'ContactView',
  components: {
    PageHeader,
    ContactInfo,
    ContactForm,
    MapSection,
    FaqSection
  },
  mounted() {
    document.title = 'Contact Us | FLAZ Technical Services';
  }
}
</script>

<style scoped>
.contact-page {
  background-color: var(--light-gray);
}

.contact-section {
  padding: 80px 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
}

.contact-info-wrapper,
.contact-form-wrapper {
  height: 100%;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info-wrapper {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }
}
</style>
