import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    newPost: {},
    allPosts: [],
    newComment: {},
  },
  mutations: {
    setAllPosts(state, payload) {
      state.allPosts = payload;
    },
    setNewPosts(state, payload) {
      state.newPost = payload;
    },
    setNewComment(state, payload) {
      state.newComment = payload;
    },
  },
  actions: {
    async CREATE_NEW_POST(context, payload) {
      const response = await axios.post("http://localhost:4000/posts", payload);

      if (response.status === 201) {
        context.commit("setNewPosts", response.data);
        context.dispatch('GET_ALL_POSTS')
      } else {
        console.log("error");
      }
    },
    async GET_ALL_POSTS(context) {
      const response = await axios.get("http://localhost:9000/posts");
      context.commit("setAllPosts", response.data);
    },
    async CREATE_NEW_COMMENT(context, payload) {
      const response = await axios.post(
        `http://localhost:5000/posts/${payload.id}/comments`,
        payload
      );
      if (response.status === 201) {
        context.commit("setNewComment", response.data);
        context.dispatch('GET_ALL_POSTS')
      } else {
        console.log("error");
      }
    },
  },
  getters: {
    allPosts(state) {
      return state.allPosts;
    },
  },
});
