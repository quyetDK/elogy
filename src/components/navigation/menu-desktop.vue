<template>
<v-menu transition="slide-x-transition" bottom right>
    <v-icon style="color:black" slot="activator">
        fas fa-align-left
    </v-icon>
    <v-container class="main">
        <v-layout style="width:100%" column>
            <v-flex>
                <v-icon>
                    fas fa-times
                </v-icon>
                <v-list>
                    <v-list-tile v-for="(item, i) in items" :key="i">
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex style="justify-content: center;">
                <v-btn icon style="color: #3B5998;">
                    <v-icon>fab fa-facebook</v-icon>
                </v-btn>
            </v-flex>
            <v-flex style="justify-content: center;">
                <v-btn style="color: #1DA1F2;" icon>
                    <v-icon>fab fa-twitter</v-icon>
                </v-btn>
            </v-flex>
            <v-flex style="justify-content: center;">
                <v-btn style="color: #4267b2;" icon>
                    <v-icon>fab fa-instagram</v-icon>
                </v-btn>
            </v-flex>
            <v-flex style="justify-content: center;">
                <v-btn style="color: #E50914;" icon>
                    <v-icon>fab fa-youtube-square</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</v-menu>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            items: [{
                    title: 'Trang chủ'
                },
                {
                    title: 'Về  Universal'
                },
                {
                    title: 'Sản phẩm & Dịch vụ'
                },
                {
                    title: 'Hệ sinh thái Universal'
                },
                {
                    title: 'Tuyển dụng'
                },
                {
                    title: 'Tin tức'
                },
                {
                    title: 'Liên hệ'
                },
            ]
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    .desktop {
        display: none !important;
    }
}

.v-menu__content {
    left: 0 !important;
    top: 0 !important;
    box-shadow: none;
}

.main {
    background-color: antiquewhite;
    width: 70vw;
    height: 100vh;
    border-bottom-right-radius: 100%;
}

.v-list {
    background: none !important;
}
</style>
