<template>
  <section class="team-preview">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">OUR LEADERSHIP</span>
        <h2>Meet the Experts Behind Our Success</h2>
        <p>Our team of experienced professionals is dedicated to delivering exceptional technical services.</p>
      </div>
      <div class="team-grid">
        <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
          <div class="member-image">
            <div class="placeholder-avatar" :style="{ backgroundColor: getAvatarColor(index) }">
              {{ member.name.charAt(0) }}
            </div>
            <div class="member-social">
              <a href="#" v-for="(social, i) in member.socials" :key="i">
                <i :class="social"></i>
              </a>
            </div>
          </div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <span>{{ member.position }}</span>
          </div>
        </div>
      </div>
      <div class="team-cta text-center">
        <router-link to="/team" class="btn btn-primary">View Full Team</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamPreviewSection',
  data() {
    return {
      teamMembers: [
        {
          name: 'Mohammed Al Farsi',
          position: 'Founder & CEO',
          socials: ['fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-facebook-f']
        },
        {
          name: 'Sarah Johnson',
          position: 'Operations Director',
          socials: ['fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-facebook-f']
        },
        {
          name: 'Ahmed Al Mansoori',
          position: 'Technical Director',
          socials: ['fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-facebook-f']
        },
        {
          name: 'Lisa Chen',
          position: 'Client Relations Manager',
          socials: ['fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-facebook-f']
        }
      ]
    }
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
.team-preview {
  padding: 100px 0;
  background-color: var(--light-gray);
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
  max-width: 700px;
  margin: 0 auto;
  color: var(--text-light);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.team-member {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.placeholder-avatar {
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

.member-social {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(26, 27, 58, 0.8), transparent);
  display: flex;
  justify-content: center;
  transform: translateY(100%);
  transition: var(--transition);
}

.team-member:hover .member-social {
  transform: translateY(0);
}

.member-social a {
  width: 35px;
  height: 35px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: var(--primary-blue);
  transition: var(--transition);
}

.member-social a:hover {
  background-color: var(--accent-gold);
  color: var(--white);
}

.member-info {
  padding: 20px;
  text-align: center;
}

.member-info h3 {
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.member-info span {
  display: block;
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 12px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  border: 2px solid var(--primary-blue);
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: transparent;
  color: var(--primary-blue);
}

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
  .team-preview {
    padding: 60px 0;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
