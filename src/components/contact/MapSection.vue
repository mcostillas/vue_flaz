<template>
  <section class="map-section">
    <div class="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.2641342691584!2d55.19347491500953!3d25.111936983939305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4a13d8c593%3A0x3c5c2e8af8f47aaa!2sAl%20Barsha%201%2C%20Dubai!5e0!3m2!1sen!2sae!4v1620123456789!5m2!1sen!2sae" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
        title="FLAZ Technical Services Location">
      </iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MapSection'
}
</script>

<style scoped>
.map-section {
  padding: 0;
  margin: 80px 0;
}

.map-container {
  width: 100%;
  height: 450px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .map-section {
    margin: 60px 0;
  }
  
  .map-container {
    height: 350px;
  }
}
</style>
