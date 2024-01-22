<template>
  <div class="lg:px-20 px-[20px] py-[20px]">

  <Lessons :lessons="lessons"/>
  </div>
</template>
<script>
import axios from "axios";
import Lessons from "../components/Lessons.vue";
export default {
  data() {
    return {
      lessons: [],
    }
  },
  components: {
    Lessons,
  },
  mounted() {
    this.getLessons();
  },
  methods: {
    async getLessons() {
      try {
        const res = await axios.get("https://3adaba7887399f0b.mokky.dev/course");

        this.lessons = res.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang=""></style>
