<template>
  <div class="about-page">
    <!-- Page Header -->
    <PageHeader title="About Us" />

    <!-- About Section -->
    <AboutSection />

    <!-- Mission & Vision Section -->
    <MissionVisionSection />

    <!-- Team Preview Section -->
    <TeamPreviewSection />

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import AboutSection from '@/components/about/AboutSection.vue';
import MissionVisionSection from '@/components/about/MissionVisionSection.vue';
import TeamPreviewSection from '@/components/about/TeamPreviewSection.vue';
import CtaSection from '@/components/shared/CtaSection.vue';

export default {
  name: 'AboutView',
  components: {
    PageHeader,
    AboutSection,
    MissionVisionSection,
    TeamPreviewSection,
    CtaSection
  },
  mounted() {
    document.title = 'About Us | FLAZ Technical Services';
  }
}
</script>

<style scoped>
/* About page styles will be added here */
</style>
