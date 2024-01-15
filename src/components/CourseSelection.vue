<template>
    <div class="w-[500px] bg-white rounded-[10px] h-[500px] px-[60px] pt-[50px] mx-auto">
      <h2 class="text-xl font-medium mb-[30px]">Пожалуйста, выберите курс <br> и семестр обучения !</h2>
      <button @click="selectCourse('1 курс')"  class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]">
        <span class="text-[#172F38] text-lg font-normal"> 1 курс</span>
      </button>
      <button @click="selectCourse('2 курс')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal"> 2 курс</span>
      </button>
      <button @click="selectCourse('3 курс')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal"> 3 курс</span>
      </button>
      <button @click="selectCourse('4 курс')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal"> 4 курс</span>
      </button>
    </div>
  </template>
<script>
export default {
  methods: {
    selectCourse(course) {
      this.$store.commit('setCourse', course);
      this.$router.push({ name: 'semester' });
    }
  }
};
</script>
<style scoped>
button:hover{
  border: 1px solid #2BB231;
  background-color: #DFF4E0;
}
button:hover span{
  color: #2BB231;
}
button::after{
  content: '';    
  margin-left: auto;

  width: 24px;
  height: 24px;
  background-image: url('../assets/right-arrow.svg');
  background-size: cover;
}
button:hover:after{
  content: '';
  margin-left: auto;

  width: 24px;
  height: 24px;
  background-image: url('../assets/right-arrow-2.svg');
  background-size: cover;
}
</style>