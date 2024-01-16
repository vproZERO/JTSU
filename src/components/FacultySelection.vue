<template>
  <div class="px-[20px]">
    <div
      class="md:w-[500px] bg-white rounded-[10px] pb-[106px] relative md:px-[60px] md:pt-[50px] px-[16px] pt-[24px] md:pb-[122px] mx-auto"
    >
      <h2 class="text-xl font-medium md:mb-[30px] mb-[15px]">
        Пожалуйста выберите свой <br />
        факультет:
      </h2>
      <button
        @click="selectFaculty(faculty.title)"
        v-for="faculty in facultys"
        :key="faculty.id"
        class="w-full relative flex items-center juftify-between mb-[8px] px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]"
      >
        <span
          v-if="isEllipsisActive"
          @click="showFullText"
          class="overflow-ellipsis text-[#172F38] text-lg font-normal w-[259px]"
          >{{ faculty.title }}</span
        >
        <span
          @click="toggleFullText"
          v-else
          class="text-[#172F38] text-lg font-normal w-[259px]"
          >{{ faculty.title }}</span
        >
      </button>

      <button
        @click="goBack(direction)"
        class="goBackBtn hover:bg-[#DFF4E0] border-[#2bb231] border py-[15px] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative"
      >
        <span class="text-[#2bb231] span_btn">Назад</span>
      </button>
    </div>
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
      facultys: [
        { id: 1, title: "Факультет борьбы" },
        { id: 2, title: "Межфакультетские кафедры" },
        { id: 3, title: "Факультет спортивного многоборья" },
        { id: 4, title: "Факультет спортивного менеджмента и туризма" },
        { id: 5, title: "Факультет футбола" },
        { id: 6, title: "Факультет Паралимпийских игр и зимних видов спорта " },
        {
          id: 7,
          title:
            "Совместный Узбекско-Белорусский факультет физической культуры, спорта и туризма",
        },
        { id: 8, title: "Медицинский факультет" },
        { id: 9, title: "Факультет единобордства" },
      ],
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
button .span_btn {
  color: #2bb231;
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
