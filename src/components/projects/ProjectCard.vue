<template>
  <div class="project-card">
    <div class="project-image">
      <div class="placeholder-image" :style="{ backgroundColor: getProjectColor(index) }">
        <span>{{ project.title.charAt(0) }}</span>
      </div>
      <div class="project-overlay">
        <a href="#" class="project-link" @click.prevent="$emit('open-modal', project)">
          <i class="fas fa-plus"></i>
        </a>
      </div>
    </div>
    <div class="project-info">
      <span class="project-category">{{ project.category }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.shortDescription }}</p>
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
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
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
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.project-info p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
