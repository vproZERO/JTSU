<template>
  
  <div
    v-for="item in items"
    @click="goToTopics(item)"
    :key="item.id"
    class="md:pt-[30px] md:pr-[30px] px-[16px] pt-[16px] pb-[84px] hover:-translate-y-2 transition cursor-pointer sm:pt-[30px] sm:px-[20px] sm:pb-[113px] sm:pl-[20px] md:pl-[30px] bg-white rounded-[10px] "
  >
    <div>
      <h2
        class="text-[#1C414F] md:text-xl text-base md:font-bold font-medium leading-[19.2px] md:leading-[21.6px] lg:leading-[25px] md:mb-[71px] mb-[10px] max-w-[240px] leading-[25px]"
      >
        {{ item.title }}
      </h2>
      
      <div
        class=" sm:w-[80px] lg:w-[140px] lg:h-[140px] mx-auto w-[60px] h-[60px] sm:h-[80px]"
      >
        <img :src="item.imageUrl" :alt="item.title" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {

  methods: {
    goToTopics(item) {
      this.$router.push({ name: "topics", params: item });
      console.log(item);
    }
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const res = await axios.get(
          "https://3adaba7887399f0b.mokky.dev/course"
        );
        this.items = res.data;
      } catch (error) {
        console.log("Error fetching data", error);
      }
    },
  },
};
</script>
<style scoped></style>
