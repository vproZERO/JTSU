// StudentDataDisplay.vue
<template>
  <div class="mb-[40px] xl:mt-[20px] mt-[24px] md:mt-[30px]">
    <div class="flex items-center justify-between">
      
    </div>
    <div
      v-if="
        savedUserData &&
        savedUserCourse &&
        savedUserSemester &&
        savedUserFaculty &&
        savedUserLanguage
      "
      class="pt-[20px] pl-[20px] pb-[36px] rounded-[6px] bg-white"
    >
      <p
        class="max-w-[392px] mb-[15px] text-sm font-normal text-[#1C414F] opacity-[0.7]"
      >
        {{ $t('Возможно, в вашем вопросе есть опечатки или непонятные. Если вы хотите задать вопрос или предоставить.') }}
      </p>
      <div class="flex items-center flex-wrap gap-[4px]">
        <button
          v-if="
            savedUserData &&
            savedUserFaculty &&
            savedUserCourse &&
            savedUserSemester &&
            savedUserLanguage
          "
          @click="goBack(direction)"
          class="goBackBtn  bg-[#2BB231] rounded-full p-[12px] transition hover:-translate-y-1"
        >
          <div class="w-[16px] h-[16px] mx-auto">
            <img src="../assets/update.svg" alt="update icon" />
          </div>
        </button>
        <div class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]">
              <span class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"></span>
              <p class="text-[#2BB231] text-sm font-normal">{{ savedUserData }}</p>
            </div>
            <div class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]">
              <span class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"></span>
              <p class="text-[#2BB231] text-sm font-normal">{{ savedUserFaculty }}</p>
            </div>
            <div class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]">
              <span class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"></span>
              <p class="text-[#2BB231] text-sm font-normal">{{ savedUserCourse }}</p>
            </div>
            <div class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]">
              <span class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"></span>
              <p class="text-[#2BB231] text-sm font-normal">{{ savedUserSemester }}</p>
            </div>
            <div class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]">
              <span class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"></span>
              <p class="text-[#2BB231] text-sm font-normal">{{ savedUserLanguage }}</p>
            </div>
      </div>
    </div>

    <div
      v-else
      class="bg-white flex items-center justify-between xl:p-[4px] md:py-[10px] md:px-[20px] p-[16px] rounded-[8px] relative"
    >
      <div class="lg:flex items-center gap-[4px] flex flex-wrap">
        <div
          v-if="!selectedData.selectedDirection"
          class="py-[7px] bg-white rounded-[6px] border border-[#D2D2D2] px-[22px]"
        >
          <p class="text-[#D2D2D2] text-sm">
            {{ $t("Направление") }}
          </p>
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
          <p class="text-[#D2D2D2] text-sm">
            {{ $t("Факультет") }}
          </p>
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
          <p class="text-[#D2D2D2] text-sm">
            {{ $t("Курс") }}
          </p>
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
          <p class="text-[#D2D2D2] text-sm">
            {{ $t("Семестр") }}
          </p>
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
          <p class="text-[#D2D2D2] text-sm">
            {{ $t("Язык обучения") }}
          </p>
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["selectedData"]),
    savedUserData() {
      return localStorage.getItem("direction");
    },
    savedUserFaculty() {
      return localStorage.getItem("faculty");
    },
    savedUserCourse() {
      return localStorage.getItem("course");
    },
    savedUserSemester() {
      return localStorage.getItem("semester");
    },
    savedUserLanguage() {
      return localStorage.getItem("language");
    },
  },
  methods: {
    goBack(direction, faculty, course, semester, language) {
      localStorage.removeItem("direction");
      localStorage.removeItem("faculty");
      localStorage.removeItem("course");
      localStorage.removeItem("semester");
      localStorage.removeItem("language");
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
</style>
