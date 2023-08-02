import { acceptHMRUpdate, defineStore } from "pinia";
import http from "@/utils/http";

const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers: ({ users }) => users,
  },
  actions: {
    async fetchUsers({ page, limit, search }) {
      try {
        const response = await http.get("/users", {
          params: {
            _page: page,
            _limit: limit,
            q: search
          },
        });

        this.users = response.data;

        return response;
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));

export default useUsersStore;
