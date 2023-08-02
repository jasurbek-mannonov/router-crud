<template>
    <div class="main">
        <header-vue/>
        <div class="wrapper">
            <side-vue/>
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import headerVue from '../components/layout/header.vue';
import sideVue from '../components/layout/aside.vue'
</script>

<style lang="scss">
   @import '@/styles/main.scss'
</style>