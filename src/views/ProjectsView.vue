<template>
  <div class="projects-page">
    <!-- Page Header -->
    <PageHeader title="Our Projects" />

    <!-- Completed Projects Gallery -->
    <section class="projects-gallery completed-projects">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">OUR PORTFOLIO</span>
          <h2>Completed Projects</h2>
          <p>Explore our diverse portfolio of successful projects that showcase our expertise and commitment to excellence.</p>
        </div>
        
        <!-- Filters removed as requested -->
        
        <swiper
          :modules="[SwiperNavigation, SwiperPagination]"
          :slides-per-view="3"
          :space-between="20"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: false
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }"
          class="projects-slider"
        >
          <swiper-slide v-for="(project, index) in completedProjects" :key="index">
            <ProjectCard
              :project="project"
              :index="index"
              @open-modal="openProjectModal"
            />
          </swiper-slide>
          <template #container-end>
            <div class="slider-navigation">
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
            </div>
          </template>
        </swiper>
      </div>
    </section>
    
    <!-- Proposed Projects Gallery -->
    <section class="projects-gallery proposed-projects">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">UPCOMING WORK</span>
          <h2>Proposed Projects</h2>
          <p>Discover our upcoming projects and innovative solutions we're planning to implement in the near future.</p>
        </div>
        
        <!-- Filters removed as requested -->
        
        <swiper
          :modules="[SwiperNavigation, SwiperPagination]"
          :slides-per-view="3"
          :space-between="20"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: false
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }"
          class="projects-slider"
        >
          <swiper-slide v-for="(project, index) in proposedProjects" :key="index">
            <ProjectCard
              :project="project"
              :index="index"
              :isProposed="true"
              @open-modal="openProjectModal"
            />
          </swiper-slide>
          <template #container-end>
            <div class="slider-navigation">
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
            </div>
          </template>
        </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectModal from '@/components/projects/ProjectModal.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import ProjectTestimonialsSection from '@/components/projects/ProjectTestimonialsSection.vue'

