// StudentDataDisplay.vue
<template>
  <div class="lg:px-36 px-[20px] mb-[40px] xl:mt-[20px] mt-[24px] md:mt-[30px]">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold text-[#1C414F] md:mb-[15px] mb-[12px]">
        Ваши направления по обучению
      </h2>
      <button
        v-if="selectedData"
        @click="goBack(direction)"
        class="goBackBtn xl:hidden block py-[15px] text-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative"
      >
        <span>Изменить</span>
      </button>
    </div>
    <div
      class="bg-white w-full flex items-center justify-between xl:p-[4px] md:py-[10px] md:px-[20px] p-[16px] rounded-[8px] relative"
    >
      <div class="lg:flex items-center gap-[4px] flex flex-wrap">
        <div
          v-if="!selectedData.selectedDirection"
          class="py-[7px] bg-white rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2] text-sm">Направление</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F] text-sm">
            {{ selectedData.selectedDirection }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedFaculty"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2] text-sm">Факультет</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p
            v-if="isEllipsisActive"
            @click="showFullText"
            class="overflow-ellipsis text-[#1C414F] text-sm"
          >
            {{ selectedData.selectedFaculty }}
          </p>
          <p @click="toggleFullText" class="text-[#1C414F] text-sm" v-else>
            {{ selectedData.selectedFaculty }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedCourse"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2] text-sm">Курс</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F] text-sm">
            {{ selectedData.selectedCourse }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedSemester"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2] text-sm">Семестр</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F] text-sm">
            {{ selectedData.selectedSemester }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedLanguage"
          class="py-[7px] rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2] text-sm">Язык обучения</p>
        </div>
        <div
          v-else
          class="py-[7px] rounded-[6px] bg-[#F0F3F5] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#1C414F] text-sm">
            {{ selectedData.selectedLanguage }}
          </p>
        </div>
      </div>
      <button
        v-if="
          selectedData
        "
        @click="goBack(direction)"
        class="goBackBtn xl:block hidden bg-[#DFF4E0] py-[10px] text-[#2BB231] hover:-translate-x-1 transition pr-[27px] pl-[46px] text-base font-normal rounded-[6px] relative"
      >
        <span>Изменить</span>
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
    goBack(direction, faculty, course, semester, language) {
      this.$store.commit("setDirection", direction);
      this.$store.commit("setFaculty", faculty);
      this.$store.commit("setCourse", course);
      this.$store.commit("setSemester", semester);
      this.$store.commit("setLanguage", language);
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
  top: 11.5px;
  left: 25px;
  width: 16px;
  height: 16px;
  background-image: url("../assets/update.svg");
  background-size: cover;
}
</style>
