<template>
  <div class="projects-page">
    <!-- Page Header -->
    <PageHeader title="Our Projects" />

    <!-- Projects Gallery -->
    <section class="projects-gallery">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">OUR PORTFOLIO</span>
          <h2>Featured Projects</h2>
          <p>Explore our diverse portfolio of successful projects that showcase our expertise and commitment to excellence.</p>
        </div>
        
        <div class="projects-filter">
          <button class="filter-btn active" data-filter="all" @click="filterProjects('all')">All</button>
          <button class="filter-btn" data-filter="maintenance" @click="filterProjects('maintenance')">Maintenance</button>
          <button class="filter-btn" data-filter="fitout" @click="filterProjects('fitout')">Fitout</button>
          <button class="filter-btn" data-filter="electrical" @click="filterProjects('electrical')">Electrical</button>
          <button class="filter-btn" data-filter="plumbing" @click="filterProjects('plumbing')">Plumbing</button>
          <button class="filter-btn" data-filter="hvac" @click="filterProjects('hvac')">HVAC</button>
        </div>
        
        <div class="projects-grid">
          <ProjectCard 
            v-for="(project, index) in filteredProjects" 
            :key="index"
            :project="project"
            :index="index"
            @open-modal="openProjectModal"
          />
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <ProjectModal 
      v-if="selectedProject" 
      :project="selectedProject" 
      @close="closeProjectModal"
    />

    <!-- Testimonials Section -->
    <ProjectTestimonialsSection />

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and discover how our technical services can elevate your property.</p>
          <router-link to="/contact" class="btn btn-primary">Schedule Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@/components/shared/PageHeader.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import ProjectModal from '@/components/projects/ProjectModal.vue';
import ProjectTestimonialsSection from '@/components/projects/ProjectTestimonialsSection.vue';

