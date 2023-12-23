<script setup>
import Navbar from './components/Navbar.vue';

import Footer from './components/Footer.vue';

</script>

<template>
  <!-- Navbar -->
  <Navbar />

  <!-- Content -->
  <router-view />

  <!-- Footer -->
  <Footer />
</template>

<style scoped></style>