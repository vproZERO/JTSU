<template>
    <div class="px-[20px]">
      <div class="md:w-[500px] px-[16px] pt-[24px] pb-[106px] bg-white rounded-[10px]  md:px-[60px] md:pt-[50px] md:pb-[122px] mx-auto relative">
        <h2 class="text-xl font-medium md:mb-[30px] mb-[15px]">Пожалуйста, выберите курс <br> и обучения !</h2>
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
        <button
        @click="goBack(faculty)"
          class="goBackBtn  bg-[#DFF4E0] py-[15px] text-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px]  "
        >
          <span>Назад</span>
        </button> 
      </div>
    </div>
  </template>
<script>
export default {
  methods: {
    selectCourse(course) {
      this.$store.commit('setCourse', course);
      this.$router.push({ name: 'semester' });
    },
    goBack(faculty) {
      this.$store.commit("setFaculty", faculty);
      this.$router.push({ name: "faculty" });
    },
  }
};
</script>
<style scoped>
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
@media screen and (max-width: 768px) {
  .goBackBtn{
    right: 20px;
    bottom: 20px;
  }
}
button:hover{
  border: 1px solid #2BB231;
  background-color: #DFF4E0;
}
button:hover span{
  color: #2BB231;
}
h2{
  color: #1C414F;
}
button span {
  color: #1C414F;
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