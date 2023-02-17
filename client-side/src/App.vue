<script>
import NavBar from './components/NavBar.vue';
import { RouterView } from "vue-router"

export default {
    name: "App",
    components: { NavBar }
}
</script>
<template>
    <NavBar />
    <RouterView />
</template>