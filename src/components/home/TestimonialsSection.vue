<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">CLIENT TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
        <p>Hear from our satisfied clients about their experience working with FLAZ Technical Services.</p>
      </div>
      <div class="testimonials-slider">
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-rating">
                <i class="fas fa-star" v-for="star in 5" :key="star"></i>
              </div>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <div class="placeholder-avatar" :style="{ backgroundColor: getAvatarColor(index) }">
                  {{ testimonial.name.charAt(0) }}
                </div>
              </div>
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
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
  },
  data() {
    return {
      testimonials: [
        {
          text: "FLAZ Technical Services exceeded our expectations with their professionalism and attention to detail. Their team completed our office renovation on time and within budget.",
          name: "Ahmed Al Mansoori",
          position: "CEO, Al Mansoori Enterprises"
        },
        {
          text: "We've been using FLAZ for our building maintenance for over 3 years. Their response time is excellent, and their technicians are highly skilled and professional.",
          name: "Sarah Johnson",
          position: "Property Manager, Marina Heights"
        },
        {
          text: "The fitout work done by FLAZ for our retail store was exceptional. They understood our vision and delivered exactly what we wanted, on time and on budget.",
          name: "Mohammed Al Hashimi",
          position: "Owner, Luxury Retail Group"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Testimonials Section */
.testimonials {
  padding: 100px 0;
  background-color: var(--white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.testimonial-card {
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.testimonial-content {
  padding: 30px;
  position: relative;
}

.quote-icon {
  margin-bottom: 20px;
}

.quote-icon i {
  font-size: 2rem;
  color: var(--accent-gold);
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 20px;
  color: var(--text-dark);
}

.testimonial-rating {
  margin-bottom: 20px;
}

.testimonial-rating i {
  color: var(--accent-gold);
  margin-right: 5px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background-color: var(--primary-blue);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 3px solid var(--white);
}

.placeholder-avatar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
}

.author-info h4 {
  color: var(--white);
  margin-bottom: 5px;
}

.author-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
