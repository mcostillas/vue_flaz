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
          <div v-if="project.images && project.images.length > 0" class="image-carousel">
            <div class="carousel-inner">
              <img :src="project.images[currentImageIndex]" :alt="project.title" class="carousel-image">
            </div>
            <div class="carousel-controls" v-if="project.images.length > 1">
              <button class="carousel-control prev" @click="prevImage">
                <i class="fas fa-chevron-left"></i>
              </button>
              <div class="carousel-indicators">
                <span 
                  v-for="(image, index) in project.images" 
                  :key="index"
                  :class="['indicator', { active: index === currentImageIndex }]"
                  @click="setImage(index)"
                ></span>
              </div>
              <button class="carousel-control next" @click="nextImage">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div v-else class="placeholder-image" :style="{ backgroundColor: getProjectColor() }">
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
          <div class="detail-item" v-if="project.completionDate">
            <strong>Completion Date:</strong> {{ project.completionDate }}
          </div>
          <div class="detail-item" v-if="project.projectedStart">
            <strong>Projected Start:</strong> {{ project.projectedStart }}
          </div>

          <div class="detail-item">
            <strong>Services:</strong> {{ project.scope ? project.scope.join(', ') : 'N/A' }}
          </div>
          <div class="detail-item" v-if="project.projectedStart">
            <div class="project-status proposed">
              <span>Proposed Project</span>
            </div>
          </div>
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
  data() {
    return {
      currentImageIndex: 0
    };
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
    },
    nextImage() {
      if (this.project.images && this.project.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
      }
    },
    prevImage() {
      if (this.project.images && this.project.images.length > 0) {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
      }
    },
    setImage(index) {
      this.currentImageIndex = index;
    }
  },
  watch: {
    project() {
      // Reset the image index when the project changes
      this.currentImageIndex = 0;
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

.image-carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  margin: 0 10px;
}

.carousel-control:hover {
  background-color: var(--primary-blue);
}

.carousel-indicators {
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: var(--transition);
}

.indicator.active {
  background-color: var(--white);
  transform: scale(1.2);
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

.project-status {
  display: inline-block;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 15px;
}

.project-status.proposed {
  background-color: var(--accent-gold);
  color: var(--white);
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
