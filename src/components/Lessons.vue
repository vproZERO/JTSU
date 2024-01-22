<template>
  <h2 class="text-2xl font-medium text-[#1C414F] sm:mb-[20px] mb-[16px]">
    {{ $t("Популярные предметы") }}
  </h2>
  <div
    class="items_container grid lg:grid-cols-3 grid-cols-2 gap-[20px] sm:gap-y-[20px] gap-y-[15px]"
  >
    <div
      v-for="lesson in lessons"
      :key="lesson.id"
      class="md:pt-[30px] md:pr-[20px] px-[16px] pt-[16px] pb-[84px] hover:-translate-y-2 transition cursor-pointer sm:pt-[30px] sm:px-[20px] sm:pb-[113px] sm:pl-[20px] lg:pl-[30px] bg-white rounded-[10px]"
    >
      <div>
        <h2
          class="text-[#1C414F] md:text-lg text-base md:font-bold font-medium leading-[19.2px] md:leading-[21.6px] lg:leading-[25px] md:mb-[15px] mb-[10px] max-w-[240px] leading-[25px]"
        >
          {{ lesson.title }}
        </h2>

        <div
          class="mx-auto sm:w-[80px] lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] sm:h-[80px]"
        >
          <img :src="lesson.imageUrl" :alt="lesson.title" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lessons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped></style>
