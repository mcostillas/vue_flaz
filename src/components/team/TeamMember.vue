<template>
  <div class="team-member">
    <div class="member-image">
      <div class="placeholder-avatar" :style="{ backgroundColor: getAvatarColor(index) }">
        {{ name.charAt(0) }}
      </div>
      <div class="member-social">
        <a href="#" v-for="(social, i) in socials" :key="i">
          <i :class="social"></i>
        </a>
      </div>
    </div>
    <div class="member-info">
      <h3>{{ name }}</h3>
      <span>{{ position }}</span>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    socials: {
      type: Array,
      default: () => ['fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-facebook-f']
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getAvatarColor(index) {
      // Array of colors to use for avatars
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
  height: 300px;
  overflow: hidden;
}

.placeholder-avatar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
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
  padding: 25px;
  text-align: center;
}

.member-info h3 {
  margin-bottom: 5px;
  font-size: 1.3rem;
}

.member-info span {
  display: block;
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 15px;
}

.member-info p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
