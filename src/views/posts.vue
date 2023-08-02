<template>
    <div>
        <listposts/>
    </div>
</template>
<script setup>
import listposts from "../components/listposts.vue";
    import {ref, onMounted} from "vue"
    import usePostsStore from "../stores/posts";

    const store = usePostsStore()

    onMounted(() => {
    store.getPosts()
    console.log('Users page is working...')
})
</script>
<style lang="scss">
    
</style>