<template>
  <aside>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item>
        <router-link to="/users">
          <el-icon><document /></el-icon>
          <span>Users</span>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/posts">
          <el-icon><document /></el-icon>
          <span>Posts</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </aside>
</template>
<script setup></script>
<style lang="scss"></style>
