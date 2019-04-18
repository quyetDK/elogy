<template>
<v-layout style="height:100vh;width:100vw;position:fixed;" v-if="window === 3 ? true : false">
    <v-flex class="main">
        <v-hover>
            <span slot-scope="{ hover }" >
                <v-btn style="position: fixed;left: 100px;top: 50px;" class="btn animated pulse delay-2s" fab dark large color="purple">
                    <v-icon dark>add</v-icon>
                </v-btn>
                <v-card class="pa-4 animated bounceInLeft delay-2s" style="position: fixed;background-color: antiquewhite;left: 200px;top: 60px;" width="300px" v-if="hover">
                    <h2>
                        Môi trường làm việc
                    </h2>
                    <p>
                        Thoải mái, tiện nghi. Tối ưu hiệu quả sử dụng năng lượng và đảm bảo an toàn tối đa.
                    </p>
                </v-card>
            </span>
        </v-hover>

        <v-hover>
            <span slot-scope="{ hover }" >
                <v-btn style="position: fixed;left: 100px; top:50%;" class="btn animated pulse delay-2s" fab dark large color="purple">
                    <v-icon dark>add</v-icon>
                </v-btn>
                <v-card class="pa-4 animated bounceInLeft delay-2s" style="position: fixed;background-color: antiquewhite;left: 130px;bottom:50%;" width="300px" v-if="hover">
                    <h2>
                        Môi trường làm việc
                    </h2>
                    <p>
                        Thoải mái, tiện nghi. Tối ưu hiệu quả sử dụng năng lượng và đảm bảo an toàn tối đa.
                    </p>
                </v-card>
            </span>
        </v-hover>
        <v-hover>
            <span slot-scope="{ hover }" >
                <v-btn style="position: fixed;right: 100px; top:50%;" class="btn animated pulse delay-2s" fab dark large color="purple">
                    <v-icon dark>add</v-icon>
                </v-btn>
                <v-card class="pa-4 animated bounceInRight delay-2s" style="position: fixed;background-color: antiquewhite;right: 200px;top: 50%;" width="300px" v-if="hover">
                    <h2>
                        Môi trường làm việc
                    </h2>
                    <p>
                        Thoải mái, tiện nghi. Tối ưu hiệu quả sử dụng năng lượng và đảm bảo an toàn tối đa.
                    </p>
                </v-card>
            </span>
        </v-hover>
        <v-hover>
            <span slot-scope="{ hover }" >
                <v-btn style="position: fixed;right: 50%; top:30%;" class="btn animated pulse delay-2s" fab dark large color="purple">
                    <v-icon dark>add</v-icon>
                </v-btn>
                <v-card class="pa-4 animated bounceInUp delay-2s" style="position: fixed;background-color: antiquewhite;top:40%;right: 50%;" width="300px" v-if="hover">
                    <h2>
                        Môi trường làm việc
                    </h2>
                    <p>
                        Thoải mái, tiện nghi. Tối ưu hiệu quả sử dụng năng lượng và đảm bảo an toàn tối đa.
                    </p>
                </v-card>
            </span>
        </v-hover>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    props: [
        'window'
    ],
    data() {
        return {}
    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.main {
    background-image: url("/static/panner/003.jpg");
    background-position: center;
    background-size: cover;
    margin-left: 80px;
}

@media screen and (max-width: 1263px) {
    .main {
        margin: 0 !important;
    }
}
</style>
