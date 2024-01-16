<template>
  <div id="app" class="container">
    <Header />
    <StudentDataDisplay />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "./layout/Header.vue";
import StudentDataDisplay from "./components/StudentDataDisplay.vue";
import Footer from "./layout/Footer.vue";
export default {
  components: {
    Header,
    StudentDataDisplay,
    Footer,
  },
};
</script>
<style></style>
