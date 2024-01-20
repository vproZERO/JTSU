<template>
  <div
    v-for="item in items"
    @click="goToTopics(item)"
    :key="item.id"
    class="md:pt-[30px] md:pr-[20px] px-[16px] pt-[16px] pb-[84px] hover:-translate-y-2 transition cursor-pointer sm:pt-[30px] sm:px-[20px] sm:pb-[113px] sm:pl-[20px] lg:pl-[30px] bg-white rounded-[10px] "
  >
    <div>
      <h2
        class="text-[#1C414F] md:text-lg text-base md:font-bold font-medium leading-[19.2px] md:leading-[21.6px] lg:leading-[25px] md:mb-[15px] mb-[10px] max-w-[240px] leading-[25px]"
      >
        {{ item.title }}
      </h2>
      
      <div
        class="mx-auto sm:w-[80px] lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] sm:h-[80px]"
      >
        <img :src="item.imageUrl" :alt="item.title" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goToTopics(item) {
      this.$router.push({ name: "topics", params: item });
      console.log(item);
    }
  }
  // methods: {
  //     isSpecial(itemId) {
  //         return [2, 6 , 7,  14 ,15].includes(itemId)
  //     },
  //     isSpecial2(itemId) {
  //         return [3, 4 , 9, 10].includes(itemId)
  //     }
  // },
};
</script>
<style scoped></style>
