<template>
  <div class="lg:px-20 px-[20px]">
    <StudentDataDisplay/>
    <h2 class="text-2xl font-medium text-[#1C414F] sm:mb-[20px] mb-[16px]">
      {{ $t('Предметы') }}
    </h2>
    <div
      class="items_container grid  lg:grid-cols-3 grid-cols-2 gap-[20px] sm:gap-y-[20px] gap-y-[15px]"
    >
      <Items :items="items"/>
    </div>
  </div>
</template>
<script>
import Items from "../components/Items.vue";
import axios from "axios";
import StudentDataDisplay from "../components/StudentDataDisplay.vue";
export default {
  components: {
    Items,
    StudentDataDisplay
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
