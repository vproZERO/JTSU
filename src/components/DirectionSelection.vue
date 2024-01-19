<template>
  <div class="px-[20px]">
    <div
      class="md:w-[500px] bg-white rounded-[10px] h-[500px] md:px-[60px] md:pt-[50px] px-[16px] pt-[24px] pb-[40px] mx-auto"
    >
      <h2 class="text-xl font-medium mb-[30px]">
        {{ $t('Пожалуйста выберите свое направление') }}
      </h2>
      <button
        v-for="direction in directions"
        :key="direction.id"
        @click="selectDirection(direction.title)"
        class="w-full relative mb-[8px] flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]"
      >
        <span class="text-[#172F38] text-lg font-normal">{{
          direction.title
        }}</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    selectDirection(direction) {
      this.$store.commit("setDirection", direction);
      this.$router.push({ name: "faculty" });
    },
  },
  data() {
    return {
      directions: [
        { id: 1, title: "Бакалавр" },
        { id: 2, title: "Магистратура" },
      ],
    };
  },
};
</script>
<style scoped>
button:hover {
  border: 1px solid #2bb231;
  background-color: #dff4e0;
}
h2 {
  color: #1c414f;
}
button span {
  color: #1c414f;
}
button:hover span {
  color: #2bb231;
}
button::after {
  content: "";
  margin-left: auto;

  width: 24px;
  height: 24px;
  background-image: url("../assets/right-arrow.svg");
  background-size: cover;
}
button:hover:after {
  content: "";
  margin-left: auto;
  width: 24px;
  height: 24px;
  background-image: url("../assets/right-arrow-2.svg");
  background-size: cover;
}
</style>
