<template>
    <div class="w-[500px] bg-white rounded-[10px] pb-[70px] px-[60px] pt-[50px] mx-auto">
      <h2 class="text-xl font-medium mb-[30px]">Пожалуйста выберите свой <br> факультет:</h2>
      <button @click="selectFaculty('Факультет борьбы')"  class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]">
        <span class="text-[#172F38] text-lg font-normal  w-[259px]">Факультет борьбы</span>
      </button>
      <button @click="selectFaculty('Межфакультетские кафедры')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Межфакультетские кафедры</span>
      </button>
      <button @click="selectFaculty('Факультет спортивного многоборья')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Факультет спортивного многоборья</span>
      </button>
      <button @click="selectFaculty('Факультет спортивного менеджмента и туризма')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Факультет спортивного менеджмента и туризма</span>
      </button>
      <button @click="selectFaculty('Факультет футбола')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Факультет футбола</span>
      </button>
      <button @click="selectFaculty('Факультет Паралимпийских игр и зимних видов спорта ')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Факультет Паралимпийских игр и зимних видов спорта </span>
      </button>
      <button @click="selectFaculty('Совместный Узбекско-Белорусский факультет физической культуры, спорта и туризма')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Совместный Узбекско-Белорусский факультет физической культуры, спорта и туризма</span>
      </button>
      <button @click="selectFaculty('Медицинский факультет')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Медицинский факультет</span>
      </button>
      <button @click="selectFaculty('Факультет единобордства')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Факультет единобордства</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      selectFaculty(faculty) {
        this.$store.commit('setFaculty', faculty);
        this.$router.push({ name: 'course' });
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
  span{
    text-align: start;
    max-width: 260px;
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