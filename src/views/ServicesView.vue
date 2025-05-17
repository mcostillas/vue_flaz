<template>
  <div class="services-page">
    <!-- Page Header -->
    <PageHeader title="Our Services" />

    <!-- Services Overview -->
    <ServicesOverview />

    <!-- Service Process -->
    <ServiceProcess />

    <!-- Maintenance Packages section removed -->

    <!-- CTA Section -->
    <CtaSection />
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import ServicesOverview from '@/components/services/ServicesOverview.vue';
import ServiceProcess from '@/components/services/ServiceProcess.vue';
// MaintenancePackages component removed
import CtaSection from '@/components/shared/CtaSection.vue';

export default {
  name: 'ServicesView',
  components: {
    PageHeader,
    ServicesOverview,
    ServiceProcess,
    // MaintenancePackages removed,
    CtaSection
  },
  mounted() {
    document.title = 'Our Services | FLAZ Technical Services';
  }
}
</script>

<style scoped>
/* Services page styles will be added here */
</style>
