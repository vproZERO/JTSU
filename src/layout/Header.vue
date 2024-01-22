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
        @click="goToMyDirection()"
        class="bg-[#2BB231] transition hover:-translate-y-1 rounded-[8px] py-[14px] pl-[20px] pr-[20px] flex items-center gap-[8px] hover:bg-[#7DDD81]"
      >
        <div
          v-if="
            goToMyDirectionData === false && localStorageDataExists === true
          "
          class="w-[24px] h-[24px]"
        >
          <img src="../assets/icon.svg" alt="icon svg" />
        </div>
        <div v-if="goToMyDirectionData === true" class="w-[24px] h-[24px]">
          <img src="../assets/close-icon.svg" alt="icon svg" />
        </div>
        <div v-if="localStorageDataExists === false" class="w-[24px] h-[24px]">
          <img src="../assets/icon2.svg" alt="icon svg" />
        </div>
        <span
          v-if="localStorageDataExists === true"
          class="text-white text-base font-normal"
          >{{ $t("Мое направление") }}</span
        >
        <span
          v-if="localStorageDataExists === false"
          @click="goToMyDirection2()"
          class="text-white text-base font-normal"
          >{{ $t("Выберите  направление") }}</span
        >
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
    <div
      class="z-40 absolute left-20 right-20 top-[100%]"
      v-if="goToMyDirectionData"
    >
      <div
        class="md:pt-[20px] md:pl-[20px] md:pr-[20px] px-[16px] pt-[16px] md:pb-[36px] pb-[24px] rounded-b-[6px] bg-white"
      >
        <p
          class="max-w-[392px] mb-[15px] text-sm font-normal text-[#1C414F] opacity-[0.7]"
        >
          {{
            $t(
              "Возможно, в вашем вопросе есть опечатки или непонятные. Если вы хотите задать вопрос или предоставить."
            )
          }}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center flex-wrap gap-[4px]">
            <div
              class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]"
            >
              <span
                class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"
              ></span>
              <p class="text-[#2BB231] text-sm font-normal">
                {{ savedUserData }}
              </p>
            </div>
            <div
              class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]"
            >
              <span
                class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"
              ></span>
              <p class="text-[#2BB231] text-sm font-normal">
                {{ savedUserFaculty }}
              </p>
            </div>
            <div
              class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]"
            >
              <span
                class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"
              ></span>
              <p class="text-[#2BB231] text-sm font-normal">
                {{ savedUserCourse }}
              </p>
            </div>
            <div
              class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]"
            >
              <span
                class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"
              ></span>
              <p class="text-[#2BB231] text-sm font-normal">
                {{ savedUserSemester }}
              </p>
            </div>
            <div
              class="py-[6px] px-[16px] flex items-center gap-[4px] bg-[#DFF4E0] rounded-[14px] border-[1px] border-[#2BB231]"
            >
              <span
                class="block bg-[#2BB231] w-[8px] h-[8px] rounded-full"
              ></span>
              <p class="text-[#2BB231] text-sm font-normal">
                {{ savedUserLanguage }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-[8px]">
            <button
              v-if="
                savedUserData &&
                savedUserFaculty &&
                savedUserCourse &&
                savedUserSemester &&
                savedUserLanguage
              "
              @click="goDelete(direction)"
              class="goBackBtn border border-[#2BB231] rounded-[25px] flex items-center gap-[5px] py-[12px] px-[16px] transition hover:-translate-y-1"
            >
              <div class="w-[16px] h-[16px]">
                <img src="../assets/update2.svg" alt="update icon" />
              </div>
              <span class="text-[#2BB231] text-sm font-normal">{{
                $t("Сбросить")
              }}</span>
            </button>

            <button
              v-if="
                savedUserData &&
                savedUserFaculty &&
                savedUserCourse &&
                savedUserSemester &&
                savedUserLanguage
              "
              @click="goBack(direction)"
              class="goBackBtn bg-[#2BB231] rounded-[25px] flex items-center gap-[5px] py-[12px] px-[16px] transition hover:-translate-y-1"
            >
              <div class="w-[16px] h-[16px]">
                <img src="../assets/update.svg" alt="update icon" />
              </div>
              <span class="text-white text-sm font-normal">{{
                $t("Изменить")
              }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="goToMyDirectionData"
    class="absolute h-[100vh] top-[104px] left-0 right-0 bottom-0 z-10 bg-black opacity-[25%]"
  ></div>
</template>

<script>
import SwitchLan from "../components/SwitchLan.vue";
import Swal from "sweetalert2";
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
      goToMyDirectionData: false,
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
        this.goToMyDirectionData = !this.goToMyDirectionData;
        console.log(this.goToMyDirectionData);
      } else {
        this.goToMyDirectionData = false;
      }
    },
    goBack(direction, faculty, course, semester, language) {
      localStorage.removeItem("direction");
      localStorage.removeItem("faculty");
      localStorage.removeItem("course");
      localStorage.removeItem("semester");
      localStorage.removeItem("language");
      this.$router.push({ name: "direction" });
      this.goToMyDirectionData = false;
    },
    goDelete() {
      localStorage.removeItem("direction");
      localStorage.removeItem("faculty");
      localStorage.removeItem("course");
      localStorage.removeItem("semester");
      localStorage.removeItem("language");
      this.goToMyDirectionData = false;
      Swal.fire({
        title: "Вы уверены?",
        text: "Ваши данные будут удалены!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Да, удалить!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Удалено!",
            text: "Ваши данные были удалены.",
            icon: "success",
          });
        }
      });
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
  computed: {
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
