<template>
<v-container pa-5 v-if="window === 2 ? true : false" class="animated pulse delay-2s;">
    <v-layout pt-4>
        <v-flex>
            <img style="width:200px" src="/static/logo/homelogo.jpg" alt="">
            <h4 style="color:#ee44aa;font-style: oblique;">
                History
            </h4>
        </v-flex>
    </v-layout>
    <v-layout pa-5>
        <v-timeline>
            <v-timeline-item color="purple lighten-2" fill-dot right>
                <v-card>
                    <v-card-title class="purple lighten-2">
                        <v-icon dark size="42" class="mr-3">
                            mdi-magnify
                        </v-icon>
                        <h2 class="display-1 white--text font-weight-light">Năm 2016</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex xs10>
                                Thành lập năm 2014, Universal Việt Nam nhanh chóng đạt được nhiều thành quả trên thị trường trong nước và quốc tế. Thành công sau gần 10 năm phát triển chính là sự nỗ lực của bộ máy nhân sự giàu năng lực, nhiệt huyết cùng sự thấu hiểu sâu sắc nhu cầu & tiềm năng của thị trường.
                            </v-flex>
                            <v-flex xs2>
                                <v-icon size="64">mdi-calendar-text</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-timeline-item>

            <v-timeline-item color="amber lighten-1" fill-dot left small>
                <v-card>
                    <v-card-title class="amber lighten-1 justify-end">
                        <h2 class="display-1 mr-3 white--text font-weight-light">TẦM NHÌN</h2>
                        <v-icon dark size="42">mdi-home-outline</v-icon>
                    </v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex xs8>
                                Universal hướng tới trở thành sự lựa chọn đầu tiên của đối tác/khách hàng về dịch vụ điện toán đám mây, dữ liệu lớn và trí tuệ nhân tạo tại Việt Nam.
                            </v-flex>
                            <v-flex xs4>
                                Lorem ipsum dolor sit amet, no nam oblique veritus.
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-timeline-item>

            <v-timeline-item color="cyan lighten-1" fill-dot right>
                <v-card>
                    <v-card-title class="cyan lighten-1">
                        <v-icon class="mr-3" dark size="42">
                            mdi-email-outline
                        </v-icon>
                        <h2 class="display-1 white--text font-weight-light">Năm 2017</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex v-for="n in 3" :key="n" xs4>
                                Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-timeline-item>

            <v-timeline-item color="red lighten-1" fill-dot left small>
                <v-card>
                    <v-card-title class="red lighten-1 justify-end">
                        <h2 class="display-1 mr-3 white--text font-weight-light">SỨ MỆNH</h2>
                        <v-icon dark size="42">
                            mdi-account-multiple-outline
                        </v-icon>
                    </v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex xs2>
                                <v-icon size="64">mdi-server-network</v-icon>
                            </v-flex>
                            <v-flex xs10>
                                Cung cấp cho khách hàng những giải pháp công nghệ hiệu quả, gia tăng giá trị từ hoạt động kinh doanh.

                                Mang đến cơ hội cho người lao động được sáng tạo và phát huy tối đa năng lực của mình với môi trường làm việc chuyên nghiệp, hiệu quả và tin cậy cùng với việc triển khai những công nghệ tiên tiến nhất trên thế giới.
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-timeline-item>

            <v-timeline-item color="green lighten-1" fill-dot right>
                <v-card>
                    <v-card-title class="green lighten-1">
                        <v-icon class="mr-3" dark size="42">
                            mdi-phone-in-talk
                        </v-icon>
                        <h2 class="display-1 white--text font-weight-light">Hiện Tại</h2>
                    </v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-layout>
    <v-layout>
        <div class="green-cricle"></div>
    </v-layout>
</v-container>
</template>

<script>
import titleIntro from '@/components/home/title/titleIntro.vue'
export default {
    components: {
        titleIntro
    },
    props: [
        'window'
    ],
    data() {
        return {}
    }
}
</script>

<style scoped>
    
</style>
