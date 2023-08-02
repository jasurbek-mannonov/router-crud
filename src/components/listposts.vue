<template>
  <div>
    <h1>Posts</h1>
    <table
      v-if="postsStore.getPosts.length > 0"
      width="100%"
      border="1"
      style="border-collapse: collapse; margin-top: 10px"
    >
      <thead>
        <tr>
          <th>t/r</th>
          <th>Ism</th>
          <th>Yosh</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post of postsStore.getPosts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>{{ post.userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { usePostsStore } from "../stores/posts";

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.getPosts();
  console.log("listposts is working...");
});
</script>

<style></style>
