<template>
<v-toolbar v-model="window" mandatory fixed class="ml-5 px-5" style="background:none" flat>
    <v-item-group class="d-flex" v-model="window">
        <v-item v-for="(item,n) in length" :key="n">
            <div class="px-5" @click="tab" slot-scope="{ active, toggle }">
                <v-btn :input-value="active" :class="active ? 'active' : ''" icon @click="toggle">
                    {{item.name}}
                </v-btn>
            </div>
        </v-item>
    </v-item-group>
</v-toolbar>
</template>

<script>
import {
    eventBus
} from '../../main'
import tabs from "@/components/navigation/tabs.vue"
export default {
    components: {
        tabs,

    },
    data() {
        return {
            title: 'Universal',
            length: [
                {},
                {
                    icon: "fas fa-home",
                    name: "Home",
                },
                {
                    icon: "fas fa-home",
                    name: "History",
                },
                {
                    icon: "fas fa-home",
                    name: "Universal",
                },
                {
                    icon: "fas fa-home",
                    name: "Product",
                },
                {
                    icon: "fas fa-home",
                    name: "Ecosystem",
                },
                {
                    icon: "fas fa-home",
                    name: "recruitment",
                },
                {
                    icon: "fas fa-home",
                    name: "NEWS",
                },
                {
                    icon: "fas fa-home",
                    name: "CONTACT",
                },
            ],
            window: 1,
        }
    },
    methods: {
        tab() {
            if(this.window = this.window){
                eventBus.$emit('tab', this.window)
            }
        },
    }

}
</script>

<style scoped>
.v-item--active{
    background-color: aliceblue;
}
</style>
