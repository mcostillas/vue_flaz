<template>
  <div id="app">
    <SiteHeader />

    <router-view/>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
:root {
  --primary-blue: #1a1b3a;
  --secondary-blue: #2d2f5d;
  --accent-gold: #ffd046;
  --gradient-purple: #8b6b9f;
  --gradient-blue: #4B6793;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

/* Import other styles */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style>
