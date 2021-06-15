import { blogService } from "../../services/api/blog.service";

export default {
  state: {
    posts: [],
    postsLimit: 3,
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    postsCount(state) {
      return state.posts.length;
    },
  },
  actions: {
    async fetchPosts(ctx) {
      const posts = await blogService.getPosts(ctx.state.postsLimit);
      ctx.commit("updatePosts", posts);
    },
    increasePostsLimit(ctx, limit = 10) {
      ctx.commit("increasePostsLimit", limit);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    increasePostsLimit(state, limit) {
      state.postsLimit += limit;
    },
  },
};
