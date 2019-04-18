<template>
    <v-dialog class="mobile">
            <v-icon style="color:black"  slot="activator">
                fas fa-align-justify
            </v-icon>
            <v-container>
                content
            </v-container>
    </v-dialog>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@media screen and (min-width: 960px) {
    .mobile{
        display: none !important;
    }
}
</style>