export default {
  name: 'ProjectsView',
  components: {
    ProjectCard,
    ProjectModal,
    PageHeader,
    Swiper,
    SwiperSlide,
    ProjectTestimonialsSection
  },
  setup() {
    return {
      SwiperNavigation,
      SwiperPagination
    }
  },
  data() {
    return {
      completedProjects: [
        {
          id: 7,
          title: 'Springs 2 Street 2 Villa 42',
          category: 'Landscaping',
          shortDescription: 'Complete landscaping of a luxury villa in Springs 2 with modern amenities and premium finishes.',
          fullDescription: 'This comprehensive landscaping project involved transforming a luxury villa in Springs 2 into a modern living space with premium finishes and state-of-the-art amenities. The project included structural modifications, electrical upgrades, plumbing renovations, and high-end interior design implementation.',
          client: 'Private Client',
          location: 'Dubai,UAE',
          completionDate: 'April 2025',
          type: 'landscaping',
          images: [
            require('@/imgfiles/Projects/Springs 2 Street 2 Villa 42/photo 1.jpg'),
            require('@/imgfiles/Projects/Springs 2 Street 2 Villa 42/photo 1.1.jpg'),
            require('@/imgfiles/Projects/Springs 2 Street 2 Villa 42/photo 2.jpg'),
            require('@/imgfiles/Projects/Springs 2 Street 2 Villa 42/photo 2.1.jpg')
          ],
          scope: [
            'Complete landscaping',
            'Structural modifications',
            'Electrical system upgrades',
            'Plumbing system overhaul',
            'Premium finish implementation',
            'Custom cabinetry and millwork'
          ]
        },
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
      proposedProjects: [
        {
          id: 101,
          title: 'Business Bay Commercial Complex',
          category: 'Commercial Development',
          shortDescription: 'Proposed development of a modern commercial complex with integrated smart building technology.',
          fullDescription: 'This proposed project involves the development of a state-of-the-art commercial complex in Business Bay, featuring integrated smart building technology, sustainable design elements, and premium amenities. The complex will include office spaces, retail outlets, and recreational facilities.',
          client: 'Business Bay Developments LLC',
          location: 'Business Bay, Dubai',
          projectedStart: 'Q3 2025',
          estimatedValue: 'AED 15 Million',
          type: 'fitout',
          scope: [
            'Smart building system integration',
            'Sustainable design implementation',
            'Premium fitout solutions',
            'Advanced HVAC systems',
            'Energy-efficient lighting',
            'Water conservation systems'
          ]
        },
        {
          id: 102,
          title: 'Al Sufouh Residential Towers',
          category: 'Residential Development',
          shortDescription: 'Proposed construction of luxury residential towers with smart home integration.',
          fullDescription: 'This proposed project involves the construction of luxury residential towers in Al Sufouh, featuring smart home integration, premium amenities, and sustainable design elements. The development will include a range of apartment sizes, communal facilities, and landscaped outdoor spaces.',
          client: 'Al Sufouh Properties',
          location: 'Al Sufouh, Dubai',
          projectedStart: 'Q1 2026',
          estimatedValue: 'AED 25 Million',
          type: 'electrical',
          scope: [
            'Smart home system integration',
            'Premium electrical installations',
            'Energy-efficient design',
            'Advanced security systems',
            'Automated lighting and climate control',
            'Sustainable energy solutions'
          ]
        },
        {
          id: 103,
          title: 'Dubai Healthcare City Medical Center',
          category: 'Healthcare Facility',
          shortDescription: 'Proposed development of a specialized medical center with advanced technical infrastructure.',
          fullDescription: 'This proposed project involves the development of a specialized medical center in Dubai Healthcare City, featuring advanced technical infrastructure, specialized medical equipment installations, and premium healthcare facility design. The center will include consultation rooms, treatment areas, and administrative spaces.',
          client: 'Dubai Healthcare Investments',
          location: 'Dubai Healthcare City, Dubai',
          projectedStart: 'Q4 2025',
          estimatedValue: 'AED 18 Million',
          type: 'hvac',
          scope: [
            'Specialized HVAC systems for healthcare',
            'Medical gas installations',
            'Clean room technology',
            'Advanced electrical systems',
            'Specialized plumbing solutions',
            'Medical equipment integration'
          ]
        },
        {
          id: 104,
          title: 'Dubai Marina Yacht Club Renovation',
          category: 'Hospitality Renovation',
          shortDescription: 'Proposed comprehensive renovation of the Dubai Marina Yacht Club with premium amenities.',
          fullDescription: 'This proposed project involves a comprehensive renovation of the Dubai Marina Yacht Club, featuring premium amenities, luxury finishes, and state-of-the-art facilities. The renovation will include the main clubhouse, dining areas, member facilities, and outdoor spaces.',
          client: 'Dubai Marina Management',
          location: 'Dubai Marina, Dubai',
          projectedStart: 'Q2 2026',
          estimatedValue: 'AED 12 Million',
          type: 'plumbing',
          scope: [
            'Premium plumbing installations',
            'Water feature design and implementation',
            'Marine-grade systems',
            'Luxury bathroom fixtures',
            'Water conservation technology',
            'Specialized drainage solutions'
          ]
        }
      ],
      // Filters removed as requested
      selectedProject: null
    }
  },
  methods: {
    
    openProjectModal(project) {
      this.selectedProject = project;
    },
    
    closeProjectModal() {
      this.selectedProject = null;
    }
  },
  
  mounted() {
    document.title = 'Our Projects | FLAZ Technical Services';
  }
}
</script>

<style scoped>
/* Swiper Styles */
.projects-slider {
  padding: 10px 30px 70px;
  margin: 0 -30px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  position: static;
  width: 24px;
  height: 24px;
  color: white;
  margin: 0 !important;
  cursor: pointer;
  transition: var(--transition);
  display: flex !important;
  align-items: center;
  justify-content: center;
  opacity: 1 !important;
  visibility: visible !important;
  background: none;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 12px;
  font-weight: normal;
  opacity: 1;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: var(--accent-gold);
}

.slider-navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 15px;
  border-radius: 20px;
}

:deep(.swiper-pagination) {
  position: static !important;
  width: auto !important;
  display: flex;
  margin: 0 15px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  margin: 0 6px;
}

:deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 3px;
  cursor: pointer;
  transition: var(--transition);
  opacity: 0.6;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--accent-gold);
  opacity: 1;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  justify-content: center;
}
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
