<template>
    <base-container>
        <v-col align="center" class="s-font my-4">
            <v-card-title class="pa-1 pb-3">
                <v-icon>mdi-cards-club</v-icon>
                <span class="s-font ml-1">ホットスナック美術館のコンセプト</span>
            </v-card-title>
            コンビニのホットスナック
            <br />
            じっくり選びたいけど選べない
            <br />
            そんな事態を解決するサービス
        </v-col>
        <hr />
        <v-card elevation="8" class="mx-4 my-10">
            <v-container class="outline">
                <v-container class="inline">
                    <v-container class="baseline">
                        <v-container class="border">
                            <v-img
                                src="/img/TOP_TITLE.jpg"
                            >
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-container>
                    </v-container>
                </v-container>
            </v-container>
        </v-card>
        <hr />
        <v-col align="center">
            <p class="s-font mb-2">
                美術館に来館して
                <br />
                ＼展示作品を鑑賞しよう／
            </p>
            <v-btn color="black" class="white--text" rounded large style="text-transform: none">
                <v-icon>mdi-bank</v-icon>
                <span class="m-font white--text ml-2">美術館に入る</span>
            </v-btn>
            <p class="xs-font mt-2">※下の利用規約・プライバシーポリシーをご確認ください。</p>
        </v-col>
        <hr />
        <v-col align="center" class="mb-4">
            <v-card-title class="pa-1 pb-3">
                <v-icon>mdi-cards-diamond</v-icon>
                <span class="s-font ml-1">ホットスナック美術館の使い方</span>
            </v-card-title>
            <v-card>
                <v-carousel cycle :continuous="true" height="100%" light>
                    <v-carousel-item v-for="(rule_image, i) in rule_images" :key="i">
                        <img :src="rule_image" width="100%" height="100%" eager />
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-col>
        <hr />
        <v-col align="center" class="my-4">
            <v-card-title class="pa-1 pb-3">
                <v-icon>mdi-cards-spade</v-icon>
                <span class="s-font ml-1">ホットスナック美術館に来館してほしい人</span>
            </v-card-title>
            <v-card color="transparent" outlined>
                <v-col class="s-font" align="left">コンビニでホットスナックを選んでいる時に、、、</v-col>
                <v-col class="p-font" align="center">
                    店員の視線が気になる人。
                    <br />
                    他の客の邪魔になっていると感じる人。
                </v-col>
                <v-col class="s-font" align="left">ホットスナックを選ぼうとレジ横に向かったら、、、</v-col>
                <v-col class="p-font" align="center">レジに向かったと間違われ、気まずい思いをした人。</v-col>
            </v-card>
        </v-col>
        <hr />
        <v-card color="transparent" outlined>
            <v-card-actions class="justify-center mt-2 mb-4">
                <v-btn dense text @click="openModal('terms')">利用規約</v-btn>
                <v-btn dense text @click="openModal('privacypolicy')">プライバシーポリシー</v-btn>
                <v-btn dense text href="https://twitter.com/eityamo">問い合わせ</v-btn>
            </v-card-actions>
        </v-card>
        <the-terms :is-visible="getModalVisible('terms')" @close-terms-modal="closeModal" />
        <the-privacy-policy :is-visible="getModalVisible('privacypolicy')" @close-privacy-policy-modal="closeModal" />
    </base-container>
</template>

<script>
import { TheTerms, ThePrivacyPolicy } from '../components/static'
import { BaseContainer } from '../components/layout'

export default {
    name: 'Top',
    components: {
        BaseContainer,
        TheTerms,
        ThePrivacyPolicy,
    },
    data() {
        return {
            modal: {
                type: null,
                status: 'hidden',
            },
            rule_images: ['/img/rules/rule_0.jpg', '/img/rules/rule_1.jpg', '/img/rules/rule_2.jpg'],
        }
    },
    methods: {
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
    computed: {
        getModalVisible() {
            return (type) => this.modal.type === type && this.modal.status === 'visible'
        },
    },
}
</script>

<style scoped>
hr {
    border: none;
    height: 20px;
    width: 90%;
    height: 50px;
    margin-top: 0;
    border-bottom: 1px solid #1f1209;
    box-shadow: 0 20px 20px -20px #333;
    margin: -50px auto 10px;
}
.p-font {
    font-size: 0.7em;
    color: #2c281e;
}
.m-font {
    font-size: 0.85em;
    font-weight: bold;
    line-height: 1;
    color: #2c281e;
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
}
.outline {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    z-index: -2;
    box-shadow: 0px 2em 4em 0.5em rgba(0, 0, 0, 0.1), inset 0 0.2em 0.1em #fff;
}
</style>
