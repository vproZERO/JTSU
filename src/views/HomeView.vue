<template>
  <div class="px-20">
    <StudentDataDisplay />
    <DirectionSelection v-if="!selectedDirection" />
    <FacultySelection v-else-if="!selectedFaculty" />
    <CourseSelection v-else-if="!selectedCourse" />
    <SemesterSelection v-else-if="!selectedSemester" />
    <LanguageSelection v-else />
  </div>
</template>

<script>
import DirectionSelection from "../components/DirectionSelection.vue";
import FacultySelection from "../components/FacultySelection.vue";
import CourseSelection from "../components/CourseSelection.vue";
import SemesterSelection from "../components/SemesterSelection.vue";
import LanguageSelection from "../components/LanguageSelection.vue";
import StudentDataDisplay from "../components/StudentDataDisplay.vue";
export default {
  data() {
    return {
      selectedDirection: null,
      selectedFaculty: null,
      selectedCourse: null,
      selectedSemester: null,
      selectedLanguage: null,
    };
  },
  props: {
    direction: String,
    faculty: String,
    course: String,
    semester: String,
    language: String,
  },
  components: {
    DirectionSelection,
    FacultySelection,
    StudentDataDisplay,
    CourseSelection,
    SemesterSelection,
    LanguageSelection,
  },
  watch: {
    $route(to, from) {
      if (to.params.direction) this.selectedDirection = to.params.direction;
      if (to.params.faculty) this.selectedFaculty = to.params.faculty;
      if (to.params.course) this.selectedCourse = to.params.course;
      if (to.params.semester) this.selectedSemester = to.params.semester;
      if (to.params.language) this.selectedLanguage = to.params.language;
    },
  },
  computed: {
    selectedDirection() {
      return this.$store.state.selectedDirection;
    },
    selectedFaculty() {
      return this.$store.state.selectedFaculty;
    },
    selectedCourse() {
      return this.$store.state.selectedCourse;
    },
    selectedSemester() {
      return this.$store.state.selectedSemester;
    },
    selectedLanguage() {
      return this.$store.state.selectedLanguage;
    },
  },
};
</script>
