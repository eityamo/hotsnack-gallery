<template>
    <v-dialog v-model="isVisible" max-width="375" scrollable @click:outside="hundleCloseHotsnackDetailModal">
        <v-card class="mx-auto overflow-auto" max-width="375" color="#f6f5ee" outlined v-if="hotsnack">
            <v-row justify="center" align="center" class="mt-4 mb-2 mx-12">
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
                <v-col cols="6" class="pa-0">
                    <v-card outlined color="#f6f5ee">
                        <div class="text-center"><animated-number :value="multiplyLikeCountAndPrice" />円</div>
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

            <v-row class="mx-4"><base-divider /></v-row>

            <v-card class="mx-10 my-8" color="#f6f5ee" outlined>
                <v-container class="outline">
                    <v-container class="inline">
                        <v-container class="block">
                            <v-container class="border">
                                <v-img :src="hotsnack.image" />
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>
            </v-card>

            <v-card raised elevation="8" tile class="mx-16 my-4">
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

            <v-card class="mx-8" color="#f6f5ee" outlined>
                <v-card-actions>
                    <v-col>
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
            <v-col align="center" class="mb-4">
                <v-btn @click="hundleCloseHotsnackDetailModal">閉じる</v-btn>
            </v-col>
        </v-card>
    </v-dialog>
</template>

<script>
import { BaseDivider } from '../atom/dividers/index'
import { AnimatedNumber } from '../atom/numbers/index'

export default {
    components: {
        BaseDivider,
        AnimatedNumber,
    },
    props: {
        hotsnack: {
            type: Object,
            required: true,
        },
        isVisible: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    data() {
        return {
            show: true,
            voices: [],
            disabledDescriptionButton: false,
        }
    },
    computed: {
        multiplyLikeCountAndPrice() {
            if (!this.hotsnack || !this.hotsnack.price || !this.hotsnack.like_count) {
                return 0
            }

            return this.hotsnack.price * this.hotsnack.like_count
        },
        hotsnackCategoryDetail() {
            return this.hotsnack.genre + ' / ' + this.hotsnack.ingredient
        },
    },
    methods: {
        hundleCloseHotsnackDetailModal() {
            this.$emit('close-hotsnack-detail-modal')
        },
        addLikeCount() {
            const id = this.hotsnack.item_uuid
            this.$axios
                .put(`/hotsnack/${id}/like`)
                .then((res) => {
                    if (res.status === 200) {
                        this.hotsnack.like_count++
                    }
                })
                .catch((error) => console.log(error))
        },
        addDislikeCount() {
            const id = this.hotsnack.item_uuid
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
            const utterance = new SpeechSynthesisUtterance(this.hotsnack.description)
            utterance.voice = this.$data.voices[0]
            speechSynthesis.speak(utterance)
            setTimeout(() => (this.disabledDescriptionButton = false), 3000)
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
