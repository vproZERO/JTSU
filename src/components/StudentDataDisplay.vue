// StudentDataDisplay.vue
<template>
  <div class="px-36 mb-[40px] mt-[20px]">
    <h2 class="text-lg font-medium text-[#1C414F] mb-[15px]">
      Ваши направления по обучению
    </h2>
    <div
      class="bg-white w-full flex items-center justify-between p-[4px] rounded-[8px]"
    >
      <div class="flex items-center gap-[4px]">
        <div
          v-if="!selectedData.selectedDirection"
          class="py-[7px] bg-white rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2]">Направление</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F]">{{ selectedData.selectedDirection }}</p>
        </div>
        <div
          v-if="!selectedData.selectedFaculty"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2]">Факультет</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p
          v-if="isEllipsisActive"
          @click="showFullText" class="overflow-ellipsis text-[#1C414F]">{{ selectedData.selectedFaculty }}</p>
         <p @click="toggleFullText" class="text-[#1C414F]" v-else>{{ selectedData.selectedFaculty }}</p>
        </div>
        <div
          v-if="!selectedData.selectedCourse"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2]">Курс</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F]">{{ selectedData.selectedCourse }}</p>
        </div>
        <div
          v-if="!selectedData.selectedSemester"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2]">Семестр</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F]">{{ selectedData.selectedSemester }}</p>
        </div>
        <div
          v-if="!selectedData.selectedLanguage"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2]">Язык обучения</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F]">{{ selectedData.selectedLanguage }}</p>
        </div>
      </div>
      <button
        v-if="selectedData.selectedDirection"
        @click="goBack"
        class="goBackBtn bg-[#DFF4E0] py-[15px] text-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative"
      >
      <span v-if="selectedData.selectedLanguage" >Изменить</span>
      <span v-if="selectedData.selectedDirection && !selectedData.selectedLanguage">Назад</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedData"]),
  },
  methods: {
    goBack() {},
    showFullText() {
      this.isEllipsisActive = false;
    },
    toggleFullText() {
      this.isEllipsisActive = !this.isEllipsisActive;
    }
  },
  data() {
    return {
      fullText: "Ваш полный текст здесь",
      maxCharacters: 50,
      isEllipsisActive: true,
      truncatedText: ""
    };
  },
  watch: {
    fullText() {
      this.truncatedText =
        this.fullText.length > this.maxCharacters
          ? this.fullText.slice(0, this.maxCharacters) + "..."
          : this.fullText;
      this.isEllipsisActive = true;
    }
  },
  mounted() {
    this.truncatedText =
      this.fullText.length > this.maxCharacters
        ? this.fullText.slice(0, this.maxCharacters) + "..."
        : this.fullText;
  }
};
</script>
<style scoped>
.overflow-ellipsis {
  width: 147px;
  max-width: 200px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
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
</style>
