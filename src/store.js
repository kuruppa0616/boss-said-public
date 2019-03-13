import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: "",
    image: ""
  },
  mutations: {
    setText(state, newText) {
      state.text = newText;
    },
    setImage(state, newImage) {
      state.image = newImage;
    }
  }
});
