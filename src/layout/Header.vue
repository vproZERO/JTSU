<template>
  <div class="lg:px-36 px-[20px] py-[28px] bg-white relative">
    <div class="flex items-center justify-between gap-[30px]">
      <router-link to="/" class="lg:w-[216px] w-[188px]">
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>

      <form
        class="md:bg-[#F0F3F5] md:hover:bg-[#E0E7EB] md:flex justify-between items-center active:bg-[#F0F3F5] active:border-[#1C414F] md:rounded-[8px] lg:py-[6px] md:py-[18px] md:pl-[18px] lg:pr-[6px] lg:pl-[17px] bg-white md:w-[90%] p-0"
      >
        <div
          @click="toggleSearchForm"
          class="md:flex hidden items-center gap-[15px]"
        >
          <div class="w-[26px] h-[24px]">
            <img src="../assets/search.svg" alt="search " />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Введите запрос"
            class="block bg-inherit w-full hover:bg-[#E0E7EB] bg-[#F0F3F5] focus:w-[100%] focus:text-[#1C414F] text-[#1C414F] block mr-[10px]"
            required
          />
        </div>
        <button
          class="pt-[15px] disabled:bg-[#BDD5BE] lg:block hidden hover:bg-[#7DDD81] pb-[14px] px-[44px] rounded-[8px] bg-[#2BB231]"
        >
          <span class="text-white text-base font-normal">
            {{ $t('Найти') }}
          </span>
        </button>
      </form>
      <div class="flex items-center gap-[24px]">
        <button
          @click="toggleSearchForm"
          class="search-icon h-[24px] md:hidden block hover:-translate-y-1 transition"
        >
          <div class="w-[24px] h-[24px]">
            <img src="../assets/search.svg" alt="search" />
          </div>
        </button>
        <form
          v-if="isSearchFormVisible"
          @submit.prevent="performSearch"
          class="search-form flex items-center justify-between"
        >
          <button
            @click="closeIsSearchForm"
            class="-rotate-180 hover:-translate-x-1 transition"
          >
            <img src="../assets/right-arrow.svg" alt="arrow" />
          </button>
          <input
            v-model="searchQuery"
            type="text"
            name="search"
            placeholder="Поиск..."
            class="search-input"
          />
        </form>

        <SwitchLan/>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchLan from '../components/SwitchLan.vue'
export default {
  data() {
    return {
      fullText: "Ваш полный текст здесь",
      maxCharacters: 50,
      isEllipsisActive: true,
      truncatedText: "",
      isSearchFormVisible: false,
      searchQuery: "",
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
    toggleSearchForm() {
      this.isSearchFormVisible = !this.isSearchFormVisible;
      if (this.isSearchFormVisible && this.$refs.searchInput) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },
    closeIsSearchForm() {
      this.isSearchFormVisible = false;
    },
    performSearch() {
      console.log("Perform search with query:", this.searchQuery);
    },
  },
  components: {
    SwitchLan
  }
};
</script>

<style scoped>
.search-form {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
}

.search-input {
  width: 90%;
  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 15px;
  padding-right: 188px;
  background-color: #f0f3f5;
  border-radius: 8px;
  color: #1c414f;
}
@media screen and (min-width: 768px) {
  .search-form {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
  .search-input {
    width: 95%;
  }
}
</style>
