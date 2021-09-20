import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    newPost: {},
    allPosts: [],
    newComment: {},
    counter: 0,
    allComments: [],
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
      state.counter += 1;
      console.log(state.counter);
    },
    setAllComments(state, payload) {
      state.allComments = payload;
      console.log(state.allComments);
    },
  },
  actions: {
    async CREATE_NEW_POST(context, payload) {
      const response = await axios.post("http://localhost:4000/posts", payload);

      if (response.status === 201) {
        context.commit("setNewPosts", response.data);
      } else {
        console.log("error");
      }
    },
    async GET_ALL_POSTS(context) {
      const response = await axios.get("http://localhost:4000/posts");
      context.commit("setAllPosts", response.data);
    },
    async CREATE_NEW_COMMENT(context, payload) {
      const response = await axios.post(
        `http://localhost:5000/posts/${payload.id}/comments`,
        payload
      );
      if (response.status === 201) {
        context.commit("setNewComment", response.data);
      } else {
        console.log("error");
      }
    },
    async GET_ALL_COMMENTS(context, payload) {
      const response = await axios.get(
        `http://localhost:5000/posts/${payload.id}/comments`
      );
      console.log(response.data);
      context.commit("setAllComments", response.data);
    },
  },
  getters: {
    allPosts(state) {
      return state.allPosts;
    },
    allPostComments(state) {
      console.log(state.allComments);
      return state.allComments;
    },
  },
});
