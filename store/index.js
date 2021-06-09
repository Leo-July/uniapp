/*
 * @Author: Leo July
 * @Description:
 */

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex); //vue的插件机制

const vuexPersisted = new createPersistedState({
  storage: {
    getItem: (key) => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: (key) => uni.clearStorageSync(key),
  },
});

//Vuex.Store 构造器选项
const store = new Vuex.Store({
  state: {
    //存放状态
    videoObj: {}, //{id,video}
  },
  mutations: {
    SET_VIDEO_OBJ(state, val) {
      console.log("🚀 ~ file: index.js ~ line 28 ~ SET_VIDEO_OBJ ~ val", val);
      state.videoObj = val;
    },
  },
  plugins: [vuexPersisted],
});
export default store;
