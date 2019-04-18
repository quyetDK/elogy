<template>
<v-container style="height:100vh" pa-5 v-if="window === 4 ? true : false">
    <v-layout pt-5>
        <span>
            <img style="width:200px" src="/static/logo/homelogo.jpg" alt="">
        </span>
        <span class="ml-4 d-flex " style="align-self: center;">
            <h1 class="pl-5 animated flipInY delay-2s" style="border-left: 1px dashed green;">
            SẢN PHẨM & DỊCH VỤ
            </h1>
        </span>
    </v-layout>
    <v-layout pt-5 wrap>
        <v-flex column xs12 sm6>
            <v-layout wrap>
                <v-flex xs12 md4 style="position:relative">
                    <div class="circle">
                    </div>
                    <v-icon class="icon">
                        fas fa-memory
                    </v-icon>
                </v-flex>
                <v-flex class="animated fadeInDown delay-2s" sx12 md8 style="align-self: flex-end;">
                    <h1 style="color: #3FAA61;font-family: 'Monsterrat Bold';">IT Outsourcing</h1   >
                    <p style="font-family: Monsterrat Regular;font-size: 2.2em;">Cung cấp các dịch vụ phần mềm với mức chi phí tối ưu, dựa trên nhu cầu của từng khách hàng tiềm năng.</p>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12 md4 style="position:relative">
                    <div class="circle">
                    </div>
                    <v-icon class="icon">
                        fas fa-book-open
                    </v-icon>
                </v-flex>
                <v-flex class="animated fadeInLeft delay-3s	"  sx12 md8 style="align-self: flex-end;">
                    <h1 style="color: #3FAA61;font-family: 'Monsterrat Bold';">IT Outsourcing</h1   >
                    <p style="font-family: Monsterrat Regular;font-size: 2.2em;">Cung cấp các dịch vụ phần mềm với mức chi phí tối ưu, dựa trên nhu cầu của từng khách hàng tiềm năng.</p>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12 md4 style="position:relative">
                    <div class="circle">
                    </div>
                    <v-icon class="icon">
                        fas fa-briefcase-medical
                    </v-icon>
                </v-flex>
                <v-flex class="animated fadeInUp delay-4s	"  sx12 md8 style="align-self: flex-end;">
                    <h1 style="color: #3FAA61;font-family: 'Monsterrat Bold';">Health Care</h1>
                    <p style="font-family: Monsterrat Regular;font-size: 2.2em;">Triển khai các giải pháp công nghệ nhằm nâng cao hiệu quả, hỗ trợ tối đa cho lĩnh vực y tế - sức khỏe.</p>
                </v-flex>
            </v-layout>
        </v-flex>
                    
        <!-- /////////////////////// -->
        <v-flex column xs12 sm6>
            <v-layout wrap>
                <v-flex xs12 md4 style="position:relative">
                    <div class="circle">
                    </div>
                    <div class="image">
                        <img style="width: 95px;" src="/static/logo/openkup.png" alt="">
                    </div>
                </v-flex>
                <v-flex class="animated fadeInDown delay-3s" sx12 md8 style="align-self: flex-end;">
                    <h1 style="color: #3FAA61;font-family: 'Monsterrat Bold';">Open kup</h1>
                    <p style="font-family: Monsterrat Regular;font-size: 2.2em;">Triển khai các giải pháp công nghệ nhằm nâng cao hiệu quả, hỗ trợ tối đa cho lĩnh vực y tế - sức khỏe.</p>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12 md4 style="position:relative">
                    <div class="circle">
                    </div>
                    <div class="image">
                        <img style="width: 95px;" src="/static/logo/openkup.png" alt="">
                    </div>
                </v-flex>
                <v-flex class="animated fadeInRight delay-3s	" sx12 md8 style="align-self: flex-end;">
                    <h1 style="color: #3FAA61;font-family: 'Monsterrat Bold';">Open kup</h1>
                    <p style="font-family: Monsterrat Regular;font-size: 2.2em;">Triển khai các giải pháp công nghệ nhằm nâng cao hiệu quả, hỗ trợ tối đa cho lĩnh vực y tế - sức khỏe.</p>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12 md4 style="position:relative">
                    <div class="circle">
                    </div>
                    <div class="image">
                        <img style="width: 95px;" src="/static/logo/gophar.png" alt="">
                    </div>
                </v-flex>
                <v-flex class="animated fadeInUp delay-3s" sx12 md8 style="align-self: flex-end;">
                    <h1 style="color: #3FAA61;font-family: 'Monsterrat Bold';">Gophar</h1>
                    <p style="font-family: Monsterrat Regular;font-size: 2.2em;">Triển khai các giải pháp công nghệ nhằm nâng cao hiệu quả, hỗ trợ tối đa cho lĩnh vực y tế - sức khỏe.</p>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</v-container>
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

.icon {
    position: absolute;
    top: 44px;
    left: 43px;
    font-size: 57px;
}
.image{
    position: absolute;
    top: 27px;
    left: 28px;
}

.circle {
    width: 150px;
    height: 150px;
    animation: spin 7s linear infinite;
    border-radius: 50%;
    border: 3px dashed green;
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
