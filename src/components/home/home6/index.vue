<template>
<v-container pa-5 class="main" fluid v-if="window === 7 ? true : false">
    <v-layout pt-3 ml-5 class="animated bounceInLeft delay-3s">
        <span>
            <img style="width:200px" src="/static/logo/homelogo.jpg" alt="">
        </span>
        <span class="ml-4 d-flex " style="align-self: center;">
            <h1 class="pl-5 " style="border-left: 1px dashed green;">
                TIN TỨC
            </h1>
        </span>
    </v-layout>
    <v-layout pt-5 wrap="" row>
        <v-flex md8 xs12>
            <v-layout pl-3 py-2 style="background-color: rgba(75,205,159,.15)" column class="animated bounceInRight delay-10s">
                <v-flex style="    border-bottom: 1px solid #d6d6d7;" v-for="(item,index) in items" :key="index">
                    <v-layout>
                        <img  style="max-width: 30px;max-height: 30px;    margin: auto;" :src="item.user[0].avatar" alt="">
                        <v-flex px-3>
                            <v-layout row>
                                <a>{{item.user[0].name}}</a>
                                <span style="color: #c7c7c7;font-size: 12px;padding-left: 10px;">{{item.time}}</span>
                            </v-layout>
                            <v-layout>
                                <h4 style="align-self: center;">{{item.title}}</h4>
                                <v-chip small v-for="(i,ind) in item.category" :key="ind">{{i.name}}</v-chip>
                            </v-layout>
                            <v-layout>
                                <v-icon class="pr-2" small>
                                    fas fa-comments
                                </v-icon>
                                <p class="">

                                    {{item.comments}}
                                </p>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex px-4 md4 xs12>
            <h1>NEWEST QUESTIONS</h1>
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
            items: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    title: 'Fintech - Cuộc cách mạng thay đổi toàn cầu',
                    discription: 'Ngày 6.12.2018 Đoàn cán bộ cấp cao Bộ Y tế Campuchia có cuộc gặp và làm việc với IBM và Five9 tại Trụ sở IBM Việt Nam.',
                    time: 'about 1 hour ago',
                    category: [{
                            name: 'javascrip'
                        },
                        {
                            name: 'php'
                        },
                        {
                            name: 'java'
                        },
                        {
                            name: 'docker'
                        },
                    ],
                    user: [{
                        avatar: 'https://www.kodefork.com/static/users/images/user.png',
                        name: 'Quyet'
                    }],
                    comments: 5,
                },
            ]
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 1263px) {
    .main {
        margin: 0 !important;
    }
}

.main {
    /* margin-left: 80px */
    width: 80vw;
    /* margin: 0 */
}
</style>
