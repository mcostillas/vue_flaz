<template>
  <div class="project-card" :class="{'proposed-project': isProposed}">
    <div class="project-image">
      <img v-if="project.images && project.images.length > 0" :src="project.images[0]" alt="Project image" class="actual-image">
      <div v-else class="placeholder-image" :style="{ backgroundColor: getProjectColor(index) }">
        <span>{{ project.title.charAt(0) }}</span>
      </div>
      <div class="project-overlay">
        <a href="#" class="project-link" @click.prevent="$emit('open-modal', project)">
          <i class="fas fa-expand-alt"></i>
        </a>
      </div>
      <div v-if="isProposed" class="proposed-badge">
        <span>Proposed</span>
      </div>
    </div>
    <div class="project-info">
      <span class="project-category">{{ project.category }}</span>
      <h3>{{ project.title }}</h3>
      <div class="project-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ project.location }}</span>
      </div>
      <div v-if="isProposed" class="project-timeline">
        <i class="fas fa-calendar-alt"></i>
        <span>Projected Start: {{ project.projectedStart }}</span>
      </div>
      <div v-else class="project-timeline">
        <i class="fas fa-check-circle"></i>
        <span>Completed: {{ project.completionDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isProposed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getProjectColor(index) {
      // Array of colors to use for project placeholders
      const colors = [
        '#1A1B3A', // Primary blue (darker)
        '#2A4B8D', // Secondary blue
        '#3A6DA0', // Lighter blue
        '#4C8FB3', // Even lighter blue
        '#D4AF37'  // Gold accent
      ];
      return colors[index % colors.length];
    }
  }
}
</script>

<style scoped>
.project-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
}

.proposed-project {
  border: 2px solid var(--accent-gold);
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.actual-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  transition: var(--transition);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 27, 58, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  width: 50px;
  height: 50px;
  background-color: var(--accent-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.2rem;
  transform: scale(0);
  transition: var(--transition);
}

.project-card:hover .project-link {
  transform: scale(1);
}

.project-info {
  padding: 25px;
}

.project-category {
  display: inline-block;
  background-color: var(--light-gray);
  color: var(--primary-blue);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.project-info h3 {
  margin-bottom: 5px;
  font-size: 1.3rem;
}

.project-location {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: var(--text-light);
}

.project-location i {
  margin-right: 5px;
  color: var(--primary-blue);
  font-size: 0.8rem;
}

.proposed-project .project-location i {
  color: var(--accent-gold);
}

.project-info p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.proposed-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--accent-gold);
  color: var(--white);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  z-index: 5;
}

.project-timeline {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 0.85rem;
  color: var(--text-light);
}

.project-timeline i {
  margin-right: 5px;
  color: var(--primary-blue);
}

.proposed-project .project-timeline i {
  color: var(--accent-gold);
}
</style>
