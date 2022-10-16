<template>
    <base-container>
        <!-- ランダムボタンを複数回クリックした時のトランジション -->
        <base-transition>
            <v-card class="mx-auto" max-width="375" color="#f6f5ee" outlined v-if="!isLoading && hotsnack">
                <v-row justify="center" align="center" class="mt-8 mx-4">
                    <v-col cols="6" class="pa-0">
                        <v-card outlined color="#f6f5ee">
                            <v-badge class="ml-7" icon="mdi-help" color="black" avatar overlap>
                                <div class="text-center">
                                    <v-btn text class="text-h6" @click="openModal('moneydescription')">評価額</v-btn>
                                </div>
                            </v-badge>
                        </v-card>
                    </v-col>
                    <v-col class="pa-0">
                        <v-card outlined color="#f6f5ee">
                            <div class="text-center">
                                <v-btn icon @click="addLikeCount">
                                    <v-icon icon>mdi-thumb-up</v-icon>
                                </v-btn>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col class="pa-0">
                        <v-card outlined color="#f6f5ee">
                            <div class="text-center">
                                <v-btn icon @click="addDislikeCount">
                                    <v-icon icon>mdi-thumb-down</v-icon>
                                </v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="mb-4 mx-4">
                    <v-col cols="6" class="pa-0">
                        <v-card outlined color="#f6f5ee">
                            <div class="text-center"><animated-number :value="multiplyLikeCountAndPrice" /> 円</div>
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

                <base-divider />

                <v-card class="ma-10" color="#f6f5ee" outlined>
                    <v-container class="outline">
                        <v-container class="inline">
                            <v-container class="block">
                                <v-container class="border">
                                    <v-img :src="hotsnack.image" />
                                </v-container>
                            </v-container>
                        </v-container>
                    </v-container>

                    <v-card raised elevation="8" tile class="mx-10 my-10">
                        <v-col align="center" class="s-font pt-2 pb-0 msg-wrapper">{{ hotsnack.name }}</v-col>
                        <v-col align="center" class="xs-font pt-1 pb-2">{{ hotsnack.price }}円（税込）</v-col>
                        <hr class="hr2" />
                        <v-col align="center" class="s-font pt-2 pb-0 Lusitana">{{ hotsnack.store }}</v-col>
                        <v-col align="center" class="xs-font pt-1 pb-0" v-if="hotsnack.store === 'セブン-イレブン'"
                            >1974年 - 現在</v-col
                        >
                        <v-col align="center" class="xs-font pt-1 pb-0" v-else-if="hotsnack.store === 'LAWSON'"
                            >1975年 - 現在</v-col
                        >
                        <v-col align="center" class="xs-font pt-1 pb-0" v-else-if="hotsnack.store === 'FamilyMart'"
                            >1973年 - 現在</v-col
                        >
                        <v-col align="center" class="xs-font pt-0 pb-2">{{ hotsnackCategoryDetail }}</v-col>
                    </v-card>

                    <v-card-actions>
                        <v-col class="pa-0">
                            作品解説
                            <v-btn icon @click="onSpeakHotsnackDescription" :disabled="disabledDescriptionButton">
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
                            <base-divider />
                            <v-card-text>{{ hotsnack.description }}</v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-card>
        </base-transition>
        <p v-if="!hotsnack.id">美術品は見つかりませんでした</p>
        <the-money-description
            :is-visible="getModalVisible('moneydescription')"
            @close-money-description-modal="closeModal"
        />
    </base-container>
</template>

<script>
import { BaseDivider } from '../components/atom/dividers/index'
import { BaseTransition } from '../components/atom/transitions/index'
import { BaseContainer } from '../components/layout/index'
import { AnimatedNumber } from '../components/atom/numbers/index'
import { TheMoneyDescription } from '../components/static'

export default {
    name: 'HotsnackDetail',
    components: {
        BaseContainer,
        BaseTransition,
        BaseDivider,
        AnimatedNumber,
        TheMoneyDescription,
    },
    data() {
        return {
            show: true,
            hotsnack: {},
            isLoading: false,
            voices: [],
            disabledDescriptionButton: false,
            modal: {
                type: null,
                status: 'hidden',
            },
        }
    },
    computed: {
        multiplyLikeCountAndPrice() {
            return this.hotsnack.price * this.hotsnack.like_count
        },
        hotsnackCategoryDetail() {
            return this.hotsnack.genre + ' / ' + this.hotsnack.ingredient
        },
        currentPath() {
            return this.$route.path
        },
        getModalVisible() {
            return (type) => this.modal.type === type && this.modal.status === 'visible'
        },
    },
    mounted() {
        this.getHotsnackDetail()
    },
    // データの変更を監視
    watch: {
        currentPath: function () {
            this.getHotsnackDetail()
        },
    },
    methods: {
        getHotsnackDetail() {
            this.isLoading = true
            const id = this.$route.params.item_uuid
            this.$axios.get(`/hotsnack/${id}`).then(({ data }) => {
                // APIレスポンスのデータがないときは、dataプロパティの初期値を設定
                if (!data) {
                    return (this.hotsnack = {})
                }
                this.hotsnack = data
                this.isLoading = false
            })
        },
        addLikeCount() {
            const id = this.$route.params.item_uuid
            this.$axios
                .put(`/hotsnack/${id}/like`)
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
                .put(`/hotsnack/${id}/dislike`)
                .then((res) => {
                    if (res.status === 200) {
                        this.hotsnack.dislike_count++
                    }
                })
                .catch((error) => console.log(error))
        },
        onSpeakHotsnackDescription() {
            this.disabledDescriptionButton = true
            const utterance = new SpeechSynthesisUtterance(this.$data.hotsnack.description)
            utterance.voice = this.$data.voices[0]
            speechSynthesis.speak(utterance)
            // 音声ボタンのデバウンス対応
            setTimeout(() => (this.disabledDescriptionButton = false), 3000)
        },
        closeModal() {
            this.modal = {
                type: null,
                status: 'hidden',
            }
        },
        openModal(type) {
            this.modal = {
                type,
                status: 'visible',
            }
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
.block {
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
.Lusitana {
    font-family: 'Lusitana', cursive;
}
.xs-font {
    font-size: 0.55em;
    font-weight: lighter;
    line-height: 1.5;
    color: #2c281e;
}
.msg-wrapper {
    white-space: pre-line;
}
</style>
