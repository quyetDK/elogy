<template>
<v-navigation-drawer mini-variant enable-resize-watcher fixed>
    <v-container pt-3 pa-0>
        <v-layout >
            <v-flex style="text-align: center;">
                <menu-desktop></menu-desktop>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex style="text-align: center;">
                <menu-mobile></menu-mobile>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container pt-3 pa-0>
        <v-layout style="justify-content: center;">
            <tabs></tabs>
        </v-layout>
    </v-container>
    <v-container pa-0 style="position: fixed;bottom: 0;">
        <v-layout style="justify-content: center;">
            <v-btn icon style="color: #3B5998;" >
                <v-icon >fab fa-facebook</v-icon>
            </v-btn>
        </v-layout>
        <v-layout style="justify-content: center;">
            <v-btn style="color: #1DA1F2;" icon >
                <v-icon>fab fa-twitter</v-icon>
            </v-btn>
        </v-layout>
        <v-layout style="justify-content: center;">
            <v-btn style="color: #4267b2;" icon >
                <v-icon>fab fa-instagram</v-icon>
            </v-btn>
        </v-layout>
        <v-layout style="justify-content: center;">
            <v-btn style="color: #E50914;" icon>
                <v-icon>fab fa-youtube-square</v-icon>
            </v-btn>
        </v-layout>
        
    </v-container>
</v-navigation-drawer>
</template>

<script>
import menuDesktop from "@/components/navigation/menu-desktop.vue"
import menuMobile from "@/components/navigation/menu-mobile.vue"
import tabs from "@/components/navigation/tabs.vue"

export default {
    components: {
        menuDesktop,
        menuMobile,
        tabs,
    }
}
</script>

<style  scoped>

</style>
