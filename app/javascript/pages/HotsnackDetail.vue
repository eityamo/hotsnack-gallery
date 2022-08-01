<template>
    <base-container>
        <v-card class="mx-auto" max-width="375" color="#f6f5ee" outlined v-if="'id' in hotsnack">
            <v-row justify="center" align="center" class="mt-8 mx-4">
                <v-col cols="6" class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center">
                            <v-btn text class="text-h6">査定額</v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center">
                            <v-btn icon>
                                <v-icon icon @click="addLikeCount">mdi-thumb-up</v-icon>
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center">
                            <v-btn icon>
                                <v-icon icon @click="addDislikeCount">mdi-thumb-down</v-icon>
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" align="center" class="mb-4 mx-4">
                <v-col cols="6" class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center">¥{{ hotsnack.like_count * hotsnack.price }}</div>
                    </v-card>
                </v-col>
                <v-col class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center">{{ hotsnack.like_count }}</div>
                    </v-card>
                </v-col>
                <v-col class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center">{{ hotsnack.dislike_count }}</div>
                    </v-card>
                </v-col>
            </v-row>

            <hr class="hr1" />

            <v-card class="ma-10" color="#f6f5ee" outlined>
                <v-container class="outline">
                    <v-container class="inline">
                        <v-container class="baseline">
                            <v-container class="border">
                                <v-img
                                    src="https://img.7api-01.dp1.sej.co.jp/item-image/150047/1FE6103DFB372C5F1762505627AC60DE.jpg"
                                >
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular
                                                indeterminate
                                                color="grey lighten-5"
                                            ></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>

                <v-card raised elevation="8" tile class="mx-10 my-10">
                    <v-col align="center" class="s-font pt-2 pb-0">{{ hotsnack.name }}</v-col>
                    <v-col align="center" class="xs-font pt-1 pb-2">{{ hotsnack.price }}円（税込）</v-col>
                    <hr class="hr2" />
                    <v-col align="center" class="s-font pt-2 pb-0">{{ hotsnack.store }}</v-col>
                    <v-col align="center" class="xs-font pt-1 pb-0">1974年 - 現在</v-col>
                    <v-col align="center" class="xs-font pt-0 pb-2"
                        >{{ hotsnack.genre }} / {{ hotsnack.ingredient }}</v-col
                    >
                </v-card>

                <v-card-actions>
                    <v-col class="pa-0">
                        作品解説
                        <v-btn icon>
                            <v-icon icon>mdi-volume-high</v-icon>
                        </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <hr class="hr1" />
                        <v-card-text>{{ hotsnack.description }}</v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-card>
        <div v-else>該当のデータは存在しません</div>
    </base-container>
</template>

<script>
import { BaseContainer } from '../components/layout'

export default {
    name: 'HotsnackDetail',
    components: {
        BaseContainer,
    },
    data() {
        return {
            show: true,
            hotsnack: {},
        }
    },
    created() {
        this.getHotsnackDetail()
    },
    methods: {
        getHotsnackDetail() {
            const id = this.$route.params.item_uuid
            this.$axios.get(`/hotsnack/${id}`).then(({ data }) => {
                // APIレスポンスのデータがないときは、dataプロパティの初期値を設定
                if (!data) {
                    return (this.hotsnack = {})
                }
                this.hotsnack = data
            })
        },
        addLikeCount() {
            const id = this.$route.params.item_uuid
            this.$axios
                .put(`/hotsnack/${id}`, {
                    // parameter 定数
                    like_count: this.hotsnack.like_count + 1,
                })
                .then((res) => {
                    if (res.status === 200) {
                        // ローカルのデータプロパティ
                        this.hotsnack.like_count++
                    }
                })
                .catch((error) => console.log(error))
        },
        addDislikeCount() {
            const id = this.$route.params.item_uuid
            this.$axios
                .put(`/hotsnack/${id}`, {
                    dislike_count: this.hotsnack.dislike_count + 1,
                })
                .then((res) => {
                    if (res.status === 200) {
                        this.hotsnack.dislike_count++
                    }
                })
                .catch((error) => console.log(error))
        },
    },
}
</script>

<style scoped>
.border {
    background: #fff;
    display: block;
    width: 88%;
    height: auto;
    padding: 6%;
    box-shadow: inset 0px 0.3em 0.1em rgba(0, 0, 0, 0.2);
}
.baseline {
    display: block;
}
.inline {
    background-color: #f8f8f8;
    z-index: -1;
    box-shadow: inset 0px 10px 0.5em rgba(0, 0, 0, 0.25), inset 0.1em 0px 0.1em rgba(0, 0, 0, 0.1),
        inset -0.1em 0px 0.1em rgba(0, 0, 0, 0.05), 0 0.3em 0.2em #fff;
    background-image: -moz-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: -webkit-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: -o-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: -ms-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
}
.outline {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    z-index: -2;
    box-shadow: 0px 1em 2em -1em rgba(0, 0, 0, 0.4), 0px 2em 2em -1em rgba(0, 0, 0, 0.03),
        0px 3em 2em -1em rgba(0, 0, 0, 0.2), 0px 4em 1.5em -1em rgba(0, 0, 0, 0.15),
        0px 2em 4em 0.5em rgba(0, 0, 0, 0.1), inset 0 0.2em 0.1em #fff;
}
.hr1 {
    border: none;
    height: 20px;
    width: 90%;
    height: 50px;
    margin-top: 0;
    border-bottom: 1px solid #1f1209;
    box-shadow: 0 20px 20px -20px #333;
    margin: -50px auto 10px;
}
.hr2 {
    border: none;
    width: 90%;
    height: 50px;
    border-bottom: 1px solid #1f1209;
    margin: -50px auto 0px;
}
.s-font {
    font-size: 0.75em;
    font-weight: bold;
    line-height: 1;
    color: #2c281e;
}
.xs-font {
    font-size: 0.55em;
    font-weight: lighter;
    line-height: 1.5;
    color: #2c281e;
}
.center {
    text-align: center;
}
</style>
