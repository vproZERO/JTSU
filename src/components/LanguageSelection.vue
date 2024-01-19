<!-- components/LanguageSelection.vue -->
<template>
  <div class="px-[20px]">
    <div
      class="md:w-[500px] px-[16px] pt-[24px] pb-[106px] bg-white rounded-[10px] md:px-[60px] md:pt-[50px] md:pb-[122px] mx-auto relative"
    >
      <h2 class="text-xl font-medium md:mb-[30px] mb-[15px]">
        {{ $t('Пожалуйста, выберите язык  обучения!') }}
      </h2>
      <button
        @click="selectLanguage('Узбекский язык')"
        class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]"
      >
        <span class="text-[#172F38] text-lg font-normal">Узбекский язык</span>
      </button>
      <button
        @click="selectLanguage('Русский язык')"
        class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
      >
        <span class="text-[#172F38] text-lg font-normal">Русский язык</span>
      </button>
      <button
        @click="selectLanguage('Английский язык')"
        class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
      >
        <span class="text-[#172F38] text-lg font-normal">Английский язык</span>
      </button>
      <button
        @click="goBack(semester)"
        class="goBackBtn hover:bg-[#DFF4E0] py-[15px] border border-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative"
      >
        <span class="span_btn">{{ $t('Назад') }}</span>
      </button>
    </div>
    <!-- Добавьте другие языки по необходимости -->
  </div>
</template>
<script>
export default {
  methods: {
    selectLanguage(language) {
      this.$store.commit("setLanguage", language);
      this.$router.push({ name: "someRoute" }); // Замените "someRoute" на ваш реальный маршрут
    },
    goBack(semester) {
      this.$store.commit("setSemester", semester);
      this.$router.push({ name: "semester" });
    },
  },
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
button .span_btn {
  color: #2bb231;
}
.goBackBtn {
  position: absolute;
  bottom: 40px;
  right: 60px;
}
@media screen and (max-width: 768px) {
  .goBackBtn {
    right: 20px;
    bottom: 20px;
  }
}
button:hover {
  border: 1px solid #2bb231;
  background-color: #dff4e0;
}
button:hover span {
  color: #2bb231;
}
h2 {
  color: #1c414f;
}
button span {
  color: #1c414f;
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
