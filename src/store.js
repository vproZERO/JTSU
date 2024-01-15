// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedDirection: null,
    selectedFaculty: null,
    selectedCourse: null,
    selectedSemester: null,
    selectedLanguage: null
  },
  mutations: {
    setDirection(state, direction) {
      state.selectedDirection = direction;
    },
    setFaculty(state, faculty) {
      state.selectedFaculty = faculty;
    },
    setCourse(state, course) {
      state.selectedCourse = course;
    },
    setSemester(state, semester) {
      state.selectedSemester = semester;
    },
    setLanguage(state, language) {
      state.selectedLanguage = language;
    },
  },
  getters: {
    selectedData: state => {
      return {
        selectedDirection: state.selectedDirection,
        selectedFaculty: state.selectedFaculty,
        selectedCourse: state.selectedCourse,
        selectedSemester: state.selectedSemester,
        selectedLanguage: state.selectedLanguage
      };
    }
  }
});
