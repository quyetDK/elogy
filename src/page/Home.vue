<template>
<v-app>
    <navigation></navigation>
    <toolbar></toolbar>
    <home></home>
</v-app>
</template>

<script>
import navigation from "@/components/navigation"
import toolbar from "@/components/toolbar"
import home from "@/components/home"

export default {
    components: {
        home,
        navigation,
        toolbar
    },
    data() {
        return {}
    },
    name: 'Home'
}
</script>

<style scoped>
.theme--light.application{
    background:white !important;
}
</style>
