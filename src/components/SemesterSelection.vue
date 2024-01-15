<!-- components/SemesterSelection.vue -->
<template>
    <div class="w-[500px] bg-white rounded-[10px] h-[500px] px-[60px] pt-[50px] mx-auto relative">
      <h2 class="text-xl font-medium mb-[30px]">Пожалуйста, выберите семестр <br> обучения !</h2>
      <button @click="selectSemester('1 семестр')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]">
        <span class="text-[#172F38] text-lg font-normal"> 1 семестр</span>
      </button>
      <button @click="selectSemester('2 семестр')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal"> 2 семестр</span>
      </button>
      <button
      @click="goBack(cource)"
        class="goBackBtn  bg-[#DFF4E0] py-[15px] text-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative "
      >
        <span>Назад</span>
      </button> 
      <!-- Добавьте другие семестры по необходимости -->
    </div>
  </template>
<script>
export default {
  methods: {
    selectSemester(semester) {
      this.$store.commit('setSemester', semester);
      this.$router.push({ name: 'language' });
    },
    goBack(cource) {
      this.$store.commit("setCourse", cource);
      this.$router.push({ name: "cource" });
    },
  }
};
</script>
<style scoped>
button:hover{
  border: 1px solid #2BB231;
  background-color: #DFF4E0;
}
.goBackBtn::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 20px;
  width: 24px;
  height: 24px;
  background-image: url("../assets/left-arrow-2.svg");
  background-size: cover;
}
.goBackBtn{
  position: absolute;
  bottom: 40px; 
  right: 60px;
}
h2{
  color: #1C414F;
}
button span {
  color: #1C414F;
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