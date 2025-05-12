<template>
  <div class="home-page">
    <!-- SVG Definitions -->
    <svg style="display: none;">
      <defs>
        <clipPath id="wave-clip">
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </clipPath>
      </defs>
    </svg>

    <!-- Hero Section Component -->
    <HeroSection />

    <!-- About Preview Section Component -->
    <AboutPreviewSection />

    <!-- Services Section Component -->
    <ServicesSection />

    <!-- Projects Section Component -->
    <ProjectsSection />

    <!-- Why Choose Us Section Component -->
    <WhyChooseUsSection />

    <!-- Testimonials Section Component -->
    <TestimonialsSection />

    <!-- CTA Section Component -->
    <CtaSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue';
import AboutPreviewSection from '@/components/home/AboutPreviewSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import ProjectsSection from '@/components/home/ProjectsSection.vue';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import CtaSection from '@/components/home/CtaSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutPreviewSection,
    ServicesSection,
    ProjectsSection,
    WhyChooseUsSection,
    TestimonialsSection,
    CtaSection
  },
  mounted() {
    document.title = 'FLAZ Technical Services | Professional Technical Solutions Dubai';
  }
}
</script>

<style scoped>
/* Home page styles will be added here */
</style>
