import { acceptHMRUpdate, defineStore } from "pinia";
import http from "@/utils/http";

const usePostsStore = defineStore({
  id: "posts",
  state: () => ({
    posts: [],
  }),
  getters: {
    getPosts: ({ posts }) => posts,
  },
  actions: {
    async fetchPosts({ page, limit, search }) {
      try {
        const response = await http.get("/posts", {
          params: {
            _page: page,
            _limit: limit,
            q: search
          },
        });

        this.posts = response.data;

        return response;
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));

export default usePostsStore;


