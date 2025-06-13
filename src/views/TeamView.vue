<template>
  <div class="team-page">
    <!-- Page Header -->
    <PageHeader title="Our Team" />

    <!-- Team Introduction -->
    <section class="team-intro">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">MEET OUR EXPERTS</span>
          <h2>The Professionals Behind Our Success</h2>
          <p>Our team of experienced professionals is dedicated to delivering exceptional technical services and ensuring client satisfaction.</p>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <TeamSection 
      section-class="leadership-team"
      subtitle="LEADERSHIP"
      title="Our Leadership Team"
      description="Meet the visionaries who guide our company's strategic direction and ensure excellence in every project."
      :members="leadershipTeam"
    />

    <!-- Technical Team Section -->
    <TeamSection 
      section-class="technical-team"
      subtitle="TECHNICAL EXPERTS"
      title="Our Technical Team"
      description="Meet our certified professionals who bring expertise and precision to every project."
      :members="technicalTeam"
    />

    <!-- Support Team Section -->
    <TeamSection 
      section-class="support-team"
      subtitle="SUPPORT TEAM"
      title="Our Support Team"
      description="Meet the dedicated professionals who ensure smooth operations and exceptional client service."
      :members="supportTeam"
    />

    <!-- Join Our Team Section -->
    <JoinTeamSection />

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Work With Our Expert Team?</h2>
          <p>Contact us today for a free consultation and discover how our technical services can elevate your property.</p>
          <router-link to="/contact" class="btn btn-primary">Schedule Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TeamSection from '@/components/team/TeamSection.vue';
import JoinTeamSection from '@/components/team/JoinTeamSection.vue';
import PageHeader from '@/components/shared/PageHeader.vue';

export default {
  name: 'TeamView',
  components: {
    TeamSection,
    JoinTeamSection,
    PageHeader
  },
  data() {
    return {
      leadershipTeam: [
        {
          name: 'Zedrick Cusi',
          position: 'CEO',
          description: 'With over 20 years of experience in the technical services industry, Mohammed leads our company with vision and expertise.'
        },
        {
          name: 'Sarah Johnson',
          position: 'Operations Director',
          description: 'Sarah oversees our day-to-day operations, ensuring efficiency and excellence in every project we undertake.'
        },
        {
          name: 'Ahmed Al Mansoori',
          position: 'Technical Director',
          description: 'Ahmed leads our technical team, bringing innovation and expertise to our maintenance and fitout solutions.'
        },
        {
          name: 'Lisa Chen',
          position: 'Client Relations Manager',
          description: 'Lisa ensures exceptional client experiences, managing relationships and ensuring satisfaction with our services.'
        }
      ],
      technicalTeam: [
        {
          name: 'Rajesh Kumar',
          position: 'Senior Electrical Engineer',
          description: 'Rajesh leads our electrical services team, bringing 15 years of experience in complex electrical systems.'
        },
        {
          name: 'Ali Hassan',
          position: 'HVAC Specialist',
          description: 'Ali specializes in HVAC systems, ensuring optimal climate control solutions for our clients.'
        },
        {
          name: 'Michael Rodriguez',
          position: 'Plumbing Systems Expert',
          description: 'Michael brings precision and expertise to our plumbing services, ensuring efficient water systems.'
        },
        {
          name: 'Fatima Al Zaabi',
          position: 'Interior Design Specialist',
          description: 'Fatima leads our fitout design team, creating functional and aesthetically pleasing spaces.'
        }
      ],
      supportTeam: [
        {
          name: 'Aisha Mohammed',
          position: 'Customer Support Manager',
          description: 'Aisha leads our customer support team, ensuring prompt and effective resolution of client inquiries.'
        },
        {
          name: 'John Smith',
          position: 'Project Coordinator',
          description: 'John coordinates our projects, ensuring timely execution and effective communication with clients.'
        },
        {
          name: 'Priya Sharma',
          position: 'Administrative Assistant',
          description: 'Priya provides essential administrative support, ensuring smooth operations across all departments.'
        },
        {
          name: 'Omar Al Balushi',
          position: 'Logistics Coordinator',
          description: 'Omar manages our logistics, ensuring efficient resource allocation and timely project execution.'
        }
      ]
    }
  },
  mounted() {
    document.title = 'Our Team | FLAZ Technical Services';
  }
}
</script>

<style scoped>
/* Team page styles will be added here */
</style>
