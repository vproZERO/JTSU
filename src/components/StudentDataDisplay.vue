// StudentDataDisplay.vue
<template>
  <div class="mb-[40px] xl:mt-[20px] mt-[24px] md:mt-[30px]">
    <div class="flex items-center justify-between"></div>
    
    

    <div
      class="bg-white flex items-center justify-between xl:p-[4px] md:py-[10px] md:px-[20px] p-[16px] rounded-[8px] relative"
    >
      <div class="lg:flex items-center gap-[4px] flex flex-wrap">
        <div
          v-if="!selectedData.selectedDirection"
          class="py-[6px] bg-[#F0F3F5] rounded-[16px] px-[16px]"
        >
          <p class="text-[#1C414F] opacity-[0.5] font-normal text-sm">
            {{ $t("Направление") }}
          </p>
        </div>
        <div
          v-else
          class="py-[6px] rounded-[16px] bg-[#DFF4E0] border flex items-center gap-[4px] border-[#2BB231] px-[16px]"
        >
          <span class="block w-[8px] h-[8px] bg-[#2BB231] rounded-full"></span>
          <p class="text-[#2BB231] text-sm">
            {{ selectedData.selectedDirection }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedFaculty"
          class="py-[6px] bg-[#F0F3F5] rounded-[16px] px-[16px]"
        >
          <p class="text-[#1C414F] opacity-[0.5] font-normal text-sm">
            {{ $t("Факультет") }}
          </p>
        </div>
        <div
          v-else
          class="py-[6px] rounded-[16px] flex items-center gap-[4px] bg-[#DFF4E0] border border-[#2BB231] px-[16px]"
        >
        <span v-if="isEllipsisActive" class="block w-[8px] h-[8px] bg-[#2BB231] rounded-full"></span>
          <p
            v-if="isEllipsisActive"
            @click="showFullText"
            class="overflow-ellipsis text-[#2BB231] text-sm"
          >

            {{ selectedData.selectedFaculty }}
          </p>
          <p @click="toggleFullText" class="text-[#2BB231] cursor-pointer text-sm flex items-center gap-[4px]" v-else>
          <span class="block w-[8px] h-[8px] bg-[#2BB231] rounded-full"></span>

            {{ selectedData.selectedFaculty }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedCourse"
          class="py-[6px] bg-[#F0F3F5] rounded-[16px] px-[16px]"
        >
          <p class="text-[#1C414F] opacity-[0.5] font-normal text-sm">
            {{ $t("Курс") }}
          </p>
        </div>
        <div
          v-else
          class="py-[6px] rounded-[16px] flex items-center gap-[4px] bg-[#DFF4E0] border border-[#2BB231] px-[16px]"
        >
        <span class="block w-[8px] h-[8px] bg-[#2BB231] rounded-full"></span>
          <p class="text-[#2BB231] text-sm">
            {{ selectedData.selectedCourse }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedSemester"
          class="py-[6px] bg-[#F0F3F5] rounded-[16px] px-[16px]"
        >
          <p class="text-[#1C414F] opacity-[0.5] font-normal text-sm">
            {{ $t("Семестр") }}
          </p>
        </div>
        <div
          v-else
          class="py-[6px] rounded-[16px] flex items-center gap-[4px] bg-[#DFF4E0] border border-[#2BB231] px-[16px]"
        >
        <span class="block w-[8px] h-[8px] bg-[#2BB231] rounded-full"></span>
          <p class="text-[#2BB231] text-sm">
            {{ selectedData.selectedSemester }}
          </p>
        </div>
        <div
          v-if="!selectedData.selectedLanguage"
          class="py-[6px] bg-[#F0F3F5] rounded-[16px] px-[16px]"
        >
          <p class="text-[#1C414F] opacity-[0.5] font-normal text-sm">
            {{ $t("Язык обучения") }}
          </p>
        </div>
        <div
          v-else
          class="py-[6px] rounded-[16px] flex items-center gap-[4px] bg-[#DFF4E0] border border-[#2BB231] px-[16px]"
        >
        <span class="block w-[8px] h-[8px] bg-[#2BB231] rounded-full"></span>
          <p class="text-[#2BB231] text-sm">
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
</style>
