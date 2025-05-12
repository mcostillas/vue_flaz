<template>
  <section class="page-header">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="breadcrumbs">
        <router-link to="/">Home</router-link> / <span>{{ title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: #1A1B3A;
  background-image: linear-gradient(135deg, #1A1B3A 0%, #2a4b8d 100%);
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header h1 {
  color: #ffffff;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
  font-size: 2.2rem;
  font-weight: 700;
}

.breadcrumbs {
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
  font-size: 1rem;
}

.breadcrumbs a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
}

.breadcrumbs a:hover {
  color: #FFD046;
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 0;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
