<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">CLIENT TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
        <p>Hear from our satisfied clients about their experience working with FLAZ Technical Services.</p>
      </div>
      <div class="testimonials-slider">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-content">
            <div class="testimonial-rating">
              <i class="fas fa-star" v-for="star in 5" :key="star"></i>
            </div>
            <p>{{ testimonial.text }}</p>
          </div>
          <div class="testimonial-author">
            <div class="placeholder-avatar" :style="{ backgroundColor: getAvatarColor(index) }">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <span>{{ testimonial.position }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectTestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          text: "FLAZ Technical Services exceeded our expectations with their professionalism and attention to detail. The maintenance services they provided for our office building were exceptional.",
          name: "Ahmed Al Mansoori",
          position: "Facility Manager, Dubai Corporate Tower"
        },
        {
          text: "We hired FLAZ for our retail store fitout, and they delivered a stunning result within the timeline and budget. Their team was professional, skilled, and a pleasure to work with.",
          name: "Sarah Johnson",
          position: "Owner, Elegance Boutique"
        },
        {
          text: "The electrical services provided by FLAZ were top-notch. Their team identified and resolved complex issues efficiently, ensuring our systems operate flawlessly.",
          name: "Mohammed Al Hashimi",
          position: "Director, Al Hashimi Properties"
        }
      ]
    };
  },
  methods: {
    getAvatarColor(index) {
      // Array of colors to use for avatars
      const colors = [
        '#1A1B3A', // Primary blue (darker)
        '#2A4B8D', // Secondary blue
        '#3A6DA0', // Lighter blue
        '#D4AF37'  // Gold accent
      ];
      return colors[index % colors.length];
    }
  }
}
</script>

<style scoped>
.testimonials {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-header {
  margin-bottom: 50px;
}

.section-subtitle {
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 15px;
  display: block;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--text-dark);
}

.section-header p {
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.testimonial-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: var(--transition);
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  margin-bottom: 20px;
}

.testimonial-rating {
  margin-bottom: 15px;
  color: var(--accent-gold);
}

.testimonial-content p {
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.8;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.placeholder-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}

.author-info {
  flex: 1;
}

.author-info h4 {
  margin: 0 0 5px;
  font-size: 1.1rem;
  color: var(--text-dark);
}

.author-info span {
  font-size: 0.9rem;
  color: var(--text-light);
}

@media (max-width: 992px) {
  .testimonials-slider {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials-slider {
    grid-template-columns: 1fr;
  }
  
  .testimonials {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}
</style>
