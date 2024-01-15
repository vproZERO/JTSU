<template>
  <div
    class="w-[500px] bg-white rounded-[10px] pb-[70px] px-[60px] pb-[122px] pt-[50px] mx-auto relative"
  >
    <h2 class="text-xl font-medium mb-[30px]">
      Пожалуйста выберите свой <br />
      факультет:
    </h2>
    <button
      @click="selectFaculty('Факультет борьбы')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]"
    >
      <span class="text-[#172F38] text-lg font-normal w-[259px]"
        >Факультет борьбы</span
      >
    </button>
    <button
      @click="selectFaculty('Межфакультетские кафедры')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span class="text-[#172F38] text-lg font-normal"
        >Межфакультетские кафедры</span
      >
    </button>
    <button
      @click="selectFaculty('Факультет спортивного многоборья')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span v-if="isEllipsisActive" @click="showFullText" class="overflow-ellipsis text-[#172F38] text-lg font-normal"
        >Факультет спортивного многоборья</span
      >
      <span @click="toggleFullText" class="text-[#172F38]" v-else>Факультет спортивного многоборья</span>
    </button>
    <button
      @click="selectFaculty('Факультет спортивного менеджмента и туризма')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span v-if="isEllipsisActive" @click="showFullText" class="text-[#172F38] text-lg font-normal overflow-ellipsis"
        >Факультет спортивного менеджмента и туризма</span
      >
      <span @click="toggleFullText" class="text-[#172F38]" v-else>Факультет спортивного менеджмента и туризма</span>
    </button>
    <button
      @click="selectFaculty('Факультет футбола')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span class="text-[#172F38] text-lg font-normal">Факультет футбола</span>
    </button>
    <button
      @click="
        selectFaculty('Факультет Паралимпийских игр и зимних видов спорта ')
      "
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span v-if="isEllipsisActive" @click="showFullText" class="text-[#172F38] text-lg font-normal overflow-ellipsis"
        >Факультет Паралимпийских игр и зимних видов спорта
      </span>
      <span @click="toggleFullText" class="text-[#172F38]" v-else>Факультет Паралимпийских игр и зимних видов спорта</span>
    </button>
    <button
      @click="
        selectFaculty(
          'Совместный Узбекско-Белорусский факультет физической культуры, спорта и туризма'
        )
      "
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span v-if="isEllipsisActive" @click="showFullText" class="text-[#172F38] text-lg font-normal overflow-ellipsis"
        >Совместный Узбекско-Белорусский факультет физической культуры, спорта и
        туризма</span
      >
      <span @click="toggleFullText" class="text-[#172F38]" v-else>Совместный Узбекско-Белорусский факультет физической культуры, спорта и туризма</span>
    </button>
    <button
      @click="selectFaculty('Медицинский факультет')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span class="text-[#172F38] text-lg font-normal"
        >Медицинский факультет</span
      >
    </button>
    <button
      @click="selectFaculty('Факультет единобордства')"
      class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]"
    >
      <span class="text-[#172F38] text-lg font-normal"
        >Факультет единобордства</span
      >
    </button>

    <button
      @click="goBack(direction)"
        class="goBackBtn  bg-[#DFF4E0] py-[15px] text-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative "
      >
        <span>Назад</span>
      </button> 
  </div>
</template>

<script>
export default {
  methods: {
    selectFaculty(faculty) {
      this.$store.commit("setFaculty", faculty);
      this.$router.push({ name: "course" });
    },
    goBack(direction) {
      this.$store.commit("setDirection", direction);
      this.$router.push({ name: "direction" });
    },
    showFullText() {
      this.isEllipsisActive = false;
    },
    toggleFullText() {
      this.isEllipsisActive = !this.isEllipsisActive;
    },
  },
  data() {
    return {
      fullText: "Ваш полный текст здесь",
      maxCharacters: 50,
      isEllipsisActive: true,
      truncatedText: "",
    };
  },
  watch: {
    fullText() {
      this.truncatedText =
        this.fullText.length > this.maxCharacters
          ? this.fullText.slice(0, this.maxCharacters) + "..."
          : this.fullText;
      this.isEllipsisActive = true;
    },
  },
  mounted() {
    this.truncatedText =
      this.fullText.length > this.maxCharacters
        ? this.fullText.slice(0, this.maxCharacters) + "..."
        : this.fullText;
  },
};
</script>
<style scoped>
button:hover {
  border: 1px solid #2bb231;
  background-color: #dff4e0;
}
button:hover span {
  color: #2bb231;
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
span {
  text-align: start;
  max-width: 260px;
}
button::after {
  content: "";
  margin-left: auto;
  width: 24px;
  height: 24px;
  background-image: url("../assets/right-arrow.svg");
  background-size: cover;
}
h2 {
  color: #1c414f;
}
button span {
  color: #1c414f;
}
button:hover:after {
  content: "";
  margin-left: auto;
  width: 24px;
  height: 24px;
  background-image: url("../assets/right-arrow-2.svg");
  background-size: cover;
}
.overflow-ellipsis {
  width: 260px;
  max-width: 300px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
