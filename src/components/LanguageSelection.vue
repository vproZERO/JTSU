<!-- components/LanguageSelection.vue -->
<template>
    <div class="w-[500px] bg-white rounded-[10px] h-[500px] px-[60px] pt-[50px] mx-auto">
      <h2 class="text-xl font-medium mb-[30px]">Пожалуйста, выберите язык <br> обучения!</h2>
      <button @click="selectLanguage('Узбекский язык')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Узбекский язык</span>
      </button>
      <button @click="selectLanguage('Русский язык')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Русский язык</span>
      </button>
      <button @click="selectLanguage('Английский язык')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
        <span class="text-[#172F38] text-lg font-normal">Английский язык</span>
      </button>
      <!-- Добавьте другие языки по необходимости -->
    </div>
  </template>
<script>
export default {
  methods: {
    selectLanguage(language) {
      this.$store.commit('setLanguage', language);
      this.$router.push({ name: 'someRoute' }); // Замените "someRoute" на ваш реальный маршрут
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