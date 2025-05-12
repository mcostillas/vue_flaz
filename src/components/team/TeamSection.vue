<template>
  <section :class="sectionClass">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">{{ subtitle }}</span>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      
      <div class="team-grid">
        <TeamMember 
          v-for="(member, index) in members" 
          :key="index"
          :name="member.name"
          :position="member.position"
          :description="member.description"
          :socials="member.socials"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '@/components/team/TeamMember.vue';

export default {
  name: 'TeamSection',
  components: {
    TeamMember
  },
  props: {
    sectionClass: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    members: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
section {
  padding: 80px 0;
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
  max-width: 800px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 60px 0;
  }
}
</style>
