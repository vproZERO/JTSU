<template>
  <div id="app" class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>
