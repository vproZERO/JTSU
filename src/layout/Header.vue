<template>
  <div class="lg:px-20 px-[20px] py-[20px] bg-white relative">
    <div class="flex items-center justify-between">
      <router-link
        to="/"
        class="lg:w-[216px] w-[188px] mr-[59px] sm:mr-[30px] md:mr-[30px]"
      >
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>

      <button
        v-if="localStorageDataExists"
        @click="goToMyDirection()"
        class="bg-[#2BB231] transition hover:-translate-y-1 rounded-[8px] py-[14px] pl-[40px] pr-[42px] flex items-center gap-[8px] hover:bg-[#7DDD81]"
      >
        <div class="w-[24px] h-[24px]">
          <img src="../assets/icon.svg" alt="icon svg" />
        </div>
        <span class="text-white text-base font-normal">{{
          $t("Мое направление")
        }}</span>
      </button>

      <button
        v-else
        @click="goToMyDirection2()"
        class="bg-[#2BB231] transition hover:-translate-y-1 rounded-[8px] py-[14px] pl-[40px] pr-[42px] flex items-center gap-[8px] hover:bg-[#7DDD81]"
      >
        <div class="w-[24px] h-[24px]">
          <img src="../assets/icon2.svg" alt="icon svg" />
        </div>
        <span class="text-white text-base font-normal">{{
          $t("Выберите  направление")
        }}</span>
      </button>

      <form
        class="md:bg-[#F0F3F5] md:hover:bg-[#E0E7EB] md:flex items-center active:bg-[#F0F3F5] active:border-[#1C414F] md:rounded-[8px] lg:py-[14px] md:py-[18px] md:pl-[18px] lg:pl-[28px] bg-white p-0"
      >
        <div class="md:flex hidden items-center gap-[15px]">
          <div class="w-[26px] h-[24px]">
            <img src="../assets/search.svg" alt="search " />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            :placeholder="$t('Введите запрос')"
            class="block bg-inherit w-full appearance-none focus:outline-none focus:ring-0 hover:bg-[#E0E7EB] lg:pr-[213px] focus:text-[#1C414F] text-[#1C414F] block mr-[10px]"
            required
          />
        </div>
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

        <SwitchLan />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchLan from "../components/SwitchLan.vue";
export default {
  data() {
    return {
      fullText: "Ваш полный текст здесь",
      maxCharacters: 50,
      isEllipsisActive: true,
      truncatedText: "",
      isSearchFormVisible: false,
      searchQuery: "",
      localStorageDataExists: false,
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

    this.checkLocalStorageData();
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
    goToMyDirection() {
      if (
        localStorage.getItem("direction") &&
        localStorage.getItem("faculty") &&
        localStorage.getItem("course") &&
        localStorage.getItem("semester") &&
        localStorage.getItem("language")
      ) {
        this.$router.push({ name: "someRoute" });
      }
    },
    goToMyDirection2() {
      if (!localStorage.getItem("direction")) {
        this.$router.push({ name: "direction" });
      }
    },
    checkLocalStorageData() {
      const localStorageData = localStorage.getItem("direction");

      this.localStorageDataExists = !!localStorageData;
    },
  },
  components: {
    SwitchLan,
  },
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
