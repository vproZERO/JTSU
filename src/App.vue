<template>
    <div id="app" class="container">
        <StudentDataDisplay/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<script>
import StudentDataDisplay from './components/StudentDataDisplay.vue';
import Footer from './layout/Footer.vue'
export default {
    components: {
    StudentDataDisplay,
    Footer
  }
}
</script>
<style >
   
</style>