<template>
<v-window  style="height: 100vh;justify-content: center;width:100vw">
    <home0 :window="window"></home0>
    <home1 :window="window"></home1>
    <home2 :window="window"></home2>
    <home3 :window="window"></home3>
    <home4 :window="window"></home4>
    <home5 :window="window"></home5>
    <home6 :window="window"></home6>
    <home7 :window="window"></home7>
</v-window>
</template>

<script>
import {
    eventBus
} from '../../main'
import home0 from "@/components/home/home0"

import home1 from "@/components/home/home1"
import home2 from "@/components/home/home2"
import home3 from "@/components/home/home3"
import home4 from "@/components/home/home4"
import home5 from "@/components/home/home5"
import home6 from "@/components/home/home6"
import home7 from "@/components/home/home7"
export default {
    components: {
        home0,
        home1,
        home2,
        home3,
        home4,
        home5,
        home6,
        home7,
    },
    data() {
        return {
            length: 8,
            window: 1,
            scrolled: false
        }
    },
    mounted() {
        eventBus.$on('tab', (d) => {
            this.window = d
        })
    },
    methods: {
        
        handleScroll(e) {
            this.scrolled = window.scrollY > 0;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.bg {
    /* background-image: url("/static/panner/003.jpg") */
}
</style>
