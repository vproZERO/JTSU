<template>
  <div class="lg:px-36 px-[20px] py-[28px] bg-white">
    <div class="flex items-center justify-between gap-[30px]">
      <div class="lg:w-[216px] w-[188px]">
        <img src="../assets/logo.svg" alt="logo" />
      </div>

      <form
        class="md:bg-[#F0F3F5] md:hover:bg-[#E0E7EB] md:flex justify-between items-center active:bg-[#F0F3F5] active:border-[#1C414F] md:rounded-[8px] lg:py-[6px] md:py-[18px] md:pl-[18px] lg:pr-[6px] lg:pl-[17px] bg-white md:w-[90%] p-0"
      >
        <div class="md:flex hidden items-center gap-[15px]">
          <div class="w-[24px] h-[24px]">
            <img src="../assets/search.svg" alt="search " />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Введите запрос"
            class="block bg-inherit w-full mr-[10px]"
          />
        </div>
        <button
          class="pt-[15px] disabled:bg-[#BDD5BE] lg:block hidden hover:bg-[#7DDD81] pb-[14px] px-[44px] rounded-[8px] bg-[#2BB231]"
        >
          <span class="text-white text-base font-normal">Найти</span>
        </button>

        <button class="h-[24px] md:hidden block">
          <div class="w-[24px] h-[24px]">
            <img src="../assets/search.svg" alt="search" />
          </div>
        </button>
      </form>
      <button
        class="flex items-center md:gap-[8px] gap-[2.5px] md:py-[20px] md:px-[20px] md:bg-[#F0F3F5] rounded-[8px]"
      >
        <div class="w-[24px] h-[24px]">
          <img src="../assets/earth-icon.svg" alt="earth icon" />
        </div>
        <span class="text-[#1C414F] text-base font-medium">Русский</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullText: "Ваш полный текст здесь",
      maxCharacters: 50,
      isEllipsisActive: true,
      truncatedText: "",
      isSearchOpen: false,
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
  methods: {
    showFullText() {
      this.isEllipsisActive = false;
    },
    toggleFullText() {
      this.isEllipsisActive = !this.isEllipsisActive;
    },
  },
};
</script>

<style scoped></style>
