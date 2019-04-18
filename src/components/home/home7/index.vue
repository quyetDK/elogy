<template>
<v-container pa-5 style="height:100vh" fluid pa-0 class="main" v-if="window === 8 ? true : false">
    <v-layout pt-4 style="height: 100%;" wrap ml-5>
        <v-flex pt-5 xs12 md3>
            <v-layout class="animated bounceInLeft delay-3s">
                <span>
                    <img style="width:200px" src="/static/logo/homelogo.jpg" alt="">
                </span>
            </v-layout>
            <v-layout column mt-5>
                <v-flex>
                    <h1>
                        LIÊN HỆ
                    </h1>
                </v-flex>
                <v-flex>
                    <v-layout pt-5>
                        <v-flex class="animated rotateIn delay-10s" @click="BT()" style="position: relative;">
                            <v-layout style="width: 150px;height: 150px;justify-content: center;">
                                <div class="circle">
                                </div>
                                <h1 :class="active === 1 ? 'active' : ''" style="position: absolute; align-self: center;">
                                    BT
                                </h1>
                            </v-layout>
                        </v-flex>
                        <v-flex class="animated bounceInLeft delay-10s" pa-4>
                            <h1 :class="active === 1 ? 'active' : ''">
                                Bà Triệu
                            </h1>
                            <p>
                                141 Bà Triệu, Lê Đại Hành, Hai Bà Trưng, Hà Nội, Việt Nam
                            </p>
                        </v-flex>
                    </v-layout>

                    <v-layout pt-5>
                        <v-flex class="animated rotateIn delay-10s" @click="LB()" style="position: relative;">
                            <v-layout style="width: 150px;height: 150px;justify-content: center;">
                                <div class="circle">
                                </div>
                                <h1 :class="active === 2 ? 'active' : ''" style="position: absolute; align-self: center;">
                                    LB
                                </h1>
                            </v-layout>
                        </v-flex>
                        <v-flex class="animated bounceInLeft delay-10s" pa-4>
                            <h1 :class="active === 2 ? 'active' : ''" >
                                Long Biên
                            </h1>
                            <p>
                                Cuối đường, Ngõ 208 Nguyễn Văn Cừ, Lâm Du, Long Biên, Hà Nội 100000, Việt Nam
                            </p>
                        </v-flex>
                    </v-layout>

                    <v-layout pt-5>
                        <v-flex class="animated rotateIn delay-10s" @click="NVC()" style="position: relative;">
                            <v-layout style="width: 150px;height: 150px;justify-content: center;">
                                <div class="circle">
                                </div>
                                <h1 :class="active === 3 ? 'active' : ''" style="position: absolute; align-self: center;">
                                    NVC
                                </h1>
                            </v-layout>
                        </v-flex>
                        <v-flex class="animated bounceInLeft delay-10s" pa-4>
                            <h1 :class="active === 3 ? 'active' : ''" >
                                 Nguyễn Văn Cừ
                            </h1>
                            <p>
                                619 Nguyễn Văn Cừ, Ngọc Lâm, Long Biên, Hà Nội 100000, Việt Nam
                            </p>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex  v-if="active === 1" xs12 md9>
            <iframe  
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4853206080643!2d105.88406195100232!3d21.053269985916344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a982e005d2d1%3A0x60e239325732c320!2sUniversal+Language+Center+C%C6%A1+S%E1%BB%9F+01!5e0!3m2!1svi!2s!4v1544609029206"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0"
            allowfullscreen>
            </iframe>
        </v-flex>
        <v-flex @click="this.active = 2" v-if="this.active === 2" xs12 md8>
            <iframe 
            
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59577.37797944703!2d105.8625955!3d21.04924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1044af111e47671!2sUniversal+Language+Center+C%C6%A1+S%E1%BB%9F+02!5e0!3m2!1svi!2s!4v1544615245367" 
            width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
        </v-flex>
        <v-flex @click="this.active = 3" v-if="this.active === 3" xs12 md8>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59577.37797944703!2d105.8625955!3d21.04924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60e239325732c320!2sUniversal+Language+Center+C%C6%A1+S%E1%BB%9F+01!5e0!3m2!1svi!2s!4v1544615262314" 
            width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
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
        return {
            active: 1,
        }
    },
    methods : {
        BT(){
            if( this.active != 1 ){
                this.active = 1
            }
        },
        LB(){
            if(this.active != 2){

                this.active = 2
            }
        },
        NVC(){
            if( this.active != 3){

                this.active = 3
            }
        }
    }
}
</script>

<style scoped>
.main {
    margin: 0 0 0 80px;
    height: 100vh;
    width: 100vw;
}

.circle {
    width: 100%;
    height: 100%;
    animation: spin 7s linear infinite;
    border-radius: 50%;
    border: 3px dashed green;
    margin: 0;
}
.circle:hover{
    background-color: aqua;

}
.active{
    color: red;
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@media screen and (max-width: 1263px) {
    .main {
        margin: 0 !important;
    }
}
</style>
