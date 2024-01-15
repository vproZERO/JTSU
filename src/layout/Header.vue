<template>
    <div class="lg:px-36 px-[20px]  py-[28px] bg-white">
        <div class="flex items-center justify-between">
            <div class="lg:w-[216px] w-[188px]">
                <img src="../assets/logo.svg" alt="logo">
            </div>

            <form class="lg:bg-[#F0F3F5] lg:rounded-[8px] lg:py-[6px] lg:pr-[6px] lg:pl-[17px] bg-white 2xl:w-[68%] xl:w-[60%] lg:w-[344px]">
                <div class="hidden md:flex  items-center justify-between">
                    <div class="flex items-center gap-[15px]">
                        <div class="w-[24px] h-[24px]">
                            <img src="../assets/search.svg" alt="search ">
                        </div>
                        <input type="text" name="search" id="search" placeholder="Введите запрос" class="search-input bg-inherit w-full">
                    </div>
    
                    <button class="pt-[15px] pb-[14px] px-[44px] rounded-[8px] bg-[#2BB231]">
                        <span class="text-white text-base font-normal">Найти</span>
                    </button>

                </div>

                <button class="h-[24px] md:hidden block">
                    <div class="w-[24px] h-[24px]">
                        <img src="../assets/search.svg" alt="search">
                    </div>
                </button>
            </form>

            <button class="flex items-center md:gap-[8px] gap-[2.5px] md:py-[20px] md:px-[20px] md:bg-[#F0F3F5] rounded-[8px]">
                <div>
                    <img src="../assets/earth-icon.svg" alt="earth icon">
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
  },
  methods: {
    showFullText() {
      this.isEllipsisActive = false;
    },
    toggleFullText() {
      this.isEllipsisActive = !this.isEllipsisActive;
    }
  },
}
</script>

<style scoped>

</style>