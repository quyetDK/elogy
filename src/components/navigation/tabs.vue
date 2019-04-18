<template>
<v-item-group mandatory v-model="window">
    <v-item v-for="(item,n) in length" :key="n">
        <div @click="tab" slot-scope="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
                <v-icon style="font-size: 10px;">fas fa-circle</v-icon>
            </v-btn>
            <v-layout class="animated flipInX delay-2s" column v-if="active">
                <v-flex py-3 style="height: 70px;align-self: center;">
                    <div class="a">
                    </div>
                </v-flex>
                <v-icon>
                    {{item.icon}}
                </v-icon>
                <v-flex py-3 style="height: 70px;align-self: center;">
                    <div class="a">
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </v-item>
</v-item-group>
</template>

<script>
import {
    eventBus
} from '../../main'
export default {
    data() {
        return {
            length: [
                {},
                {
                    icon: "fas fa-home"
                },
                {
                    icon: "fas fa-book"
                },
                {
                    icon: "fas fa-car"
                },
                {
                    icon: "fas fa-laptop"
                },
                {
                    icon: "fas fa-phone"
                },
                {
                    icon: "fas fa-futbol"
                },
                {
                    icon: "fas fa-folder"
                },
                {
                    icon: "fas fa-fly"
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
    },
}
</script>

<style scoped>
.a {
    width: 2px;
    border: 1px dashed #c7c4c4;
    height: 100%;
}
</style>
