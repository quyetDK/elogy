<template>
<v-window-item  style="height:100vh" class="d-flex" v-if="window === 1 ? true : false">
    <v-container>
        <v-layout class="animated bounceInLeft delay-2s">
            <img style=" max-width: 260px;max-height: 100px;" src="/static/logo/homelogo.jpg" alt="">
        </v-layout>
            <v-layout class="animated bounceInRight delay-2s " mt-5 style="font-size: 45px;line-height: 50px;font-family: 'Monsterrat Bold';font-weight: 600;">
                Đơn vị tiên phong cung cấp dịch vụ phần mềm quản lý trung tâm giảng dạy tại Việt Nam
            </v-layout>
            <v-layout class="animated bounceInUp delay-2s" mt-5 style="font-size: 25px;line-height: 38px;color: #13274B;font-family: 'Monsterrat Regular';">
                Luôn mang đến cho khách hàng những giải pháp hiệu quả với chi phí hợp lý để đẩy mạnh hoạt động giáo dục và đào tạo
            </v-layout>
            <v-layout class="animated pulse delay-2s" mt-5>
                <v-btn style="background-color:#f5f5f5;border:3px solid #4CAF50;color:#4CAF50;" round>
                    Tìm hiểu <v-icon class="ml-3">fas fa-angle-down</v-icon>
                </v-btn>
            </v-layout>

            <v-layout pt-5>
                <a href="">
                CONTACT@universal.vn | +84.24.777.99999
            </a>
            </v-layout>
            <v-layout>
                <div class="green-cricle">
                </div>
                <div class="color-cricle">
                </div>
                <div class="blue-cricle">
                </div>
                <div class="image-cricle">
                </div>
            </v-layout>
    </v-container>
</v-window-item>
</template>

<script>
export default {
    props: [
        'window'
    ],
    data() {
        return {
            scrolled: false

        }
    },
    methods: {
    },
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.green-cricle {
    animation: spin 1s linear infinite;
    width: 1000px;
    height: 1000px;
    border: 2px dashed;
    border-radius: 50%;
    position: fixed;
    top: -53%;
    left: 75%;
    z-index: 1;
}

.blue-cricle {
    animation: spin 1s linear infinite;
    width: 1000px;
    height: 1000px;
    border: 2px dashed #32d5cf;
    border-radius: 50%;
    position: fixed;
    top: 70%;
    left: 61%;
    z-index: 1;

}

.color-cricle {
    width: 1000px;
    background: rgb(2, 0, 36);
    background: linear-gradient(252deg, rgba(2, 0, 36, 1) 0%, rgba(0, 255, 207, 1) 0%, rgba(73, 135, 130, 1) 0%, rgba(32, 195, 118, 1) 34%, rgba(20, 185, 132, 1) 52%, rgba(105, 173, 141, 1) 76%, rgba(184, 208, 173, 1) 92%);
    height: 1000px;
    border-radius: 50%;
    position: fixed;
    top: 63%;
    left: 66%;
    z-index: 2;
}

.image-cricle {
    width: 800px;
    height: 800px;
    /* border: 2px dashed; */
    border-radius: 50%;
    background-image: url("/static/panner/003.jpg");
    position: fixed;
    top: -32%;
    /* left: 100%; */
    left: 78%;
    z-index: 3;
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
