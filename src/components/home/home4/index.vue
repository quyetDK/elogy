<template>
<v-container style="height:100vh" pa-5 v-if="window === 5 ? true : false">
    <v-layout pt-3>
        <span>
            <img style="width:200px" src="/static/logo/homelogo.jpg" alt="">
        </span>
        <span class="ml-4 d-flex " style="align-self: center;">
            <h1 class="pl-5 animated flipInY delay-3s" style="border-left: 1px dashed green;">
            HỆ SINH THÁI UNIVERSAL
            </h1>
        </span>
    </v-layout>
    <v-layout class="animated bounceIn delay-10s">
        <v-container pa-0>
            <v-layout style="position:relative;justify-content: center;align-items: center;">
                <div class="cricle">
                    <div style="max-width: 70px;max-height: 70px;position: absolute;top: 50%;left: -30px;">
                        <img style="width: 100%;height: 100%;border-radius: 50%;box-shadow: rgb(205, 205, 205) 12px 14px 11px;" src="/static/logo/gophar.png" alt="">
                    </div>
                    </div>
                    <div class="children">
                        <div style="max-width: 70px;max-height: 70px;position: absolute;top: 50%;right: -30px;">
                            <img style="width: 100%;height: 100%;border-radius: 50%;box-shadow: rgb(205, 205, 205) 12px 14px 11px;" src="/static/logo/gophar.png" alt="">
                        </div>
                    </div>
                    <div class="children2">
                        <div style="max-width: 70px;max-height: 70px;position: absolute;top: 50%;left: -30px;">
                            <img style="width: 100%;height: 100%;border-radius: 50%;box-shadow: rgb(205, 205, 205) 12px 14px 11px;" src="/static/logo/gophar.png" alt="">
                        </div>
                    </div>
                    <img style="max-width: 150px;max-height:150px;  border-radius: 50%;box-shadow: 5px 8px 47px #666;position:absolute" src="/static/logo/gophar.png" alt="">
            </v-layout>
        </v-container>
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
.cricle {
    animation: spin 30s linear infinite;
    width: 700px;
    height: 700px;
    border: 2px dashed #e5e2e2;
    border-radius: 50%;
    position: relative;
}

.logo {}

.children {
    width: 550px;
    height: 550px;
    border-radius: 50%;
    position: absolute;
    border: 2px dashed #e5e2e2;
    animation: spin2 30s linear infinite;

}

.children2 {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: absolute;
    border: 2px dashed #e5e2e2;
    animation: spin 30s linear infinite;

}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes spin2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(360deg);
    }
}

.children .children2 .children :hover {
    animation: none;
}
</style>
