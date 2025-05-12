<template>
  <div class="project-modal" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="$emit('close')">&times;</button>
      
      <div class="modal-header">
        <h2>{{ project.title }}</h2>
        <span class="project-category">{{ project.category }}</span>
      </div>
      
      <div class="modal-body">
        <div class="project-image-container">
          <div class="placeholder-image" :style="{ backgroundColor: getProjectColor() }">
            <span>{{ project.title.charAt(0) }}</span>
          </div>
        </div>
        
        <div class="project-details">
          <h3>Project Details</h3>
          <div class="detail-item">
            <strong>Client:</strong> {{ project.client }}
          </div>
          <div class="detail-item">
            <strong>Location:</strong> {{ project.location }}
          </div>
          <div class="detail-item">
            <strong>Completion Date:</strong> {{ project.completionDate }}
          </div>
          <div class="detail-item">
            <strong>Services:</strong> {{ project.scope ? project.scope.join(', ') : 'N/A' }}
          </div>
        </div>
        
        <div class="project-description">
          <h3>Project Description</h3>
          <p>{{ project.fullDescription }}</p>
        </div>
        
        <div class="project-scope" v-if="project.scope">
          <h3>Project Scope</h3>
          <ul>
            <li v-for="(item, index) in project.scope" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    getProjectColor() {
      // Use a consistent color based on the project title
      const colors = [
        '#1A1B3A', // Primary blue (darker)
        '#2A4B8D', // Secondary blue
        '#3A6DA0', // Lighter blue
        '#4C8FB3', // Even lighter blue
        '#D4AF37'  // Gold accent
      ];
      
      // Simple hash function to get a consistent index based on the project title
      const hash = this.project.title.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);
      
      return colors[hash % colors.length];
    }
  }
}
</script>

<style scoped>
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background-color: var(--white);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--text-dark);
  z-index: 10;
}

.modal-header {
  padding: 30px;
  border-bottom: 1px solid var(--light-gray);
}

.modal-header h2 {
  margin-bottom: 10px;
}

.project-category {
  display: inline-block;
  background-color: var(--light-gray);
  color: var(--primary-blue);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 5px 15px;
  border-radius: 20px;
}

.modal-body {
  padding: 30px;
}

.project-image-container {
  margin-bottom: 30px;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.placeholder-image {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
}

.project-details {
  margin-bottom: 30px;
  padding: 25px;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
}

.project-details h3 {
  margin-bottom: 15px;
  color: var(--primary-blue);
}

.detail-item {
  margin-bottom: 10px;
}

.detail-item strong {
  color: var(--text-dark);
  font-weight: 600;
}

.project-description h3 {
  margin-bottom: 15px;
  color: var(--primary-blue);
}

.project-description p {
  margin-bottom: 15px;
  line-height: 1.7;
  color: var(--text-light);
}

.project-results {
  margin-top: 30px;
}

.project-results h3 {
  margin-bottom: 15px;
  color: var(--primary-blue);
}

.project-results ul {
  list-style-type: none;
  padding-left: 0;
}

.project-results li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  line-height: 1.6;
  color: var(--text-light);
}

.project-results li::before {
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  left: 0;
  color: var(--primary-blue);
}

@media (max-width: 768px) {
  .modal-content {
    max-height: 85vh;
  }
  
  .placeholder-image {
    height: 250px;
    font-size: 4rem;
  }
  
  .modal-header, .modal-body {
    padding: 20px;
  }
}
</style>