export default {
  name: 'ProjectsView',
  components: {
    PageHeader,
    ProjectCard,
    ProjectModal,
    ProjectTestimonialsSection
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Al Barsha Corporate Center',
          category: 'Office Renovation',
          shortDescription: 'Complete renovation of a 5-floor corporate center with modern amenities and sustainable features.',
          fullDescription: 'This comprehensive renovation project involved transforming a 5-floor corporate center in Al Barsha into a modern workspace with state-of-the-art amenities and sustainable features. The project included electrical upgrades, plumbing renovations, HVAC optimization, and premium fitout solutions.',
          client: 'Al Barsha Properties LLC',
          location: 'Al Barsha, Dubai',
          completionDate: 'January 2023',
          value: 'AED 2.5 Million',
          type: 'fitout',
          scope: [
            'Complete interior renovation',
            'Electrical system upgrades',
            'Plumbing system overhaul',
            'HVAC optimization',
            'Smart office integration',
            'Sustainable material implementation'
          ]
        },
        {
          id: 2,
          title: 'Marina Heights Towers',
          category: 'Residential Maintenance',
          shortDescription: 'Comprehensive maintenance services for a luxury residential complex with 200+ units.',
          fullDescription: 'Marina Heights Towers, a premium residential complex with over 200 units, required comprehensive maintenance services to ensure optimal functionality and resident comfort. Our team implemented a tailored maintenance program addressing electrical, plumbing, HVAC, and general building maintenance needs.',
          client: 'Marina Heights Management',
          location: 'Dubai Marina, Dubai',
          completionDate: 'Ongoing (Started March 2022)',
          value: 'AED 1.8 Million Annually',
          type: 'maintenance',
          scope: [
            'Preventive maintenance program',
            'Electrical system maintenance',
            'Plumbing system maintenance',
            'HVAC servicing and optimization',
            '24/7 emergency response',
            'Common area maintenance'
          ]
        },
        {
          id: 3,
          title: 'Downtown Retail Complex',
          category: 'Commercial Fitout',
          shortDescription: 'Premium fitout solutions for a high-end retail complex in Downtown Dubai.',
          fullDescription: 'This project involved providing premium fitout solutions for a high-end retail complex in Downtown Dubai. Our team designed and implemented custom fitout solutions for multiple retail spaces, ensuring a cohesive aesthetic while meeting the specific requirements of each tenant.',
          client: 'Downtown Retail Developers',
          location: 'Downtown, Dubai',
          completionDate: 'September 2022',
          value: 'AED 3.2 Million',
          type: 'fitout',
          scope: [
            'Custom retail space design',
            'Premium material selection',
            'Specialized lighting solutions',
            'Custom display installations',
            'Electrical and plumbing work',
            'HVAC integration'
          ]
        },
        {
          id: 4,
          title: 'Jumeirah Beach Hotel',
          category: 'Electrical Upgrade',
          shortDescription: 'Complete electrical system upgrade for a 5-star hotel with 400+ rooms.',
          fullDescription: 'This project involved a comprehensive upgrade of the electrical systems at the prestigious Jumeirah Beach Hotel. Our team implemented state-of-the-art electrical solutions to enhance energy efficiency, safety, and reliability throughout the 400+ room facility.',
          client: 'Jumeirah Group',
          location: 'Jumeirah Beach, Dubai',
          completionDate: 'July 2022',
          value: 'AED 4.5 Million',
          type: 'electrical',
          scope: [
            'Electrical system assessment',
            'Power distribution upgrade',
            'Lighting system modernization',
            'Emergency power systems',
            'Energy efficiency improvements',
            'Smart control implementation'
          ]
        },
        {
          id: 5,
          title: 'Al Quoz Industrial Complex',
          category: 'Plumbing Solutions',
          shortDescription: 'Industrial-grade plumbing solutions for a manufacturing facility in Al Quoz.',
          fullDescription: 'This project involved designing and implementing industrial-grade plumbing solutions for a large manufacturing facility in Al Quoz Industrial Area. Our team provided comprehensive plumbing services to ensure efficient water distribution, waste management, and compliance with industrial standards.',
          client: 'Al Quoz Industrial LLC',
          location: 'Al Quoz, Dubai',
          completionDate: 'November 2022',
          value: 'AED 1.2 Million',
          type: 'plumbing',
          scope: [
            'Industrial plumbing system design',
            'High-capacity water distribution',
            'Industrial waste management',
            'Water treatment solutions',
            'Compliance with industrial standards',
            'Preventive maintenance program'
          ]
        },
        {
          id: 6,
          title: 'Sheikh Zayed Road Office Tower',
          category: 'HVAC Optimization',
          shortDescription: 'Comprehensive HVAC optimization for a 30-floor office tower on Sheikh Zayed Road.',
          fullDescription: 'This project involved optimizing the HVAC systems in a 30-floor office tower on Sheikh Zayed Road. Our team implemented energy-efficient solutions to enhance comfort, reduce operational costs, and minimize environmental impact.',
          client: 'SZR Properties',
          location: 'Sheikh Zayed Road, Dubai',
          completionDate: 'March 2023',
          value: 'AED 3.8 Million',
          type: 'maintenance',
          scope: [
            'HVAC system assessment',
            'Energy efficiency optimization',
            'Temperature control enhancement',
            'Air quality improvement',
            'Smart HVAC control implementation',
            'Preventive maintenance program'
          ]
        }
      ],
      filteredProjects: [],
      activeFilter: 'all',
      selectedProject: null
    }
  },
  methods: {
    filterProjects(filter) {
      this.activeFilter = filter;
      
      if (filter === 'all') {
        this.filteredProjects = this.projects;
      } else {
        this.filteredProjects = this.projects.filter(project => project.type === filter);
      }
      
      // Update active class on filter buttons
      const filterBtns = document.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filter) {
          btn.classList.add('active');
        }
      });
    },
    openProjectModal(project) {
      this.selectedProject = project;
      document.body.classList.add('modal-open');
    },
    closeProjectModal() {
      this.selectedProject = null;
      document.body.classList.remove('modal-open');
    }
  },
  mounted() {
    document.title = 'Our Projects | FLAZ Technical Services';
    this.filterProjects('all');
  }
}
</script>

<style scoped>
/* Projects Gallery Section */
.projects-gallery {
  padding: 80px 0;
}

.section-header {
  margin-bottom: 40px;
}

.section-subtitle {
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 15px;
  display: block;
}

.projects-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.filter-btn {
  background: none;
  border: none;
  padding: 10px 20px;
  margin: 0 5px 10px;
  font-weight: 500;
  color: var(--text-dark);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--border-radius);
}

.filter-btn:hover {
  color: var(--primary-blue);
}

.filter-btn.active {
  background-color: var(--primary-blue);
  color: var(--white);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

/* Modal Styles */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
}

.modal-content {
  background-color: var(--white);
  border-radius: var(--border-radius);
  max-width: 900px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-dark);
  cursor: pointer;
  z-index: 10;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-gallery {
    padding: 60px 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-btn {
    margin-bottom: 10px;
  }
}
</style>
