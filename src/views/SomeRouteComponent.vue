<template>
  <div class="lg:px-20 px-[20px]">
    <StudentDataDisplay />
    <h2 class="text-2xl font-medium text-[#1C414F] sm:mb-[20px] mb-[16px]">
      {{ $t("Предметы") }}
    </h2>
    <div
      class="items_container grid lg:grid-cols-3 grid-cols-2 gap-[20px] sm:gap-y-[20px] gap-y-[15px]"
    >
      <Items />
    </div>
  </div>
</template>
<script>
import Items from "../components/Items.vue";
import StudentDataDisplay from "../components/StudentDataDisplay.vue";
export default {
  components: {
    Items,
    StudentDataDisplay,
  },
};
</script>
<style scoped></style>
