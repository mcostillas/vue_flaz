<template>
  <section class="projects-preview" id="projects">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">OUR PROJECTS</span>
        <h2>Featured Projects</h2>
        <p>Explore our portfolio of successful projects that demonstrate our commitment to excellence and quality.</p>
      </div>
      <div class="projects-slider">
        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index">
            <div class="project-image">
              <div class="placeholder-project-image" :style="{ backgroundColor: getPlaceholderColor(index) }">
                <span>{{ project.title.charAt(0) }}</span>
              </div>
              <div class="project-overlay">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
                <router-link :to="'/projects#' + project.id" class="btn btn-light">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="projects-cta text-center">
        <router-link to="/projects" class="btn btn-primary">View All Projects</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  methods: {
    getPlaceholderColor(index) {
      // Array of colors to use for placeholders
      const colors = [
        '#1A1B3A', // Primary blue (darker)
        '#2A4B8D', // Secondary blue
        '#3A6DA0', // Lighter blue
        '#4C8FB3'  // Even lighter blue
      ];
      return colors[index % colors.length];
    }
  },
  data() {
    return {
      projects: [
        {
          id: 'project1',
          title: 'Al Barsha Corporate Center',
          category: 'Commercial Fitout'
        },
        {
          id: 'project2',
          title: 'Marina Luxury Residence',
          category: 'Residential Renovation'
        },
        {
          id: 'project3',
          title: 'Downtown Retail Complex',
          category: 'Retail Fitout'
        },
        {
          id: 'project4',
          title: 'Jumeirah Beach Hotel',
          category: 'Hospitality Maintenance'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Projects Preview Section */
.projects-preview {
  padding: 100px 0;
  background-color: var(--white);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.project-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  position: relative;
}

.project-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.placeholder-project-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.placeholder-project-image span {
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 27, 58, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transition: var(--transition);
  text-align: center;
}

.project-overlay h3 {
  color: var(--white);
  margin-bottom: 10px;
}

.project-overlay p {
  color: var(--accent-gold);
  margin-bottom: 20px;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.projects-cta {
  margin-top: 30px;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
