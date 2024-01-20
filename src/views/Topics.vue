<template>
  <div class="lg:px-36 px-[20px]">
    <Breadcrumb class="mb-[20px] md:block hidden" />
    <h2 class="mb-[20px] text-[#1C414F] font-medium text-2xl">
      Предмет: Теория и методика физической реабилитации
    </h2>
    <StickyFiles class="md:mb-[40px] sm:mb-[30px] mb-[24px]" />
    <LectureTopics @click="goToList" class="mb-[40px]" />
    <PracticalTopic @click="goToList" />
  </div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import StickyFiles from "../components/StickyFiles.vue";
import LectureTopics from "../components/LectureTopics.vue";
import PracticalTopic from "../components/PracticalTopics.vue";
export default {
  components: {
    Breadcrumb,
    StickyFiles,
    LectureTopics,
    PracticalTopic,
  },
  methods: {
    goToList() {
      this.$router.push("/list");
    },
  },
};
</script>
<style lang=""></style>
